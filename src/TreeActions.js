import BinaryTreeNodeClass from './BinaryTreeNodeClass';

export let isRunning = false;
export const addLevel = (root) => {
    const newRoot = new BinaryTreeNodeClass(root.value, root.color);
    const cloneAndAddLevel = (node, newNode) => {
        if (!node) return null;
        newNode.left = node.left ? new BinaryTreeNodeClass(node.left.value, node.left.color) : null;
        newNode.right = node.right ? new BinaryTreeNodeClass(node.right.value, node.right.color) : null;
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
    const newRoot = new BinaryTreeNodeClass(root.value, root.color);
    const cloneAndRemoveLevel = (node, newNode) => {
        if (!node) return null;
        newNode.left = node.left ? new BinaryTreeNodeClass(node.left.value, node.left.color) : null;
        newNode.right = node.right ? new BinaryTreeNodeClass(node.right.value, node.right.color) : null;
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

export const updateNodeColor = (root) => {
    const newRoot = new BinaryTreeNodeClass(root.value, root.color);
    const cloneAndChangeColor = (node, newNode) => {
        if (!node) return null;
        newNode.left = node.left ? new BinaryTreeNodeClass(node.left.value, node.left.color) : null;
        newNode.right = node.right ? new BinaryTreeNodeClass(node.right.value, node.right.color) : null;
        newNode.x = node.x;
        newNode.y = node.y;
        cloneAndChangeColor(node.left, newNode.left);
        cloneAndChangeColor(node.right, newNode.right);
        return newNode;
    };
    return cloneAndChangeColor(root, newRoot);
}

export const resetColor = (root, color) => {
    const newRoot = new BinaryTreeNodeClass(root.value, color);
    const cloneAndChangeColor = (node, newNode) => {
        if (!node) return null;
        newNode.left = node.left ? new BinaryTreeNodeClass(node.left.value, color) : null;
        newNode.right = node.right ? new BinaryTreeNodeClass(node.right.value, color) : null;
        newNode.x = node.x;
        newNode.y = node.y;
        cloneAndChangeColor(node.left, newNode.left);
        cloneAndChangeColor(node.right, newNode.right);
        return newNode;
    };
    return cloneAndChangeColor(root, newRoot);
}




export const bfs = (root, setRoot) => {
    if (isRunning) return;
    isRunning = true;

    const nodes = [root];
    const queue = []
    const traverse = (node) => {
        while (nodes.length > 0) {
            const current = nodes.shift();
            queue.push(current);
            if (current.left) nodes.push(current.left);
            if (current.right) nodes.push(current.right);
        }
    };
    traverse(root);
    const update = () => {
        if (queue.length === 0) {
            resetColors(root)
            isRunning = false; 
            return
        };
        const node = queue.shift();
        node.color = 'aqua';
        setRoot(updateNodeColor(root));
        setTimeout(() => {
            node.color = 'green';
            setRoot(updateNodeColor(root));
            update();
        }, 600);
    };

    const resetColors = (node) => {
        if (!node) return;
        node.color = 'white';
        resetColors(node.left);
        resetColors(node.right);
        setRoot(updateNodeColor(root));
    };

    update();

}

export const inOrder = (root, setRoot) => {
    if (isRunning) return;
    isRunning = true;

    const queue = []
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        queue.push(node);
        traverse(node.right);
    };
    traverse(root);
    const update = () => {
        if (queue.length === 0) {
            resetColors(root)
            isRunning = false; 
            return
        };
        const node = queue.shift();
        node.color = 'aqua';
        setRoot(updateNodeColor(root));
        setTimeout(() => {
            node.color = 'green';
            setRoot(updateNodeColor(root));
            update();
        }, 600);
    };

    const resetColors = (node) => {
        if (!node) return;
        node.color = 'white';
        resetColors(node.left);
        resetColors(node.right);
        setRoot(updateNodeColor(root));
    };

    update();
}

export const preOrder = (root, setRoot) => {
    if (isRunning) return;
    isRunning = true;

    const queue = []
    const traverse = (node) => {
        if (!node) return;
        queue.push(node);
        traverse(node.left);
        traverse(node.right);
    };
    traverse(root);
    const update = () => {
        if (queue.length === 0) {
            resetColors(root)
            isRunning = false; 
            return
        };
        const node = queue.shift();
        node.color = 'aqua';
        setRoot(updateNodeColor(root));
        setTimeout(() => {
            node.color = 'green';
            setRoot(updateNodeColor(root));
            update();
        }, 600);
    };

    const resetColors = (node) => {
        if (!node) return;
        node.color = 'white';
        resetColors(node.left);
        resetColors(node.right);
        setRoot(updateNodeColor(root));
    };

    update();
}

export const postOrder = (root, setRoot) => {
    if (isRunning) return;
    isRunning = true;

    const queue = []
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        queue.push(node);
    };
    traverse(root);
    const update = () => {
        if (queue.length === 0) {
            resetColors(root)
            isRunning = false; 
            return
        };
        const node = queue.shift();
        node.color = 'aqua';
        setRoot(updateNodeColor(root));
        setTimeout(() => {
            node.color = 'green';
            setRoot(updateNodeColor(root));
            update();
        }, 600);
    };

    const resetColors = (node) => {
        if (!node) return;
        node.color = 'white';
        resetColors(node.left);
        resetColors(node.right);
        setRoot(updateNodeColor(root));
    };

    update();
}