import { NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import Admin from '@/lib/model/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// POST /api/admin-auth/signup
export async function POST(request) {
  try {
    // Connect to MongoDB
    await connectDB();

    // Parse request body
    const { username, email, password } = await request.json();

    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Username, email, and password are required' },
        { status: 400 }
      );
    }

    // ✅ Check if an admin already exists
    const adminExists = await Admin.findOne({ isAdmin: true });
    if (adminExists) {
      return NextResponse.json(
        { error: 'An admin already exists. Only one admin is allowed.' },
        { status: 403 } // Forbidden
      );
    }

    // ✅ Check if username/email already exists (extra protection)
    const existingUser = await Admin.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Username or email already exists' },
        { status: 409 }
      );
    }

    // ✅ Password regex validation before hashing
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          error:
            'Password must contain at least one uppercase, one lowercase, one number, and one special character',
        },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin (always force isAdmin: true)
    const admin = new Admin({
      username,
      email,
      password: hashedPassword,
      isAdmin: true,
    });

    // Save to database
    await admin.save();

    // Generate JWT
    const token = jwt.sign(
      { username: admin.username, email: admin.email, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set JWT in HTTP-only cookie
    const response = NextResponse.json(
      { message: 'Admin registered successfully' },
      { status: 201 }
    );
    response.cookies.set({
      name: 'auth-cookie',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await connectDB();

    // Delete all admins
    const result = await Admin.deleteMany({ isAdmin: true });

    return NextResponse.json(
      { message: `${result.deletedCount} admin(s) deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete admin error:', error);
    return NextResponse.json(
      { error: 'Failed to delete admins' },
      { status: 500 }
    );
  }
}