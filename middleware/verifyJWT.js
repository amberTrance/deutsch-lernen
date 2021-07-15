const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
  const token = req.headers["x-access-token"]

  if (!token) {
    res.status(401).json({auth: false, msg: 'No token'})
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ auth: false, msg: 'Invalid token'})
      } else {
        req.user = decoded.user
        next()
      }
    })
  }
}
