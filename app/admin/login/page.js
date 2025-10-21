// // app/login/page.jsx
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Eye, EyeOff } from 'lucide-react'; // simple icons

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const res = await fetch('/api/admin-auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ usernameOrEmail: username, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || 'Login failed');
//       } else {
//         router.push('/admin'); 
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-black to-neutral-800 overflow-hidden">
//       <div className="relative z-10 w-full max-w-md p-6 md:p-8">
//         <div className="relative bg-neutral-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 border border-neutral-700/50 transform transition-all duration-500 hover:scale-105">
//           <div
//             className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50 animate-[pulse_3s_ease-in-out_infinite] rounded-2xl"
//             aria-hidden
//           />

//           <div className="relative z-10">
//             <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 tracking-tight">
//               Admin Portal
//             </h1>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Username */}
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-neutral-300"
//                 >
//                   Username or Email
//                 </label>
//                 <input
//                   id="username"
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="mt-2 w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
//                   placeholder="Enter your username"
//                   required
//                 />
//               </div>

//               {/* Password with eye toggle */}
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-neutral-300"
//                 >
//                   Password
//                 </label>
//                 <div className="relative mt-2">
//                   <input
//                     id="password"
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 pr-12"
//                     placeholder="Enter your password"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-white"
//                   >
//                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                   </button>
//                 </div>
//               </div>

//               {/* Error message */}
//               {error && (
//                 <p className="text-red-500 text-sm text-center">{error}</p>
//               )}

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
//               >
//                 {isLoading ? 'Signing in...' : 'Sign In'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div
//         className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.2)_0%,transparent_50%)] opacity-50"
//         aria-hidden
//       />
//     </main>
//   );
// }



















'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin-auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail: username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
      } else {
        // ✅ Force full render of admin page after login
        router.replace('/admin');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white overflow-hidden">
      <div className="relative z-10 w-full max-w-md p-6 md:p-8">
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-orange-300 transform transition-all duration-500 hover:scale-105">
          <div
            className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-navy-800/20 opacity-50 rounded-2xl animate-[pulse_3s_ease-in-out_infinite]"
            aria-hidden
          />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-6 tracking-tight">
              Admin Portal
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-navy-800"
                >
                  Username or Email
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 w-full px-4 py-3 bg-orange-50 border border-orange-300 rounded-lg text-navy-900 placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your username"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-navy-800"
                >
                  Password
                </label>
                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-orange-50 border border-orange-300 rounded-lg text-navy-900 placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300 pr-12"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-navy-500 hover:text-navy-900"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-navy-900 text-white font-semibold rounded-lg shadow-lg hover:from-orange-400 hover:to-navy-800 focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.2)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(30,58,138,0.2)_0%,transparent_50%)] opacity-50"
        aria-hidden
      />
    </main>
  );
}
