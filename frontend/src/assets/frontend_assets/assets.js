import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'


import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import cross from './cross.png'

import biriyani from './Biriyani.jpg'
import chicken_menu from './Chicken_Menu.png'
import starters_menu from './Starters.png'
import paneer_menu from './Paneer_Menu.png'
import bread_menu from './Breads.png'
import drinks_menu from './Drinks.png'
import BackgroundImage from './restaurantBI.jpg'
import headerBI from './headerBI.jpg'
import aashish from './aashish.png'
import nimish from './nimish.png'
import shreeji from './shreeji.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    cross,
    BackgroundImage,
    headerBI,
    aashish,
    nimish,
    shreeji
}

export const menu_list = [
    {
        menu_name: "Salads",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Desserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwiches",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Vegetarian Delights", 
        menu_image: menu_6
    },
    {
        menu_name: "Non-Vegetarian Specialties",
        menu_image: menu_7
    },
    {
        menu_name: "Chineese",
        menu_image: menu_8
    },
    {
        menu_name: "Biriyani",
        menu_image: biriyani
    },
    {
        menu_name: "Chicken Dishes",
        menu_image: chicken_menu
    },
    
    {
        menu_name: "Starters",
        menu_image: starters_menu
    },
    {
        menu_name: "Drinks",
        menu_image: drinks_menu
    },
    {
        menu_name: "Breads",
        menu_image: bread_menu
    },
    {
        menu_name: "Paneer",
        menu_image: paneer_menu
    }


    
]

export const food_list = [
    {
        _id: "1",
        name: "Mediterranean Greek Salad",
        image: food_1,
        price: 350,
        description: "Crisp greens, kalamata olives, and feta cheese drizzled with our signature olive oil vinaigrette.",
        category: "Salads"
    },
    {
        _id: "2",
        name: "Truffle Veg Salad",
        image: food_2,
        price: 450,
        description: "Fresh organic vegetables topped with a light truffle glaze and crushed walnuts.",
        category: "Salads"
    },
    {
        _id: "3",
        name: "Artisan Clover Salad",
        image: food_3,
        price: 550,
        description: "Crisp radicchio leaves tossed with premium blue cheese and candied walnuts.",
        category: "Salads"
    },
    {
        _id: "4",
        name: "Grilled Chicken Salad",
        image: food_4,
        price: 650,
        description: "Grilled chicken breast, halloumi cheese, and fresh tomatoes over a bed of crisp greens.",
        category: "Salads"
    },
    {
        _id: "5",
        name: "Baked Lasagna Rolls",
        image: food_5,
        price: 250,
        description: "Decadent lasagna sheets rolled with ricotta and spinach, baked in rich marinara.",
        category: "Rolls"
    },
    {
        _id: "6",
        name: "Peri Peri Chicken Rolls",
        image: food_6,
        price: 380,
        description: "Spicy peri-peri chicken chunks wrapped in a soft, freshly baked flatbread.",
        category: "Rolls"
    },
    {
        _id: "7",
        name: "Classic Chicken Rolls",
        image: food_7,
        price: 150,
        description: "Tender shredded chicken and fresh veggies tightly rolled and grilled to perfection.",
        category: "Rolls"
    },
    {
        _id: "8",
        name: "Spiced Veg Rolls",
        image: food_8,
        price: 320,
        description: "A delicious blend of spiced vegetables wrapped in a crispy, golden-brown crust.",
        category: "Rolls"
    },
    {
        _id: "9",
        name: "Artisan Ripple Ice Cream",
        image: food_9,
        price: 420,
        description: "Creamy vanilla base with rich chocolate and caramel ripples.",
        category: "Desserts"
    },
    {
        _id: "10",
        name: "Fresh Fruit Ice Cream",
        image: food_10,
        price: 180,
        description: "Refreshing blend of seasonal fruits churned into a rich, creamy gelato.",
        category: "Desserts"
    },
    {
        _id: "11",
        name: "Gourmet Jar Ice Cream",
        image: food_11,
        price: 280,
        description: "Decadent layered ice cream served in a reusable artisanal glass jar.",
        category: "Desserts"
    },
    {
        _id: "12",
        name: "Classic Vanilla Ice Cream",
        image: food_12,
        price: 220,
        description: "The timeless classic, made with authentic Madagascar vanilla beans.",
        category: "Desserts"
    }
];
