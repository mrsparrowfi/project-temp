import React from "react";
import { Routes, Route } from "react-router-dom";

// import all components 
import Mugs from "../../layouts/submenu-layout";
import WaterBottle from "../../layouts/submenu-layout";
import SteelTumbler from "../../layouts/submenu-layout";
import PintGlass from "../../layouts/submenu-layout";

// import all modules
import {
    filterDataByMug,
    filterDataByWaterBottle,
    filterDataBySteelTumbler,
    filterDataByPintGlass
} from "../../modules/module";

// import all data
import { design } from "../../data/data";


// import all styles



function DrinkwareSubMenuRoute () {

    return (
        <Routes>
            <Route path="Mugs" element={ <MugSubComponent /> }/>
            <Route path="Water Bottle" element={ <WaterBottleSubComponent /> }/>
            <Route path="Steel Tumbler" element={ <SteelTumblerSubComponent /> }/>
            <Route path="Pint Glass" element={ <PintGlassSubComponent /> }/>
        </Routes>
    );

}

function MugSubComponent () {

    return (
        <>
            <Mugs 
                title="Mugs" 
                design= { design } 
                product={ filterDataByMug } 
            />
        </>
    );

}

function WaterBottleSubComponent () {

    return (
        <>
            <WaterBottle 
                title="Water Bottle" 
                design= { design } 
                product={ filterDataByWaterBottle } 
            />
        </>
    );

}

function SteelTumblerSubComponent () {

    return (
        <>
            <SteelTumbler 
                title="Steel Tumbler" 
                design= { design } 
                product={ filterDataBySteelTumbler } 
            />
        </>
    );

}

function PintGlassSubComponent () {

    return (
        <>
            <PintGlass 
                title="Pint Glass" 
                design= { design } 
                product={ filterDataByPintGlass } 
            />
        </>
    );

}

export default DrinkwareSubMenuRoute;
