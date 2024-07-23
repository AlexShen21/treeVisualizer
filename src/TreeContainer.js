import React, { useState, useRef, useEffect, useCallback } from 'react';
import BinaryTreeNode from './BinaryTreeNode';
import './TreeContainer.css';

const TreeContainer = ({ root }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [lines, setLines] = useState([]);
    const [svgDimensions, setSvgDimensions] = useState({ width: 1000, height: 1000 });
    const containerRef = useRef(null);
    const svgRef = useRef(null);

    const handleWheel = (event) => {
        event.preventDefault();
        const scaleAdjust = event.deltaY * -0.001;
        const newScale = Math.min(Math.max(0.1, scale + scaleAdjust), 1.5);

        const rect = event.currentTarget.getBoundingClientRect();
        const xCenter = (event.clientX - rect.left) / scale;
        const yCenter = (event.clientY - rect.top) / scale;

        const newPos = {
            x: Math.max(Math.min(position.x - (xCenter * scaleAdjust), 0), 500 - 500 * newScale),
            y: Math.max(Math.min(position.y - (yCenter * scaleAdjust), 0), 500 - 500 * newScale)
        };

        setPosition(newPos);
        setScale(newScale);
    };

    const handleMouseDown = (event) => {
        const start = { x: event.clientX, y: event.clientY };
        const startPos = { ...position };

        const handleMouseMove = (moveEvent) => {
            const newPos = {
                x: startPos.x + (moveEvent.clientX - start.x),
                y: startPos.y + (moveEvent.clientY - start.y)
            };
            setPosition(newPos);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const containerStyle = {
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        transformOrigin: 'center center',
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'grab',
        overflow: 'visible'
    };

    const updateLines = useCallback(() => {
        const calculateLines = (node, lines = []) => {
            if (!node) return lines;
            if (node.left) {
                lines.push({
                    x1: node.x,
                    y1: node.y,
                    x2: node.left.x,
                    y2: node.left.y
                });
                calculateLines(node.left, lines);
            }
            if (node.right) {
                lines.push({
                    x1: node.x,
                    y1: node.y,
                    x2: node.right.x,
                    y2: node.right.y
                });
                calculateLines(node.right, lines);
            }
            return lines;
        };
        setLines(calculateLines(root));
    }, [root]);

    useEffect(() => {
        const timer = setTimeout(updateLines, 0);
        return () => clearTimeout(timer);
    }, [root, updateLines, position, scale]);

    useEffect(() => {
        const updateSvgDimensions = () => {
            if (containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const maxX = Math.max(...lines.map(line => Math.max(line.x1, line.x2)));
                const maxY = Math.max(...lines.map(line => Math.max(line.y1, line.y2)));
                setSvgDimensions({
                    width: Math.max(containerRect.width, maxX + 50),
                    height: Math.max(containerRect.height, maxY + 50)
                });
            }
        };
        updateSvgDimensions();
    }, [lines]);

    return (
        <div className="Container" ref={containerRef} style={containerStyle} onWheel={handleWheel} onMouseDown={handleMouseDown}>
            <svg ref={svgRef} style={{ position: 'absolute', top: 0, left: 0, width: svgDimensions.width, height: svgDimensions.height, overflow: 'visible' }}>
                {lines.map((line, index) => (
                    <line
                        key={index}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="white"
                    />
                ))}
            </svg>
            <BinaryTreeNode node={root} updateLines={updateLines} containerRef={containerRef} scale={scale} />
        </div>
    );
};

export default TreeContainer;
