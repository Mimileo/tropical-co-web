'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  EyeSlashIcon,
  EyeIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false); 

  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const username = formData.get('username');

    setDisabled(true);

    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();
    setMessage(result.message);
    setStatus(response.ok ? 'success' : 'error');
    setDisabled(false);

    if (response.ok) {
      // Redirect to the dashboard on successful registration
      router.push('/login');
    }
  };

  return (
    <div >
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`$$open_sans.className}  mb-3 text-2xl`}>
            Please register to continue.
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Username
              </label>
               <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="username"
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    required
                    disabled={disabled}
                />
                <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  disabled={disabled}
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type={showPassword ? 'text' : 'password'} 
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                  disabled={disabled}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                 <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              
              </div>
            </div>
          </div>
          <Button className="flex items-center justify-center mt-4 w-full text-center" disabled={disabled}>
            Register 
          </Button>
        </div>
      </form>

      {message.length > 0 && (
        <div
          className={`mt-4 p-2 rounded-md ${
            status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
