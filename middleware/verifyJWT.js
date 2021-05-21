const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
  const token = req.headers["x-access-token"]

  if (!token) {
    res.json({auth: false, msg: 'No token'})
  } else {
    jwt.verify(token, "much-secret-wow", (err, decoded) => {
      if (err) {
        res.json({ auth: false, msg: 'Invalid token'})
      } else {
        req.user = decoded.user
        next()
      }
    })
  }
}