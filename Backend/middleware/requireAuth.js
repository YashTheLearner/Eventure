import jwt from 'jsonwebtoken';

const requireAuth = async (req, res, next) => {
    try {
        // Check if the token is in the cookies or in the `Authorization` header
        let token = req.cookies.token;
        console.log(req);

        if (!token && req.headers.authorization) {
            // Extract the token from the `Authorization` header if it's in the 'Bearer token' format
            const authHeader = req.headers.authorization;
            if (authHeader.startsWith('Bearer ')) {
                token = authHeader.split(' ')[1];
            }
        }

        if (!token) {
            return res.status(401).json({ message: 'Token is missing' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user data to the request object
        req.user = decoded;
        req.token = token; // Optional: attach the token if needed for reference

        next(); // Call the next middleware or route handler
    } catch (error) {
        // Handle specific JWT errors like invalid/expired token
        console.log('Error in requireAuth:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired' });
        }
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }

        console.error('Error in requireAuth:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export default requireAuth;
