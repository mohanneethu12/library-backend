const Author = require('../models/authorModel');

const addAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAuthorById = async (req, res) => {
    try {
        console.log(req.params.authorId)
        const author = await Author.findById(req.params.authorId);
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.authorId, req.body,
            { new: true, runValidators: true }
        );
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.authorId);
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json({ message: 'Author deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
};
