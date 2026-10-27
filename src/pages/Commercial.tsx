import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Building, Truck, ShieldAlert } from 'lucide-react';

export const Commercial = () => {
  return (
    <div className="w-full pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-500 drop-shadow-[0_0_10px_rgba(45,212,191,0.2)] mb-6 tracking-tight">Commercial Septic Services</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Commercial Septic Services Built Around Your Business. Because septic downtime can disrupt operations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-900 p-8 rounded-2xl border border-teal-500/20 border border-slate-800 shadow-sm">
            <Building className="w-8 h-8 text-teal-500 mb-6 drop-shadow-[0_0_10px_rgba(45,212,191,0.2)]" />
            <h3 className="text-xl font-bold text-white mb-3">Install & Maintain</h3>
            <p className="text-slate-400">
              High-capacity commercial septic installations and customized preventive maintenance programs for restaurants, offices, retail, RV parks, and more.
            </p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-teal-500/20 border border-slate-800 shadow-sm flex flex-col">
            <Truck className="w-8 h-8 text-teal-500 mb-6 drop-shadow-[0_0_10px_rgba(45,212,191,0.2)]" />
            <h3 className="text-xl font-bold text-white mb-3">Grease Trap Pumping</h3>
            <p className="text-slate-400 flex-grow mb-6">
              Scheduled and on-demand grease trap pumping services for commercial kitchens and food-service facilities. Reliable service documentation included.
            </p>
            <Link to="/grease-traps" className="inline-block text-center bg-slate-800 text-white font-bold px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
              LEARN MORE
            </Link>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-teal-500/20 border border-slate-800 shadow-sm">
            <ShieldAlert className="w-8 h-8 text-teal-500 mb-6 drop-shadow-[0_0_10px_rgba(45,212,191,0.2)]" />
            <h3 className="text-xl font-bold text-white mb-3">Emergency & Repair</h3>
            <p className="text-slate-400">
              Fast commercial repairs and emergency pumping (when available) to ensure your business operations experience minimal disruption.
            </p>
          </div>
        </div>

        <div className="bg-slate-950 rounded-3xl p-8 md:p-16 border border-slate-800">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-6">Recurring Service Programs</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              We allow businesses to request customized maintenance and pumping schedules. Whether you need monthly grease trap service or quarterly commercial septic maintenance, we'll build a reliable program around your needs.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Restaurants & Bars', 'Retail Properties', 'Warehouses & Offices', 'Apartment Communities', 'RV Parks & Campgrounds', 'Event Venues'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <Check className="w-5 h-5 text-teal-500" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors">
              REQUEST COMMERCIAL QUOTE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
