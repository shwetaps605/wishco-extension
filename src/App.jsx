import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import User from "./components/User";
import SignInCustom from "./components/SignInCustom";



function App() {
  return (
    <div className="pt-20 flex flex-col justify-center align-middle items-center">
      <header>
        <SignedOut>
          <SignInCustom/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <main>
        <User/>
      </main>
    </div>
  );
}

export default App;
