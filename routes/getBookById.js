const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

router.get("/:id", async (req, res) => {
  try {
    const books = await Book.findOne({ id: req.params.id });
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