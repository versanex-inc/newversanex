export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse" />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo SVG */}
        <div className="relative w-32 h-32 flex items-center justify-center animate-bounce">
          <svg
            viewBox="0 0 200 200"
            className="w-28 h-28 relative z-20 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]"
          >
            <path
              d="M 50 40 L 100 140"
              stroke="#fbbf24"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 150 40 L 100 140"
              stroke="#fbbf24"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-amber-300 font-light tracking-[0.2em] text-lg uppercase animate-pulse">
            Loading
          </p>
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping delay-150" />
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping delay-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
