var db=require('../dbconnection');
var bill={
    getallbilltbldetail:function(callback){
        return db.query("select * from bill_tbl",callback);
    },
    addbilltbldetail:function(item,callback)
    {
        date = new Date();
        return db.query("insert into bill_tbl(amount,date,user_id) values(?,?,?)",
        [
            item.amount,
            date,
            item.user_id
        ],callback);
    }
}

module.exports=bill;