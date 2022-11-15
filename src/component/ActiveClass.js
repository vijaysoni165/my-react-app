import React from "react";
import './Style.css';
import { useState } from "react";


function ActiveClass() {
    const[active, setactive] = useState(false);
    const handlerevent =  (event) => {
        setactive(true);
    }
    return(
        <>
            <h3>Active Class</h3>
            <button className="btn btn-primary" onClick={() => handlerevent()}>Alert Design</button>
            {/* <button className="btn btn-primary" onClick={() => alertGenerate()} style={{marginLeft: '10px'}}>Alert Design</button> */}
        </>
    )
    
}


export default ActiveClass;