import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration Successful!");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="glass-card w-full max-w-md p-10 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-600/20 blur-[80px] rounded-full"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2 crystal-text-gradient">Create Account</h2>
          <p className="text-slate-400 text-sm mb-8">Join us to manage your animals and profile.</p>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Full Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="w-full glass-card bg-white/5 px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500/50 transition-all text-sm" 
                required 
              />
            </div>
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
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Password</label>
              <input 
                type="password" 
                name="password"
                placeholder="••••••••" 
                className="w-full glass-card bg-white/5 px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500/50 transition-all text-sm" 
                required 
              />
            </div>

            <button type="submit" className="w-full btn-gradient py-4 rounded-2xl font-bold text-lg mt-4 shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-transform">
              Register Now
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-400 font-bold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;