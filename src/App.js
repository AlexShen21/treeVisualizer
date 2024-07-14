import React from 'react';
import './App.css';
import BinaryTreeNode from './BinaryTreeNode';

const binaryTreeData = {
  name: "1",
  left: {
    name: "2",
    left: {
      name: "4",
      left: {
        name: "8",
        
      },
      right: {
        name: "9",
      }
    },
    right: {
      name: "5",
      left: {
        name: "10",
        
      },
      right: {
        name: "11"
      }
    }
  },
  right: {
    name: "3",
    left: {
      name: "6",
      left: {
        name: "12",
        
      },
      right: {
        name: "13"
      }
    },
    right: {
      name: "7",
      left: {
        name: "14",
        
      },
      right: {
        name: "15"
      }
    }
  }
};

function App() {
  return (
    <div className="App">
      <h1 className='Title'>Tree Algorithm Visualizer</h1>
      <BinaryTreeNode node={binaryTreeData} />
    </div>
  );
}

export default App;
