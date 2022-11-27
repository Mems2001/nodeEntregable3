const UsersDb = require('../models/users.models');
const UUID = require('uuid');

const findAllUsers = async() => {
    const data = await UsersDb.findAll();

    return data
}

const findUserById = async(id) => {
    const data = await UsersDb.findOne({
        where:{
            id: id
        }
    });

    return data
}

const createUser = async(obj) => {
    const newUser = await UsersDb.create({
        id: UUID.v4() ,
        firstName: obj.firstName ,
        lastName: obj.lastName ,
        password: obj.password ,
        email: obj.email ,
        birthday: obj.birthday
    }) ;
    
    return newUser
}

const updateUser = async(id , data) => {
    const result = await UsersDb.update(data , {
        where: {
            id : id
        }
    }) ;

    return result
}

const deleteUser = async(id) => {
    const data = UsersDb.destroy({
        where: {
            id : id
        }
    });

    return data
}

module.exports = {
    findAllUsers ,
    findUserById ,
    createUser ,
    updateUser ,
    deleteUser
}