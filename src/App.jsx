import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
function App() {
  return (
    <div className="pt-20 flex flex-col justify-center align-middle items-center">
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <div>
        <p className="text-sm text-secondary mb-5">wishlist your company</p> 
        <button className="btn btn-primary text-lg  border-2 hover:border-purple-400 hover:shadow-md hover:shadow-black">Add to wishco</button> 
      </div>
      <p className="mt-10 text-xs opacity-40">logged in as: Shweta</p>
    </div>
  );
}

export default App;
