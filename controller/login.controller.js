const loginDao=require('../dao/login.dao');
var loginController={
    addGig:addGig,
    findGigs:findGigs,
    findGigById:findGigById,
    updateGig:updateGig,
    deleteById:deleteById
}

function addGig(req,res){
    let gig=req.body;
    loginDao.create(gig)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function findGigById(req,res){
    loginDao.findById(req.params.id)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function deleteById(req,res){
    loginDao.deleteById(req.params.id)
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
    loginDao.updateGig(req.body,req.params.id)
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
    loginDao.findAll()
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

module.exports=loginController;

