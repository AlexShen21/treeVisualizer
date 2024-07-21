import BinaryTreeNodeClass from './BinaryTreeNodeClass';

export const addLevel = (root) => {
    const addLevelToLeaves = (node) => {
        if (!node) return;
        if (node.isLeaf()) {
            node.addChildren();
        } else {
            addLevelToLeaves(node.left);
            addLevelToLeaves(node.right);
        }
    };

    const newRoot = new BinaryTreeNodeClass(root.value);
    const cloneAndAddLevel = (node, newNode) => {
        if (!node) return null;
        newNode.left = node.left ? new BinaryTreeNodeClass(node.left.value) : null;
        newNode.right = node.right ? new BinaryTreeNodeClass(node.right.value) : null;
        newNode.x = node.x;
        newNode.y = node.y;
        if (node.isLeaf()) {
            newNode.addChildren();
        } else {
            cloneAndAddLevel(node.left, newNode.left);
            cloneAndAddLevel(node.right, newNode.right);
        }
        return newNode;
    };
    return cloneAndAddLevel(root, newRoot);
};

export const removeLevel = (root) => {
    const removeLevelFromLeaves = (node) => {
        if (!node) return;
        if (node.left && node.left.isLeaf() && node.right && node.right.isLeaf()) {
            node.removeChildren();
        } else {
            removeLevelFromLeaves(node.left);
            removeLevelFromLeaves(node.right);
        }
    };

    const newRoot = new BinaryTreeNodeClass(root.value);
    const cloneAndRemoveLevel = (node, newNode) => {
        if (!node) return null;
        newNode.left = node.left ? new BinaryTreeNodeClass(node.left.value) : null;
        newNode.right = node.right ? new BinaryTreeNodeClass(node.right.value) : null;
        newNode.x = node.x;
        newNode.y = node.y;
        if (node.left && node.left.isLeaf() && node.right && node.right.isLeaf()) {
            newNode.removeChildren();
        } else {
            cloneAndRemoveLevel(node.left, newNode.left);
            cloneAndRemoveLevel(node.right, newNode.right);
        }
        return newNode;
    };
    return cloneAndRemoveLevel(root, newRoot);
};
