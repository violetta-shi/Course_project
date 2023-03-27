require('dotenv').config(); //prepare env as early as possible

const express = require('express');
const bearerToken = require('express-bearer-token');

const authMiddleware = require('./src/middleware/authentication.middleware');

const users = require('./src/route/users.route');
const auth = require('./src/route/auth.route');

const app = express();

// config
app.use(express.json());
app.use(bearerToken());
app.use(authMiddleware.authenticate);

// routes
app.use('/api/v1/users', users);
app.use('/api/auth', auth);

//TODO middleware test, remove it
app.get('/api/admin', authMiddleware.ensureAdminRole, (req, res) => {
    res.json({message: 'You admin'});
});
app.get('/api/user', authMiddleware.ensureUserRole, (req, res) => {
    res.json({message: 'You just user'});
});
app.get('/api/any', authMiddleware.ensureAuthenticated, (req, res) => {
    res.json({message: 'You authenticated'});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on ${port} port...`);
});
