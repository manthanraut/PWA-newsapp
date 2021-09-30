const express=require('express')
//const app=express()
const axios =require('axios')
const newsroute=express.Router()
const News=require('../models/newsModel')
const math=require('math')

newsroute.get('/',async(req,res)=>{
    try{
       // var url='http://newsapi.org/v2/top-headlines?country=in&apiKey=8a11073ba429442aa0f68aa82c9b6b32'
        //var url=`http://newsapi.org/v2/everything?country=in&apiKey=8a11073ba429442aa0f68aa82c9b6b32`
    var url='https://saurav.tech/NewsAPI/everything/cnn.json'
        //const news_get=await axios.get(url)
        const news=await News.find()
        res.render('news',{articles:news})
//res.json(news)
    }catch(error){
        if(error.response){
            console.log(error)
        }
    }
})

newsroute.get('/:id',async(req,res)=>{
    try{
        const news=await News.findById(req.params.id)
        res.render('newsarticle',{articles:news})
        //res.json(news)
    }catch(err){
        res.send('Error '+err)
    }
})

module.exports=newsroute

