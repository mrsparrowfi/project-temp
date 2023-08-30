import React from "react";

// import all components
import TeeLayout from "../../layouts/apparel/category-layout-component";
import HoodieLayout from "../../layouts/apparel/category-layout-component";
import SweatshirtLayout from "../../layouts/apparel/category-layout-component";
import TankTopLayout from "../../layouts/apparel/category-layout-component";
import SleeveTeeLayout from "../../layouts/apparel/category-layout-component";
import AthleticLayout from "../../layouts/apparel/category-layout-component";

// import all modules
import {
    filterDataByTshirt,
    filterDataByHoodie,
    filterDataBySweatshirt,
    filterDataByTankTop,
    filterDataBySleeveTee,
    filterDataByAthletic
} from "../../modules/module";


function Design () {

    return (
        <>
            <TeeLayout title="Tee Shirts" product={ filterDataByTshirt } interval = { 5 } />
            <HoodieLayout title="Hoodies" product={ filterDataByHoodie } interval = { 5 } />
            <SweatshirtLayout title="Sweatshirts" product={ filterDataBySweatshirt } interval = { 5 } />
            <TankTopLayout title="Tank Tops" product={ filterDataByTankTop } interval = { 5 } />
            <SleeveTeeLayout title="Sleeve Tee" product={ filterDataBySleeveTee } interval = { 5 } />
            <AthleticLayout title="Athletics" product={ filterDataByAthletic } interval = { 5 } />
        </>
    );

}

export default Design;
