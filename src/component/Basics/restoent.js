import React, { useState } from "react";
import "../Basics/style.css" ;
import Menu from "../Basics/MenuAPi";

import MenuCard from "./MenuCard";

const Restorent = () =>{
 const[menuData, setmenuData] = useState(Menu);
 //console.log(menuData);
    return(
        <>            
           <MenuCard menuData={menuData}  />
        </>
    )
}
export default Restorent;