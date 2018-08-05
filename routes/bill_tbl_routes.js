var bill=require('../model/bill_tbl_models');
var express=require('express');
var router= express.Router();

router.get('',function(req,res,next){
    bill.getallbilltbldetail(function (err,rows) {
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
       }); 
});

router.post('/',function(req,res,next){
    bill.addbilltbldetail(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;