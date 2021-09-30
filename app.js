
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const port =process.env.PORT||3000
const bodyParser=require('body-parser')


const url="mongodb://localhost/news_articles"
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
const c=mongoose.connection
 
c.on('open',()=>{
    console.log('connected....')
})

//template engine
app.use(express.static('public'))
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',require('./routes/news'))

app.set('views','./views')
//console.log(`http://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`)
app.listen(port,()=>console.log(`App listening on port: ${port}`))
