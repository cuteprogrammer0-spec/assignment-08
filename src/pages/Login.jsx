import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged In!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="glass-card w-full max-w-md p-10 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-600/20 blur-[80px] rounded-full"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2 crystal-text-gradient">Welcome Back</h2>
          <p className="text-slate-400 text-sm mb-8">Login to manage your bookings and profile.</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                placeholder="example@mail.com" 
                className="w-full glass-card bg-white/5 px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500/50 transition-all text-sm" 
                required 
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="block text-xs font-bold text-slate-500 uppercase">Password</label>
                <Link to="#" className="text-[10px] text-indigo-400 hover:underline">Forgot Password?</Link>
              </div>
              <input 
                type="password" 
                name="password"
                placeholder="••••••••" 
                className="w-full glass-card bg-white/5 px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500/50 transition-all text-sm" 
                required 
              />
            </div>

            <button type="submit" className="w-full btn-gradient py-4 rounded-2xl font-bold text-lg mt-4 shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-transform">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="px-4 text-xs text-slate-600 font-bold uppercase">OR</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          {/* Social Login with Inline SVG */}
          <button 
            onClick={handleGoogleLogin}
            type="button"
            className="w-full glass-card bg-white/5 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all font-semibold text-sm active:scale-[0.98]"
          >
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center mt-8 text-sm text-slate-500">
            New here?{" "}
            <Link to="/register" className="text-indigo-400 font-bold hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;