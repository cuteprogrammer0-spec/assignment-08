import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider"; 
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); 

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "text-indigo-400 font-bold" : "hover:text-indigo-400 transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/animals" 
          className={({ isActive }) => 
            isActive ? "text-indigo-400 font-bold" : "hover:text-indigo-400 transition"
          }
        >
          All Animals
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 px-2 py-3">
      <div className="glass-card max-w-7xl mx-auto px-4 py-3 rounded-2xl flex justify-between items-center border border-white/10 shadow-xl backdrop-blur-md bg-white/5">
        
        {/* Left Side: Logo */}
        <div className="flex-none">
          <Link to="/" className="text-xl sm:text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
            QurbaniHat
          </Link>
        </div>

        {/* Center: Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Right Side: User Profile & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {user && (
            <div className="avatar online">
              <div className="w-8 sm:w-10 rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-1">
                <img 
                  src={user?.photoURL || "https://i.ibb.co/mJR9n1m/user.png"} 
                  alt="User Profile" 
                />
              </div>
            </div>
          )}

          {/* Logout Button (Desktop only) */}
          {user && (
            <button 
              onClick={handleLogout}
              className="hidden md:block text-xs font-semibold px-3 py-1.5 border border-white/10 rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-all"
            >
              Logout
            </button>
          )}

          {/* Login/Register (If no user) */}
          {!user && (
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/login" className="text-sm font-medium hover:text-indigo-400">Login</Link>
              <Link to="/register" className="bg-indigo-600 px-4 py-2 rounded-xl text-xs font-bold shadow-lg">Register</Link>
            </div>
          )}
          
          {/* Mobile Menu Dropdown */}
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-[#0f172a] border border-white/10 rounded-2xl w-52 space-y-3">
              {navLinks}
              <div className="border-t border-white/10 pt-2 mt-2">
                {!user ? (
                  <>
                    <li><Link to="/login" className="block text-indigo-400 py-1">Login</Link></li>
                    <li><Link to="/register" className="block text-indigo-400 py-1">Register</Link></li>
                  </>
                ) : (
                  <li>
                    <button onClick={handleLogout} className="text-red-400 font-bold w-full text-left">Logout</button>
                  </li>
                )}
              </div>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;