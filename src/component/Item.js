import React from "react";
import './../css/overlay.css';


function Item(props) {
    return(
        <div>
        <div class="container">
            <img src={props.image} alt={props.image} className="image"/>
            <div className="middle">
                <div className="text">{props.name}</div>
            </div>
        </div>
        </div>
    );
}

export default Item;