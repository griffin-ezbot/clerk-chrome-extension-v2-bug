import React from "react";
import { createRoot } from "react-dom/client";
import Panel from "@pages/panel/Panel";
import "@pages/panel/index.css";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Test from "./Test";
import { RootLayout } from "./RootLayout";

const router = createMemoryRouter([
  {
    // Wraps the entire app in the root layout
    element: <RootLayout />,
    // Mounted where the <Outlet /> component is inside the root layout
    children: [
      { path: "/", element: <Panel /> },
      { path: "/test", element: <Test /> },
    ],
  },
]);

export default function SidePanelRouteProvider() {
  return <RouterProvider router={router} />;
}

function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Panel root element");
  const root = createRoot(rootContainer);
  root.render(<SidePanelRouteProvider />);
}

init();
