'use client';

import { signOut } from "@/auth";



export default function Logout() {
  return (
    <span
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </span>
  );
}