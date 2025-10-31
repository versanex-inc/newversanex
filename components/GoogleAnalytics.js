// 'use client';

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

// export default function GoogleAnalytics() {
//   const pathname = usePathname();

//   useEffect(() => {
//     if (!window.gtag) return;

//     window.gtag("config", "G-YG41JNTWD3", {
//       page_path: pathname,
//     });
//   }, [pathname]);

//   return (
//     <>
//       {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z4MVVGH6E7"></script> */}
//       <script async src="https://www.googletagmanager.com/gtag/js?id=G-YG41JNTWD3"></script>
//       <script
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-YG41JNTWD3');
//           `,
//         }}
//       />
//     </>
//   );
// }



// 'use client';

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// const COOKIE_NAME = "cookie_consent";

// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
//   return null;
// }

// export default function GoogleAnalytics() {
//   const pathname = usePathname();
//   const [allowed, setAllowed] = useState(false);

//   useEffect(() => {
//     const consent = getCookie(COOKIE_NAME);
//     if (consent) {
//       const prefs = JSON.parse(consent);
//       if (prefs.analytics) {
//         setAllowed(true);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (!allowed) return;

//     // Load GA script dynamically
//     const script = document.createElement("script");
//     script.src = "https://www.googletagmanager.com/gtag/js?id=G-YG41JNTWD3";
//     script.async = true;
//     document.head.appendChild(script);

//     window.dataLayer = window.dataLayer || [];
//     function gtag() {
//       window.dataLayer.push(arguments);
//     }
//     window.gtag = gtag;
//     gtag('js', new Date());
//     gtag('config', 'G-YG41JNTWD3', {
//       page_path: pathname,
//     });

//   }, [allowed, pathname]);

//   return null; // no visible UI
// }











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