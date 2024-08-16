import React, { useState } from 'react';
import TreeContainer from './TreeContainer';
import { addLevel, removeLevel, bfs, inOrder, preOrder, postOrder, isRunning } from './TreeActions';
import BinaryTreeNodeClass from './BinaryTreeNodeClass';
import Dropdown from './DropDown';
import './App.css';

const App = () => {
  const bgColor = 'white'
  const [root, setRoot] = useState(new BinaryTreeNodeClass(1, bgColor));
  const [alg, setAlg] = useState("Depth First Search");

  const handleAlgChange = (alg) => {
    setAlg(alg);
  }


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


  const runAlgorithm = () => {
    if (alg === "Depth First Search") {
      handleRunPreOrder();
    }
    else if (alg === "Breadth First Search") {
      handleRunBfs();
    }
    else if (alg === "InOrder Traversal") {
      handleRunInOrder();
    }
    else if (alg === "PostOrder Traversal") {
      handleRunPostOrder();
    }
  }



  return (
    <div className='App'>
      <div className='Container'>
        <h1 className='Title'>Tree Algorithm Visualizer</h1>
      </div>
      <Dropdown alg = {handleAlgChange}/>
      <div className='Actions'>
        <button className = 'Run' onClick = {runAlgorithm}>
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
