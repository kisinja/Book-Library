import Borrowed from '../models/Borrowed.js';

export const getBorrows = async (req, res) => {
    try {
        const borrows = await Borrowed.find();
        res.json(borrows).status(200);
    } catch (error) {
        res.json({ message: error.message }).status(500);
        console.log(error.message);
    }
};

export const createBorrow = async (req, res) => {
    try {
        const borrow = req.body;
        const newBorrow = new Borrowed(borrow);
        await newBorrow.save();
        res.json(newBorrow).status(201);
    } catch (error) {
        res.json({ message: error.message }).status(500);
        console.log(error.message);
    }
};

export const updateBorrow = async (req, res) => {
    try {
        const { id } = req.params;
        const borrow = await Borrowed.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        res.json(borrow).status(200);
    } catch (error) {
        res.json({ message: error.message }).status(500);
        console.log(error.message);
    }
};

export const deleteBorrow = async (req, res) => {
    try {
        const { id } = req.params;
        await Borrowed.findByIdAndDelete(id);
        res.json({ message: 'Borrow deleted successfully' }).status(200);
    } catch (error) {
        res.json({ message: error.message }).status(500);
        console.log(error.message);
    }
};

export const getBorrowById = async (req, res) => {
    try {
        const { id } = req.params;
        const borrow = await Borrowed.findById(id);
        res.json(borrow).status(200);
    } catch (error) {
        res.json({ message: error.message }).status(500);
        console.log(error.message);
    }
};