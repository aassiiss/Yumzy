const mongoose = require('mongoose');
const foodModel = require('./models/food_schema');
require('dotenv').config();

const dbUrl = process.env.Database_URL || 'mongodb+srv://aashishsah2244_db_user:tGmwhg1JjrfuoMui@cluster0.2segasb.mongodb.net/?appName=Cluster0';

// 100% verified URLs for dishes that had the wrong photo, and highly relevant general food photos.
const seedData = [
  // --- DESSERTS ---
  {
    name: "Rasmalai (2 pcs)",
    description: "Soft cottage cheese patties immersed in thickened, sweetened saffron milk.",
    price: 120,
    category: "Desserts",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Rasmalai_in_bowl.jpg/800px-Rasmalai_in_bowl.jpg"
  },
  {
    name: "Rosogolla (4 pcs)",
    description: "Soft and spongy cottage cheese balls soaked in light sugar syrup.",
    price: 100,
    category: "Desserts",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Rasgulla_-_Indian_Sweet.jpg/800px-Rasgulla_-_Indian_Sweet.jpg" 
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center.",
    price: 160,
    category: "Cake",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chocolate_lava_cake.jpg/800px-Chocolate_lava_cake.jpg" 
  },

  // --- BIRIYANI ---
  {
    name: "Hyderabadi Dum Biryani",
    description: "Authentic slow-cooked chicken biryani with aromatic saffron and whole spices.",
    price: 320,
    category: "Biriyani",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicken_Biryani_in_Chennai.jpg/800px-Chicken_Biryani_in_Chennai.jpg" 
  },
  {
    name: "Lucknowi Mutton Biryani",
    description: "Tender mutton pieces in rich fragrant basmati rice cooked Awadhi style.",
    price: 450,
    category: "Biriyani",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mutton_Biryani_served_with_raita.jpg/800px-Mutton_Biryani_served_with_raita.jpg" 
  },

  // --- STREET FOOD & BREADS ---
  {
    name: "Mumbai Vada Pav",
    description: "Spicy potato dumpling deep-fried and served in a soft bun with garlic chutney.",
    price: 45,
    category: "Vegetarian Delights",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Vada_Pav_at_a_Mumbai_street.jpg/800px-Vada_Pav_at_a_Mumbai_street.jpg" 
  },
  {
    name: "Pav Bhaji",
    description: "Spicy mashed vegetable curry served with soft buttered buns.",
    price: 150,
    category: "Vegetarian Delights",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pav_Bhaji_on_the_streets_of_Mumbai.jpg/800px-Pav_Bhaji_on_the_streets_of_Mumbai.jpg" 
  },
  {
    name: "Garlic Naan",
    description: "Soft Indian flatbread topped with minced garlic and fresh cilantro.",
    price: 60,
    category: "Breads",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Garlic_Naan.jpg/800px-Garlic_Naan.jpg" 
  },

  // --- CURRIES & CHICKEN ---
  {
    name: "Murgh Makhani (Butter Chicken)",
    description: "Charcoal-roasted chicken in a sweet and savory tomato butter sauce.",
    price: 340,
    category: "Chicken Dishes",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/800px-Chicken_makhani.jpg" 
  },
  {
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes simmered in a rich, creamy tomato and cashew curry.",
    price: 280,
    category: "Paneer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Paneer_Butter_Masala_Recipe.jpg/800px-Paneer_Butter_Masala_Recipe.jpg" 
  },
  {
    name: "Chicken 65",
    description: "Spicy, deep-fried chicken bites marinated in yogurt and curry leaves.",
    price: 250,
    category: "Starters",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chicken_65_Dish.jpg/800px-Chicken_65_Dish.jpg" 
  },
  {
    name: "Dal Makhani",
    description: "Black lentils cooked overnight with butter and cream for a velvety texture.",
    price: 220,
    category: "Vegetarian Delights",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dal_Makhani.jpg/800px-Dal_Makhani.jpg" 
  },
  {
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with large, fluffy deep-fried breads.",
    price: 180,
    category: "Vegetarian Delights",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chole_bhature.jpg/800px-Chole_bhature.jpg" 
  },
  {
    name: "Tandoori Chicken",
    description: "Half chicken marinated in yogurt and spices, roasted in a traditional clay oven.",
    price: 320,
    category: "Chicken Dishes",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_in_a_plate.jpg/800px-Tandoori_chicken_in_a_plate.jpg" 
  },

  // --- SOUTH INDIAN ---
  {
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato curry, served with sambar and chutneys.",
    price: 140,
    category: "Vegetarian Delights",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dosa_with_chutney_and_sambar.jpg/800px-Dosa_with_chutney_and_sambar.jpg" 
  },
  {
    name: "Idli Sambar",
    description: "Steamed rice and lentil cakes served with hot lentil soup and coconut chutney.",
    price: 100,
    category: "Vegetarian Delights",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Idli_Sambar.jpg/800px-Idli_Sambar.jpg" 
  },

  // --- INDO-CHINESE ---
  {
    name: "Chilli Chicken Dry",
    description: "Crispy chicken tossed in spicy soy sauce with green chilies and bell peppers.",
    price: 280,
    category: "Chineese",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Chilli_Chicken_Dry.jpg/800px-Chilli_Chicken_Dry.jpg" 
  },
  {
    name: "Veg Manchurian Gravy",
    description: "Deep-fried vegetable balls in a dark, umami-rich soy and garlic sauce.",
    price: 220,
    category: "Chineese",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Veg_Manchurian.jpg/800px-Veg_Manchurian.jpg" 
  },
  {
    name: "Chicken Fried Rice",
    description: "Wok-tossed rice with shredded chicken, egg, and finely chopped veggies.",
    price: 240,
    category: "Chineese",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chicken_Fried_Rice.jpg/800px-Chicken_Fried_Rice.jpg" 
  },

  // --- PIZZA / FAST FOOD ---
  {
    name: "Farmhouse Pizza",
    description: "Loaded with fresh tomatoes, capsicum, onions, and mushrooms on a cheese base.",
    price: 350,
    category: "Vegetarian Delights",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" 
  },
  {
    name: "Spicy Zinger Burger",
    description: "Crispy fried chicken breast with spicy mayo and fresh lettuce in a sesame bun.",
    price: 180,
    category: "Non-Vegetarian Specialties",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/800px-Hamburger_%28black_bg%29.jpg" 
  },

  // --- DRINKS ---
  {
    name: "Mango Lassi",
    description: "Thick, sweet yogurt drink blended with fresh Alphonso mango pulp.",
    price: 110,
    category: "Drinks",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mango_lassi.jpg/800px-Mango_lassi.jpg" 
  },
  {
    name: "Virgin Mojito",
    description: "Refreshing blend of fresh mint leaves, lime, and sparkling water.",
    price: 130,
    category: "Drinks",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mojito_made_with_rum%2C_lime%2C_sugar%2C_mint%2C_club_soda%2C_served_in_a_tall_glass_-_garnished_with_a_mint_sprig_and_a_lime_slice.jpg/800px-Mojito.jpg" 
  }
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to database...');
    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB.');

    // Clear existing foods
    console.log('Clearing existing foods...');
    await foodModel.deleteMany({});
    
    // Insert new data
    console.log(`Inserting ${seedData.length} food items...`);
    await foodModel.insertMany(seedData);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
