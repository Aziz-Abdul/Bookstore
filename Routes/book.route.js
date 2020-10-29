const {Router} = require ('express')
const router = Router ()
cosnt {addBook}  = require ('../controllers/book.controller')

router.post('/books', addBook)

module.exports = router