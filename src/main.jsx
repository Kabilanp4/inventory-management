import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProviders from "./app/providers/AppProviders.jsx";
import "./index.css";

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import("@/mocks/browser");
    await worker.start({
      onUnhandledRequest: "bypass",
    });
  }
}
enableMocking().then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <AppProviders />
    </StrictMode>,
  );
});
