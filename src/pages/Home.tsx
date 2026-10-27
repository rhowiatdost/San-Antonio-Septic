import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Users, Wrench } from 'lucide-react';
import { ServiceCards } from '../components/sections/ServiceCards';
import { DesignReferral } from '../components/sections/DesignReferral';
import { LifecycleSection } from '../components/sections/LifecycleSection';
import { CarePlansPreview } from '../components/sections/CarePlansPreview';
import { COMPANY_INFO } from '../data/config';

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Background Image: Excavator / Septic Installation */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/1f/Septic_tank_installation_-_geograph.org.uk_-_7914060.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-teal-500 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)] tracking-tight mb-6 leading-[1.1]">
              San Antonio's <span className="text-teal-400">Full-Service</span> Septic Company
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-8 leading-snug">
              Installation. Maintenance. Repairs. Pumping. <br className="hidden md:block" />
              One Call Handles It All.
            </p>
            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
              {COMPANY_INFO.name} provides complete residential and commercial septic services throughout San Antonio and surrounding communities. From installing a new system to maintaining, repairing, and pumping your existing system, our team is here to help keep your property running smoothly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-teal-500 text-slate-950 px-8 py-4 rounded-xl text-base font-bold hover:bg-teal-400 transition-colors shadow-lg"
              >
                REQUEST SEPTIC SERVICE
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900/10 text-white border border-white/20 px-8 py-4 rounded-xl text-base font-bold hover:bg-slate-900/20 transition-colors backdrop-blur-sm"
              >
                CALL {COMPANY_INFO.phone}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-300 tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-400" /> RESIDENTIAL & COMMERCIAL
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-teal-400" /> FULL-SERVICE SOLUTIONS
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-400" /> MAINTENANCE PLANS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceCards />

      {/* Design Referral Section (Placement 1) */}
      <DesignReferral className="bg-slate-950" />

      {/* Lifecycle Section */}
      <LifecycleSection />

      {/* Residential & Commercial Preview */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Residential */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10 lg:p-14">
              <h3 className="text-3xl font-extrabold text-white mb-4">Residential Services</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Complete septic solutions for homeowners, rural properties, ranches, and new construction. We handle new installations, routine pumping, and emergency repairs to keep your home's system functioning perfectly.
              </p>
              <ul className="space-y-3 mb-10">
                {['New Septic Installation', 'Replacement Systems', 'Real Estate Septic Inspections', 'Maintenance & Repairs', 'Septic Tank Pumping', 'Preventive Maintenance Plans'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/residential" className="inline-flex items-center gap-2 text-white font-bold hover:text-teal-400 transition-colors">
                VIEW RESIDENTIAL SERVICES <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10 lg:p-14">
              <h3 className="text-3xl font-extrabold text-white mb-4">Commercial Services</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Septic downtime disrupts business. We provide robust commercial septic installation, scheduled pumping, grease trap services, and customized maintenance programs for restaurants, RV parks, and commercial facilities.
              </p>
              <ul className="space-y-3 mb-10">
                {['Commercial Septic Installation', 'Preventive Maintenance', 'Scheduled & Emergency Pumping', 'Grease Trap Pumping', 'Customized Maintenance Programs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/commercial" className="inline-flex items-center gap-2 text-teal-400 font-bold hover:text-teal-300 transition-colors">
                REQUEST COMMERCIAL SERVICE <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans Preview */}
      <CarePlansPreview />

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Why Choose {COMPANY_INFO.name}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "FULL-SERVICE", desc: "One company for installation, maintenance, repairs, and pumping." },
              { title: "RESIDENTIAL & COMMERCIAL", desc: "Tailored solutions for both homeowners and businesses." },
              { title: "PREVENTIVE APPROACH", desc: "Focus on identifying potential problems before they become major failures." },
              { title: "CLEAR COMMUNICATION", desc: "We help you understand exactly what is happening with your septic system." },
              { title: "MAINTENANCE MEMBERSHIPS", desc: "Choose the exact level of preventive care and protection that fits your property." },
              { title: "LOCAL SERVICE", desc: "Services built around the specific needs of San Antonio and South Central Texas." },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-teal-500/20 shadow-sm border border-slate-800">
                <div className="w-12 h-12 bg-teal-900/50 text-teal-400 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mb-6">
            Septic Emergency? Don't Wait.
          </h2>
          <p className="text-lg text-slate-900 font-medium mb-10 max-w-2xl mx-auto">
            Sewage backup • High-water alarm • Pump failure • Overflow • Strong sewage odors
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="bg-slate-950 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors"
            >
              CALL FOR HELP
            </a>
            <Link
              to="/contact"
              className="bg-teal-500 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-teal-400 transition-colors"
            >
              REQUEST EMERGENCY SERVICE
            </Link>
          </div>
          <p className="text-sm text-slate-900 mt-6 font-medium">
            * {COMPANY_INFO.emergencyAvailability}
          </p>
        </div>
      </section>

    </div>
  );
};
