import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APIProvider, Map, AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export const CITIES = [
  { name: "San Antonio", lat: 29.4241, lng: -98.4936 },
  { name: "Boerne", lat: 29.7947, lng: -98.7320 },
  { name: "Bulverde", lat: 29.7441, lng: -98.3975 },
  { name: "Castle Hills", lat: 29.5188, lng: -98.5147 },
  { name: "Hill Country Village", lat: 29.5786, lng: -98.4839 },
  { name: "Hollywood Park", lat: 29.5966, lng: -98.4850 },
  { name: "China Grove", lat: 29.3872, lng: -98.3517 },
  { name: "Von Ormy", lat: 29.2894, lng: -98.6475 },
  { name: "Garden Ridge", lat: 29.6269, lng: -98.3075 },
  { name: "Grey Forest", lat: 29.6191, lng: -98.6811 },
  { name: "Timberwood Park", lat: 29.6972, lng: -98.4686 },
  { name: "Adkins", lat: 29.3564, lng: -98.2411 },
  { name: "Atascosa", lat: 29.2777, lng: -98.7050 },
  { name: "Lytle", lat: 29.2319, lng: -98.7964 },
  { name: "Devine", lat: 29.1394, lng: -98.9056 },
  { name: "Natalia", lat: 29.1894, lng: -98.8572 },
  { name: "Elmendorf", lat: 29.2558, lng: -98.3283 },
  { name: "Losoya", lat: 29.2547, lng: -98.4950 },
  { name: "Somerset", lat: 29.2272, lng: -98.6570 },
  { name: "Spring Branch", lat: 29.8788, lng: -98.4239 },
  { name: "New Braunfels", lat: 29.7030, lng: -98.1245 },
  { name: "Seguin", lat: 29.5688, lng: -97.9647 },
  { name: "Schertz", lat: 29.5522, lng: -98.2697 },
  { name: "Cibolo", lat: 29.5550, lng: -98.2392 },
  { name: "Helotes", lat: 29.5794, lng: -98.6806 },
  { name: "Leon Valley", lat: 29.4975, lng: -98.6186 },
  { name: "Fair Oaks Ranch", lat: 29.7561, lng: -98.6272 },
  { name: "Castroville", lat: 29.3552, lng: -98.8770 },
  { name: "Hondo", lat: 29.3475, lng: -99.1417 },
  { name: "Floresville", lat: 29.1338, lng: -98.1569 },
  { name: "La Vernia", lat: 29.3533, lng: -98.1158 },
  { name: "Canyon Lake", lat: 29.8752, lng: -98.2625 }
];

function MapController({ selectedCity }: { selectedCity: typeof CITIES[0] | null }) {
  const map = useMap();
  React.useEffect(() => {
    if (map && selectedCity) {
      map.panTo({ lat: selectedCity.lat, lng: selectedCity.lng });
      map.setZoom(12);
    }
  }, [map, selectedCity]);
  return null;
}

export const ServiceAreas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<typeof CITIES[0] | null>(null);

  const filteredCities = CITIES.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-500 drop-shadow-[0_0_10px_rgba(45,212,191,0.2)] mb-6 tracking-tight">Service Areas</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Providing professional septic installation, maintenance, repair, and pumping services throughout San Antonio and South Central Texas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        {/* Map Section */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900 flex flex-col lg:flex-row h-[600px]">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-800 h-64 lg:h-full">
            <div className="p-6 border-b border-slate-800">
              <h2 className="text-2xl font-bold text-teal-400 mb-4">Select a City</h2>
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-white"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
              {filteredCities.map((city, index) => (
                <button 
                  key={index} 
                  onClick={() => setSelectedCity(city)}
                  className={`w-full text-left p-4 rounded-xl flex items-center gap-3 transition-all cursor-pointer border ${selectedCity?.name === city.name ? 'bg-teal-900/30 border-teal-500' : 'bg-slate-950 border-slate-800 hover:border-teal-400 hover:bg-slate-900'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${selectedCity?.name === city.name ? 'bg-teal-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className={`font-semibold ${selectedCity?.name === city.name ? 'text-teal-400' : 'text-slate-300'}`}>{city.name}, TX</span>
                </button>
              ))}
            </div>
          </div>

          {/* Map Viewer */}
          <div className="w-full lg:w-2/3 h-full relative">
            {!hasValidKey ? (
              <div className="flex items-center justify-center h-full bg-slate-800 text-slate-400 p-8 text-center flex-col gap-4">
                <h3 className="text-xl font-bold text-white">Google Maps API Key Required</h3>
                <p>To view the interactive map, you need to provide a Google Maps API Key.</p>
                <p className="text-sm">
                  Open <strong>Settings</strong> (⚙️) &rarr; <strong>Secrets</strong><br/>
                  Add <code>GOOGLE_MAPS_PLATFORM_KEY</code> with your key.<br/>
                  The map will appear automatically!
                </p>
              </div>
            ) : (
              <APIProvider apiKey={API_KEY} version="weekly">
                <Map
                  defaultCenter={{ lat: 29.4241, lng: -98.4936 }} // Bexar County
                  defaultZoom={9}
                  mapId="DEMO_MAP_ID"
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                  style={{ width: '100%', height: '100%' }}
                  disableDefaultUI={true}
                  gestureHandling="greedy"
                >
                  <MapController selectedCity={selectedCity} />
                  {CITIES.map((city, idx) => (
                    <AdvancedMarker 
                      key={idx} 
                      position={{ lat: city.lat, lng: city.lng }} 
                      title={city.name}
                      onClick={() => setSelectedCity(city)}
                    >
                      <Pin background={selectedCity?.name === city.name ? "#14b8a6" : "#0f172a"} glyphColor="#fff" borderColor={selectedCity?.name === city.name ? "#0d9488" : "#334155"} />
                    </AdvancedMarker>
                  ))}
                </Map>
              </APIProvider>
            )}
          </div>
        </div>

        <div className="mt-20 bg-teal-900/30 border border-teal-900/50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Location?</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Our service footprint is continually expanding across the Texas Hill Country and South Texas. Contact us to see if we can accommodate your specific residential or commercial septic needs.
          </p>
          <Link to="/contact" className="inline-block bg-slate-800 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};
