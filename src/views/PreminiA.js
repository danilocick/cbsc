import React from "react";
import { Link } from "react-router-dom";
import "./../css/app.css";

import a from "./../images/prema/a.JPG";
import b from "./../images/prema/b.JPG";
import c from "./../images/prema/c.JPG";
import d from "./../images/prema/d.JPG";
import e from "./../images/prema/e.JPG";
import f from "./../images/prema/f.JPG";
import g from "./../images/prema/g.JPG";
import h from "./../images/prema/h.JPG";
import i from "./../images/prema/i.JPG";

function PreminiA(props) {

    return (
      <div>
        <h1 className="white">Premini A</h1>
        <Link to="/cbsc">Volver</Link>

        <div className="row-images">
          <div className="column-images">
            <img src={a}/>
            <img src={b}/>
            <img src={c}/>
          </div>
          <div className="column-images">
            <img src={d}/>
            <img src={e}/>
            <img src={f}/>
          </div>
          <div className="column-images">
            <img src={g}/>
            <img src={h}/>
            <img src={i}/>
          </div>
        </div>
        
      </div>
    );
  }

  export default PreminiA;