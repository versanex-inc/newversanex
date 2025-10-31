// "use client";
// import { useEffect } from "react";
// import { getCookie } from "cookies-next";

// export default function MetaAnalytics() {
//   useEffect(() => {
//     // Read cookie consent
//     const consent = getCookie("cookie_consent");
//     if (!consent) return;
//     const prefs = JSON.parse(consent);
//     if (!prefs.marketing) return; // Only run if marketing cookies allowed

//     // Load Meta Pixel
//     !(function (f, b, e, v, n, t, s) {
//       if (f.fbq) return;
//       n = f.fbq = function () {
//         n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
//       };
//       if (!f._fbq) f._fbq = n;
//       n.push = n;
//       n.loaded = !0;
//       n.version = "2.0";
//       n.queue = [];
//       t = b.createElement(e);
//       t.async = !0;
//       t.src = v;
//       s = b.getElementsByTagName(e)[0];
//       s.parentNode.insertBefore(t, s);
//     })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

//     window.fbq("init", "1188990159792849");
//     window.fbq("track", "PageView");
//   }, []);

//   // Fallback for users without JavaScript
//   return (
//     <noscript>
//       <img
//         height="1"
//         width="1"
//         style={{ display: "none" }}
//         src="https://www.facebook.com/tr?id=1188990159792849&ev=PageView&noscript=1"
//       />
//     </noscript>
//   );
// }











"use client";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

export default function MetaAnalytics() {
  useEffect(() => {
    const consent = getCookie("cookie_consent");
    if (!consent) return;

    const prefs = JSON.parse(consent);
    if (!prefs.marketing) return; // Only run if marketing cookies allowed

    // Load Meta Pixel
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", "1188990159792849");
    window.fbq("track", "PageView");
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1188990159792849&ev=PageView&noscript=1"
      />
    </noscript>
  );
}
