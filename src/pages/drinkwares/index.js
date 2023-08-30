import React from "react";

// import all components
import MugComponent from "../../layouts/category-layout-component";
import WaterBottleComponent from "../../layouts/category-layout-component";
import SteelTumblerComponent from "../../layouts/category-layout-component";
import PintGlassComponent from "../../layouts/category-layout-component";

// import all modules
import {
    filterDataByMug,
    filterDataByWaterBottle,
    filterDataBySteelTumbler,
    filterDataByPintGlass
} from "../../modules/module";

// import all data
import { design } from "../../data/data";


function Drinkware () {

    return (
        <>
            <MugComponent 
                title="Mugs" 
                design= { design } 
                product={ filterDataByMug } 
                interval = { 5 } 
            />
            <WaterBottleComponent 
                title="Water Bottle" 
                design= { design } 
                product={ filterDataByWaterBottle } 
                interval = { 5 } 
            />
            <SteelTumblerComponent 
                title="Steel Tumbler" 
                design= { design } 
                product={ filterDataBySteelTumbler } 
                interval = { 5 } 
            />
            <PintGlassComponent 
                title="Pint Glass" 
                design= { design } 
                product={ filterDataByPintGlass } 
                interval = { 5 } 
            />
        </>
    );

}

export default Drinkware;
