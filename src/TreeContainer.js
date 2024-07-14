import React, { useState } from 'react';
import BinaryTreeNode from './BinaryTreeNode'; // Import your BinaryTreeNode component
// const binaryTreeData = {
//   name: "1",
//   left: {
//     name:"2"
//   },
//   right: {
//     name: "3"
//   }
// };

// const binaryTreeData = {
//   name: "1",
//   left: {
//     name: "2",
//     left: {
//       name: "4",
//       left: {
//         name: "8",
        
//       },
//       right: {
//         name: "9",
//       }
//     },
//     right: {
//       name: "5",
//       left: {
//         name: "10",
        
//       },
//       right: {
//         name: "11"
//       }
//     }
//   },
//   right: {
//     name: "3",
//     left: {
//       name: "6",
//       left: {
//         name: "12",
        
//       },
//       right: {
//         name: "13"
//       }
//     },
//     right: {
//       name: "7",
//       left: {
//         name: "14",
        
//       },
//       right: {
//         name: "15"
//       }
//     }
//   }
// };

const binaryTreeData = {
    name: "1",
    left: {
      name: "2",
      left: {
        name: "4",
        left: {
          name: "8",
          left: {
            name: "16",
            left: {
              name: "32",
              left: {
                name: "64",
                left: null,
                right: null
              },
              right: {
                name: "65",
                left: null,
                right: null
              }
            },
            right: {
              name: "33",
              left: {
                name: "66",
                left: null,
                right: null
              },
              right: {
                name: "67",
                left: null,
                right: null
              }
            }
          },
          right: {
            name: "17",
            left: {
              name: "34",
              left: {
                name: "68",
                left: null,
                right: null
              },
              right: {
                name: "69",
                left: null,
                right: null
              }
            },
            right: {
              name: "35",
              left: {
                name: "70",
                left: null,
                right: null
              },
              right: {
                name: "71",
                left: null,
                right: null
              }
            }
          }
        },
        right: {
          name: "9",
          left: {
            name: "18",
            left: {
              name: "36",
              left: {
                name: "72",
                left: null,
                right: null
              },
              right: {
                name: "73",
                left: null,
                right: null
              }
            },
            right: {
              name: "37",
              left: {
                name: "74",
                left: null,
                right: null
              },
              right: {
                name: "75",
                left: null,
                right: null
              }
            }
          },
          right: {
            name: "19",
            left: {
              name: "38",
              left: {
                name: "76",
                left: null,
                right: null
              },
              right: {
                name: "77",
                left: null,
                right: null
              }
            },
            right: {
              name: "39",
              left: {
                name: "78",
                left: null,
                right: null
              },
              right: {
                name: "79",
                left: null,
                right: null
              }
            }
          }
        }
      },
      right: {
        name: "5",
        left: {
          name: "10",
          left: {
            name: "20",
            left: {
              name: "40",
              left: {
                name: "80",
                left: null,
                right: null
              },
              right: {
                name: "81",
                left: null,
                right: null
              }
            },
            right: {
              name: "41",
              left: {
                name: "82",
                left: null,
                right: null
              },
              right: {
                name: "83",
                left: null,
                right: null
              }
            }
          },
          right: {
            name: "21",
            left: {
              name: "42",
              left: {
                name: "84",
                left: null,
                right: null
              },
              right: {
                name: "85",
                left: null,
                right: null
              }
            },
            right: {
              name: "43",
              left: {
                name: "86",
                left: null,
                right: null
              },
              right: {
                name: "87",
                left: null,
                right: null
              }
            }
          }
        },
        right: {
          name: "11",
          left: {
            name: "22",
            left: {
              name: "44",
              left: {
                name: "88",
                left: null,
                right: null
              },
              right: {
                name: "89",
                left: null,
                right: null
              }
            },
            right: {
              name: "45",
              left: {
                name: "90",
                left: null,
                right: null
              },
              right: {
                name: "91",
                left: null,
                right: null
              }
            }
          },
          right: {
            name: "23",
            left: {
              name: "46",
              left: {
                name: "92",
                left: null,
                right: null
              },
              right: {
                name: "93",
                left: null,
                right: null
              }
            },
            right: {
              name: "47",
              left: {
                name: "94",
                left: null,
                right: null
              },
              right: {
                name: "95",
                left: null,
                right: null
              }
            }
          }
        }
      }
    },
    right: {
      name: "3",
      left: {
        name: "6",
        left: {
          name: "12",
          left: {
            name: "24",
            left: {
              name: "48",
              left: {
                name: "96",
                left: null,
                right: null
              },
              right: {
                name: "97",
                left: null,
                right: null
              }
            },
            right: {
              name: "49",
              left: {
                name: "98",
                left: null,
                right: null
              },
              right: {
                name: "99",
                left: null,
                right: null
              }
            }
          },
          right: {
            name: "25",
            left: {
              name: "50",
              left: {
                name: "100",
                left: null,
                right: null
              },
              right: {
                name: "101",
                left: null,
                right: null
              }
            },
            right: {
              name: "51",
              left: {
                name: "102",
                left: null,
                right: null
              },
              right: {
                name: "103",
                left: null,
                right: null
              }
            }
          }
        },
        right: {
          name: "13",
          left: {
            name: "26",
            left: {
              name: "52",
              left: {
                name: "104",
                left: null,
                right: null
              },
              right: {
                name: "105",
                left: null,
                right: null
              }
            },
            right: {
              name: "53",
              left: {
                name: "106",
                left: null,
                right: null
              },
              right: {
                name: "107",
                left: null,
                right: null
              }
            }
          },
          right: {
            name: "27",
            left: {
              name: "54",
              left: {
                name: "108",
                left: null,
                right: null
              },
              right: {
                name: "109",
                left: null,
                right: null
              }
            },
            right: {
              name: "55",
              left: {
                name: "110",
                left: null,
                right: null
              },
              right: {
                name: "111",
                left: null,
                right: null
              }
            }
          }
        }
      },
      right: {
        name: "7",
        left: {
          name: "14",
          left: {
            name: "28",
            left: {
              name: "56",
              left: {
                name: "112",
                left: null,
                right: null
              },
              right: {
                name: "113",
                left: null,
                right: null
              }
            },
            right: {
              name: "57",
              left: {
                name: "114",
                left: null,
                right: null
              },
              right: {
                name: "115",
                left: null,
                right: null
              }
            }
          },
          right: {
            name: "29",
            left: {
              name: "58",
              left: {
                name: "116",
                left: null,
                right: null
              },
              right: {
                name: "117",
                left: null,
                right: null
              }
            },
            right: {
              name: "59",
              left: {
                name: "118",
                left: null,
                right: null
              },
              right: {
                name: "119",
                left: null,
                right: null
              }
            }
          }
        },
        right: {
          name: "15",
          left: {
            name: "30",
            left: {
              name: "60",
              left: {
                name: "120",
                left: null,
                right: null
              },
              right: {
                name: "121",
                left: null,
                right: null
              }
            },
            right: {
              name: "61",
              left: {
                name: "122",
                left: null,
                right: null
              },
              right: {
                name: "123",
                left: null,
                right: null
              }
            }
         
  
   },
          right: {
            name: "31",
            left: {
              name: "62",
              left: {
                name: "124",
                left: null,
                right: null
              },
              right: {
                name: "125",
                left: null,
                right: null
              }
            },
            right: {
              name: "63",
              left: {
                name: "126",
                left: null,
                right: null
              },
              right: {
                name: "127",
                left: null,
                right: null
              }
            }
          }
        }
      }
    }
  };

const TreeContainer = ({ root }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (event) => {
    event.preventDefault();
    const scaleAdjust = event.deltaY * -0.01;
    const newScale = Math.min(Math.max(0.1, scale + scaleAdjust), 2);
    setScale(newScale);
  };

  const handleMouseDown = (event) => {
    const start = { x: event.clientX, y: event.clientY };
    const startPos = { ...position };

    const handleMouseMove = (moveEvent) => {
      const newPos = {
        x: startPos.x + (moveEvent.clientX - start.x),
        y: startPos.y + (moveEvent.clientY - start.y)
      };
      setPosition(newPos);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const containerStyle = {
    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
    transformOrigin: '0 0',
    width: '100%',
    height: '100%',
    position: 'relative', // Ensure the container is relative for correct positioning
    cursor: 'grab'
  };

  return (
    <div style={containerStyle} onWheel={handleWheel} onMouseDown={handleMouseDown}>
      <BinaryTreeNode node={binaryTreeData} />
    </div>
  );
};

export default TreeContainer;
