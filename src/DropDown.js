import React, {useState} from "react";
import "./DropDown.css";


function Dropdown( {alg} ) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(""); // Remove the default placeholder

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        alg(option)
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption || "Depth First Search"} <span className="arrow">&darr;</span>
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