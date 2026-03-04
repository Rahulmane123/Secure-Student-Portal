const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authLogin')
const {registerStudent,getallstudents,getstudentById,deletestudent,profileupdate,loginstudent,logoutstudent} = require('../controllers/studentController');


// step:2
router.post('/register', registerStudent);
router.post('/login',loginstudent)
router.get('/viewstudents',authMiddleware, getallstudents);
router.get('/getstudent/:id',getstudentById);
router.delete('/deletestudent/:id',deletestudent);
router.put('/profileupdate/:id',profileupdate);
router.post('/logout', logoutstudent);



module.exports = router;
