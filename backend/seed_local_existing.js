const mongoose = require('mongoose');
const foodModel = require('./models/food_schema');
require('dotenv').config();

const dbUrl = process.env.Database_URL || 'mongodb+srv://aashishsah2244_db_user:tGmwhg1JjrfuoMui@cluster0.2segasb.mongodb.net/?appName=Cluster0';

// Using the exact filenames already existing in the uploads folder
const seedData = [
  {
    name: "Rasmalai",
    description: "Soft cottage cheese patties immersed in thickened, sweetened saffron milk.",
    price: 120,
    category: "Desserts",
    image: "1725011561198Rasmalai.jpg"
  },
  {
    name: "Gulab Jamun",
    description: "Classic Indian milk dumplings deep-fried and soaked in rose-cardamom syrup.",
    price: 90,
    category: "Desserts",
    image: "1725011293129Gulab jamun.jpg"
  },
  {
    name: "Jalebi",
    description: "Crispy fried spirals soaked in saffron sugar syrup.",
    price: 80,
    category: "Desserts",
    image: "1725011331117Jalebi.jpg"
  },
  {
    name: "Chicken Biryani",
    description: "Authentic slow-cooked chicken biryani with aromatic saffron and whole spices.",
    price: 320,
    category: "Biriyani",
    image: "1725007672834chicken biryani.jpg"
  },
  {
    name: "Garlic Naan",
    description: "Soft Indian flatbread topped with minced garlic and fresh cilantro.",
    price: 60,
    category: "Breads",
    image: "1725012456364Garlic naan.jpg"
  },
  {
    name: "Butter Naan",
    description: "Traditional soft bread baked in a tandoor oven and glazed with butter.",
    price: 55,
    category: "Breads",
    image: "1725012417567Butter naan.jpg"
  },
  {
    name: "Stuffed Kulcha",
    description: "Crispy tandoori bread stuffed with spiced mashed potatoes.",
    price: 80,
    category: "Breads",
    image: "1725012580009Stuffed kulcha.jpg"
  },
  {
    name: "Butter Chicken",
    description: "Charcoal-roasted chicken in a sweet and savory tomato butter sauce.",
    price: 340,
    category: "Chicken Dishes",
    image: "1725007001571Butter chicken.jpg"
  },
  {
    name: "Tandoori Chicken",
    description: "Half chicken marinated in yogurt and spices, roasted in a traditional clay oven.",
    price: 320,
    category: "Chicken Dishes",
    image: "1725007825093Tandoori chicken.jpg"
  },
  {
    name: "Chicken Tikka Masala",
    description: "Spicy and tangy gravy loaded with tandoor-roasted chicken chunks.",
    price: 330,
    category: "Chicken Dishes",
    image: "1725007748566Chicken tikka masala.jpg"
  },
  {
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes simmered in a rich, creamy tomato and cashew curry.",
    price: 280,
    category: "Paneer",
    image: "1725008106886Paneer butter masala.jpg"
  },
  {
    name: "Palak Paneer",
    description: "Fresh spinach puree slow-cooked with garlic, cream and soft paneer cubes.",
    price: 260,
    category: "Paneer",
    image: "1725006758662Palak Paneer.jpg"
  },
  {
    name: "Kadai Paneer",
    description: "Spicy cottage cheese cooked with bell peppers and whole spices in a traditional wok.",
    price: 270,
    category: "Paneer",
    image: "1725008035498Kadai Paneer.jpg"
  },
  {
    name: "Samosa (2 pcs)",
    description: "Deep-fried pastry with a savory filling of spiced potatoes, onions, and peas.",
    price: 50,
    category: "Starters",
    image: "1724958668476Samosa.jpg"
  },
  {
    name: "Aloo Tikki",
    description: "Golden fried potato patties served with mint and tamarind chutney.",
    price: 90,
    category: "Starters",
    image: "1724959112469Aloo tikki.jpg"
  },
  {
    name: "Mango Lassi",
    description: "Thick, sweet yogurt drink blended with fresh Alphonso mango pulp.",
    price: 110,
    category: "Drinks",
    image: "1725010744520Mango lassi.jpg"
  },
  {
    name: "Masala Chai",
    description: "Traditional Indian milk tea brewed with warming spices.",
    price: 40,
    category: "Drinks",
    image: "1725011002056Masala chai.jpg"
  },
  {
    name: "Bombay Veg Sandwich",
    description: "Three-layered sandwich with spicy chutney, veggies, and lots of cheese.",
    price: 140,
    category: "Sandwiches",
    image: "1725010189480Bombay veg sandwich.jpg"
  },
  {
    name: "Chicken Tikka Sandwich",
    description: "Classic club sandwich loaded with grilled chicken tikka and lettuce.",
    price: 210,
    category: "Sandwiches",
    image: "1725010356206Chicken tikka sandwich.jpg"
  },
  {
    name: "Greek Salad",
    description: "Fresh cucumber, tomatoes, red onions, olives, and feta cheese block.",
    price: 190,
    category: "Salads",
    image: "1724187550761Greek_Salad.jpeg"
  },
  {
    name: "Caesar Salad",
    description: "Romaine lettuce, parmesan, croutons with Caesar dressing.",
    price: 220,
    category: "Salads",
    image: "1724187609775Caesar_Salad.jpg"
  }
];

const run = async () => {
  try {
    console.log('Connecting to database...');
    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB.');

    console.log('Clearing existing foods...');
    await foodModel.deleteMany({});
    
    console.log(`Inserting ${seedData.length} food items...`);
    await foodModel.insertMany(seedData);
    
    console.log('Database seeded perfectly using existing local images!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

run();
