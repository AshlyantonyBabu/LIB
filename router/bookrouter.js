var exp=require('express')
var rt=exp.Router()
module.exports=rt;
var mon=require('mongoose')
var url="mongodb://localhost/library"
var lib=require("../model/lib")
mon.connect(url,function(err){
if(err)throw err
else{
    console.log("database connected")
}
})


rt.get("/",function(req,res){
    lib.find({},function(err,result){
        if(err)throw err
        else{
            res.render('books',{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],Pagetitle:"Library",array_book:result}) 
        }
    })
  //  res.render('books',{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],Pagetitle:"Library",array_book:book_array})
})
rt.get("/:id",function(req,res){
    var idi=req.params.id
    //console.log(titl)
    // console.log(book_array[id].title)
var qry={id:idi}
lib.findOne(qry,function(err,result){
    if(err)throw err
    else{

    console.log(result)
    res.render('readmr',
    {nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],
    Pagetitle:"BOOKS",
    array_book:result}
    );
    }
})
  
})