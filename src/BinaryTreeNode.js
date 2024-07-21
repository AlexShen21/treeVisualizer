import React, { useEffect, useRef } from 'react';
import './BinaryTreeNode.css';

const BinaryTreeNode = ({ node }) => {
    const nodeRef = useRef(null);

    useEffect(() => {
        if (nodeRef.current) {
            const rect = nodeRef.current.getBoundingClientRect();
            node.x = rect.left + rect.width / 2;
            node.y = rect.top + rect.height / 2;
        }
    }, [node]);

    if (!node) return null;

    return (
        <div className="node" ref={nodeRef}>
            <div className="node-content">
                {node.value}
            </div>
            <div className="children">
                {node.left && <BinaryTreeNode node={node.left} />}
                {node.right && <BinaryTreeNode node={node.right} />}
            </div>
        </div>
    );
};

export default BinaryTreeNode;
