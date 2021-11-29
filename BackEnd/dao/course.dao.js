//const { findAll, create } = require('../models/Gig');
const Gig=require('../models/course');
var courseDao={
    findAll:findAll,
    create:create,
    findById: findById,
    deleteById: deleteById,
    updateGig:updateGig
}

function findAll(){
    return Gig.findAll();
}

function findById(course_id){
    return Gig.findByPk(course_id);
}

function deleteById(course_id){
    return Gig.destroy({where:{course_id:course_id}});
}

function create(course){
    var newGig=new Gig(course);
    return newGig.save();
}

function updateGig(course,course_id){
    var updateGig={
        batch_id:course.batch_id,
        course_name:course.course_name,
        course_fee:course.course_fee,
        duration:course.duration,
        qualification:course.qualification
    };
    return Gig.update(updateGig,{where:{course_id:course_id}});
}

module.exports=courseDao