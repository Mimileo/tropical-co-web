// ContactForm component
'use client';

import { FormEvent, useState } from 'react';

export const ContactForm = () => {
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  const onContactFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: { [key: string]: string } = {};
    const elements = e.currentTarget.elements as unknown as Array<
      HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
    >;

    Array.from(elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setStatus(res.status);
        setDisabled(res.message.length > 0);
      });
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">

      <form className="space-y-4" onSubmit={onContactFormSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            name="name"
            id="name"
            required
            disabled={disabled}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            name="email"
            id="email"
            required
            disabled={disabled}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            rows={3}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            name="message"
            id="message"
            required
            disabled={disabled}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full p-2 bg-green-500 text-white rounded-md ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-green-600'}`}
          disabled={disabled}
        >
          Send Message
        </button>
      </form>

      {message.length > 0 ? (
        <div
          className={`mt-4 p-2 rounded-md ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
          <span>{message}</span>
        </div>
      ) : null}
    </div>
  );
};
