const bcrypt = require('bcrypt');
const { User, Question } = require('../models/index.js');

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({
            status: 201,
            message: 'User created successfully',
            data: user
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({
            status: 404,
            message: 'User created unsuccessful',
        });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: 'User not found',
            });
        }
        res.status(200).json({
            status: 200,
            message: 'User fetched successfully',
            data: user
        });
    } catch (error) {
        console.error(error);
    }
};

const getUserQuestions = async (req, res) => {
    try {
        const question = await Question.findAll({
            where: {
                userId: req.params.userId
            }
        });
        if (!question) {
            return res.status(201).json({
                status: 201,
                message: 'No questions found',
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Question fetched successfully',
            data: question
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = { createUser, getUser, getUserQuestions };

