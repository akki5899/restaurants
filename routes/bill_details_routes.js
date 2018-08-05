var bill_details=require('../model/bill_details_models');
var express=require('express');
var router= express.Router();

router.post('/',function(req,res,next){
    bill_details.addbilldetail(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/',function(req,res,next){
    bill_details.getallbilldetail(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;