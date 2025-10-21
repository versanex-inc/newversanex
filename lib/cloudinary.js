import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(filePath, folder = 'uploads') {
  return cloudinary.uploader.upload(filePath, { folder });
}

export async function deleteImage(publicId) {
  return cloudinary.uploader.destroy(publicId);
}

export async function uploadImages(files, folder = 'uploads') {
  return Promise.all(files.map((file) => uploadImage(file, folder)));
}

export async function deleteImages(publicIds) {
  return Promise.all(publicIds.map((id) => deleteImage(id)));
}

export default cloudinary;
