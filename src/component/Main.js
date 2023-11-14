import React from "react";
import { Link } from "react-router-dom";
import Intro from "./Intro"
import ItemContainer from "./ItemContainer";

function Main() {

    return (
      <div>
        <Intro/>
        <ItemContainer/>
      </div>
    );
  }

  export default Main;