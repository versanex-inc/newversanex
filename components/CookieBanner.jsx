// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { MdClose } from "react-icons/md"

// const COOKIE_NAME = "cookie_consent"
// const COOKIE_EXPIRATION_DAYS = 365

// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
//   return null;
// }

// function setCookie(name, value, days) {
//   let expires = "";
//   if (days) {
//     const date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

// const categories = [
//   { id: "essential", label: "Essential Cookies", description: "These are required for the website to function properly.", alwaysOn: true },
//   { id: "analytics", label: "Analytics Cookies", description: "These help us understand how visitors interact with our website." },
//   { id: "marketing", label: "Marketing Cookies", description: "These allow us to show you personalized ads and content." },
// ]

// export default function CookieBanner() {
//   const [showBanner, setShowBanner] = useState(false)
//   const [showModal, setShowModal] = useState(false)
//   const [preferences, setPreferences] = useState({
//     essential: true,
//     analytics: false,
//     marketing: false,
//   })

//   useEffect(() => {
//     const consent = getCookie(COOKIE_NAME)
//     if (!consent) {
//       setShowBanner(true)
//     } else {
//       setPreferences(JSON.parse(consent))
//     }
//   }, [])

//   useEffect(() => {
//     if (showBanner) {
//       const scrollY = window.scrollY;
//       document.body.style.position = "fixed";
//       document.body.style.top = `-${scrollY}px`;
//       document.body.style.left = "0";
//       document.body.style.right = "0";
//       document.body.style.width = "100%";
//     } else {
//       const y = Math.abs(parseInt(document.body.style.top || "0"));
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.left = "";
//       document.body.style.right = "";
//       document.body.style.width = "";
//       window.scrollTo(0, y);
//     }

//     return () => {
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.left = "";
//       document.body.style.right = "";
//       document.body.style.width = "";
//     };
//   }, [showBanner]);

//   const handleAcceptAll = () => {
//     const allAccepted = {
//       essential: true,
//       analytics: true,
//       marketing: true,
//     }
//     setCookie(COOKIE_NAME, JSON.stringify(allAccepted), COOKIE_EXPIRATION_DAYS)
//     setShowBanner(false)
//     // Here you would enable all cookies based on preferences
//   }

//   const handleSavePreferences = () => {
//     setCookie(COOKIE_NAME, JSON.stringify(preferences), COOKIE_EXPIRATION_DAYS)
//     setShowModal(false)
//     setShowBanner(false)
//     window.location.reload();
//     // Here you would enable cookies based on preferences
//   }

//   const togglePreference = (id) => {
//     if (id !== "essential") {
//       setPreferences((prev) => ({ ...prev, [id]: !prev[id] }))
//     }
//   }

//   if (!showBanner) return null

//   return (
//     <>
//       <AnimatePresence>
//         {showBanner && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black/30 z-[2147483645] backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ y: "100%", opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: "100%", opacity: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[2147483646] bg-white rounded-t-2xl rounded-b-none shadow-2xl p-6 max-w-6xl w-[90%]"
//             >
//               <p className="text-gray-700 text-base mb-6">
//                 We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &apos;Accept All&apos;, you consent to our use of cookies. <a href="/privacy-policy" className="text-[#f2ad08] hover:underline">Read our Privacy Policy</a> for more information.
//               </p>
//               <div className="flex flex-col md:flex-row gap-4 justify-end">
//                 <button
//                   onClick={() => setShowModal(true)}
//                   className="px-6 py-2 border border-[#f2ad08] text-[#f2ad08] rounded-full font-semibold hover:bg-[#f2ad08]/10 transition-colors"
//                 >
//                   Customize
//                 </button>
//                 <button
//                   onClick={handleAcceptAll}
//                   className="px-6 py-2 bg-[#f2ad08] text-white rounded-full font-semibold hover:bg-[#d88f07] transition-colors"
//                 >
//                   Accept All
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
//             onClick={() => setShowModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 shadow-xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold text-gray-900">Cookie Preferences</h2>
//                 <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
//                   <MdClose size={24} />
//                 </button>
//               </div>
              
//               <div className="space-y-6">
//                 {categories.map((cat) => (
//                   <div key={cat.id} className="flex items-start gap-4">
//                     <div className="mt-1">
//                       <input
//                         type="checkbox"
//                         id={cat.id}
//                         checked={preferences[cat.id]}
//                         onChange={() => togglePreference(cat.id)}
//                         disabled={cat.alwaysOn}
//                         className="w-5 h-5 rounded border-gray-300 text-[#f2ad08] focus:ring-[#f2ad08]"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor={cat.id} className="font-semibold text-gray-900">{cat.label}</label>
//                       <p className="text-sm text-gray-600">{cat.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mt-8 flex justify-end">
//                 <button
//                   onClick={handleSavePreferences}
//                   className="px-6 py-2 bg-[#f2ad08] text-white rounded-full font-semibold hover:bg-[#d88f07] transition-colors"
//                 >
//                   Save Preferences
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }













"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MdClose } from "react-icons/md"

const COOKIE_NAME = "cookie_consent"
const COOKIE_EXPIRATION_DAYS = 365

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const categories = [
  { id: "essential", label: "Essential Cookies", description: "These are required for the website to function properly.", alwaysOn: true },
  { id: "analytics", label: "Analytics Cookies", description: "These help us understand how visitors interact with our website." },
  { id: "marketing", label: "Marketing Cookies", description: "These allow us to show you personalized ads and content." },
]

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true,
  })

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME)
    if (!consent) {
      setShowBanner(true)
    } else {
      setPreferences(JSON.parse(consent))
    }
  }, [])

  useEffect(() => {
    if (showBanner) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const y = Math.abs(parseInt(document.body.style.top || "0"));
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [showBanner]);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    }
    setCookie(COOKIE_NAME, JSON.stringify(allAccepted), COOKIE_EXPIRATION_DAYS)
    setShowBanner(false)
    window.location.reload();
    // Here you would enable all cookies based on preferences
  }

  const handleSavePreferences = () => {
    setCookie(COOKIE_NAME, JSON.stringify(preferences), COOKIE_EXPIRATION_DAYS)
    setShowModal(false)
    setShowBanner(false)
    window.location.reload();
    // Here you would enable cookies based on preferences
  }

  const togglePreference = (id) => {
    if (id !== "essential") {
      setPreferences((prev) => ({ ...prev, [id]: !prev[id] }))
    }
  }

  if (!showBanner) return null

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 z-[2147483645] backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[2147483646] bg-white rounded-t-2xl rounded-b-none shadow-2xl p-6 max-w-6xl w-[90%]"
            >
              <p className="text-gray-700 text-base mb-6">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &apos;Accept All&apos;, you consent to our use of cookies. <a href="/privacy-policy" className="text-[#f2ad08] hover:underline">Read our Privacy Policy</a> for more information.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-end">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-6 py-2 border border-[#f2ad08] text-[#f2ad08] rounded-full font-semibold hover:bg-[#f2ad08]/10 transition-colors"
                >
                  Customize
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-[#f2ad08] text-white rounded-full font-semibold hover:bg-[#d88f07] transition-colors"
                >
                  Accept All
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Cookie Preferences</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                  <MdClose size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                {categories.map((cat) => (
                  <div key={cat.id} className="flex items-start gap-4">
                    <div className="mt-1">
                      <input
                        type="checkbox"
                        id={cat.id}
                        checked={preferences[cat.id]}
                        onChange={() => togglePreference(cat.id)}
                        disabled={cat.alwaysOn}
                        className="w-5 h-5 rounded border-gray-300 text-[#f2ad08] focus:ring-[#f2ad08]"
                      />
                    </div>
                    <div>
                      <label htmlFor={cat.id} className="font-semibold text-gray-900">{cat.label}</label>
                      <p className="text-sm text-gray-600">{cat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-[#f2ad08] text-white rounded-full font-semibold hover:bg-[#d88f07] transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}