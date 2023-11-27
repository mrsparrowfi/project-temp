
const product = [

/*
// Sample Apparel
    {
        pID: 1,
        dID: 2,
        itemID: "D002-P001",
        maxOffer: 10,
        isNew: ,
        isMostVisited: ,
        priceNew: "",
        productTitle: "",
        category: "Apparel",
        subCategory: "",
        categoryTitle: " | ",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "",
        imageUrl: "",
        productUrl: ""
    },
*/

    {
        pID: 1,
        dID: 2,
        itemID: "D002-P001",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "44.99",
        productTitle: "Sweatshirt",
        category: "Apparel",
        subCategory: "Sweatshirts",
        categoryTitle: "Men | Sweatshirt",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Classic Crewneck Swe...", /* max 23 characters */
        imageUrl: "https://vangogh.teespring.com/v3/image/TkRiNPZojISmb4ozdUV3I4eAQLA/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-cause-smoking?product=378"
    },

    {
        pID: 2,
        dID: 2,
        itemID: "D002-P002",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "39.99",
        productTitle: "V-Neck Tee",
        category: "Apparel",
        subCategory: "T-shirts",
        categoryTitle: "Men | V-Neck",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Premium V-Neck Tee",
        imageUrl: "https://vangogh.teespring.com/v3/image/Zp4Lk72o15i5qd0nzQesWWaegcA/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-cause-smoking?product=753"
    },

    {
        pID: 3,
        dID: 2,
        itemID: "D002-P003",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "42.49",
        productTitle: "Unisex T-shirt",
        category: "Apparel",
        subCategory: "T-shirts",
        categoryTitle: "Unisex | T-shirt",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Eco Unisex Tee",
        imageUrl: "https://vangogh.teespring.com/v3/image/pAnIFM1X5_Ahv6ZwrGB0CEHg7pU/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-cause-smoking?product=937"
    },

    {
        pID: 4,
        dID: 2,
        itemID: "D002-P004",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "37.49",
        productTitle: "V-Neck Tee",
        category: "Apparel",
        subCategory: "T-shirts",
        categoryTitle: "Women | V-Neck",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Women's Premium V-...",
        imageUrl: "https://vangogh.teespring.com/v3/image/juxrqU3rMdJOvnAGC3ASUl4UCxs/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-cause-smoking?product=757"
    },

    {
        pID: 5,
        dID: 2,
        itemID: "D002-P005",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "42.66",
        productTitle: "Crop Hoodie",
        category: "Apparel",
        subCategory: "Hoodies",
        categoryTitle: "Women | Hoodie",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Women's Crop Hoodie",
        imageUrl: "https://vangogh.teespring.com/v3/image/vBgLxMikLYEDSlrWL4fM0JOcitg/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-cause-smoking?product=1608"
    },

    {
        pID: 6,
        dID: 2,
        itemID: "D002-P006",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "37.49",
        productTitle: "Comfort Tee",
        category: "Apparel",
        subCategory: "T-shirts",
        categoryTitle: "Men | Comfort Tee",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Comfort Tee",
        imageUrl: "https://vangogh.teespring.com/v3/image/HNu5SCz5bDRu3cOuR8Dz9eTH3Gc/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-cause-smoking?product=373"
    },

/*
// Sample Homeware
    {
        pID: 276,
        dID: 2,
        itemID: "D002-P276",
        maxOffer: 10,
        isNew: ,
        isMostVisited: ,
        priceNew: "",
        productTitle: "",
        category: "Homeware",
        subCategory: "",
        categoryTitle: " | ",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "",
        imageUrl: "",
        productUrl: ""
    },
*/

    {
        pID: 276,
        dID: 2,
        itemID: "D002-P276",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "29.99",
        productTitle: "Indoor Pillow",
        category: "Homeware",
        subCategory: "Pillows",
        categoryTitle: "Black | Pillow",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Classic Indoor Pillow",
        imageUrl: "https://vangogh.teespring.com/v3/image/SDbrjOtstbnu_-ngaZ3tCQZEbtQ/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-causes-smoking?product=650"
    },

/*
// Sample Accessories
    {
        pID: 551,
        dID: 2,
        itemID: "D002-P551",
        maxOffer: 10,
        isNew: ,
        isMostVisited: ,
        priceNew: "",
        productTitle: "",
        category: "Accessories",
        subCategory: "",
        categoryTitle: " | ",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "",
        imageUrl: "",
        productUrl: ""
    },
*/

    {
        pID: 551,
        dID: 2,
        itemID: "D002-P551",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "32.49",
        productTitle: "Classic Tote",
        category: "Accessories",
        subCategory: "Bags",
        categoryTitle: "Black | Classic Tote",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Classic Tote Bag",
        imageUrl: "https://vangogh.teespring.com/v3/image/_sHNMu0zgk4LXOQ3_gPe56HYXcw/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-causes-smoking?product=2115"
    },

/*
// Sample Drinkware
    {
        pID: 826,
        dID: 2,
        itemID: "D002-P826",
        maxOffer: 10,
        isNew: ,
        isMostVisited: ,
        priceNew: "",
        productTitle: "",
        category: "Drinkware",
        subCategory: "",
        categoryTitle: " | ",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "",
        imageUrl: "",
        productUrl: ""
    },
*/

    {
        pID: 826,
        dID: 2,
        itemID: "D002-P826",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "24.98",
        productTitle: "Black Mug",
        category: "Drinkware",
        subCategory: "Mugs",
        categoryTitle: "Black | Mug",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Classic Black Mug",
        imageUrl: "https://vangogh.teespring.com/v3/image/0ZOCLaHL6Mhb2T0iTwt8LTQeuQY/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-causes-smoking?product=1695"
    },

    {
        pID: 827,
        dID: 2,
        itemID: "D002-P827",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "24.98",
        productTitle: "Black Mug",
        category: "Drinkware",
        subCategory: "Mugs",
        categoryTitle: "Black | Mug",
        designTitle: "Cancer causes smoking",
        designShade: "Black",
        productDescription: "Classic Black Mug",
        imageUrl: "https://vangogh.teespring.com/v3/image/0ZOCLaHL6Mhb2T0iTwt8LTQeuQY/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/cancer-causes-smoking?product=1695"
    },

/*
// Sample Apparel
    {
        pID: 1,
        dID: 1,
        itemID: "D001-P001",
        maxOffer: 10,
        isNew: ,
        isMostVisited: ,
        priceNew: "",
        productTitle: "",
        category: "Apparel",
        subCategory: "",
        categoryTitle: " | ",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "",
        imageUrl: "",
        productUrl: ""
    },
*/

    {
        pID: 1,
        dID: 1,
        itemID: "D001-P001",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "32.49",
        productTitle: "Tank Top",
        category: "Apparel",
        subCategory: "Tank Tops",
        categoryTitle: "Innerwear | Tank Top",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Classic Tank Top",
        imageUrl: "https://vangogh.teespring.com/v3/image/rM4BcbWDW814OdyiC6YRSQcy7eM/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/yellow-jacket-legging-tanktop?product=408"
    },

    {
        pID: 2,
        dID: 1,
        itemID: "D001-P002",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "32.49",
        productTitle: "Flowy Tank",
        category: "Apparel",
        subCategory: "Tank Tops",
        categoryTitle: "Innerwear | Tank Top",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Women's Flowy Tank Top",
        imageUrl: "https://vangogh.teespring.com/v3/image/rnvtjHm9rz9AhmgAF6uURJZ2Vb0/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/yellow-jacket-legging-tanktop?product=536"
    },

    {
        pID: 3,
        dID: 1,
        itemID: "D001-P003",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "34.99",
        productTitle: "Tank Top",
        category: "Apparel",
        subCategory: "Tank Tops",
        categoryTitle: "Innerwear | Tank Top",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Premium Tank Top",
        imageUrl: "https://vangogh.teespring.com/v3/image/S82BML7PsR0pRxK51dm588vwrTo/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/yellow-jacket-legging-tanktop?product=755"
    },

    {
        pID: 4,
        dID: 1,
        itemID: "D001-P004",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "43.68",
        productTitle: "Team Jersey",
        category: "Apparel",
        subCategory: "Jersey",
        categoryTitle: "Unisex | Jersey",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Team Jersey",
        imageUrl: "https://vangogh.teespring.com/v3/image/ShwmbdS802z8WwAkvRa-C6_NjFQ/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/yellow-jacket-legging-tanktop?product=1584&variation=104968&size=6035"
    },

    {
        pID: 5,
        dID: 1,
        itemID: "D001-P005",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "22.99",
        productTitle: "Racerback Tank",
        category: "Apparel",
        subCategory: "Tank Tops",
        categoryTitle: "Women | Racerback Tank",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Women's Racerback Tank",
        imageUrl: "https://vangogh.teespring.com/v3/image/zfy0LMe0MInftRt98XtlGgw46OE/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/yellow-jacket-legging-tanktop?product=1912"
    },

/*
// Sample Homeware
    {
        pID: 276,
        dID: 1,
        itemID: "D001-P276",
        maxOffer: 10,
        isNew: ,
        isMostVisited: ,
        priceNew: "",
        productTitle: "",
        category: "Homeware",
        subCategory: "",
        categoryTitle: " | ",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "",
        imageUrl: "",
        productUrl: ""
    },
*/

    {
        pID: 276,
        dID: 1,
        itemID: "D001-P276",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "27.49",
        productTitle: "Indoor Pillow",
        category: "Homeware",
        subCategory: "Pillows",
        categoryTitle: "Black | Pillow",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Classic Indoor Pillow",
        imageUrl: "https://vangogh.teespring.com/v3/image/XZmVr04p7jx3DMLIQ6FAxfvfL2g/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradise-my-foot-black-std?product=650&variation=102720&size=4194"
    },

    {
        pID: 277,
        dID: 1,
        itemID: "D001-P277",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "27.49",
        productTitle: "Indoor Pillow",
        category: "Homeware",
        subCategory: "Pillows",
        categoryTitle: "Black | Pillow",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Grid Indoor Pillow",
        imageUrl: "https://vangogh.teespring.com/v3/image/w454qiC0alH70566uVQ4gMZXRoY/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootblack-homedecor?product=650"
    },

    {
        pID: 278,
        dID: 1,
        itemID: "D001-P278",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "39.99",
        productTitle: "Wall Tapestry",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Tapestry",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Wall Tapestry | White",
        imageUrl: "https://vangogh.teespring.com/v3/image/GFyrIEFLvm5QbZvhjYtWMs6XbdM/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootwhite-homedecor?product=657"
    },

    {
        pID: 279,
        dID: 1,
        itemID: "D001-P279",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "25.20",
        productTitle: "Apron",
        category: "Homeware",
        subCategory: "Kitchen",
        categoryTitle: "Kitchen | Apron",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Apron Black Shade",
        imageUrl: "https://vangogh.teespring.com/v3/image/zHfShO4uxkBFazVQsXOdCco9rrE/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradise-my-foot-black-std?product=2126"
    },

    {
        pID: 280,
        dID: 1,
        itemID: "D001-P280",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "25.21",
        productTitle: "Desk Mat",
        category: "Homeware",
        subCategory: "Office",
        categoryTitle: "Office | Desk Mat",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Desk Mat Yellow Shade",
        imageUrl: "https://vangogh.teespring.com/v3/image/iomHRMYDeUCq6pRUYE92SZCGRmU/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/yellow-shade-gadgets-list?product=1959"
    },

    {
        pID: 281,
        dID: 1,
        itemID: "D001-P281",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "27.49",
        productTitle: "Indoor Pillow",
        category: "Homeware",
        subCategory: "Pillows",
        categoryTitle: "White | Pillow",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Classic Indoor Pillow",
        imageUrl: "https://vangogh.teespring.com/v3/image/b4Vz9cA2_9e-S2pUtUoNcCcRjwI/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradise-my-foot-white-std?product=650"
    },

    {
        pID: 282,
        dID: 1,
        itemID: "D001-P282",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "27.49",
        productTitle: "Indoor Pillow",
        category: "Homeware",
        subCategory: "Pillows",
        categoryTitle: "Yellow | Pillow",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Classic Indoor Pillow",
        imageUrl: "https://vangogh.teespring.com/v3/image/m3iI4CPUSzaaCy_sl5amjrZIpO4/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradise-my-foot-yellow-std?product=650"
    },

    {
        pID: 283,
        dID: 1,
        itemID: "D001-P283",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "27.49",
        productTitle: "Indoor Pillow",
        category: "Homeware",
        subCategory: "Pillows",
        categoryTitle: "White | Pillow",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Grid Indoor Pillow",
        imageUrl: "https://vangogh.teespring.com/v3/image/DEkirKdUU62iR6qZ-IDY8AxmmU4/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootwhite-homedecor?product=650"
    },

    {
        pID: 284,
        dID: 1,
        itemID: "D001-P284",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "27.49",
        productTitle: "Indoor Pillow",
        category: "Homeware",
        subCategory: "Pillows",
        categoryTitle: "Yellow | Pillow",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Grid Indoor Pillow",
        imageUrl: "https://vangogh.teespring.com/v3/image/-XRi5U_3-uKToCXu-Vi2hXG_cGQ/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootyellow-homedecor?product=650"
    },

    {
        pID: 285,
        dID: 1,
        itemID: "D001-P285",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "39.99",
        productTitle: "Beach Towel",
        category: "Homeware",
        subCategory: "Bath",
        categoryTitle: "Bath | Towel",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Beach Towel | White",
        imageUrl: "https://vangogh.teespring.com/v3/image/Rg3151VEYfyLL_asHEYQTm6oPgo/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootwhite-homedecor?product=651"
    },

    {
        pID: 286,
        dID: 1,
        itemID: "D001-P286",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "39.99",
        productTitle: "Beach Towel",
        category: "Homeware",
        subCategory: "Bath",
        categoryTitle: "Bath | Towel",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Beach Towel | Yellow",
        imageUrl: "https://vangogh.teespring.com/v3/image/y4V1ZHIv4h9oz0hU8hi_qNfpgz0/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootyellow-homedecor?product=651"
    },

    {
        pID: 287,
        dID: 1,
        itemID: "D001-P287",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "39.99",
        productTitle: "Beach Towel",
        category: "Homeware",
        subCategory: "Bath",
        categoryTitle: "Bath | Towel",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Beach Towel | White",
        imageUrl: "https://vangogh.teespring.com/v3/image/3YRYr6WAsoFddcRyaNDF3UKYyvQ/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootblack-homedecor?product=651"
    },

    {
        pID: 288,
        dID: 1,
        itemID: "D001-P288",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "64.99",
        productTitle: "Fleece Blanket",
        category: "Homeware",
        subCategory: "Bedding",
        categoryTitle: "Bedding | Blanket",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Fleece Blanket | White",
        imageUrl: "https://vangogh.teespring.com/v3/image/T4TZicUKmtFfw-s95cAowcp3Tbw/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootwhite-homedecor?product=726"
    },

    {
        pID: 289,
        dID: 1,
        itemID: "D001-P289",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "64.99",
        productTitle: "Fleece Blanket",
        category: "Homeware",
        subCategory: "Bedding",
        categoryTitle: "Bedding | Blanket",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Fleece Blanket | Yellow",
        imageUrl: "https://vangogh.teespring.com/v3/image/1dq_bIFdC-KTfR7EqTlqemd0jTE/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootyellow-homedecor?product=726"
    },

    {
        pID: 290,
        dID: 1,
        itemID: "D001-P290",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "64.99",
        productTitle: "Fleece Blanket",
        category: "Homeware",
        subCategory: "Bedding",
        categoryTitle: "Bedding | Blanket",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Fleece Blanket | White",
        imageUrl: "https://vangogh.teespring.com/v3/image/x-U7ZqL1XSpyR1UhMsHLKN5RnlI/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootblack-homedecor?product=726"
    },

    {
        pID: 291,
        dID: 1,
        itemID: "D001-P291",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "25.21",
        productTitle: "Desk Mat",
        category: "Homeware",
        subCategory: "Office",
        categoryTitle: "Office | Desk Mat",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Desk Mat White Shade",
        imageUrl: "https://vangogh.teespring.com/v3/image/rvB3cOEI7ouzpZ7mlnYbtOHHqVg/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/white-shade-gadgets-list?product=1959"
    },

    {
        pID: 292,
        dID: 1,
        itemID: "D001-P292",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "25.21",
        productTitle: "Desk Mat",
        category: "Homeware",
        subCategory: "Office",
        categoryTitle: "Office | Desk Mat",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Desk Mat Black Shade",
        imageUrl: "https://vangogh.teespring.com/v3/image/5o5FIHTjUH3mPVsn2bzen6E_q6E/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/black-shade-gadgets-list?product=1959"
    },

    {
        pID: 293,
        dID: 1,
        itemID: "D001-P293",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "39.99",
        productTitle: "Wall Tapestry",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Tapestry",
        designTitle: "Paradise my foot",
        designShade: "Yellow",
        productDescription: "Wall Tapestry | Yellow",
        imageUrl: "https://vangogh.teespring.com/v3/image/IL-osjOGVPcRGK2ud35xmyg1Xr8/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootyellow-homedecor?product=657"
    },

    {
        pID: 294,
        dID: 1,
        itemID: "D001-P294",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "39.99",
        productTitle: "Wall Tapestry",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Tapestry",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Wall Tapestry | Black",
        imageUrl: "https://vangogh.teespring.com/v3/image/tT5VQfQFPKMTUaRovotwlnhHo8g/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootblack-homedecor?product=657"
    },

    {
        pID: 295,
        dID: 1,
        itemID: "D001-P295",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "24.98",
        productTitle: "Poster-61x91cm",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Poster",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Poster-61x91cm | White",
        imageUrl: "https://vangogh.teespring.com/v3/image/l4eNPoLVWOX-T-Lzv0DmWFQA5k4/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootwhite-homedecor?product=653"
    },

    {
        pID: 296,
        dID: 1,
        itemID: "D001-P296",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "22.49",
        productTitle: "Poster-46x61cm",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Poster",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Poster-46x61cm | White",
        imageUrl: "https://vangogh.teespring.com/v3/image/iJOgNra2sXwN2HIy3_op4_wGuJc/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootwhite-homedecor?product=652"
    },

    {
        pID: 297,
        dID: 1,
        itemID: "D001-P297",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "20.84",
        productTitle: "Canvas Print",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Canvas",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Canvas Print | White",
        imageUrl: "https://vangogh.teespring.com/v3/image/bSCVg0yBF_k0-8em0xcRzWQUDK0/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootwhite-homedecor?product=583"
    },

    {
        pID: 298,
        dID: 1,
        itemID: "D001-P298",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "23.15",
        productTitle: "Metal Print",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Metal Print",
        designTitle: "Paradise my foot",
        designShade: "White",
        productDescription: "Metal Print | White",
        imageUrl: "https://vangogh.teespring.com/v3/image/6B00DRfsdz2RuCDlDch6cxhrB9Q/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootwhite-homedecor?product=2121"
    },

    {
        pID: 299,
        dID: 1,
        itemID: "D001-P299",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "24.98",
        productTitle: "Poster-61x91cm",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Poster",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Poster-61x91cm | Black",
        imageUrl: "https://vangogh.teespring.com/v3/image/kc8Fwq9RmXKUGLNT-nHGQMxG1UQ/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootblack-homedecor?product=653"
    },

    {
        pID: 300,
        dID: 1,
        itemID: "D001-P300",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "22.49",
        productTitle: "Poster-46x61cm",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Poster",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Poster-46x61cm | Black",
        imageUrl: "https://vangogh.teespring.com/v3/image/dGYHMhkuinB0t_ZtiBfR_Wj3kTQ/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootblack-homedecor?product=652"
    },

    {
        pID: 301,
        dID: 1,
        itemID: "D001-P301",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "20.84",
        productTitle: "Canvas Print",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Canvas",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Canvas Print | Black",
        imageUrl: "https://vangogh.teespring.com/v3/image/Hp_bGvJJ5ANFqpClBGR7R9xRcco/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootblack-homedecor?product=583"
    },

    {
        pID: 302,
        dID: 1,
        itemID: "D001-P302",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "23.15",
        productTitle: "Metal Print",
        category: "Homeware",
        subCategory: "Wall Art",
        categoryTitle: "Wall Art | Metal Print",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Metal Print | Black",
        imageUrl: "https://vangogh.teespring.com/v3/image/I4XLJuXXPo7-TE1ieI2f1X_q9FE/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootblack-homedecor?product=2121"
    },

/*
// Sample Accessories
    {
        pID: 551,
        dID: 1,
        itemID: "D001-P551",
        maxOffer: 10,
        isNew: ,
        isMostVisited: ,
        priceNew: "",
        productTitle: "",
        category: "Accessories",
        subCategory: "",
        categoryTitle: " | ",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "",
        imageUrl: "",
        productUrl: ""
    },
*/

    {
        pID: 551,
        dID: 1,
        itemID: "D001-P551",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "27.49",
        productTitle: "Trucker Hat",
        category: "Accessories",
        subCategory: "Hats",
        categoryTitle: "Black | Trucker",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "Trucker Hat Yellow S...",
        imageUrl: "https://vangogh.teespring.com/v3/image/K8x4KYcnGvCt4CrAPwZlSyNVxCE/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/yellow-shade-trucker-hat?product=2150"
    },

/*
// Sample Drinkware
    {
        pID: 826,
        dID: 1,
        itemID: "D001-P826",
        maxOffer: 10,
        isNew: ,
        isMostVisited: ,
        priceNew: "",
        productTitle: "",
        category: "Drinkware",
        subCategory: "",
        categoryTitle: " | ",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "",
        imageUrl: "",
        productUrl: ""
    },
*/

    {
        pID: 826,
        dID: 1,
        itemID: "D001-P826",
        maxOffer: 10,
        isNew: true,
        isMostVisited: false,
        priceNew: "22.91",
        productTitle: "Water Bottle",
        category: "Drinkware",
        subCategory: "Water Bottle",
        categoryTitle: "Black | Water Bottle",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "32oz Stainless Water B...",
        imageUrl: "https://vangogh.teespring.com/v3/image/VQOq-vE4UcvhBYYd85n6kalH8ds/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootyellowstationary?product=2101"
    },

    {
        pID: 827,
        dID: 1,
        itemID: "D001-P827",
        maxOffer: 10,
        isNew: false,
        isMostVisited: true,
        priceNew: "",
        productTitle: "",
        category: "",
        subCategory: "Water Bottle",
        categoryTitle: "Black | Water Bottle",
        designTitle: "Paradise my foot",
        designShade: "Black",
        productDescription: "32oz Stainless Water B...",
        imageUrl: "https://vangogh.teespring.com/v3/image/VQOq-vE4UcvhBYYd85n6kalH8ds/800/800.jpg",
        productUrl: "https://www.oriyostyles.com/listing/paradisemyfootyellowstationary?product=2101"
    },

];

export function Products () {
    return product;
}