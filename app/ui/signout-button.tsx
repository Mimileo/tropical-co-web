'use client'; // Ensure this is marked as a client component

import { signOut } from 'next-auth/react';

export default function SignOutButton({ children }: { children: React.ReactNode }) {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' }); // Redirect to login after sign out
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      {children}
    </button>
  );
}
