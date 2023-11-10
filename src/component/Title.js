import React from "react";

import "./../css/app.css";
import Logo from "./../images/logo.png";

function Title(props) {
    return(
        <div class="header">
            <img src={Logo} alt="Logo"/>
        </div>
    );
}

export default Title;