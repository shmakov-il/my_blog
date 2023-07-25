import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if (user) {
             return res.json({message: `Пользователь с именем ${username} занят.`});
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hash,
        });

        const token = jwt.sign(
            {id: newUser._id},
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        );

        await newUser.save();

        res.json({
            token,
            newUser,
            message: 'Регистрация прошла успешна.'
        });

    } catch (error) {
        res.json({message: "Не удалось зарегистрироваться."});
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if (!user) {
            return res.json({message: "Пользователь не найден."});
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            return res.json({message: "Неверный логин или пароль."});
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        );

        res.json({
            token,
            user,
            message: "Авторизация прошла успешно",
        });

    } catch (error) {
        res.json({message: "Не удалось авторизоваться."});
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.json({message: "Пользователь не найден."});
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        );

        res.json({
            token,
            user,
        });

    } catch (error) {
        res.json({message: "Нет доступа."})
    }
}


