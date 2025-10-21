// "use client";

// import { FaWhatsapp } from "react-icons/fa";
// import { useState } from "react";

// export default function WhatsappButton() {
//   const phoneNumber = "YOUR_PHONE_NUMBER"; // include country code
//   const message = "Hello! I want to know more about your services.";

//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
//       {/* Tooltip */}
//       <span
//         className={`bg-black text-white text-sm px-3 py-1 rounded-md shadow-lg transition-all duration-300 ${
//           hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
//         }`}
//       >
//         Chat with us
//       </span>

//       {/* WhatsApp Button */}
//       <a
//         href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-xl hover:scale-110 transition-transform"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {/* Pulse animation */}
//         <span className="absolute w-20 h-20 bg-green-400 rounded-full opacity-30 animate-ping"></span>
//         <FaWhatsapp className="relative text-3xl" />
//       </a>
//     </div>
//   );
// }








"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function WhatsappButton() {
  const phoneNumber = "+923707140829"; // include country code, e.g., "1234567890"
  const message = "Hello! I'd like to inquire about your services.";

  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <span
        className={`bg-gray-800 text-white text-sm font-medium px-3 py-1.5 rounded-md shadow-md transition-all duration-300 ease-in-out ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Contact Us on WhatsApp
      </span>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us via WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Subtle ripple effect */}
        <span className="absolute inset-0 bg-green-400 rounded-full opacity-0 animate-ripple hover:opacity-20"></span>
        <FaWhatsapp className="relative text-3xl" />
      </a>
    </div>
  );
}