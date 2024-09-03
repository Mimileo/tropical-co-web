'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import { lusitana, open_sans } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  EyeSlashIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import Alert from '../ui/alert';

export default function LoginForm() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false); 
  const router = useRouter();

  console.log(status);
  useEffect(() => {
    // Redirect logged-in users away from the login page
    if (status === 'authenticated') {
      // Prevent looping redirect
      if (window.location.pathname !== '/dashboard') {
        router.push('/dashboard');
      }
    }
  }, [status, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(null);

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    

    if (result?.error) {
       if (result.error.includes('user not found')) {
          setErrorMessage('Account does not exist. Please sign up.');
        } else if (result.error.includes('incorrect credentials')) {
          setErrorMessage('Incorrect email or password. Please try again.');
        } else {
          setErrorMessage('Invalid Credentials');
        }
    } else if (result?.ok) {
      // Redirect to the dashboard
      router.push('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${open_sans.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
       
        <div className="w-full">
          <div>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
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
        <Button className="flex items-center justify-center mt-4 w-full" type="submit">
          Log in 
        </Button>
      </div>

      {errorMessage && (
        <div>
          <Alert type="error" message={errorMessage} icon={<ExclamationCircleIcon className="h-5 w-5" />} />
        </div>
      )}
    </form>
  );
}
