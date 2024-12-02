import React from "react";
import "@pages/panel/Panel.css";
import { ClerkProvider, SignInButton } from "@clerk/chrome-extension";

const PUBLISHABLE_KEY =
  "pk_test_YmFsYW5jZWQtbW9sbHktODMuY2xlcmsuYWNjb3VudHMuZGV2JA";

const EXTENSION_URL = chrome.runtime.getURL(".");

export default function Panel(): JSX.Element {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl={`${EXTENSION_URL}/popup.html`}
      signInFallbackRedirectUrl={`${EXTENSION_URL}/popup.html`}
      signUpFallbackRedirectUrl={`${EXTENSION_URL}/popup.html`}
    >
      <div className="container">
        <h1>Dev Tools Panel</h1>
        <SignInButton mode="modal" />
      </div>
    </ClerkProvider>
  );
}
