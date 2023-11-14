import React from "react";
import Item from "./Item";

import './../css/container.css';

import PreminiA from './../images/avatar.jpg';


function ItemContainer(props) {
    return(
        <div className="row">
            <Item image={PreminiA} nav="/Escola" name="Escola CBSC" category=""/>
            <Item image={PreminiA} nav="/PreminiA" name="Pre-mini B" category="C. T. U09 - PRE-MINI"/>
            <Item image={PreminiA} nav="/PreminiB" name="Pre-mini A" category="C. T. U10 - PRE-MINI"/>
            <Item image={PreminiA} nav="/MiniA" name="Mini B" category="C. T. U11 - MINI"/>
            <Item image={PreminiA} nav="/MiniB" name="Mini A" category="C. T. U12 - MINI"/>
            <Item image={PreminiA} nav="/Preinfantil" name="Pre-infantil" category="C. T. U13 - PRE-INFANTIL"/>
            <Item image={PreminiA} nav="/InfantilM" name="infantil Masc." category="C. T. U14 - INFANTIL MASC."/>
            <Item image={PreminiA} nav="/InfantilF" name="Infantil Fem." category="C. T. U14 - INFANTIL FEM."/>
            <Item image={PreminiA} nav="/CadetA" name="Cadet B" category="C. T. U16 - CADET PROMOCIÓ"/>
            <Item image={PreminiA} nav="/CadetB" name="Cadet A" category="C. T. U16 - CADET INTERTERRITORIAL"/>
            <Item image={PreminiA} nav="/JuniorB" name="Junior B" category="C. T. U17 - JUNIOR"/>
            <Item image={PreminiA} nav="/JuniorA" name="Junior A" category="C. T. U18 - JUNIOR"/>
            <Item image={PreminiA} nav="/SeniorC" name="Senior C" category="1A. TERRITORIAL"/>
            <Item image={PreminiA} nav="/SeniorB" name="Senior B" category="C. C. PRIMERA"/>
            <Item image={PreminiA} nav="/SeniorVermell" name="Senior Vermell" category="SUPER SENIOR"/>
            <Item image={PreminiA} nav="/SeniorA" name="Senior A" category="COPA CATALUNYA"/>
        </div>
    );
}

export default ItemContainer;