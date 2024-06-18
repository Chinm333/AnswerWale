const express = require('express');
const UserController = require('../controllers/userController.js');
const authenticate = require('../middlewires/authenticate.js');

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/:id', authenticate, UserController.getUser);
router.get('/:userId/questions', authenticate, UserController.getUserQuestions);
// postman testing
// router.get('/:id',  UserController.getUser);
// router.get('/:userId/questions', UserController.getUserQuestions);


module.exports = router;