import React from "react";
import './Style.css';
import { useState } from "react";


function Menuselectedlink() {
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    const handleOnClick = index => {
      setActiveIndex(index); // remove the curly braces
    };
  
    const boxs = [0, 1, 2, 3];
    const box = boxs.map((el, index) => {
      return (
        <button
          key={index}
          onClick={() => handleOnClick(index)} // pass the index
          className={activeIndex === index ? "active" : "unactive"}
        >
          {el}
        </button>
      );
    });
    return <div className="App">{box}</div>;
  }

  export default Menuselectedlink;
  
  