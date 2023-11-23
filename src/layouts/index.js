import React from "react";
import { Routes, Route } from "react-router-dom";

// import all components 
import Home from "../pages/home/index";
import Apparel from "../pages/apparels/index";
import ApparelSubMenuRoute from "../pages/apparels/apparelsubmenuroute";
import Homeware from "../pages/homewares/index";
import HomewareSubMenuRoute from "../pages/homewares/homewaresubmenuroute";
import Accessories from "../pages/accessories/index";
import AccessoriesSubMenuRoute from "../pages/accessories/accessoriessubmenuroute";
import Drinkware from "../pages/drinkwares/index";
import DrinkwareSubMenuRoute from "../pages/drinkwares/drinkwaresubmenuroute";
import ContactUs from "../pages/home/index";
import AllDesign from "../pages/home/index";

// import all modules


// import all data


// import all styles



function Layout () {

    return (
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="alldesign" element={ <AllDesign /> }/>
            <Route path="alldesign/*" element={ <AllDesign /> }/>
            <Route path="apparel" element={ <Apparel /> }/>
            <Route path="apparel/*" element={ <ApparelSubMenuRoute /> }/>
            <Route path="homeware" element={ <Homeware /> }/>
            <Route path="homeware/*" element={ <HomewareSubMenuRoute /> }/>
            <Route path="accessories" element={ <Accessories /> }/>
            <Route path="accessories/*" element={ <AccessoriesSubMenuRoute /> }/>
            <Route path="drinkware" element={ <Drinkware /> }/>
            <Route path="drinkware/*" element={ <DrinkwareSubMenuRoute /> }/>
            <Route path="contactus" element={ <ContactUs /> }/>
        </Routes>
    );

}

export default Layout;
