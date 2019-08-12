var ex=require('express');

var auroot=ex.Router();
module.exports=auroot;
var arr_authors=[
    {
    name:"Chetan bhagat",
    pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Chetan_Bhagat%2C_India.jpg/220px-Chetan_Bhagat%2C_India.jpg"

},
{
    name:"A. P. J. Abdul Kalam ",
    pic:"https://img.etimg.com/thumb/height-450,width-800,imgsize-210956,msid-48247272/.jpg"
},
{
    name:"John Green",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzv8dkJENqJc6fLhOYg0L7exANhq2tfBchiN-siX3RQND3hrf"
},
{
    name:"J.K. Rowling",
    pic:"https://image.cnbcfm.com/api/v1/image/104979551-GettyImages-623391110.jpg?v=1532563691&w=1400&h=950"
},
{
    name:"Ruskin Bond",
    pic:"https://images.outlookindia.com/public/uploads/gallery/20140522/ruskin_bond_20140602.jpg"
},
{
    name:"Ravinder Singh",
    pic:"https://pbs.twimg.com/profile_images/1122842034446856192/axKts38G.png"
},
{
    name:"Anne Frank",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIFp4YEVmlQRGirs7GmPpBnlOGO7Gs6GP4Lfm2HsimzuZ2Pd5"
}
]
auroot.get("/",function(req,res){
   console.log(arr_authors.length)
    res.render("author",{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],Pagetitle:"Authors",authrlist:arr_authors.sort()})
})
auroot.get("/:id",function(req,res){
    var id=req.params.id
    res.render("readmrau",{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],Pagetitle:"Authors",authrlist:arr_authors[id]})
})
