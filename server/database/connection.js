const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conData = await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        // We can print DB host ${conData.connection.host}
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(`MongoDB Connection Error: ${error}`);
        process.exit(1)
    }
}

module.exports = connectDB