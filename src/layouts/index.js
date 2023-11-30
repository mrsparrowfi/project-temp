import React from "react";
import { Routes, Route } from "react-router-dom";

// import all components 
import Home from "../pages/home/index";
import Design from "../pages/404/pagenotfound";
import Apparel from "../pages/apparels/index";
import ApparelSubMenuRoute from "../pages/apparels/apparelsubmenuroute";
import Homeware from "../pages/homewares/index";
import HomewareSubMenuRoute from "../pages/homewares/homewaresubmenuroute";
import Accessories from "../pages/accessories/index";
import AccessoriesSubMenuRoute from "../pages/accessories/accessoriessubmenuroute";
import Drinkware from "../pages/drinkwares/index";
import DrinkwareSubMenuRoute from "../pages/drinkwares/drinkwaresubmenuroute";
import Privacy from "../pages/404/pagenotfound";
import Cookie from "../pages/404/pagenotfound";
import ContactUs from "../pages/404/pagenotfound";
import PageNotFound from "../pages/404/pagenotfound";

// import all modules


// import all data


// import all styles



function Layout () {

    return (
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="design" element={ <Design /> }/>
            <Route path="design/*" element={ <Design /> }/>
            <Route path="apparel" element={ <Apparel /> }/>
            <Route path="apparel/*" element={ <ApparelSubMenuRoute /> }/>
            <Route path="homeware" element={ <Homeware /> }/>
            <Route path="homeware/*" element={ <HomewareSubMenuRoute /> }/>
            <Route path="accessories" element={ <Accessories /> }/>
            <Route path="accessories/*" element={ <AccessoriesSubMenuRoute /> }/>
            <Route path="drinkware" element={ <Drinkware /> }/>
            <Route path="drinkware/*" element={ <DrinkwareSubMenuRoute /> }/>
            <Route path="privacy" element={ <Privacy /> }/>
            <Route path="cookie" element={ <Cookie /> }/>
            <Route path="contactus" element={ <ContactUs /> }/>
            <Route path="*" element={ <PageNotFound /> }/>
        </Routes>
    );

}

export default Layout;
