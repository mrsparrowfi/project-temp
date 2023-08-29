import React from "react";
import { Routes, Route } from "react-router-dom";

// import all components 
import FaceMask from "../../layouts/submenu-layout";
import Hats from "../../layouts/submenu-layout";
import PhoneCase from "../../layouts/submenu-layout";
import Sticker from "../../layouts/submenu-layout";
import Bag from "../../layouts/submenu-layout";
import NeckGaiter from "../../layouts/submenu-layout";
import Stationery from "../../layouts/submenu-layout";
import FannyPack from "../../layouts/submenu-layout";
import Sock from "../../layouts/submenu-layout";

// import all modules
import {
    filterDataByFaceMask,
    filterDataByHats,
    filterDataByPhoneCase,
    filterDataBySticker,
    filterDataByBag,
    filterDataByNeckGaiter,
    filterDataByStationery,
    filterDataByFannyPack,
    filterDataBySock
} from "../../modules/module";

// import all data
import { design } from "../../data/data";


// import all styles



function AccessoriesSubMenuRoute () {

    return (
        <Routes>
            <Route path="Face Masks" element={ <FaceMaskSubComponent /> }/>
            <Route path="Hats" element={ <HatsSubComponent /> }/>
            <Route path="Phone Cases" element={ <PhoneCaseSubComponent /> }/>
            <Route path="Stickers" element={ <StickerSubComponent /> }/>
            <Route path="Bags" element={ <BagSubComponent /> }/>
            <Route path="Neck Gaiters" element={ <NeckGaiterSubComponent /> }/>
            <Route path="Stationery" element={ <StationerySubComponent /> }/>
            <Route path="Fanny Packs" element={ <FannyPackSubComponent /> }/>
            <Route path="Socks" element={ <SockSubComponent /> }/>
        </Routes>
    );

}

function FaceMaskSubComponent () {

    return (
        <>
            <FaceMask 
                title="Face Mask" 
                design= { design } 
                product={ filterDataByFaceMask } 
            />
        </>
    );

}

function HatsSubComponent () {

    return (
        <>
            <Hats 
                title="Hats" 
                design= { design } 
                product={ filterDataByHats } 
            />
        </>
    );

}

function PhoneCaseSubComponent () {

    return (
        <>
            <PhoneCase 
                title="Phone Case" 
                design= { design } 
                product={ filterDataByPhoneCase } 
            />
        </>
    );

}

function StickerSubComponent () {

    return (
        <>
            <Sticker 
                title="Sticker" 
                design= { design } 
                product={ filterDataBySticker } 
            />
        </>
    );

}

function BagSubComponent () {

    return (
        <>
            <Bag 
                title="Bags" 
                design= { design } 
                product={ filterDataByBag } 
            />
        </>
    );

}

function NeckGaiterSubComponent () {

    return (
        <>
            <NeckGaiter 
                title="Neck Gaiter" 
                design= { design } 
                product={ filterDataByNeckGaiter } 
            />
        </>
    );

}

function StationerySubComponent () {

    return (
        <>
            <Stationery 
                title="Stationery" 
                design= { design } 
                product={ filterDataByStationery } 
            />
        </>
    );

}

function FannyPackSubComponent () {

    return (
        <>
            <FannyPack 
                title="Fanny Pack" 
                design= { design } 
                product={ filterDataByFannyPack } 
            />
        </>
    );

}

function SockSubComponent () {

    return (
        <>
            <Sock 
                title="Sock" 
                design= { design } 
                product={ filterDataBySock } 
            />
        </>
    );

}

export default AccessoriesSubMenuRoute;
