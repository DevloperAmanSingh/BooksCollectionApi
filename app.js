const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const bookRoute = require("./routes/addBook");
const deleteBook = require("./routes/deleteBook");
const getBooksbyId = require("./routes/getBookById");
const updateBook = require("./routes/updateBook");
app.use(express.json());
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err.message); 
  });
app.use("/books", bookRoute);
app.use("/books", getBooksbyId);
app.use("/books", deleteBook);
app.use("/books", updateBook);

app.listen(3000, () => {
  console.log("Server is running");
});
