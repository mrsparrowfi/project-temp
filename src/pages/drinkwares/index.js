import React from "react";

// import all components
import MugComponent from "../../layouts/category-layout-component";
import WaterBottleComponent from "../../layouts/category-layout-component";
import SteelTumblerComponent from "../../layouts/category-layout-component";
import PintGlassComponent from "../../layouts/category-layout-component";

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
import { Banner, Divider } from "../../controllers/controller";

// import all styles


function Drinkware () {

    const propsObj = {
        bannerHome: "banner banner--home--img",
        firstDivider: "banner--divider banner--divider--img",
        secondDivider: "banner--divider banner--divider--img"
    }

    return (
        <>
            { Banner( propsObj.bannerHome ) }
            <MugComponent 
                title="Mugs" 
                design= { design } 
                product={ filterDataByMug } 
                interval = { 5 } 
            />
            <WaterBottleComponent 
                title="Water Bottle" 
                design= { design } 
                product={ filterDataByWaterBottle } 
                interval = { 5 } 
            />
            { Divider( propsObj.firstDivider ) }
            <SteelTumblerComponent 
                title="Steel Tumbler" 
                design= { design } 
                product={ filterDataBySteelTumbler } 
                interval = { 5 } 
            />
            <PintGlassComponent 
                title="Pint Glass" 
                design= { design } 
                product={ filterDataByPintGlass } 
                interval = { 5 } 
            />
        </>
    );

}

export default Drinkware;
