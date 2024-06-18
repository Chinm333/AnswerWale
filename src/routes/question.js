const express = require('express');
const questionController = require('../controllers/questionController.js');
const authenticate = require('../middlewires/authenticate.js');

const router = express.Router();

router.post('/', authenticate, questionController.createQuestion);
router.get('/:questionId', authenticate, questionController.getQuestion);

// postman testing
// router.post('/',  questionController.createQuestion);
// router.get('/:id',  questionController.getQuestion);

module.exports = router;