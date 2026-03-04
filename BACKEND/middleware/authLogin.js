// Check if user is logged in
const authMiddleware = (req, res, next) => {
  if (req.session.user) {
    console.log("User session exists:", req.session.user);
    next(); // user is logged in
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized. Please log in.' });
  }
};

module.exports = authMiddleware;