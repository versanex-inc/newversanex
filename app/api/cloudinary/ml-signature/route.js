// app/api/cloudinary/ml-signature/route.js
import crypto from 'crypto';

export async function GET() {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!apiSecret) {
    return new Response(JSON.stringify({ error: 'API secret not configured' }), { status: 500 });
  }

  const paramsToSign = `timestamp=${timestamp}${apiSecret}`;
  const signature = crypto.createHash('sha1').update(paramsToSign).digest('hex');

  return new Response(JSON.stringify({ timestamp, signature }), { status: 200 });
}