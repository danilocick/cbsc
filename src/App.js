import React from "react";
import Item from './component/Item';

import PreminiA from './images/avatar.jpg';


function App() {

  return (
    <div className="App">
      <Item image={PreminiA} name="Premini A"/>
      <Item image={PreminiA} name="Premini B"/>
      <Item image={PreminiA} name="Mini A"/>
      <Item image={PreminiA} name="Mini B"/>
      <Item image={PreminiA} name="Preinfantil A"/>
    </div>
  );
}

export default App;
