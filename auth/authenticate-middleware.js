/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken")

module.exports = () => {

  return async (req, res, next) => {
		const authError = {
			message: "Invalid credentials",
		}

		try {
			// assume the token gets passed to the API as an "Authorization" header
			const token = req.headers.authorization

			// token is now coming from the client's cookie jar, in the "Cookie" header
			//const token = req.cookies.token
			if (!token) {
				return res.status(401).json(authError)
			}

			// decode the token, re-sign the payload, and check if signature is valid
			jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=> {
				if (err) {
					return res.status(401).json(authError)
				}

				// We know that the user is authorized at this point.
				// Make the token's payload available to other middleware functions
				req.token = decoded 

				next()
			})
		} catch(err) {
			next(err)
		}
	}

  // res.status(401).json({ you: 'shall not pass!' });
};