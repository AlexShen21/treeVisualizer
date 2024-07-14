import React from 'react';

const BinaryTreeNode = ({ node }) => {
    if (!node) return null;

    return (
        <div className="node">
            <div className="node-content">{node.name}</div>
            <div className="node-children">
                <BinaryTreeNode node={node.left} />
                <BinaryTreeNode node={node.right} />
            </div>
        </div>
    );
};

export default BinaryTreeNode;