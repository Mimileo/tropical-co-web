import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';
import { sendWelcomeEmail } from '@/lib/emailUtils.ts/sendWelcomeEmail';

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    // Check if the email already exists
    const existingUserResult = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;
    
    const existingUser = existingUserResult.rows;

    if (existingUser.length > 0) {
      return NextResponse.json(
        { message: 'Email already registered.' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Insert the user into the database
    await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${hashedPassword})
    `;

    await sendWelcomeEmail({ to: email, name: username });

    return NextResponse.json({ message: 'Registration successful!' });
  } catch (e) {
    console.error('Error during registration:', e);
    return NextResponse.json({ message: 'Registration failed.' }, { status: 500 });
  }
}
