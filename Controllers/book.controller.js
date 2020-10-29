const { model } = require('mongoose')
const Book = require ('../models/book.model')

const bookCtrl = {}

//create=post
bookCtrl.addBook =async (request,response) =>{
 const {author,title,summary,publisher,pages,ISBN} = req.body

 try {
    let book = new Book.cearte({author,titel,publisher,summary,pages,ISBN})

    res.status(201).json({book})

 }catch(err) {
     res.status(400).send(err)
 }
}





//read=get

//update=post

//delete=delete


model.exports = bookCtrl