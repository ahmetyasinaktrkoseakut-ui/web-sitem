"use client";

import { useEffect } from "react";

export function VisitorNotifier() {
  useEffect(() => {
    try {
      const pageKey = `visit_notified_${window.location.pathname}`;
      if (!sessionStorage.getItem(pageKey)) {
        sessionStorage.setItem(pageKey, "true");
        fetch("/api/visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page: window.location.pathname,
            referrer: document.referrer || "Doğrudan (Direct)",
          }),
        }).catch(() => {});
      }
    } catch (e) {
      // Session storage devre dışıysa hatayı yut
    }
  }, []);

  return null;
}
