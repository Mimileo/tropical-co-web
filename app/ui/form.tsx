// ui/form/form.tsx
'use client';

import React from 'react';
import { FormEvent, useState } from 'react';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(`/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
      });
      const data = await response.json(); // Assuming the server sends back JSON data
      if (response.ok) {
        setMessage('Registration successful!');
        // Optionally reset the form or redirect the user
      } else {
        setMessage(`Registration failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
        setMessage('Failed to connect to the server.');
        console.error('Registration error:', error);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        name="email"
        className="border border-black text-black"
        type="email"
        required
        placeholder="Enter your email"
      />
      <input
        name="password"
        className="border border-black text-black"
        type="password"
        required
        minLength={6}
        placeholder="Enter a strong password"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
