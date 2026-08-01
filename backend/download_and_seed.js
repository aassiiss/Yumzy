const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

const foodModel = require('./models/food_schema');
const dbUrl = process.env.Database_URL || 'mongodb+srv://aashishsah2244_db_user:tGmwhg1JjrfuoMui@cluster0.2segasb.mongodb.net/?appName=Cluster0';

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Helper to download image
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(uploadsDir, filename);
    const file = fs.createWriteStream(filePath);
    https.get(url, { headers: { 'User-Agent': 'YumzyApp/1.0' } }, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
};

const menuItems = [
  // --- DESSERTS ---
  {
    name: "Rasmalai",
    description: "Soft cottage cheese patties immersed in thickened, sweetened saffron milk.",
    price: 120,
    category: "Desserts",
    filename: "rasmalai.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Rasmalai_in_bowl.jpg/800px-Rasmalai_in_bowl.jpg"
  },
  {
    name: "Rosogolla",
    description: "Soft and spongy cottage cheese balls soaked in light sugar syrup.",
    price: 100,
    category: "Desserts",
    filename: "rosogolla.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Rasgulla_-_Indian_Sweet.jpg/800px-Rasgulla_-_Indian_Sweet.jpg"
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center.",
    price: 160,
    category: "Cake",
    filename: "lava_cake.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chocolate_lava_cake.jpg/800px-Chocolate_lava_cake.jpg"
  },

  // --- BIRIYANI ---
  {
    name: "Hyderabadi Dum Biryani",
    description: "Authentic slow-cooked chicken biryani with aromatic saffron and whole spices.",
    price: 320,
    category: "Biriyani",
    filename: "biryani.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicken_Biryani_in_Chennai.jpg/800px-Chicken_Biryani_in_Chennai.jpg"
  },
  {
    name: "Lucknowi Mutton Biryani",
    description: "Tender mutton pieces in rich fragrant basmati rice cooked Awadhi style.",
    price: 450,
    category: "Biriyani",
    filename: "mutton_biryani.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mutton_Biryani_served_with_raita.jpg/800px-Mutton_Biryani_served_with_raita.jpg"
  },

  // --- STREET FOOD & BREADS ---
  {
    name: "Mumbai Vada Pav",
    description: "Spicy potato dumpling deep-fried and served in a soft bun with garlic chutney.",
    price: 45,
    category: "Vegetarian Delights",
    filename: "vadapav.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Vada_Pav_at_a_Mumbai_street.jpg/800px-Vada_Pav_at_a_Mumbai_street.jpg"
  },
  {
    name: "Pav Bhaji",
    description: "Spicy mashed vegetable curry served with soft buttered buns.",
    price: 150,
    category: "Vegetarian Delights",
    filename: "pavbhaji.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pav_Bhaji_on_the_streets_of_Mumbai.jpg/800px-Pav_Bhaji_on_the_streets_of_Mumbai.jpg"
  },
  {
    name: "Garlic Naan",
    description: "Soft Indian flatbread topped with minced garlic and fresh cilantro.",
    price: 60,
    category: "Breads",
    filename: "garlicnaan.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Garlic_Naan.jpg/800px-Garlic_Naan.jpg"
  },

  // --- CURRIES & CHICKEN ---
  {
    name: "Butter Chicken",
    description: "Charcoal-roasted chicken in a sweet and savory tomato butter sauce.",
    price: 340,
    category: "Chicken Dishes",
    filename: "butterchicken.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/800px-Chicken_makhani.jpg"
  },
  {
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes simmered in a rich, creamy tomato and cashew curry.",
    price: 280,
    category: "Paneer",
    filename: "paneerbutter.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Paneer_Butter_Masala_Recipe.jpg/800px-Paneer_Butter_Masala_Recipe.jpg"
  },
  {
    name: "Dal Makhani",
    description: "Black lentils cooked overnight with butter and cream for a velvety texture.",
    price: 220,
    category: "Vegetarian Delights",
    filename: "dalmakhani.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dal_Makhani.jpg/800px-Dal_Makhani.jpg"
  },
  {
    name: "Tandoori Chicken",
    description: "Half chicken marinated in yogurt and spices, roasted in a traditional clay oven.",
    price: 320,
    category: "Chicken Dishes",
    filename: "tandoori.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_in_a_plate.jpg/800px-Tandoori_chicken_in_a_plate.jpg"
  },

  // --- SOUTH INDIAN ---
  {
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato curry, served with sambar and chutneys.",
    price: 140,
    category: "Vegetarian Delights",
    filename: "masaladosa.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dosa_with_chutney_and_sambar.jpg/800px-Dosa_with_chutney_and_sambar.jpg"
  },
  {
    name: "Idli Sambar",
    description: "Steamed rice and lentil cakes served with hot lentil soup and coconut chutney.",
    price: 100,
    category: "Vegetarian Delights",
    filename: "idlisambar.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Idli_Sambar.jpg/800px-Idli_Sambar.jpg"
  },

  // --- INDO-CHINESE ---
  {
    name: "Chilli Chicken",
    description: "Crispy chicken tossed in spicy soy sauce with green chilies and bell peppers.",
    price: 280,
    category: "Chineese",
    filename: "chillichicken.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Chilli_Chicken_Dry.jpg/800px-Chilli_Chicken_Dry.jpg"
  },
  {
    name: "Chicken Fried Rice",
    description: "Wok-tossed rice with shredded chicken, egg, and finely chopped veggies.",
    price: 240,
    category: "Chineese",
    filename: "friedrice.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chicken_Fried_Rice.jpg/800px-Chicken_Fried_Rice.jpg"
  },

  // --- PIZZA / BURGER ---
  {
    name: "Farmhouse Pizza",
    description: "Loaded with fresh tomatoes, capsicum, onions, and mushrooms on a cheese base.",
    price: 350,
    category: "Vegetarian Delights",
    filename: "pizza.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
  },
  {
    name: "Zinger Burger",
    description: "Crispy fried chicken breast with spicy mayo and fresh lettuce in a sesame bun.",
    price: 180,
    category: "Non-Vegetarian Specialties",
    filename: "burger.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/800px-Hamburger_%28black_bg%29.jpg"
  },

  // --- DRINKS ---
  {
    name: "Mango Lassi",
    description: "Thick, sweet yogurt drink blended with fresh Alphonso mango pulp.",
    price: 110,
    category: "Drinks",
    filename: "mangolassi.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mango_lassi.jpg/800px-Mango_lassi.jpg"
  },
  {
    name: "Virgin Mojito",
    description: "Refreshing blend of fresh mint leaves, lime, and sparkling water.",
    price: 130,
    category: "Drinks",
    filename: "mojito.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mojito_made_with_rum%2C_lime%2C_sugar%2C_mint%2C_club_soda%2C_served_in_a_tall_glass_-_garnished_with_a_mint_sprig_and_a_lime_slice.jpg/800px-Mojito.jpg"
  }
];

const run = async () => {
  try {
    console.log('Downloading images to local disk...');
    for (const item of menuItems) {
      console.log(`Downloading ${item.filename}...`);
      await downloadImage(item.url, item.filename);
    }
    
    console.log('Connecting to database...');
    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB.');

    console.log('Clearing existing foods...');
    await foodModel.deleteMany({});
    
    console.log('Inserting local food items...');
    const seedData = menuItems.map(item => ({
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      image: item.filename
    }));
    await foodModel.insertMany(seedData);
    
    console.log('Database seeded and images downloaded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

run();
