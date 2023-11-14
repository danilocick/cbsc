import React from "react";
import { Link } from "react-router-dom";
import "./../css/app.css";

import a from "./../images/premb/a.JPG";
import b from "./../images/premb/b.JPG";
import c from "./../images/premb/c.JPG";
import d from "./../images/premb/d.JPG";
import e from "./../images/premb/e.JPG";
import f from "./../images/premb/f.JPG";
import g from "./../images/premb/g.JPG";
import h from "./../images/premb/h.JPG";
import i from "./../images/premb/i.JPG";

function PreminiB(props) {

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

  export default PreminiB;