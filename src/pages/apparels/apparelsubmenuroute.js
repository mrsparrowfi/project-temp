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


// import all styles



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
            <Athletic 
                title="Athletic" 
                design= { design } 
                product={ filterDataByAthletic } 
            />
        </>
    );

}

export default ApparelSubMenuRoute;
