import React from "react";

import "./../css/app.css";
import Logo from "./../images/logo.jpg";

function Title(props) {
    return(
        <div class="header">
            <div className="third">
                <img className="logo" src={Logo} alt="Logo"/>
            </div>
            <div className="two-third">
                <h2>CLUB BASQUET</h2>
                <h2>SANTA COLOMA</h2>
            </div>
        </div>
    );
}

export default Title;