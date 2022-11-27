const express = require('express');

const db = require('./utils/database');
const config = require('./config');
const usersRouter = require('./users/users.router');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

// Routes
app.use('/api/v1' , usersRouter);

// database conexion
db.authenticate()
    .then(() => {
        console.log('Database authenticated')
    })
    .catch(err => console.log(err))

db.sync()
    .then(() => {
        console.log('Database syncronized')
    })
    .catch(err => console.log(err))

app.listen( config.port , () => {
    console.log(`Server started at port ${config.port}`)
})