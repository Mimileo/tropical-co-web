import React from 'react';

interface CSLBButtonProps {
  licenseNumber: string;
  href: string;
}

const CSLBButton: React.FC<CSLBButtonProps> = ({ licenseNumber, href }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      style={{ textDecoration: 'none' }}
      className="inline-block w-fit font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-lg shadow-md border border-blue-400 underline dark:text-blue-500 hover:no-underline hover:bg-blue-200 transition-all"
    >
      CSLB License #{licenseNumber}
    </a>
  );
};

export default CSLBButton;
