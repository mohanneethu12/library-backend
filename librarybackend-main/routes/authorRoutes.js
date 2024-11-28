const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')

console.log('inside author route');
router.get('/', authorController.getAllAuthors)

router.get('/:authorId', authorController.getAuthorById)

router.post('/', authorController.addAuthor)

router.patch('/:authorId', authorController.updateAuthor)

router.delete('/:authorId', authorController.deleteAuthor)

module.exports = router;
