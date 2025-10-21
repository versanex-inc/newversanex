'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("config", "G-Z4MVVGH6E7", {
      page_path: pathname,
    });
  }, [pathname]);

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z4MVVGH6E7"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z4MVVGH6E7');
          `,
        }}
      />
    </>
  );
}
