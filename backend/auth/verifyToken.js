import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

// Middleware to authenticate user by verifying JWT token
export const authenticate = async (req, res, next) => {
    // Get token from headers
    const authToken = req.headers.authorization;

    // Check if token exists and starts with 'Bearer'
    if (!authToken || !authToken.startsWith(Bearer)) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    try {
        // Extract and verify token
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Attach user ID and role to request object
        req.userId = decoded.id;
        req.role = decoded.role;

        // Proceed to the next middleware
        next();
    } catch (err) {
        // Handle token errors
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token is expired' });
        }
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

// Middleware to restrict access based on user roles
export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;

    try {
        // Find user as either a patient or doctor
        const patient = await User.findById(userId);
        const doctor = await Doctor.findById(userId);
        const user = patient || doctor;

        // If user role is not authorized, return an error
        if (!roles.includes(user.role)) {
            return res.status(401).json({ success: false, message: "You're not authorized" });
        }

        // Proceed to the next middleware
        next();
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error" });
    }
};
