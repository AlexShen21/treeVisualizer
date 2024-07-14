import React from 'react';

const BinaryTreeNode = ({ node, level }) => {
    if (!node) return null;

    return (
        <div className={`node`}>
            <div className="node-content">{node.name}</div>
            {node.left && <div className='left-line'></div>}
            {node.right && <div className='right-line'></div>}
            <div className="node-children">
                <BinaryTreeNode node={node.left} />
                <BinaryTreeNode node={node.right} />
            </div>
        </div>
    );
};

BinaryTreeNode.defaultProps = {
    level: 0
}

export default BinaryTreeNode;