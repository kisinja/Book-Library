import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = jwt.sign(
                    {
                        _id: user._id
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1d"
                    }
                );
                res.json({ user, token }).status(200);
            } else {
                res.json({ error: "Invalid credentials" }).status(400);
            }
        }
    } catch (error) {
        res.json({ error: error.message }).status(500);
        console.log(error.message);
    }
};

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            ...req.body,
            name,
            email,
            password: await bcrypt.hash(password, 10)
        });
        const savedUser = await user.save();
        if (savedUser) {
            res.json(user).status(201);
        } else {
            res.json({ error: "Failed to register user" }).status(400);
        }
    } catch (error) {
        res.json({ error: error.message }).status(500);
        console.log(error.message);
    }
};