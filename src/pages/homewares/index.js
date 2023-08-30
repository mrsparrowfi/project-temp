import React from "react";

// import all components
import PillowComponent from "../../layouts/category-layout-component";
import WallArtComponent from "../../layouts/category-layout-component";
import BathComponent from "../../layouts/category-layout-component";
import BeddingComponent from "../../layouts/category-layout-component";
import OfficeComponent from "../../layouts/category-layout-component";

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


function Homeware () {

    return (
        <>
            <PillowComponent 
                title="Pillows" 
                design= { design } 
                product={ filterDataByPillow } 
                interval = { 5 } 
            />
            <WallArtComponent 
                title="Wall Arts" 
                design= { design } 
                product={ filterDataByWallArt } 
                interval = { 5 } 
            />
            <BathComponent 
                title="Bath" 
                design= { design } 
                product={ filterDataByBath } 
                interval = { 5 } 
            />
            <BeddingComponent 
                title="Bedding" 
                design= { design } 
                product={ filterDataByBedding } 
                interval = { 5 } 
            />
            <OfficeComponent 
                title="Office" 
                design= { design } 
                product={ filterDataByOffice } 
                interval = { 5 } 
            />
        </>
    );

}

export default Homeware;
