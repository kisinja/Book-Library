import express from "express";

import { getBorrows, deleteBorrow, getBorrowById, updateBorrow, createBorrow } from "../controllers/borrowed.js";

const router = express.Router();

router.get('/', getBorrows);
router.post('/', createBorrow);
router.put('/:id', updateBorrow);
router.delete('/:id', deleteBorrow);
router.get('/:id', getBorrowById);

export default router;