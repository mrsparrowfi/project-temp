import React from "react";
import { Routes, Route } from "react-router-dom";

// import all components 
import Pillow from "../../layouts/submenu-layout";
import WallArt from "../../layouts/submenu-layout";
import Bath from "../../layouts/submenu-layout";
import Bedding from "../../layouts/submenu-layout";
import Office from "../../layouts/submenu-layout";

// import all modules
import {
    filterDataByPillow,
    filterDataByWallArt,
    filterDataByBath,
    filterDataByBedding,
    filterDataByOffice
} from "../../modules/module";

// import all data
import { design } from "../../data/data";


// import all styles



function HomewareSubMenuRoute () {

    return (
        <Routes>
            <Route path="Pillows" element={ <PillowSubComponent /> }/>
            <Route path="Wall Art" element={ <WallArtSubComponent /> }/>
            <Route path="Bath" element={ <BathSubComponent /> }/>
            <Route path="Bedding" element={ <BeddingSubComponent /> }/>
            <Route path="Office" element={ <OfficeSubComponent /> }/>
        </Routes>
    );

}

function PillowSubComponent () {

    return (
        <>
            <Pillow 
                title="Pillow" 
                design= { design } 
                product={ filterDataByPillow } 
            />
        </>
    );

}

function WallArtSubComponent () {

    return (
        <>
            <WallArt 
                title="Wall Art" 
                design= { design } 
                product={ filterDataByWallArt } 
            />
        </>
    );

}

function BathSubComponent () {

    return (
        <>
            <Bath 
                title="Bath" 
                design= { design } 
                product={ filterDataByBath } 
            />
        </>
    );

}

function BeddingSubComponent () {

    return (
        <>
            <Bedding 
                title="Bedding" 
                design= { design } 
                product={ filterDataByBedding } 
            />
        </>
    );

}

function OfficeSubComponent () {

    return (
        <>
            <Office 
                title="Office" 
                design= { design } 
                product={ filterDataByOffice } 
            />
        </>
    );

}

export default HomewareSubMenuRoute;
