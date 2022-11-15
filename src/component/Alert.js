import React from "react";
import './Style.css';
import { useState } from "react";

const Alert = () => {
    // by Hooks Call Alert
    const [active , setalert] = useState(false);
    const alerthandler = () => {
       setalert(true);
       alert('yes this is hooks');
    }

    // by Function Call Alert
    function alertGenerate() {
        alert('yes this is alert');
         }
    return(
        <>
            {/* Change onclick handle as per method */}
            <h3>Alert</h3>
            <button className="btn btn-primary" onClick={() => alerthandler()}>Alert Design</button>
            <button className="btn btn-primary" onClick={() => alertGenerate()} style={{marginLeft: '10px'}}>Alert Design</button>
            <div style={{marginBottom: '50px'}}></div>
        </>
    )
}

export default Alert;
