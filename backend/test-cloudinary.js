import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    secure: true
});

// Test connection by listing resources
async function testCloudinary() {
    try {
        console.log('Testing Cloudinary connection...');
        console.log('Cloud name:', process.env.CLOUDINARY_NAME);
        console.log('API Key:', process.env.CLOUDINARY_API_KEY);
        
        const result = await cloudinary.api.ping();
        console.log('✅ Cloudinary ping successful:', result);
        
        // Try to upload a test image
        const uploadResult = await cloudinary.uploader.upload(
            'https://res.cloudinary.com/demo/image/upload/sample.jpg',
            { public_id: 'test_quickclinic' }
        );
        console.log('✅ Test upload successful:', uploadResult.secure_url);
        
        // Delete the test image
        await cloudinary.uploader.destroy('test_quickclinic');
        console.log('✅ Test image cleaned up');
        
    } catch (error) {
        console.error('❌ Cloudinary test failed:', {
            message: error.message,
            http_code: error.http_code,
            error: error
        });
    }
}

testCloudinary();