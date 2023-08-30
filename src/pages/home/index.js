import React from "react";

// import all components
import ApparelLayout from "../../layouts/category-layout";
import HomewareLayout from "../../layouts/category-layout";
import AccessoriesLayout from "../../layouts/category-layout";
import DrinkwareLayout from "../../layouts/category-layout";
import PopularProductLayout from "../../layouts/special-layout";
import NewProductLayout from "../../layouts/special-layout";
import AllProductLayout from "../../layouts/special-layout";

// import all modules
import {
    allProducts,
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

// import all styles


function Home () {

    return (
        <>
            <ApparelLayout 
                title="Apparels" 
                subcategory={ filterSubCategoryByApparel } 
                product={ filterProductByApparel } 
                interval = { 5 } 
            />
            <HomewareLayout 
                title="Home & Decor" 
                subcategory={ filterSubCategoryByHomeware } 
                product={ filterProductByHomeware } 
                interval = { 5 } 
            />
            <AccessoriesLayout 
                title="Accessories" 
                subcategory={ filterSubCategoryByAccessories } 
                product={ filterProductByAccessories } 
                interval = { 5 } 
            />
            <DrinkwareLayout 
                title="Drinkware" 
                subcategory={ filterSubCategoryByDrinkware } 
                product={ filterProductByDrinkware } 
                interval = { 5 } 
            />
            <PopularProductLayout 
                title="Most Visited Products" 
                category={ Category } 
                product={ filterProductByMostVisitedItem } 
                interval = { 5 } 
            />
            <NewProductLayout 
                title="New Products" 
                category={ Category } 
                product={ filterProductByNewItem } 
                interval = { 5 } 
            />
            <AllProductLayout 
                title="All Products" 
                category={ Category } 
                product={ allProducts } 
                interval = { 5 } 
            />
        </>
    );

}

export default Home;
