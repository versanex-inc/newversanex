// app/api/cloudinary/list/route.js
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const { resources } = await cloudinary.v2.api.resources({
      type: 'upload',
      prefix: 'projects/',
      max_results: 100,
    });
    return NextResponse.json({ resources });
  } catch (error) {
    console.error('Error listing resources:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}