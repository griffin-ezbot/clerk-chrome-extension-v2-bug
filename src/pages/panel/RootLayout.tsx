import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/chrome-extension";

const PUBLISHABLE_KEY =
  "pk_test_YmFsYW5jZWQtbW9sbHktODMuY2xlcmsuYWNjb3VudHMuZGV2JA";

const EXTENSION_URL = chrome.runtime.getURL(".");
export const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <div className="plasmo-w-[785px] plasmo-h-[600px]">
        <main>
          <Outlet />
        </main>
        <footer>
          <SignedIn>
            <Link to="/test">Test</Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </footer>
      </div>
    </ClerkProvider>
  );
};
