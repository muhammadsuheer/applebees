"use client";

import { useEffect } from "react";

export function SuppressHydrationOverlay() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const originalError = console.error;
      console.error = (...args) => {
        const message = args[0];
        if (
          typeof message === "string" &&
          (message.includes("A tree hydrated but some attributes of the server rendered HTML didn't match") ||
           message.includes("bis_skin_checked") ||
           message.includes("Hydration failed because the initial UI does not match"))
        ) {
          // Suppress hydration errors caused by browser extensions injecting bis_skin_checked
          return;
        }
        originalError(...args);
      };
    }
  }, []);

  return null;
}
