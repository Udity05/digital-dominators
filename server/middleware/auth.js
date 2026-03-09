const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ success: false, message: 'Token is not valid' });
    }
};

const admin = (req, res, next) => {
    if (req.user && req.user.role === 'Admin') {
        next();
    } else {
        res.status(403).json({ success: false, message: 'Access denied: Admins only' });
    }
};

module.exports = { auth, admin };
