// 'use client'
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function DynamicPopup() {
//   const [popup, setPopup] = useState(null);
//   const [visible, setVisible] = useState(false);

//   // Fetch active popup from API and check if it was shown
//   useEffect(() => {
//     const fetchPopup = async () => {
//       try {
//         const res = await fetch("/api/popups");
//         const data = await res.json();
//         if (data && data.active && !checkPopupStatus(data.id)) {
//           setPopup(data);
//           setVisible(true);
//           markPopupAsShown(data.id);
//         }
//       } catch (err) {
//         console.error("Popup fetch failed:", err);
//       }
//     };
//     fetchPopup();
//   }, []);

//   // Lock/unlock body scroll
//   useEffect(() => {
//     document.body.style.overflow = visible ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [visible]);

//   // Check if popup has been shown before
//   const checkPopupStatus = (popupId) => {
//     return localStorage.getItem(`popup_${popupId}_shown`) === "true";
//   };

//   // Mark popup as shown
//   const markPopupAsShown = (popupId) => {
//     localStorage.setItem(`popup_${popupId}_shown`, "true");
//   };

//   const closePopup = () => setVisible(false);

//   if (!popup) return null;

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           key="popup-backdrop"
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             key="popup-container"
//             className="relative max-w-3xl w-[90%] max-h-[90vh] overflow-auto rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col"
//             initial={{ scale: 0.9, opacity: 0, y: 30 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.9, opacity: 0, y: 30 }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closePopup}
//               className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 text-black rounded-full shadow-md hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-110 font-bold text-xl"
//               aria-label="Close popup"
//             >
//               ✕
//             </button>

//             {/* Popup Content */}
//             <div className="w-full flex justify-center items-center">
//               {popup.customCode ? (
//                 <div
//                   className="w-full"
//                   dangerouslySetInnerHTML={{ __html: popup.customCode }}
//                 />
//               ) : (
//                 <div className="text-gray-500 italic text-center w-full">
//                   This is a generic popup container. Add any content here.
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }








// 'use client'
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function DynamicPopup() {
//   const [popup, setPopup] = useState(null);
//   const [visible, setVisible] = useState(false);

//   // Fetch active popup from API and check if it was shown
//   useEffect(() => {
//     const fetchPopup = async () => {
//       try {
//         const res = await fetch("/api/popups");
//         const data = await res.json();
//         if (data && data.active && !checkPopupStatus(data.id)) {
//           setPopup(data);
//           setVisible(true);
//           markPopupAsShown(data.id);
//         }
//       } catch (err) {
//         console.error("Popup fetch failed:", err);
//       }
//     };
//     fetchPopup();
//   }, []);

//   // Lock/unlock body scroll
//   useEffect(() => {
//     document.body.style.overflow = visible ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [visible]);

//   // Check if popup has been shown before
//   const checkPopupStatus = (popupId) => {
//     return localStorage.getItem(`popup_${popupId}_shown`) === "true";
//   };

//   // Mark popup as shown
//   const markPopupAsShown = (popupId) => {
//     localStorage.setItem(`popup_${popupId}_shown`, "true");
//   };

//   const closePopup = () => setVisible(false);

//   if (!popup) return null;

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           key="popup-backdrop"
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             key="popup-container"
//             className="relative max-w-3xl w-[90%] max-h-[90vh] overflow-auto rounded-3xl shadow-2xl bg-white p-8 sm:p-10 flex flex-col"
//             initial={{ scale: 0.9, opacity: 0, y: 20 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.9, opacity: 0, y: 20 }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closePopup}
//               className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-800 rounded-full shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-bold text-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
//               aria-label="Close popup"
//             >
//               ✕
//             </button>

//             {/* Popup Content */}
//             <div className="w-full pt-8 sm:pt-10">
//               {popup.customCode ? (
//                 <div
//                   className="w-full"
//                   dangerouslySetInnerHTML={{ __html: popup.customCode }}
//                 />
//               ) : (
//                 <div className="text-gray-500 italic text-center w-full">
//                   This is a generic popup container. Add any content here.
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }








// 'use client'
// import { useEffect, useState, useRef } from "react";
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
//           markPopupAsShown(data.id);
//         }
//       } catch (err) {
//         console.error("Popup fetch failed:", err);
//       }
//     };
//     fetchPopup();
//   }, []);

//   // prevent page scroll when popup open
//   useEffect(() => {
//     document.body.style.overflow = visible ? "hidden" : "";
//     return () => (document.body.style.overflow = "");
//   }, [visible]);

//   // const checkPopupStatus = (id) =>
//   //   localStorage.getItem(`popup_${id}_shown`) === "true";
//   // const markPopupAsShown = (id) =>
//   //   localStorage.setItem(`popup_${id}_shown`, "true");



//   const checkPopupStatus = (id) => {
//   if (typeof window === "undefined") return false;
//   return localStorage.getItem(`popup_${id}_shown`) === "true";
// };

// const markPopupAsShown = (id) => {
//   if (typeof window === "undefined") return;
//   localStorage.setItem(`popup_${id}_shown`, "true");
// };


//   const closePopup = () => setVisible(false);

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
//             className="
//               relative bg-white rounded-3xl shadow-2xl 
//               flex flex-col 
//               w-full max-w-3xl 
//               overflow-hidden
//             "
//             style={{
//               maxHeight: "90vh", // ensures it never goes outside screen
//             }}
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
//               className="
//                 w-full h-full p-5 sm:p-8 
//                 overflow-y-auto
//                 text-center flex flex-col items-center justify-center
//                 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
//               "
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
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DynamicPopup() {
  const [popup, setPopup] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchPopup = async () => {
      try {
        const res = await fetch("/api/popups");
        const data = await res.json();
        if (data && data.active && !checkPopupStatus(data.id)) {
          setPopup(data);
          setVisible(true);
          markPopupAsShown(data.id);
        }
      } catch (err) {
        console.error("Popup fetch failed:", err);
      }
    };
    fetchPopup();
  }, []);

  // Prevent page scroll when popup open
  useEffect(() => {
    if (visible) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const y = parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    }
  }, [visible]);

  const checkPopupStatus = (id) => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(`popup_${id}_shown`) === "true";
  };

  const markPopupAsShown = (id) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(`popup_${id}_shown`, "true");
  };

  const closePopup = () => setVisible(false);

  if (!popup) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="popup-backdrop"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
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
      )}
    </AnimatePresence>
  );
}
