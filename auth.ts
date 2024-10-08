import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { authConfig } from './auth.config';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const { rows } = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

async function updateLastLogin(email: string) {
  try {
    await sql`
      UPDATE users
      SET last_login = NOW()
      WHERE email = ${email}
    `;
  } catch (error) {
    console.error('Failed to update last login:', error);
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          throw new Error('Invalid input. Please check your credentials.');
        }


        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          if (user && await bcrypt.compare(password, user.password)) {
             await updateLastLogin(email);
            return user;
          }
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
