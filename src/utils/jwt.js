const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateToken = (id) => {
    return jwt.sign({ id },
        process.env.JWT_SECURITY_KEY,
        {
            expiresIn: '1h',
        }
    );
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECURITY_KEY);
};

const refreshToken = (token) => {
    const payload = jwt.verify(token, process.env.JWT_SECURITY_KEY, { ignoreExpiration: true });
    return generateToken(payload.id);
};

module.exports = { generateToken, verifyToken, refreshToken }