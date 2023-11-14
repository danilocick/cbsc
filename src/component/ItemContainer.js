import React from "react";
import Item from "./Item";

import './../css/container.css';

import PreminiA from './../images/avatar.jpg';


function ItemContainer(props) {
    return(
        <div className="row">
                <Item image={PreminiA} name="Pre-mini B" category="C. T. U09 - PRE-MINI"/>
                <Item image={PreminiA} name="Pre-mini A" category="C. T. U10 - PRE-MINI"/>
                <Item image={PreminiA} name="Mini B" category="C. T. U11 - MINI"/>
                <Item image={PreminiA} name="Mini A" category="C. T. U12 - MINI"/>
                <Item image={PreminiA} name="Pre-infantil" category="C. T. U13 - PRE-INFANTIL"/>
                <Item image={PreminiA} name="infantil Masc." category="C. T. U14 - INFANTIL MASC."/>
                <Item image={PreminiA} name="Infantil Fem." category="C. T. U14 - INFANTIL FEM."/>
                <Item image={PreminiA} name="Cadet B" category="C. T. U16 - CADET PROMOCIÓ"/>
                <Item image={PreminiA} name="Cadet A" category="C. T. U16 - CADET INTERTERRITORIAL"/>
                <Item image={PreminiA} name="Junior B" category="C. T. U17 - JUNIOR"/>
                <Item image={PreminiA} name="Junior A" category="C. T. U18 - JUNIOR"/>
                <Item image={PreminiA} name="Senior C" category="1A. TERRITORIAL"/>
                <Item image={PreminiA} name="Senior B" category="C. C. PRIMERA"/>
                <Item image={PreminiA} name="Senior Vermell" category="SUPER SENIOR"/>
                <Item image={PreminiA} name="Senior A" category="COPA CATALUNYA"/>
        </div>
    );
}

export default ItemContainer;