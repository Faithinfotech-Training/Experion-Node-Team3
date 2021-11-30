const Sequelize = require('sequelize');
const db=require('../config/database');

const Course=db.define('course',{
    course_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    batch_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    course_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    course_fee:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    duration:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    qualification:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=Course;