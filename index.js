const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/user.js')
const authRoutes = require('./src/routes/auth.js')
const questionRoutes = require('./src/routes/question.js')


const app = express()
app.use(bodyParser.json());
dotenv.config();
const port = process.env.PORT;

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/question', questionRoutes);



app.listen(port, () => {
  console.log(`Answers AI app listening on port ${port}`)
})

module.exports = app;