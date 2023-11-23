
import { 
    navItems,
    SubCategory, 
    Products 
} from "../data/data";

const data = Products();
const navMenu = navItems;
const subcategory = SubCategory();

export const allProducts = data;

export const filterSubCategoryByDesign = 
    subcategory.filter((items) => (
        items.catTitle === 'Design'
    )
);
// flatMap() is not working here
export const filterSubCategoryByDesignTest = 
    navMenu.filter((item) => item.catTitle === 'Design')
    .flatMap((item) => item.submenu.map((subitem) => subitem.subcategoryTitle)
);
/*
export const filterSubCategoryByDesign = [].concat(
    ...navMenu
        .filter((item) => item.catTitle === 'Design')
        .map((item) => item.submenu.map((subitem) => subitem.subcategoryTitle)
    )
);
*/
export const filterSubCategoryByApparel = 
    subcategory.filter((items) => (
        items.catTitle === 'Apparel'
    )
);

export const filterSubCategoryByHomeware = 
    subcategory.filter((items) => (
        items.catTitle === 'Homeware'
    )
);

export const filterSubCategoryByAccessories = 
    subcategory.filter((items) => (
        items.catTitle === 'Accessories'
    )
);

export const filterSubCategoryByDrinkware = 
    subcategory.filter((items) => (
        items.catTitle === 'Drinkware'
    )
);

export const filterProductByApparel = 
    data.filter((items) => (
        items.category === 'Apparel'
    )
);

export const filterProductByHomeware = 
    data.filter((items) => (
        items.category === 'Homeware'
    )
);

export const filterProductByAccessories = 
    data.filter((items) => (
        items.category === 'Accessories'
    )
);

export const filterProductByDrinkware = 
    data.filter((items) => (
        items.category === 'Drinkware'
    )
);

export const filterProductByMostVisitedItem = 
    data.filter((items) => (
        items.isMostVisited === true
    )
);

export const filterProductByNewItem = 
    data.filter((items) => (
        items.isNew === true
    )
);

export const filterDataByTshirt = 
    data.filter((items) => (
        items.category === 'Apparel' && items.subCategory === 'T-shirts'
    )
);

export const filterDataBySweatshirt = 
    data.filter((items) => (
        items.category === 'Apparel' && items.subCategory === 'Sweatshirt'
    )
);

export const filterDataByHoodie = 
    data.filter((items) => (
        items.category === 'Apparel' && items.subCategory === 'Hoodies'
    )
);

export const filterDataByTankTop = 
    data.filter((items) => (
        items.category === 'Apparel' && items.subCategory === 'Tank Tops'
    )
);

export const filterDataBySleeveTee = 
    data.filter((items) => (
        items.category === 'Apparel' && items.subCategory === 'Sleeve Tee'
    )
);

export const filterDataByAthletic = 
    data.filter((items) => (
        items.category === 'Apparel' && items.subCategory === 'Athletics'
    )
);

export const filterDataByPillow = 
    data.filter((items) => (
        items.category === 'Homeware' && items.subCategory === 'Pillows'
    )
);

export const filterDataByWallArt = 
    data.filter((items) => (
        items.category === 'Homeware' && items.subCategory === 'Wall Art'
    )
);

export const filterDataByBath = 
    data.filter((items) => (
        items.category === 'Homeware' && items.subCategory === 'Bath'
    )
);

export const filterDataByBedding = 
    data.filter((items) => (
        items.category === 'Homeware' && items.subCategory === 'Bedding'
    )
);

export const filterDataByOffice = 
    data.filter((items) => (
        items.category === 'Homeware' && items.subCategory === 'Office'
    )
);

export const filterDataByFaceMask = 
    data.filter((items) => (
        items.category === 'Accessories' && items.subCategory === 'Face Masks'
    )
);

export const filterDataByHats = 
    data.filter((items) => (
        items.category === 'Accessories' && items.subCategory === 'Hats'
    )
);

export const filterDataByPhoneCase = 
    data.filter((items) => (
        items.category === 'Accessories' && items.subCategory === 'Phone Cases'
    )
);

export const filterDataBySticker = 
    data.filter((items) => (
        items.category === 'Accessories' && items.subCategory === 'Stickers'
    )
);

export const filterDataByBag = 
    data.filter((items) => (
        items.category === 'Accessories' && items.subCategory === 'Bags'
    )
);

export const filterDataByNeckGaiter = 
    data.filter((items) => (
        items.category === 'Accessories' && items.subCategory === 'Neck Gaiters'
    )
);

export const filterDataByStationery = 
    data.filter((items) => (
        items.category === 'Accessories' && items.subCategory === 'Stationery'
    )
);

export const filterDataByFannyPack = 
    data.filter((items) => (
        items.category === 'Accessories' && items.subCategory === 'Fanny Packs'
    )
);

export const filterDataBySock = 
    data.filter((items) => (
        items.category === 'Accessories' && items.subCategory === 'Socks'
    )
);

export const filterDataByMug = 
    data.filter((items) => (
        items.category === 'Drinkware' && items.subCategory === 'Mugs'
    )
);

export const filterDataByWaterBottle = 
    data.filter((items) => (
        items.category === 'Drinkware' && items.subCategory === 'Water Bottle'
    )
);

export const filterDataBySteelTumbler = 
    data.filter((items) => (
        items.category === 'Drinkware' && items.subCategory === 'Steel Tumbler'
    )
);

export const filterDataByPintGlass = 
    data.filter((items) => (
        items.category === 'Drinkware' && items.subCategory === 'Pint Glass'
    )
);
