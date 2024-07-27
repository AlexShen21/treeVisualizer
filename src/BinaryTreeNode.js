import React, { useEffect, useRef, useCallback } from 'react';
import './BinaryTreeNode.css';

const BinaryTreeNode = ({ node, updateLines, containerRef, scale }) => {
    const nodeRef = useRef(null);


    const updateNodePosition = useCallback(() => {
        if (nodeRef.current && containerRef.current) {
            const nodeRect = nodeRef.current.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            node.x = (nodeRect.left - containerRect.left + nodeRect.width / 2) / scale;
            node.y = (nodeRect.top - containerRect.top + nodeRect.height / 2) / scale;
            updateLines();
        }
    }, [node, updateLines, containerRef, scale]);

    useEffect(() => {
        updateNodePosition();
        window.addEventListener('resize', updateNodePosition);
        return () => {
            window.removeEventListener('resize', updateNodePosition);
        };
    }, [updateNodePosition]);

    useEffect(() => {
        const updateAllNodes = () => {
            updateNodePosition();
            updateLines();
        };

        updateAllNodes();
    }, [updateNodePosition, updateLines]);

    if (!node) return null;

    return (
        <div className="node">
            <div className="node-content" ref={nodeRef} style={{backgroundColor: node.color}}>
                {node.value}
            </div>
            <div className="children">
                {node.left && <BinaryTreeNode node={node.left} updateLines={updateLines} containerRef={containerRef} scale={scale} />}
                {node.right && <BinaryTreeNode node={node.right} updateLines={updateLines} containerRef={containerRef} scale={scale} />}
            </div>
        </div>
    );
};

export default BinaryTreeNode;
