const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); 

  if (!token) {
    return res.status(401).json({ error: 'Access denied, no token provided.' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtToken);
    req.user = decoded; 
    console.log('User decoded from token:', req.user); 
    next();
  } catch (error) {
    return res.status(400).json({ error: `Invalid or expired token. ${error}` });
  }
};
