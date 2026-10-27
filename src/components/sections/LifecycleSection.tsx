import React from 'react';
import { ArrowRight, Settings, Wrench, Droplet, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LifecycleSection = () => {
  const steps = [
    { num: '01', title: 'INSTALL', icon: CheckCircle, text: 'Professional installation following approved designs.' },
    { num: '02', title: 'MAINTAIN', icon: Settings, text: 'Routine inspections to ensure optimal performance.' },
    { num: '03', title: 'PUMP', icon: Droplet, text: 'Scheduled pumping to prevent costly backups.' },
    { num: '04', title: 'REPAIR', icon: Wrench, text: 'Expert troubleshooting for alarms and components.' },
  ];

  return (
    <section className="py-24 bg-slate-950 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Your Septic System. One Service Company. Long-Term Support.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Once your septic system is designed and approved, you shouldn't have to search for different companies for every stage of ownership. We are your long-term septic installation and service provider.
          </p>
        </div>

        {/* Desktop horizontal, Mobile stacked */}
        <div className="relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm relative group hover:border-teal-400 transition-colors">
                <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-teal-400" />
                </div>
                <div className="text-sm font-bold text-slate-400 mb-2">STAGE {step.num}</div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-teal-500 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-teal-400 transition-colors shadow-lg"
          >
            BECOME A SAN ANTONIO SEPTIC CUSTOMER
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
