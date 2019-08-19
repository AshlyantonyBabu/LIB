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
        res.render("author",{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],Pagetitle:"Authors",authrlist:result.sort()})
    })
   
})
auroot.get("/:id",function(req,res){
    var id=req.params.id
    res.render("readmrau",{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],Pagetitle:"Authors",authrlist:arr_authors[id]})
})
