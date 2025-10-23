
// 'use client'
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function DynamicPopup() {
//   const [popup, setPopup] = useState(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const fetchPopup = async () => {
//       try {
//         const res = await fetch("/api/popups");
//         const data = await res.json();
//         if (data && data.active && !checkPopupStatus(data.id)) {
//           setPopup(data);
//           setVisible(true);
//         }
//       } catch (err) {
//         console.error("Popup fetch failed:", err);
//       }
//     };
//     fetchPopup();
//   }, []);

//   // Prevent page scroll when popup open
//   useEffect(() => {
//     if (visible) {
//       const scrollY = window.scrollY;
//       document.body.style.position = "fixed";
//       document.body.style.top = `-${scrollY}px`;
//       document.body.style.left = "0";
//       document.body.style.right = "0";
//       document.body.style.width = "100%";
//     } else {
//       const y = parseInt(document.body.style.top || "0") * -1;
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.left = "";
//       document.body.style.right = "";
//       document.body.style.width = "";
//       window.scrollTo(0, y);
//     }
//   }, [visible]);

//   const checkPopupStatus = (id) => {
//     if (typeof window === "undefined") return false;
//     return getCookie(`popup_${id}_dismissed`) === "true";
//   };

//   const markPopupAsDismissed = (id) => {
//     if (typeof window === "undefined") return;
//     setCookie(`popup_${id}_dismissed`, "true", 2);
//   };

//   const closePopup = () => {
//     markPopupAsDismissed(popup.id);
//     setVisible(false);
//   };

//   function getCookie(name) {
//     if (typeof document === "undefined") return null;
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//     return null;
//   }

//   function setCookie(name, value, days) {
//     if (typeof document === "undefined") return;
//     let expires = "";
//     if (days) {
//       const date = new Date();
//       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//       expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/";
//   }

//   if (!popup) return null;

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           key="popup-backdrop"
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             key="popup-container"
//             className="relative bg-white rounded-3xl shadow-2xl flex flex-col w-full max-w-3xl overflow-hidden"
//             style={{ maxHeight: "90vh" }}
//             initial={{ scale: 0.9, opacity: 0, y: 20 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.9, opacity: 0, y: 20 }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closePopup}
//               aria-label="Close popup"
//               className="absolute top-3 right-3 z-10 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all rounded-full w-9 h-9 flex items-center justify-center"
//             >
//               ✕
//             </button>

//             {/* Scrollable Content */}
//             <div
//               className="w-full h-full p-5 sm:p-8 overflow-y-auto text-center flex flex-col items-center justify-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
//             >
//               <div
//                 className="w-full [&_img]:max-w-full [&_iframe]:max-w-full [&_p]:text-balance"
//                 dangerouslySetInnerHTML={{ __html: popup.customCode }}
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }











'use client'
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DynamicPopup() {
  const [popup, setPopup] = useState(null);
  const [visible, setVisible] = useState(false);

  // Memoized cookie functions to avoid redundant computation
  const getCookie = useCallback((name) => {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop().split(';').shift() : null;
  }, []);

  const setCookie = useCallback((name, value, days) => {
    if (typeof document === "undefined") return;
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
  }, []);

  const checkPopupStatus = useCallback((id) => {
    return getCookie(`popup_${id}_dismissed`) === "true";
  }, [getCookie]);

  const markPopupAsDismissed = useCallback((id) => {
    setCookie(`popup_${id}_dismissed`, "true", 2);
  }, [setCookie]);

  const closePopup = useCallback(() => {
    if (popup?.id) {
      markPopupAsDismissed(popup.id);
      setVisible(false);
    }
  }, [popup?.id, markPopupAsDismissed]);

  // Fetch popup data with optimized error handling
  useEffect(() => {
    let mounted = true;
    const fetchPopup = async () => {
      try {
        const res = await fetch("/api/popups", { cache: "force-cache" });
        if (!mounted) return;
        const data = await res.json();
        if (data?.active && !checkPopupStatus(data.id)) {
          setPopup(data);
          setVisible(true);
        }
      } catch (err) {
        console.error("Popup fetch failed:", err);
      }
    };
    fetchPopup();
    return () => {
      mounted = false;
    };
  }, [checkPopupStatus]);

  // Prevent page scroll when popup is open
  useEffect(() => {
    if (visible) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overscrollBehavior = "none"; // Prevent scroll chaining
      document.documentElement.style.overflow = "hidden"; // Extra layer to block scroll
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || "0"));
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overscrollBehavior = "";
      document.documentElement.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });
    }
    return () => {
      // Cleanup on unmount
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overscrollBehavior = "";
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  if (!popup || !visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="popup-backdrop"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overscroll-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          key="popup-container"
          className="relative bg-white rounded-3xl shadow-2xl flex flex-col w-full max-w-3xl overflow-hidden"
          style={{ maxHeight: "90vh" }}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            aria-label="Close popup"
            className="absolute top-3 right-3 z-10 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all rounded-full w-9 h-9 flex items-center justify-center"
          >
            ✕
          </button>

          {/* Scrollable Content */}
          <div
            className="w-full h-full p-5 sm:p-8 overflow-y-auto text-center flex flex-col items-center justify-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            <div
              className="w-full [&_img]:max-w-full [&_iframe]:max-w-full [&_p]:text-balance"
              dangerouslySetInnerHTML={{ __html: popup.customCode }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}