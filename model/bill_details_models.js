var db=require('../dbconnection');
var billdetail={
    getallbilldetail:function(callback){
        return db.query("select * from bill_detail",callback);
    },
    addbilldetail:function(item,callback)
    {
        var value=[];
        for(let i=0;i<item.length;i++){
            value[i]=[item[i].dish_id,item[i].qty,item[i].price,item[i].bill_no];
            
        }
        console.log(value);
        return db.query("INSERT into bill_detail (dish_id,qty,price,bill_no) VALUES ?",[value],callback);    
    }
}

module.exports=billdetail;