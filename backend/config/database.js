const mongoose=require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Database_URL);
        console.log('connected to db');
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
}

module.exports=connectDB;