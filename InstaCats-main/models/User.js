// const sequelize = require("../db/conn");

//3 - importar datatypes sequelize
const {DataTypes} = require('sequelize')
// 2 - importar arquivo de connect database
const db = require('../db/conn')
// 3 - Estruturar essa tabela 
const User = db.define('User',{
name:{
    type:DataTypes.STRING,
    allowNull:false,
    require:true
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    require:true
},
password:{
    type:DataTypes.STRING,
    allowNull:false,
    require:true
}
});

module.exports = User
