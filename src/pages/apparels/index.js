import React from "react";

// import all components
import TeeLayout from "../../layouts/category-layout-component";
import HoodieLayout from "../../layouts/category-layout-component";
import SweatshirtLayout from "../../layouts/category-layout-component";
import TankTopLayout from "../../layouts/category-layout-component";
import SleeveTeeLayout from "../../layouts/category-layout-component";
import AthleticLayout from "../../layouts/category-layout-component";

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


function Apparel () {

    return (
        <>
            <TeeLayout 
                title="Tee Shirts" 
                design= { design } 
                product={ filterDataByTshirt } 
                interval = { 5 } 
            />
            <HoodieLayout 
                title="Hoodies" 
                design= { design } 
                product={ filterDataByHoodie } 
                interval = { 5 } 
            />
            <SweatshirtLayout 
                title="Sweatshirts" 
                design= { design } 
                product={ filterDataBySweatshirt } 
                interval = { 5 } 
            />
            <TankTopLayout 
                title="Tank Tops" 
                design= { design } 
                product={ filterDataByTankTop } 
                interval = { 5 } 
            />
            <SleeveTeeLayout 
                title="Sleeve Tee" 
                design= { design } 
                product={ filterDataBySleeveTee } 
                interval = { 5 } 
            />
            <AthleticLayout 
                title="Athletics" 
                design= { design } 
                product={ filterDataByAthletic } 
                interval = { 5 } 
            />
        </>
    );

}

export default Apparel;
