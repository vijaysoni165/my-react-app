import React from "react"

const MenuCard = ({menuData}) => {
    console.log(menuData);
    {
        menuData.map((curElem) => {
            return(
                <>
                    <div className="card-container" key=''>
                    <div className="card ">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">saa</span>
                        <span className="card-author subtle">dsdsd</span>
                        <h2 className="card-title">sas </h2>
                        <span className="card-description subtle">
                        sasa sdsds
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    {/* <img src='' alt="images" className="card-media" /> */}
        
                    <span className="card-tag  subtle">Order Now</span>
                    </div>
                    </div>            
                </>
            )
        });
    }
    
}

export default MenuCard;