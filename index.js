require ('dotenv').config()
const express= require ('express')
const  mongoose  = require('mongoose')
const bodyParser = require('bodyParser')


const app= express()

const PORT=process.env.PORT
const DBlink=process.env.DBlink
const bookRoute = require ('./routes/book.route')

mongoose.connect(DBlink,{useNewUrlParser:true, useUnifiedTopolgy:true}, () => { 
    app.listen(PORT,()=> {
        console.info('THE SERVER CUM DATA BASE AND ARE UP AND RUNNING')
    })
})



app.use(bodyParser.json())

app.use(bookRoute)