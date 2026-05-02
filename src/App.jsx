import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// মেইন কম্পোনেন্টগুলো ইমপোর্ট করছি
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './routes/PrivateRoute'; // প্রাইভেট রুট ইমপোর্ট করা হলো

// পেজগুলো ইমপোর্ট করছি
import Home from './pages/Home';
import AllAnimals from './pages/AllAnimals';
import Details from './pages/Details';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0f172a] text-slate-200 selection:bg-indigo-500/30">
        {/* টোস্ট নোটিফিকেশন */}
        <Toaster position="top-center" gutter={8} />

        {/* নেভবার */}
        <Navbar />

        {/* মেইন কন্টেন্ট এরিয়া */}
        <main className="flex-grow">
          <Routes>
            {/* হোম রুট */}
            <Route path="/" element={<Home />} />
            
            {/* এনিম্যালস রুট */}
            <Route path="/animals" element={<AllAnimals />} />

            {/* ডিটেইলস রুট (এখন এটি সুরক্ষিত বা Private) */}
            <Route 
              path="/details/:id" 
              element={
                <PrivateRoute>
                  <Details />
                </PrivateRoute>
              } 
            />

            {/* রেজিস্ট্রেশন রুট */}
            <Route path="/register" element={<Register />} />

            {/* লগইন রুট */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* ফুটার */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;