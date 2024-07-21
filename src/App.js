import React, { useState } from 'react';
import TreeContainer from './TreeContainer';
import { addLevel, removeLevel } from './TreeActions';
import BinaryTreeNodeClass from './BinaryTreeNodeClass';
import './App.css';

const App = () => {
  const [root, setRoot] = useState(new BinaryTreeNodeClass(1));

  const handleAddLevel = () => {
    setRoot((prevRoot) => addLevel(prevRoot));
  };

  const handleRemoveLevel = () => {
    setRoot((prevRoot) => removeLevel(prevRoot));
  };

  return (
    <div className='App'>
      <div className='Container'>
        <h1 className='Title'>Tree Algorithm Visualizer</h1>
      </div>
      <div className='Actions'>
        <button className = 'Run'>
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

