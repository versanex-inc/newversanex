'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const COOKIE_NAME = "cookie_consent";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (consent) {
      const prefs = JSON.parse(consent);
      if (prefs.analytics) {
        setAllowed(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!allowed) return;

    // Load GA script dynamically
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-YG41JNTWD3";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-YG41JNTWD3', {
      page_path: pathname,
    });

  }, [allowed, pathname]);

  return null; // no visible UI
}