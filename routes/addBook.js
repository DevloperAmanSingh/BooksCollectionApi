const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");
const validateBookCreation = require("../middlewares/validateBookCreation");

// Create a book 

router.post("/" , validateBookCreation , async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    }catch(err){
        console.log(err);
        if(err.code === 11000){
            return res.status(400).json({message: "Book already exists"});
        }else{
            return res.status(500).json(err);
        } 
    }
});

router.get("/", async (req, res) => {
    try {
        const books = await Book.find(req.query);
        if (books.length === 0){
            return res.status(404).json({message: "No books found"});
        }
        res.status(200).json(books);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;