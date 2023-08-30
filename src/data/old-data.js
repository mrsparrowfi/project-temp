
const data = [
    {
        id: 1,
        title: "App-1",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "T-shirt",
        categoryTitle: "Men | Apparel",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 2,
        title: "App-2",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "Hoodies",
        categoryTitle: "Women | Apparels",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: true,
        description: "Leggings",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 3,
        title: "App-3",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "Sleeve Tee",
        categoryTitle: "Kids | Apparels",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 4,
        title: "App-4",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "Sweatshirt",
        categoryTitle: "Towel | Homeware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 5,
        title: "App-5",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "V-Neck Tee",
        categoryTitle: "Curtain | Decor",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 6,
        title: "App-6",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "Sleeve Tee",
        categoryTitle: "Curtain | Decor",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 7,
        title: "App-7",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "Sweatshirt",
        categoryTitle: "Curtain | Decor",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 8,
        title: "App-8",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "Hoodies",
        categoryTitle: "Curtain | Decor",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 9,
        title: "App-9",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "Hoodies",
        categoryTitle: "Curtain | Decor",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 10,
        title: "App-10",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "Hoodies",
        categoryTitle: "Curtain | Decor",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 11,
        title: "Spr-1",
        maxOffer: 10,
        category: "Sports",
        subCategory: "Hoodies",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 12,
        title: "Spr-2",
        maxOffer: 10,
        category: "Sports",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 13,
        title: "Spr-3",
        maxOffer: 10,
        category: "Sports",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 14,
        title: "Spr-4",
        maxOffer: 10,
        category: "Sports",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 15,
        title: "Spr-5",
        maxOffer: 10,
        category: "Sports",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 16,
        title: "Spr-6",
        maxOffer: 10,
        category: "Sports",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 17,
        title: "Spr-7",
        maxOffer: 10,
        category: "Sports",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 18,
        title: "Spr-8",
        maxOffer: 10,
        category: "Sports",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 19,
        title: "Spr-9",
        maxOffer: 10,
        category: "Sports",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 20,
        title: "Spr-10",
        maxOffer: 10,
        category: "Sports",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 21,
        title: "Home-1",
        maxOffer: 10,
        category: "Homeware",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 22,
        title: "Home-2",
        maxOffer: 10,
        category: "Homeware",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 23,
        title: "Home-3",
        maxOffer: 10,
        category: "Homeware",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 24,
        title: "Home-4",
        maxOffer: 10,
        category: "Homeware",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 25,
        title: "Home-5",
        maxOffer: 10,
        category: "Homeware",
        subCategory: "T-shirt",
        categoryTitle: "Mat | Homeware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 31,
        title: "Access-1",
        maxOffer: 10,
        category: "Accessories",
        subCategory: "T-shirt",
        categoryTitle: "Electronics",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 32,
        title: "Access-2",
        maxOffer: 10,
        category: "Accessories",
        subCategory: "T-shirt",
        categoryTitle: "Electronics",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 33,
        title: "Access-3",
        maxOffer: 10,
        category: "Accessories",
        subCategory: "T-shirt",
        categoryTitle: "Electronics",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 34,
        title: "Access-4",
        maxOffer: 10,
        category: "Accessories",
        subCategory: "T-shirt",
        categoryTitle: "Electronics",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 35,
        title: "Access-5",
        maxOffer: 10,
        category: "Accessories",
        subCategory: "T-shirt",
        categoryTitle: "Electronics",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 36,
        title: "Access-6",
        maxOffer: 10,
        category: "Accessories",
        subCategory: "T-shirt",
        categoryTitle: "Electronics",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 37,
        title: "Access-7",
        maxOffer: 10,
        category: "Accessories",
        subCategory: "T-shirt",
        categoryTitle: "Electronics",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 41,
        title: "Drink-1",
        maxOffer: 10,
        category: "Drinkware",
        subCategory: "T-shirt",
        categoryTitle: "Mug | Black",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 42,
        title: "Drink-2",
        maxOffer: 10,
        category: "Drinkware",
        subCategory: "T-shirt",
        categoryTitle: "Mug | Black",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 43,
        title: "Drink-3",
        maxOffer: 10,
        category: "Drinkware",
        subCategory: "T-shirt",
        categoryTitle: "Mug | Black",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 44,
        title: "Drink-4",
        maxOffer: 10,
        category: "Drinkware",
        subCategory: "T-shirt",
        categoryTitle: "Mug | Black",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 51,
        title: "Electro-1",
        maxOffer: 10,
        category: "Electronics",
        subCategory: "T-shirt",
        categoryTitle: "Wine Tumbler | Drinkware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 52,
        title: "Electro-2",
        maxOffer: 10,
        category: "Electronics",
        subCategory: "T-shirt",
        categoryTitle: "Wine Tumbler | Drinkware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 53,
        title: "Electro-3",
        maxOffer: 10,
        category: "Electronics",
        subCategory: "T-shirt",
        categoryTitle: "Wine Tumbler | Drinkware",
        priceNew: "79.99",
        isNew: true,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 54,
        title: "Electro-4",
        maxOffer: 10,
        category: "Electronics",
        subCategory: "T-shirt",
        categoryTitle: "Wine Tumbler | Drinkware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 55,
        title: "Electro-5",
        maxOffer: 10,
        category: "Electronics",
        subCategory: "T-shirt",
        categoryTitle: "Wine Tumbler | Drinkware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: false,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 56,
        title: "Electro-6",
        maxOffer: 10,
        category: "Electronics",
        subCategory: "T-shirt",
        categoryTitle: "Wine Tumbler | Drinkware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 57,
        title: "Electro-7",
        maxOffer: 10,
        category: "Electronics",
        subCategory: "T-shirt",
        categoryTitle: "Wine Tumbler | Drinkware",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 101,
        title: "App-101",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "T-shirt",
        categoryTitle: "Curtain | Decor",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 102,
        title: "App-102",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "T-shirt",
        categoryTitle: "Curtain | Decor",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    },

    {
        id: 103,
        title: "App-103",
        maxOffer: 10,
        category: "Apparel",
        subCategory: "T-shirt",
        categoryTitle: "Curtain | Decor",
        priceNew: "79.99",
        isNew: false,
        isMostVisited: true,
        description: "Long Sleeve Tee Shirts",
        imageUrl: "https://vangogh.teespring.com/v3/image/KSyDvq7AYbRCFeOCX5ltX7gyzDY/800/800.jpg"
    }

];

export function Products () {
    return data;
}
