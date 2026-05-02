import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Details = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(item => item.id === parseInt(id));
        setAnimal(selected);
        setLoading(false);
      });
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    
    toast.success('Successfully Booked! Our team will contact you soon.');
    e.target.reset();
  };

  if (loading) return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg text-indigo-500"></span></div>;

  if (!animal) return <div className="text-center py-20 text-2xl font-bold">Animal Not Found!</div>;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Image & Key Info */}
        <div className="space-y-6">
          <div className="glass-card p-4 rounded-[3rem]">
            <img src={animal.image} alt={animal.name} className="w-full h-[400px] object-cover rounded-[2.5rem]" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-card p-6 rounded-3xl text-center">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Weight</p>
              <p className="text-lg font-bold">{animal.weight} KG</p>
            </div>
            <div className="glass-card p-6 rounded-3xl text-center">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Age</p>
              <p className="text-lg font-bold">{animal.age} Yrs</p>
            </div>
            <div className="glass-card p-6 rounded-3xl text-center">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Breed</p>
              <p className="text-sm font-bold truncate">{animal.breed}</p>
            </div>
          </div>
        </div>

        {/* Right Side: Details & Booking Form */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-black mb-4 crystal-text-gradient">{animal.name}</h1>
            <p className="text-slate-400 leading-relaxed mb-6">{animal.description}</p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-indigo-400">৳{animal.price.toLocaleString()}</span>
              <span className="px-4 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-bold border border-indigo-500/20">
                {animal.location}
              </span>
            </div>
          </div>

          {/* Booking Form */}
          <div className="glass-card p-8 rounded-[2.5rem] border-indigo-500/10">
            <h3 className="text-xl font-bold mb-6">Quick Booking Form</h3>
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full glass-card bg-white/5 px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500/50 transition-all" required />
                <input type="email" placeholder="Your Email" className="w-full glass-card bg-white/5 px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500/50 transition-all" required />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full glass-card bg-white/5 px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500/50 transition-all" required />
              <textarea placeholder="Your Full Address" rows="3" className="w-full glass-card bg-white/5 px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500/50 transition-all resize-none" required></textarea>
              <button type="submit" className="w-full btn-gradient py-4 rounded-2xl font-bold text-lg shadow-xl">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;