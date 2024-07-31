// components/SignOutButton.tsx

import React from "react";
import { signOut } from "../../auth";


const SignOutButton: React.FC = () => {
  const handleSignOut = async () => {
    await signOut({
      redirectTo: '/' // Redirect to home page after sign out
    });
  };

  return (
    <button onClick={handleSignOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Sign Out
    </button>
  );
};

export default SignOutButton;
