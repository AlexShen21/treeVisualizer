import React, { useState } from 'react';
import TreeContainer from './TreeContainer';
import { addLevel, removeLevel, bfs, inOrder, preOrder, postOrder, isRunning } from './TreeActions';
import BinaryTreeNodeClass from './BinaryTreeNodeClass';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('white');
  const [root, setRoot] = useState(new BinaryTreeNodeClass(1, bgColor));


  const handleAddLevel = () => {
    if (isRunning) return;
    setRoot((prevRoot) => addLevel(prevRoot));
  };

  const handleRemoveLevel = () => {
    if (isRunning) return;
    setRoot((prevRoot) => removeLevel(prevRoot));
  };


  const handleRunBfs = () => {
    bfs(root, setRoot);
  }

  const handleRunInOrder = () => {
    inOrder(root, setRoot);
  } 

  const handleRunPreOrder = () => {
    preOrder(root, setRoot);
  }


  const handleRunPostOrder = () => {
    postOrder(root, setRoot);
  }

  return (
    <div className='App'>
      <div className='Container'>
        <h1 className='Title'>Tree Algorithm Visualizer</h1>
      </div>
      <div className='Actions'>
        <button className = 'Run' onClick = {handleRunPostOrder}>
          Run Algorithm!
        </button>
        <button className = 'Add' onClick={handleAddLevel}>
          Add a level!
        </button>
        <button className = 'Remove' onClick={handleRemoveLevel}>
          Remove a level!
        </button>
      </div>
      <TreeContainer root={root} />
    </div>
  );
};

export default App;

