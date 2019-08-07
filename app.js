var exp=require('express')
const app=exp();
var rout=require("./router/bookrouter")
var rout=require("./router/authorrt")
const path=require('path')
app.set("view engine","ejs")
app.set("views","./src/view")
app.use(exp.static(path.join(__dirname,"/public")))
//var app=new exp();

app.use("/book",rout)
app.get("/",function(req,res){
 res.render('index',{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],Pagetitle:"Library"})
//res.sendFile(__dirname+"/src/view/index.html")
})


app.listen(3000,function(req,res){
    console.log("server is ready")
})