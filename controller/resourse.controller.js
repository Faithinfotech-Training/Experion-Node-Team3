const resourseDao=require('../dao/resourse.dao');
var resourseController={
    addGig:addGig,
    findGigs:findGigs,
    findGigById:findGigById,
    updateGig:updateGig,
    deleteById:deleteById
}

function addGig(req,res){
    let gig=req.body;
    resourseDao.create(gig)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function findGigById(req,res){
    resourseDao.findById(req.params.id)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function deleteById(req,res){
    resourseDao.deleteById(req.params.id)
        .then((data)=>{
            res.status(200).json({
                message:"",
                gig:data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
}

function updateGig(req,res){
    resourseDao.updateGig(req.body,req.params.id)
        .then((data)=>{
            res.status(200).json({
                message:"",
                gig:data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
}

function findGigs(req,res){
    resourseDao.findAll()
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

module.exports=resourseController;

