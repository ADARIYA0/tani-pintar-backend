const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.verifyToken = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(403).json({
        success: false,
        message: 'No token provided!'
      });
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found!'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
    return;
  }

  res.status(403).json({
    success: false,
    message: 'Require Admin Role!'
  });
};
