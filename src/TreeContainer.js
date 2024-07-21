import React, { useState, useRef } from 'react';
import BinaryTreeNode from './BinaryTreeNode';
import './TreeContainer.css';

const TreeContainer = ({ root }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

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
    cursor: 'grab'
  };

  return (
    <div className="Container" ref={containerRef} style={containerStyle} onWheel={handleWheel} onMouseDown={handleMouseDown}>
      <BinaryTreeNode node={root} />
    </div>
  );
};

export default TreeContainer;
