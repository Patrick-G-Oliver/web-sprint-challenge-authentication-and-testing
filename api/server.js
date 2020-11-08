const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(authRouter)

server.use('/api/auth', authRouter);
// authentication functionality was moved to the jokes/jokes-router.js file (see the imorted 'restict' variable (see lines 2 & 6)
server.use('/api/jokes', /* authenticate, */ jokesRouter);

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;
