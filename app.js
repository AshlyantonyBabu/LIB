var exp=require('express')
const app=exp();
//var bdy=require('body-parser')
var rrtt=require("./router/userrout")
var rout=require("./router/bookrouter")
var rrout=require("./router/authorrt")
const path=require('path')
app.set("view engine","ejs")
app.set("views","./src/view")
app.use(exp.static(path.join(__dirname,"/public")))
//var app=new exp();
// var mon=require('mongoose')
// var url="mongodb://localhost/library"
// var user=require("./model/reg")
// app.use(bdy.urlencoded({extened:true}))
// mon.connect(url,function(err){
// if(err)throw err
// else{
//     console.log("database connected")
// }
// })

app.use("/book",rout)
app.use("/user",rrtt)
app.use("/author",rrout)
app.get("/index",function(req,res){
 res.render('index',{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"},{link:"/user/add",Title:"NEW Book"}],Pagetitle:"Library"})
//res.sendFile(__dirname+"/src/view/index.html")
})
app.get("/",function(req,res){
    res.render('Login',{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],Pagetitle:"Library"})
  
   })
  


app.listen(9000,function(req,res){
    console.log("server is ready")
})
