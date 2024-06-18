const jwt = require('../utils/jwt.js');
const bcrypt = require('bcrypt');
const { User} = require('../models/index.js');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne(
            { where: { email } }
        );
        if (!user || ! await bcrypt.compare(password, user.password)) {
            return res.status(401).json({
                status: 401,
                message: 'Invalid credentials',
            });
        }
        const jwtToken = jwt.generateToken(user.id);
        res.status(200).json({
            status: 200,
            message: 'Login successful',
            data: {
                token: jwtToken
            }
        })
    } catch (error) {
        console.error(error);
    }
};

const logout = async (req, res) => {
    res.status(200).end();
};

const refreshToken = async (req, res) => {
    const { jwtToken } = req.body;
    const newToken = jwt.refreshToken(jwtToken);
    res.status(200).json({
        status: 200,
        message: 'Token refreshed',
        data: {
            token: newToken
        }
    })
};
module.exports =  { login, logout, refreshToken };