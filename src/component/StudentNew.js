import React from "react";

function StudentNew() {        
    const handleClick = () => {
        document.getElementById("h4").classList = 'active-txt';                
    } 

    const handleClick1 = () => {        
        document.getElementById("h2").classList.toggle('active-txt');        
    }    
    // const handleClick2 = () => {                
    //     this.classList.toggle('active-txt');     
    // }    
    
       
    return(
        <>     
            <MyName /> 
            <h4 id="h4">Student Name1 </h4>
            <h4 id="h2">Student Name2</h4>
            <h4 id="h3">Student Name3</h4>
            <button onClick={handleClick} >Add Class Button</button>
            <button onClick={handleClick1} >Toggle Button</button>
            {/* <button onClick={handleClick2} >Toggle Button</button> */}
        </>
    )
   
}

const MyName = () =>{
    return(
        <>
            <h5>This is Testing</h5>
        </>
    )
}

export default StudentNew;