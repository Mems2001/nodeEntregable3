const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Users = db.define( 'users' , {
    id: {
        type: DataTypes.UUID ,
        primaryKey: true
    } ,
    firstName: {
        type: DataTypes.STRING ,
        allowNull: false ,
        field: 'first_name'
    } ,
    lastName: {
        type: DataTypes.STRING ,
        allowNull: false ,
        field: 'last_name'
    } ,
    email: {
        type: DataTypes.STRING ,
        allowNull: false ,
        unique: true ,
        validate: {
            isEmail: true
        }
    } ,
    password: {
        type: DataTypes.STRING ,
        allowNull: false
    } ,
    birthday: {
        type: DataTypes.DATEONLY
    }
} , {
    timestamps: false
} );

module.exports = Users