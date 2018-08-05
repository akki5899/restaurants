var db=require('../dbconnection');
var cusine={
    getallcusine:function(callback){
        return db.query("select * from cusines_tbl",callback);
    }
}

module.exports=cusine;