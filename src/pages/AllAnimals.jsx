import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [displayAnimals, setDisplayAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setAnimals(data);
        setDisplayAnimals(data);
        setLoading(false);
      });
  }, []);

  
  const handleSort = (type) => {
    const sorted = [...displayAnimals];
    if (type === 'asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === 'desc') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setDisplayAnimals(sorted);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold crystal-text-gradient">All Livestock</h1>
          <p className="text-slate-400 mt-2">Find the best match for your Qurbani needs</p>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-500">Sort by Price:</span>
          <select 
            onChange={(e) => handleSort(e.target.value)}
            className="glass-card px-4 py-2 rounded-xl outline-none text-sm cursor-pointer border-white/10"
          >
            <option value="default">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg text-indigo-500"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayAnimals.map(animal => (
            <div key={animal.id} className="glass-card rounded-[2.5rem] p-4 group transition-all duration-300 hover:bg-white/[0.05]">
              <div className="relative h-64 overflow-hidden rounded-[2rem] mb-6">
                <img src={animal.image} alt={animal.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4 glass-card px-4 py-1.5 rounded-full text-xs font-bold">
                  {animal.breed}
                </div>
              </div>
              
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{animal.name}</h3>
                  <span className="text-indigo-400 font-bold">৳{animal.price.toLocaleString()}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{animal.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 p-3 rounded-2xl text-center">
                    <p className="text-[10px] uppercase text-slate-500 font-bold">Weight</p>
                    <p className="text-sm font-semibold">{animal.weight}kg</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-2xl text-center">
                    <p className="text-[10px] uppercase text-slate-500 font-bold">Age</p>
                    <p className="text-sm font-semibold">{animal.age} Years</p>
                  </div>
                </div>

                <Link to={`/details/${animal.id}`} className="block w-full text-center btn-gradient py-4 rounded-2xl font-bold text-sm">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAnimals;