import React from "react";

// import all components
import NewDesignLayout from "../../layouts/category-layout";
import NewProductLayout from "../../layouts/special-layout";
import PopularProductLayout from "../../layouts/special-layout";
import ApparelLayout from "../../layouts/category-layout";
import HomewareLayout from "../../layouts/category-layout";
import AccessoriesLayout from "../../layouts/category-layout";
import DrinkwareLayout from "../../layouts/category-layout";
import AllProductLayout from "../../layouts/special-layout";

// import all modules
import {
    allProducts,
    filterSubCategoryByDesign,
    filterSubCategoryByApparel,
    filterSubCategoryByHomeware,
    filterSubCategoryByAccessories,
    filterSubCategoryByDrinkware,
    filterProductByMostVisitedItem,
    filterProductByNewItem,
    filterProductByApparel,
    filterProductByHomeware,
    filterProductByAccessories,
    filterProductByDrinkware
} from "../../modules/module";

// import all data
import { Category } from "../../data/data";

// import all controller function
import { Banner, GradientSeparator } from "../../controllers/controller";

// import all styles


function Home () {

    const propsObj = {
        bannerHome: "banner banner--home--img",
        firstDivider: "banner--divider banner--divider--img",
        secondDivider: "banner--divider banner--divider--img"
    }

    return (
        <>
            { Banner( propsObj.bannerHome ) }
            { GradientSeparator () }
            <NewDesignLayout 
                title="New Design" 
                subcategory={ filterSubCategoryByDesign } 
                product={ filterProductByNewItem } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <NewProductLayout 
                title="New Products" 
                category={ Category } 
                product={ filterProductByNewItem } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <PopularProductLayout 
                title="Most Visited Products" 
                category={ Category } 
                product={ filterProductByMostVisitedItem } 
                interval = { 5 } 
            />
            { GradientSeparator () }
            <ApparelLayout 
                title="Apparels" 
                subcategory={ filterSubCategoryByApparel } 
                product={ filterProductByApparel } 
                interval = { 11 } 
            />
            { GradientSeparator () }
            <HomewareLayout 
                title="Home & Decor" 
                subcategory={ filterSubCategoryByHomeware } 
                product={ filterProductByHomeware } 
                interval = { 11 } 
            />
            { GradientSeparator () }
            <AccessoriesLayout 
                title="Accessories" 
                subcategory={ filterSubCategoryByAccessories } 
                product={ filterProductByAccessories } 
                interval = { 11 } 
            />
            { GradientSeparator () }
            <DrinkwareLayout 
                title="Drinkware" 
                subcategory={ filterSubCategoryByDrinkware } 
                product={ filterProductByDrinkware } 
                interval = { 11 } 
            />
            { GradientSeparator ( ) }
            <AllProductLayout 
                title="All Products" 
                category={ Category } 
                product={ allProducts } 
                interval = { 17 } 
            />
        </>
    );

}

export default Home;
