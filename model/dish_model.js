var db=require('../dbconnection');
var dish={
    getalldish:function(callback){
        return db.query("select * from dish_tbl",callback);
    },
    getdatabycusineid:function(id,callback)
    {
        return db.query("select * from dish_tbl where cusine_id=?",[id],callback);
    }

}

module.exports=dish;