// app/api/cloudinary/delete/route.js
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const { public_ids } = await req.json();
    if (!Array.isArray(public_ids) || public_ids.length === 0) {
      return NextResponse.json({ error: 'No public_ids provided' }, { status: 400 });
    }

    const results = await Promise.all(
      public_ids.map((id) => cloudinary.v2.uploader.destroy(id))
    );

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error deleting resources:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}