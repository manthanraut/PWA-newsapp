const mongoose=require('mongoose')

const newsSchema=new mongoose.Schema({
author:{
    type:String
},
title:{
    type:String
}, 
description:{
    type:String
}, 
url:{
    type:String
}, 
urlToImage:{
    type:String
}, 
publishedAt:{
    type:String
},
content:{
    type:String
}    
})

module.exports = mongoose.model('News',newsSchema)