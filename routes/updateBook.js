const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

router.put("/:id", async (req, res) => {
    try {
        const books = await Book.findOneAndUpdate(
        { id: req.params.id } ,  req.body, 
        { new: true } );
        if (!books) {
            return res
            .status(404)
            .json({ message: `No book found with id ${req.params.id}` });
        }
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;