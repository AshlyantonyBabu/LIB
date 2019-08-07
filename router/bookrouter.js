var exp=require('express')
var rt=exp.Router()
module.exports=rt;
var book_array=[
    {
    "id":"LB001",
    "title":"Wings of Fire ",
    "author":"A. P. J. Abdul Kalam ",
    "category":"biographies & memoirs",
    "discription":"Dr. Kalam by narrating his life journey evokes the reader to identify with one’s inner fire and potential, for he was of the firm belief that each one of us was born with the strength and potential to make a tangible change in the world. How he inspired himself to achieve dreams and how he went about accomplishing so much is what the book captures nicely.",
    "price":370,
    "pic":"https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg/220px-Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"},
{
"id":"LB002",
"title":"The Fault in Our Stars ",
"author":" John Green ",
"category":"Young adult novel Realistic fiction",
"discription":"The Fault in Our Stars is distinct love story of two teenage cancer sufferers and revolves around a couple who fall for each other irrespective of the fact that they are struggling between life and death. This book blends in it all kinds of elements such as humor, sentiment and emotions. This work of Young Adult fiction has become wildly popular the world over",
"price":310,
"pic":"https://images-na.ssl-images-amazon.com/images/I/A1c9bOWb6RL.jpg"
},
{
    "id":"LB003",
"title":"Harry Potter and the Philosopher's Stone ",
"author":"J.K. Rowling ",
"category":"children's books",
"discription":"Harry Potter and the Philosopher’s Stone is the first novel of the much appreciated Harry Potter series. An abridged version of the same novel, this book has been brought out by Bloomsbury Press for children aged between eight and twelve years.",
"price":255,
"pic":"https://is2-ssl.mzstatic.com/image/thumb/Video128/v4/14/07/dc/1407dcf3-197a-e6be-8982-cb913b0188bf/pr_source.lsr/268x0w.png"
},
{
    "id":"LB004",
"title":"The Room on the Roof",
"author":"Ruskin Bond ",
"category":"Young adult novel Realistic fiction",
"discription":"Written when the author was himself seventeen, this moving story of love and friendship, with a new introduction and illustrations will be enjoyed by a whole new generation of readers.",
"price":220,
"pic":"https://images-na.ssl-images-amazon.com/images/I/71GbGol4p%2BL.jpg"
},
{
    "id":"LB005",
    "title":"Can Love Happen Twice  ",
    "author":"Ravinder Singh ",
    "category":"Young adult novel Realistic fiction",
    "discription":"In today's generation, love and relationships have lost the profound effect that they used to have. In a generation where people want to experience non-committal relationships; where love has been reduced to physical intimacy and larger-than-life displays of feelings, Ravinder Singh pens down his story where he portrays the long lost charm and magic of commitment and love. But, after having experienced the terrible loss of a loved one, is it possible to love someone that deeply and immensely again? Can you bare your soul and let yourself vulnerable in front of someone again, knowing that you are risking yet another terrible heartbreak?",
    "price":110,
    "pic":"https://images-na.ssl-images-amazon.com/images/I/51YDQZYoHqL._SX324_BO1,204,203,200_.jpg"
},
{
    "id":"LB006",
    "title":" The Diary of a Young Girl ",
    "author":"Anne Frank ",
    "category":"biographies & memoirs",
    "discription":"Writing in a diary is a really strange experience for someone like me. Not only because I’ve never written anything before, but also because it seems to me that later on neither I nor anyone else will be interested in the musings of a thirteen-year-old schoolgirl.” Anne Frank, Saturday, June 20,1942.",
    "price":370,
   "pic":"https://is2-ssl.mzstatic.com/image/thumb/Publication128/v4/7b/f8/6f/7bf86f52-3171-6dc3-2cc7-084119fcbc68/the_diary_of_a_young_girl_v2_2500.jpg/268x0w.jpg"
},
{
    "id":"LB007",
    "title":" The Girl in Room 105",
    "author":"Chetan Bhagat  ",
    "category":"Young adult novel Realistic fiction",
    "discription":"Hi, I’m Keshav, and my life is screwed. I hate my job and my girlfriend left me. Ah, the beautiful Zara. Zara is from Kashmir. She is a Muslim. And did I tell you my family is a bit, well, traditional? Anyway, leave that.",
    "price":370,
    "pic":"https://miro.medium.com/max/3084/1*aiFOBTR4rIfNDPGsU9zsvQ.png"
},
{
    "id":"LB008",
    "title":"One Indian Girl  ",
    "author":"Chetan Bhagat ",
    "category":"biographies & memoirs",
    "discription":"Hi, I'm Radhika Mehta and I'm getting married this week. I work at Goldman Sachs, an investment bank. Thank you for reading my story. However, let me warn you",
    "price":370,
    "pic":"https://images-eu.ssl-images-amazon.com/images/I/51btCZ-13mL.jpg"
},
{
    "id":"LB009",
    "title":"The 3 Mistakes of My Life  ",
    "author":" Chetan Bhagat",
    "category":"biographies & memoirs",
    "discription":" The 3 Mistakes of my life is the third novel written by eminent Indian Author Chetan Bhagat. Based on cricket, business and religion, the novel is set against the backdrop of beautiful city Ahmedabad. Revolving around three young Indian boys Omi, Ishaan and Govind, the book goes on to narrate how the three are trying their best to make ends meet in the city. ",
    "price":370,
    "pic":"https://images-na.ssl-images-amazon.com/images/I/51nziLHeduL._SX328_BO1,204,203,200_.jpg"
},
{
    "id":"LB010",
    "title":"Half Girlfriend  ",
    "author":"Chetan Bhagat  ",
    "category":"biographies & memoirs",
    "discription":"Half Girlfriend is a story of Bihari boy Madhav, a Hindi speaking Bihari who falls in love with Riya, an influential Delhi girl on the campus of prestigious St. Stephen’s College. Madhav belongs to middle class family, while Riya is from higher class and both have different lifestyles. Madhav proposes her, but Riya rejects the proposal because she thinks they are good as a friend only.",
    "price":370,
    "pic":"https://images-na.ssl-images-amazon.com/images/I/51IpHUkHttL._SX326_BO1,204,203,200_.jpg"
}



]

rt.get("/",function(req,res){
    res.render('books',{nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],Pagetitle:"Library",array_book:book_array})
})
rt.get("/:id",function(req,res){
    var id=req.params.id
    // console.log(id)
    // console.log(book_array[id].title)
   res.render('readmr',
                {nav:[{link:"/book",Title:"Book"},{link:'/author',Title:"Author"}],
                Pagetitle:"BOOKS",
                array_book:book_array[id]}
                );
})