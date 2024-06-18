const { Question } = require('../models/index.js');
const aiService = require('../services/aiService.js');
const createQuestion = async (req, res) => {
    try {
        const { question } = req.body;
        const userId = req.body.userId;
        const answer = await aiService.getAnswer(question);
        const questionData = await Question.create({ question, answer, userId });
        res.status(201).json({
            status: 201,
            message: 'Question created successfully',
            data: questionData
        });
    } catch (error) {
        console.error(error);
    }
};

const getQuestion = async (req, res) => {
    try {
        const question = await Question.findByPk(req.params.id);
        if (!question) {
            return res.status(404).json({
                status: 404,
                message: 'Question not found'
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

module.exports = { createQuestion, getQuestion };