const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')

router.get('/', bookController.getAllBooks)

router.get('/:bookId', bookController.getBookById)

router.post('/', bookController.addBook)

router.patch('/:bookId', bookController.updateBook)

router.delete('/:bookId', bookController.deleteBook)

module.exports = router;
