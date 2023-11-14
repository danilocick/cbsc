import React from "react";
import { Link } from "react-router-dom";
import "./../css/app.css";
function Team(props) {

    return (
      <div>
        <p className="white">{props.team}</p>
        <Link to="/cbsc">{props.team}</Link>
      </div>
    );
  }

  export default Team;