import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Insert the user into the database
    const response = await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${hashedPassword})
    `;

    return NextResponse.json({ message: 'Registration successful!' });
  } catch (e) {
    console.log('Error:', e);
    return NextResponse.json({ message: 'Registration failed.' }, { status: 500 });
  }
}
