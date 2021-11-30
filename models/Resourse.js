const Sequelize = require('sequelize');
const db=require('../config/database');

const Resourse=db.define('resourse',{
    resourse_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    batch_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    resourse_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    resourse_rent:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    duration:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    availability:{
        type:Sequelize.STRING,
        allowNull:false
    }

});

module.exports=Resourse;