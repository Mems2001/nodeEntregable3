const router = require('express').Router();

const usersServices = require('./users.services')

//Routes
// users
router.get('/users' , usersServices.getAllUsers);
router.post('/users' , usersServices.postUser);

// users/:id
router.get('/users/:id' , usersServices.getUserById);
router.patch('/users/:id' , usersServices.patchUser);
router.delete('/users/:id' , usersServices.deleteUser);

module.exports = router