const dotenv = require('dotenv');

dotenv.config();

const config = {
    database: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database_name: process.env.DATABASE_NAME,
    },
    aiApiKey: process.env.GEMINI_API_KEY,
    jwtSecurityKey: process.env.JWT_SECURITY_KEY,
};

module.exports = config;