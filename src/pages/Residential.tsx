import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { DesignReferral } from '../components/sections/DesignReferral';

export const Residential = () => {
  return (
    <div className="w-full pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-500 drop-shadow-[0_0_10px_rgba(45,212,191,0.2)] mb-6 tracking-tight">Residential Septic Services</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Professional installation, maintenance, repair, and pumping services for homeowners, rural properties, and new construction across San Antonio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-32">
        
        {/* Installation */}
        <section id="installation" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-slate-800 rounded-3xl aspect-[4/3] flex items-center justify-center text-slate-400">
             [Installation Image Placeholder]
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Septic Installation & Replacement</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We professionally coordinate and install new residential septic systems for long-term performance. We handle conventional systems, aerobic treatment systems, drip irrigation, and low-pressure distribution systems based on your approved design and site conditions.
            </p>
            <div className="bg-teal-900/30 rounded-2xl p-6 border border-teal-900/50">
              <h3 className="font-bold text-white mb-2">The Installation Process</h3>
              <ul className="space-y-2">
                {['1. Initial Project Planning & Site Eval', '2. Approved Septic System Design', '3. Permitting and Approval', '4. Professional Installation', '5. Required Inspection & System Startup', '6. Owner Education & Long-Term Maintenance'].map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-medium">
                    <Check className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" /> {step}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact" className="inline-flex bg-slate-800 text-white border border-slate-700 font-bold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
              REQUEST AN INSTALLATION QUOTE
            </Link>
          </div>
        </section>

        {/* Design Referral placement 2 */}
        <DesignReferral />

        {/* Maintenance */}
        <section id="maintenance" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Preventive Maintenance</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Routine inspections and preventive maintenance are essential for aerobic systems and traditional tanks alike. We monitor pumps, aerators, control panels, filters, and spray heads to identify potential problems before they become expensive repairs.
            </p>
            <Link to="/maintenance-plans" className="inline-flex items-center gap-2 text-teal-400 font-bold drop-shadow-[0_0_5px_rgba(45,212,191,0.3)] hover:text-teal-300 transition-colors">
              COMPARE MAINTENANCE PLANS <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="bg-slate-800 rounded-3xl aspect-[4/3] flex items-center justify-center text-slate-400">
            [Maintenance Image Placeholder]
          </div>
        </section>

        {/* Repair & Pumping */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="repair" className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Septic Repairs</h3>
            <p className="text-slate-400 mb-6">
              Expert troubleshooting for septic alarms, pump failures, aerator issues, control panel problems, broken sprinkler heads, and sewage backups. Don't wait when you notice a problem.
            </p>
            <Link to="/contact" className="inline-block bg-teal-500 text-slate-950 font-bold px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors">
              REQUEST A REPAIR
            </Link>
          </div>
          
          <div id="pumping" className="bg-slate-900 border border-slate-800 text-white p-8 md:p-12 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Septic Tank Pumping</h3>
            <p className="text-slate-300 mb-6">
              Routine and on-demand septic tank pumping to prevent backups and system failure. Regular pumping is the most important thing you can do to extend the life of your drain field.
            </p>
            <Link to="/pumping" className="inline-block bg-slate-800 text-white font-bold px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
              SCHEDULE PUMPING
            </Link>
          </div>
        </section>

        {/* Real Estate Inspections */}
        <section id="inspections" className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-14 text-center lg:text-left flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Real Estate Septic Inspections</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              Buying or selling a property? We provide thorough, professional real estate septic inspections to ensure the system is functioning correctly, code-compliant, and free of hidden issues before closing. We provide detailed reports to give buyers and sellers complete peace of mind.
            </p>
            <Link to="/contact" className="inline-flex bg-teal-500 text-slate-950 font-bold px-8 py-4 rounded-lg hover:bg-teal-400 transition-colors">
              SCHEDULE AN INSPECTION
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
