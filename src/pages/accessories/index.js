import React from "react";

// import all components
import FaceMaskComponent from "../../layouts/category-layout-component";
import HatComponent from "../../layouts/category-layout-component";
import PhoneCaseComponent from "../../layouts/category-layout-component";
import StickerComponent from "../../layouts/category-layout-component";
import BagComponent from "../../layouts/category-layout-component";
import NeckGaiterComponent from "../../layouts/category-layout-component";
import StationeryComponent from "../../layouts/category-layout-component";
import FannyPackComponent from "../../layouts/category-layout-component";
import SockComponent from "../../layouts/category-layout-component";

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
import { Banner, Divider } from "../../controllers/controller";

// import all styles


function Accessories () {

    const propsObj = {
        bannerHome: "banner banner--home--img",
        firstDivider: "banner--divider banner--divider--img",
        secondDivider: "banner--divider banner--divider--img"
    }

    return (
        <>
            { Banner( propsObj.bannerHome ) }
            <FaceMaskComponent 
                title="Face Masks" 
                design= { design } 
                product={ filterDataByFaceMask } 
                interval = { 5 } 
            />
            <HatComponent 
                title="Hats" 
                design= { design } 
                product={ filterDataByHats } 
                interval = { 5 } 
            />
            <PhoneCaseComponent 
                title="Phone Cases" 
                design= { design } 
                product={ filterDataByPhoneCase } 
                interval = { 5 } 
            />
            { Divider( propsObj.firstDivider ) }
            <StickerComponent 
                title="Stickers" 
                design= { design } 
                product={ filterDataBySticker } 
                interval = { 5 } 
            />
            <BagComponent 
                title="Bags" 
                design= { design } 
                product={ filterDataByBag } 
                interval = { 5 } 
            />
            <NeckGaiterComponent 
                title="Neck Gaiters" 
                design= { design } 
                product={ filterDataByNeckGaiter } 
                interval = { 5 } 
            />
            { Divider( propsObj.firstDivider ) }
            <StationeryComponent 
                title="Stationery" 
                design= { design } 
                product={ filterDataByStationery } 
                interval = { 5 } 
            />
            <FannyPackComponent 
                title="Fanny Packs" 
                design= { design } 
                product={ filterDataByFannyPack } 
                interval = { 5 } 
            />
            <SockComponent 
                title="Socks" 
                design= { design } 
                product={ filterDataBySock } 
                interval = { 5 } 
            />
        </>
    );

}

export default Accessories;
