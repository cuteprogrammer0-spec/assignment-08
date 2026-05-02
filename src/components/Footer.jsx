const Footer = () => {
  return (
    <footer className="glass-card mt-20 py-16 px-6 rounded-t-[4rem] border-x-0 border-b-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold mb-6 crystal-text-gradient">QurbaniHat</h3>
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            Providing the finest quality livestock with transparency and care. 
            Connect with the best farms directly from your home.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Navigation</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="hover:text-indigo-400 cursor-pointer transition">Home</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">All Animals</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">My Bookings</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="hover:text-indigo-400 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Terms & Privacy</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">FAQ</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} QurbaniHat. Handcrafted by Mahdi Hasan.
      </div>
    </footer>
  );
};

export default Footer;