import express from "express";
import { getBooks, createBook, deleteBook, getBookById, updateBook } from "../controllers/book.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", createBook);
router.delete("/:id", deleteBook);
router.get("/:id", getBookById);
router.put("/:id", updateBook);

export default router;