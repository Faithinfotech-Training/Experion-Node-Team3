//const { findAll, create } = require('../models/Gig');
const Gig=require('../models/resourse');
var resourseDao={
    findAll:findAll,
    create:create,
    findById: findById,
    deleteById: deleteById,
    updateGig:updateGig
}

function findAll(){
    return Gig.findAll();
}

function findById(resourse_id){
    return Gig.findByPk(resourse_id);
}

function deleteById(resourse_id){
    return Gig.destroy({where:{resourse_id:resourse_id}});
}

function create(resourse){
    var newGig=new Gig(resourse);
    return newGig.save();
}

function updateGig(resourse,resourse_id){
    var updateGig={
        batch_id:resourse.batch_id,
        resourse_name:resourse.resourse_name,
        resourse_rent:resourse.course_fee,
        duration:resourse.duration,
        availability:resourse.availability
    };
    return Gig.update(updateGig,{where:{resourse_id:resourse_id}});
}

module.exports=resourseDao