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

// import all controller function
import { Banner, GradientSeparator } from "../../controllers/controller";

// import all styles


const propsObj = {
    bannerPillowSubMenu: "submenu--banner banner--pillow--img",
    bannerWallArtSubMenu: "submenu--banner banner--wallart--img",
    bannerBathSubMenu: "submenu--banner banner--bath--img",
    bannerBeddingSubMenu: "submenu--banner banner--bedding--img",
    bannerOfficeSubMenu: "submenu--banner banner--office--img"
}

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
            { Banner( propsObj.bannerPillowSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerWallArtSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerBathSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerBeddingSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerOfficeSubMenu ) }
            { GradientSeparator () }
            <Office 
                title="Office" 
                design= { design } 
                product={ filterDataByOffice } 
            />
        </>
    );

}

export default HomewareSubMenuRoute;
