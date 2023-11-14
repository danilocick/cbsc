import React from "react";
import { Link } from "react-router-dom";
import './../css/overlay.css';


function Item(props) {
    return(           
        <div className="column">
            <div class="card">
                <img src={props.image} alt={props.image} style={{width:"100%"}}/>
                <div class="container">
                    <h2>{props.name}</h2>
                    <p className="title">{props.category}</p>
                    <p><Link to={props.nav} className="button" team={props.name}>Accedir</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Item;