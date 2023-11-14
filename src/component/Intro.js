import React from "react";
import { Link } from "react-router-dom";

import Logo from "./../images/logo.png";
import "./../css/overlay.css";
import "./../css/app.css";

function Intro() {

    return (
      <div>
        <div class="header">
              <img src={Logo} alt="Logo"/>
        </div>
      </div>
    );
  }

  export default Intro;