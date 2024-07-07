import React from 'react'
import { useUser } from "@clerk/clerk-react";
import StyledButton from './StyledButton';

const User = () => {

  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    // Handle loading state however you like
    return <p><span className="text-secondary loading loading-infinity loading-lg"></span></p>;
  }

  if (isSignedIn) {
    return <div className='flex flex-col justify-center items-center'>
      <p className="text-sm text-secondary mb-5">wishlist your company</p> 
      <button className="bg-base-200 px-4 py-2 border-2-slate-400 text-sm rounded-lg shadow-sm hover:shadow-md hover:shadow-black">Add to wishco</button> 
      <p className="mt-10 text-xs text-accent">logged in as: {user?.firstName}</p>
  </div>;
  }

  return <p className='text-sm text-accent mt-5'>please sign in to continue</p>;
}

export default User