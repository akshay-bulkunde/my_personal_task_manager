require('dotenv').config();

module.exports = {
   
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    jwtToken:process.env.JWT_TOKEN,
    dialect: process.env.DB_DIALECT 
    
};