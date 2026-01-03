import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const connectCloudinary = () => {
    try {
        // Verify environment variables exist
        if (!process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_SECRET_KEY) {
            throw new Error('Missing Cloudinary environment variables');
        }

        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY,
            secure: true
        });

        console.log('✅ Cloudinary configured with:', {
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: '***' + process.env.CLOUDINARY_SECRET_KEY.slice(-4) // Show last 4 chars only
        });
        
        return cloudinary;
    } catch (error) {
        console.error('❌ Cloudinary configuration error:', error.message);
        process.exit(1);
    }
}

export default connectCloudinary;