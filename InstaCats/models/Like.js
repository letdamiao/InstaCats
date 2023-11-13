const {DataTypes} = require('sequelize')

const db = require('../db/conn')

//importar as tabelas para o reacionamento
const User = db.define('./User')
const Publication = db.define('./Publication')
const Like = db.define('Like', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
});
User.belongsToMany(Publication, { through: 'Like' });
Publication.belongsToMany(User, { through: 'Like' });
module.exports = Like