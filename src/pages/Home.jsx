import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setAnimals(data.slice(0, 4)); 
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative text-center pt-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 crystal-text-gradient leading-tight">
          Find Your Perfect <br /> Qurbani Partner
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
          Explore our handpicked collection of healthy, organic, and premium livestock 
          delivered directly from the farm to your doorstep.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/animals" className="btn-gradient px-8 py-4 rounded-2xl font-bold transition-transform hover:scale-105">
            Browse All Animals
          </Link>
          <button className="glass-card px-8 py-4 rounded-2xl font-bold hover:bg-white/5 transition-all">
            Watch Story
          </button>
        </div>
      </section>

      {/* 2. Featured Animals Section */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Collection</h2>
            <p className="text-slate-500">Top picks for this season's Qurbani</p>
          </div>
          <Link to="/animals" className="text-indigo-400 font-semibold hover:underline">View All</Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="h-80 glass-card rounded-3xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {animals.map(animal => (
              <div key={animal.id} className="group glass-card rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="relative h-56 overflow-hidden">
                  <img src={animal.image} alt={animal.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
                    {animal.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-400 transition-colors">{animal.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{animal.location}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-lg font-bold text-indigo-400">৳{animal.price.toLocaleString()}</span>
                    <Link to={`/details/${animal.id}`} className="text-sm font-bold px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Extra Section: Qurbani Tips (Requirement 3) */}
      <section className="container mx-auto px-6 py-16">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Expert Qurbani Tips</h2>
            <div className="space-y-6">
              {[
                { title: "Health Check", desc: "Ensure the animal is active and has a bright look in its eyes." },
                { title: "Teeth Verification", desc: "Check if the animal has reached the required age by its teeth." },
                { title: "Weight Estimate", desc: "Verify the weight visually or through a reliable measurement scale." }
              ].map((tip, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">{idx+1}</div>
                  <div>
                    <h4 className="font-bold">{tip.title}</h4>
                    <p className="text-slate-400 text-sm">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;