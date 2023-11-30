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
import { Banner, GradientSeparator } from "../../controllers/controller";

// import all styles


function Accessories () {

    const propsObj = {
        bannerHome: "banner banner--accessories--img",
        firstDivider: "banner--divider banner--divider--img",
        secondDivider: "banner--divider banner--divider--img"
    }

    return (
        <>
            { Banner( propsObj.bannerHome ) }
            { GradientSeparator () }
            <FaceMaskComponent 
                title="Face Masks" 
                design= { design } 
                product={ filterDataByFaceMask } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <HatComponent 
                title="Hats" 
                design= { design } 
                product={ filterDataByHats } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <PhoneCaseComponent 
                title="Phone Cases" 
                design= { design } 
                product={ filterDataByPhoneCase } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <StickerComponent 
                title="Stickers" 
                design= { design } 
                product={ filterDataBySticker } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <BagComponent 
                title="Bags" 
                design= { design } 
                product={ filterDataByBag } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <NeckGaiterComponent 
                title="Neck Gaiters" 
                design= { design } 
                product={ filterDataByNeckGaiter } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <StationeryComponent 
                title="Stationery" 
                design= { design } 
                product={ filterDataByStationery } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <FannyPackComponent 
                title="Fanny Packs" 
                design= { design } 
                product={ filterDataByFannyPack } 
                interval = { 5 } 
            />
            { GradientSeparator () }
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
