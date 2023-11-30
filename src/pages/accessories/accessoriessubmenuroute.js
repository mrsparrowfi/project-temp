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

// import all controller function
import { Banner, GradientSeparator } from "../../controllers/controller";

// import all styles


const propsObj = {
    bannerFaceMaskSubMenu: "submenu--banner banner--facemask--img",
    bannerHatSubMenu: "submenu--banner banner--hats--img",
    bannerPhoneCaseSubMenu: "submenu--banner banner--phonecase--img",
    bannerStickerSubMenu: "submenu--banner banner--sticker--img",
    bannerBagSubMenu: "submenu--banner banner--bag--img",
    bannerNeckGaiterSubMenu: "submenu--banner banner--neckgaiter--img",
    bannerStationerySubMenu: "submenu--banner banner--stationery--img",
    bannerFannyPackSubMenu: "submenu--banner banner--fannypack--img",
    bannerSockSubMenu: "submenu--banner banner--sock--img"
}

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
            { Banner( propsObj.bannerFaceMaskSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerHatSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerPhoneCaseSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerStickerSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerBagSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerNeckGaiterSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerStationerySubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerFannyPackSubMenu ) }
            { GradientSeparator () }
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
            { Banner( propsObj.bannerSockSubMenu ) }
            { GradientSeparator () }
            <Sock 
                title="Sock" 
                design= { design } 
                product={ filterDataBySock } 
            />
        </>
    );

}

export default AccessoriesSubMenuRoute;
