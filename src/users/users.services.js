const usersControllers = require('./users.controllers')

const getAllUsers = (req , res) => {
    usersControllers.findAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
};

const getUserById = (req , res) => {
    const id = req.params.id;

    usersControllers.findUserById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({
                    message: 'Invalid ID'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
}

const postUser = (req , res) => {
    const { firstName , lastName , password , birthday , email } = req.body;

    if (firstName && lastName && password && email) {
        usersControllers.createUser({
            firstName, lastName , password , birthday , email
        })
        .then(data => {
            res.status(201).json({data})
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
    } else {
        res.status(400).json({
            message: `Only "birthday" is not an obligatory field` ,
            fields: {
                firstName: 'String' ,
                lastName: 'String' ,
                password: 'String' ,
                email: 'email@example.com' ,
                birthday: 'YYYY/MM/DD'
            }
        })
    }
}

const patchUser = (req, res) => {
    const id = req.params.id;
    const { firstName , lastName , email , password , birthday } = req.body;

    usersControllers.updateUser(id , {
        firstName , lastName , email , password , birthday
    })
    .then(data => {
        // console.log(data);
        if (data[0]) {
            res.status(200).json({
                message: 'User was updated'
            })
        } else {
            res.status(404).json({
                message: 'Invalid ID'
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            message: err.message
        })
    })
}

const deleteUser = (req , res) => {
    const id = req.params.id;

    usersControllers.deleteUser(id)
        .then(data => {
            if (data != 0) {
                res.status(204).json()
            } else {
                res.status(404).json({
                    message: 'Invalid ID'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
}

module.exports = {
    getAllUsers ,
    getUserById ,
    postUser ,
    patchUser ,
    deleteUser
}