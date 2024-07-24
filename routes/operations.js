const express = require('express');

const router= express.Router();

const  oper=require('../controller/functions')

router.post('/add',oper.add);
router.post('/mul',oper.mul);   


module.exports=router;