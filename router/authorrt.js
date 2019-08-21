var ex=require('express');

var auroot=ex.Router();
var mon=require('mongoose')
var url="mongodb://localhost/library"
var lib=require("../model/auth")
mon.connect(url,function(err){
if(err)throw err
else{
    console.log("database connected")
}
})
module.exports=auroot;

auroot.get("/",function(req,res){
    lib.find({},function(err,result){
        //console.log(arr_authors.length)
        res.render("author",{nav:[{link:"/",Title:"Home"},{link:"/book",Title:"Book"},{link:'/author',Title:"Author"},{link:"/",Title:"Log Out"}],Pagetitle:"Authors",authrlist:result.sort()})
    })
   
})
auroot.get("/:id",function(req,res){
    var idi=req.params.id

    console.log(idi)
   
    var qry={id:idi+" "}
    lib.findOne(qry,function(err,result){
        if(err)throw err
        else{
        console.log(result)
        res.render("readmrau",{nav:[{link:"/",Title:"Home"},{link:"/book",Title:"Book"},{link:'/author',Title:"Author"},{link:"/",Title:"Log Out"}],Pagetitle:"Authors",authrlist:result})
  
      } 
     })
  
})
