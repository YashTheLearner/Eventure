import jwt from 'jsonwebtoken';

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }

    // Split the authorization header into 'Bearer' and 'token'
    const token = authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    try {
        // Verify the token using JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach user data to the request object
        req.user = decoded;

        // Optionally, attach the token if needed for reference
        req.token = token;

        // Call the next middleware or route handler
        next();
    } catch (error) {
        // Handle specific JWT errors like invalid/expired token
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired' });
        }
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Handle other errors
        return res.status(500).json({ message: error.message });
    }
};

export default requireAuth;
