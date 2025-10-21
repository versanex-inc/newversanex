import { NextResponse } from 'next/server'
import connectDB from '@/lib/dbConnect'
import Contact from '@/lib/model/Contact'

// 📌 POST /api/contact — Create a new contact
export async function POST(req) {
  try {
    await connectDB()

    const body = await req.json()
    const { name, email, service, description, status, priority, notes } = body

    // Basic validation
    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and description are required.' },
        { status: 400 }
      )
    }

    const newContact = await Contact.create({
      name,
      email,
      service,
      description,
      status,
      priority,
      notes,
    })

    return NextResponse.json(
      { success: true, message: 'Contact created successfully', data: newContact },
      { status: 201 }
    )
  } catch (error) {
    console.error('POST /api/contact error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to create contact', error: error.message },
      { status: 500 }
    )
  }
}

// 📌 GET /api/contact — Fetch all contacts
export async function GET() {
  try {
    await connectDB()

    const contacts = await Contact.find().sort({ createdAt: -1 })

    return NextResponse.json(
      { success: true, count: contacts.length, data: contacts },
      { status: 200 }
    )
  } catch (error) {
    console.error('GET /api/contact error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch contacts', error: error.message },
      { status: 500 }
    )
  }
}
