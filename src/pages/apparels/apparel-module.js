import React from "react";

// import all components
import Tshirts from "../../layouts/submenu-layout";

// import all modules
import {
    filterDataByTshirt
} from "../../modules/module";

// import all data
import { design } from "../../data/data";


function TeeSubComponent () {

    return (
        <>
            <Tshirts 
                title="Tee Shirts" 
                design= { design } 
                product={ filterDataByTshirt } 
            />
        </>
    );

}

export default TeeSubComponent;
