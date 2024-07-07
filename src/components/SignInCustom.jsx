import { SignInButton } from "@clerk/clerk-react";
import React from "react";

export default function SignInCustom() {
  return (
    <div>
      <SignInButton mode="modal">
        <button className="bg-base-200 px-4 py-2 text-sm rounded-lg shadow-sm hover:shadow-md hover:shadow-black">Sign in with Clerk</button>
      </SignInButton>
    </div>
  );
}