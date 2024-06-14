import express from "express";
import bodyParser from "body-parser";
import { connectDb } from "./db/db.js";
import dotenv from "dotenv";
import cors from "cors";
import morgan from 'morgan';

import authRouter from "./routes/auth.js";
import bookRouter from "./routes/book.js";
import borrowRouter from "./routes/borrowed.js";
import verifyToken from "./middleware/verifyToken.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("common"));

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error.message);
    }
};

startServer();

app.get("/api", (req, res) => {
    res.json({ message: "Welcome to book store" }).status(200);
});

app.use("/api/auth", authRouter);
app.use("/api/books", verifyToken, bookRouter);
app.use("/api/borrows", verifyToken, borrowRouter);