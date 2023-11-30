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

// import all controller function
import { Banner, GradientSeparator } from "../../controllers/controller";

// import all styles


const propsObj = {
    bannerMugSubMenu: "submenu--banner banner--mug--img",
    bannerWaterBottleSubMenu: "submenu--banner banner--waterbottle--img",
    bannerSteelTumblerSubMenu: "submenu--banner banner--steeltumbler--img",
    bannerPintGlassSubMenu: "submenu--banner banner--pintglass--img"
}

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
            { Banner( propsObj.bannerMugSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerWaterBottleSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerSteelTumblerSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerPintGlassSubMenu ) }
            { GradientSeparator () }
            <PintGlass 
                title="Pint Glass" 
                design= { design } 
                product={ filterDataByPintGlass } 
            />
        </>
    );

}

export default DrinkwareSubMenuRoute;
