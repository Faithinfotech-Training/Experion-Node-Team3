const express=require('express');
const router=express.Router();
const loginController=require('../controller/login.controller');
const courseController=require('../controller/course.controller');
const resourseController=require('../controller/resourse.controller');

router.post('/login',loginController.addGig);
router.get('/login',loginController.findGigs);
router.get('/login/:id',loginController.findGigById);
router.put('/login/:id',loginController.updateGig);
router.delete('/login/:id',loginController.deleteById);

router.post('/resourse',resourseController.addGig);
router.get('/resourse',resourseController.findGigs);
router.get('/resourse/:id',resourseController.findGigById);
router.put('/resourse/:id',resourseController.updateGig);
router.delete('/resourse/:id',resourseController.deleteById);

router.post('/course',courseController.addGig);
router.get('/course',courseController.findGigs);
router.get('/course/:id',courseController.findGigById);
router.put('/course/:id',courseController.updateGig);
router.delete('/course/:id',courseController.deleteById);

module.exports=router;