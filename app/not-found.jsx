import Link from "next/link";
import { FiHome, FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-center px-6">
      {/* Animated icon */}
      <div className="relative">
        <div className="absolute -inset-8 bg-[#f2ad08]/20 rounded-full blur-3xl animate-pulse" />
        <FiAlertTriangle className="text-[#f2ad08] text-[100px] relative z-10 drop-shadow-lg" />
      </div>

      {/* Text */}
      <h1 className="mt-8 text-7xl font-extrabold text-gray-900 tracking-tight">
        404
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[#f2ad08] hover:bg-[#d88f07] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FiHome className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      {/* Footer text */}
      <div className="mt-16">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} VersaNex — Crafted with 💛
        </p>
      </div>
    </div>
  );
}
