import Book from '../models/Book.js';

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error.message);
    }
};

export const createBook = async (req, res) => {
    const { title, author, genre, price } = req.body;

    try {
        const newBook = await Book.create({
            title,
            author,
            genre,
            price,
        });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error.message);
    }
};

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.json(book).status(200);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error.message);
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        res.json(book).status(200);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error.message);
    }
};

export const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        res.json(book).status(200);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error.message);
    }
};