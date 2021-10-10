const {Sequelize}=require('sequelize')
//factory model
const UserFactory=require('./usuario.js');
//sequelize
const sequelize=new Sequelize(
    `postgres://postgres:neofire1999@localhost/Agenda`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }

    )
const User=UserFactory(sequelize)
module.exports={
    db:sequelize,
    User
}