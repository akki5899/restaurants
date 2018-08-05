var cusine=require('../model/dish_model');
var express=require('express');
var router= express.Router();

router.get('',function(req,res,next){
    cusine.getalldish(function (err,rows) {
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
       }); 
});


router.get('/:id',function(req,res,next){
    cusine.getdatabycusineid(req.params.id,function (err,rows) {
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
       }); 
});
module.exports=router;