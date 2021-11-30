//const { findAll, create } = require('../models/Gig');
const Gig=require('../models/Login');
var loginDao={
    findAll:findAll,
    create:create,
    findById: findById,
    deleteById: deleteById,
    updateGig:updateGig
}

function findAll(){
    return Gig.findAll();
}

function findById(id){
    return Gig.findByPk(id);
}

function deleteById(id){
    return Gig.destroy({where:{id:id}});
}

function create(login){
    var newGig=new Gig(login);
    return newGig.save();
}

function updateGig(login,id){
    var updateGig={
        userName:login.userName,
        password:login.password
    };
    return Gig.update(updateGig,{where:{id:id}});
}

module.exports=loginDao