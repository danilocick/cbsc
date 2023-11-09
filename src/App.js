import React from "react";
import ItemContainer from './component/ItemContainer';
import Title from './component/Title';

import "./css/container.css";
import "./css/app.css";

function App() {

  return (
    <div className="App">
      <Title/>
      <ItemContainer/>
    </div>
  );
}

export default App;
