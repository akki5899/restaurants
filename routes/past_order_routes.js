var past_order=require('../model/past_order');
var express=require('express');
var router= express.Router();

router.get('/:id',function(req,res,next){
    past_order.getallpastorderdetails(req.params.id,function(err,rows){
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