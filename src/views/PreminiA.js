import React from "react";
import { Link } from "react-router-dom";
import "./../css/app.css";
function PreminiA(props) {

    return (
      <div>
        <p className="white">Premini A</p>
        <Link to="/cbsc">Volver</Link>
      </div>
    );
  }

  export default PreminiA;