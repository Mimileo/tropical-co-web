"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

interface ScrollButtonProps {
  children: React.ReactNode;
  targetId: string; // Id of the target div
  className?: string;
}

export function ScrollButton({ children, targetId, className }: ScrollButtonProps) {
  const router = useRouter();

  const handleClick = (): void => {
    // Check if the element with the specified id exists
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calculate the offset of the target element
      const offsetTop = targetElement.offsetTop;

      // Scroll to the target element
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    } else {
      // Log a warning if the target element is not found
      console.warn(`Element with id "${targetId}" not found.`);
    }
  };

  // Update the route when the targetId changes
  useEffect(() => {
    router.prefetch(`#${targetId}`);
  }, [targetId, router]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}
