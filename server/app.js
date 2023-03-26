require('dotenv').config(); //prepare env as early as possible

const express = require('express');
const users = require('./src/route/users.route')

const app = express();

// config
app.use(express.json());

// routes
app.use('/api/v1/users', users)

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on ${port} port...`);
});
