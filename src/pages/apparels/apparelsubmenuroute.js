import React from "react";
import { Routes, Route } from "react-router-dom";

// import all components 
import Tshirts from "../../layouts/submenu-layout";
import Hoodies from "../../layouts/submenu-layout";
import Sweatshirts from "../../layouts/submenu-layout";
import TankTops from "../../layouts/submenu-layout";
import SleeveTee from "../../layouts/submenu-layout";
import Athletic from "../../layouts/submenu-layout";

// import all modules
import {
    filterDataByTshirt,
    filterDataByHoodie,
    filterDataBySweatshirt,
    filterDataByTankTop,
    filterDataBySleeveTee,
    filterDataByAthletic
} from "../../modules/module";

// import all data
import { design } from "../../data/data";

// import all controller function
import { Banner, GradientSeparator } from "../../controllers/controller";

// import all styles

const propsObj = {
    bannerTeeSubMenu: "submenu--banner banner--tshirts--img",
    bannerHoodieSubMenu: "submenu--banner banner--hoodies--img",
    bannerSweatshirtSubMenu: "submenu--banner banner--sweatshirts--img",
    bannerTankTopSubMenu: "submenu--banner banner--tanktops--img",
    bannerSleeveTeeSubMenu: "submenu--banner banner--sleevetee--img",
    bannerAthleticSubMenu: "submenu--banner banner--athletics--img"
}

function ApparelSubMenuRoute () {

    return (
        <Routes>
            <Route path="T-shirts" element={ <TeeSubComponent /> }/>
            <Route path="Hoodies" element={ <HoodieSubComponent /> }/>
            <Route path="Sweatshirts" element={ <SweatshirtSubComponent /> }/>
            <Route path="Tank Tops" element={ <TankTopSubComponent /> }/>
            <Route path="Sleeve Tee" element={ <SleeveTeeSubComponent /> }/>
            <Route path="Athletics" element={ <AthleticSubComponent /> }/>
        </Routes>
    );

}

function TeeSubComponent () {

    return (
        <>
            { Banner( propsObj.bannerTeeSubMenu ) }
            { GradientSeparator () }
            <Tshirts 
                title="Tee Shirts" 
                design= { design } 
                product={ filterDataByTshirt } 
            />
        </>
    );

}

function HoodieSubComponent () {

    return (
        <>
            { Banner( propsObj.bannerHoodieSubMenu ) }
            { GradientSeparator () }
            <Hoodies 
                title="Hoodies" 
                design= { design } 
                product={ filterDataByHoodie } 
            />
        </>
    );

}

function SweatshirtSubComponent () {

    return (
        <>
            { Banner( propsObj.bannerSweatshirtSubMenu ) }
            { GradientSeparator () }
            <Sweatshirts 
                title="Sweatshirts" 
                design= { design } 
                product={ filterDataBySweatshirt } 
            />
        </>
    );

}

function TankTopSubComponent () {

    return (
        <>
            { Banner( propsObj.bannerTankTopSubMenu ) }
            { GradientSeparator () }
            <TankTops 
                title="Tank Tops" 
                design= { design } 
                product={ filterDataByTankTop } 
            />
        </>
    );

}

function SleeveTeeSubComponent () {

    return (
        <>
            { Banner( propsObj.bannerSleeveTeeSubMenu ) }
            { GradientSeparator () }
            <SleeveTee 
                title="Sleeve Tee Shirts" 
                design= { design } 
                product={ filterDataBySleeveTee } 
            />
        </>
    );

}


function AthleticSubComponent () {

    return (
        <>
            { Banner( propsObj.bannerAthleticSubMenu ) }
            { GradientSeparator () }
            <Athletic 
                title="Athletic" 
                design= { design } 
                product={ filterDataByAthletic } 
            />
        </>
    );

}

export default ApparelSubMenuRoute;
