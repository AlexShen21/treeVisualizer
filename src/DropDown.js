import React, {useState} from "react";
import "./DropDown.css";

let alg = "";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(""); // Remove the default placeholder

    const handleOptionClick = (option) => {
        alg = option;
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption || "Select an Algorithm!"}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li><button className="dropdown-item" onClick={() => handleOptionClick("Depth First Search")}>
                                Depth First Search
                            </button>
                        </li>
                        <li> <button className="dropdown-item" onClick={() => handleOptionClick("Breadth First Search")}>
                                Breadth First Search
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => handleOptionClick("InOrder Traversal")}>
                                InOrder Traversal
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => handleOptionClick("PostOrder Traversal")}>
                                PostOrder Traversal
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
export {alg};