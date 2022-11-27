require('dotenv').config();

const config = {
    port: process.env.PORT ,
    nodeEnv: process.env.NODE_ENV ,
    db: {
        host: process.env.DB_HOST ,
        username: process.env.DB_USER ,
        password: process.env.DB_PASS ,
        dbName: process.env.DB_NAME
    }
};

module.exports = config