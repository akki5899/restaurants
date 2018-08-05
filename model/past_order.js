var db=require('../dbconnection');
var pastorder={
    getallpastorderdetails:function(id,callback){
        return db.query("select * from bill_tbl where user_id=?",[id],callback);
    },
    getpastorder:function(id,callback){
        return db.query("select b.*,d.* from bill_detail b ,dish_tbl d where b.dish_id=d.dish_id and b.bill_no=?",[id],callback)
    }
}

module.exports=pastorder;