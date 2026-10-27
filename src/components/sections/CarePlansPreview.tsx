import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAINTENANCE_PLANS } from '../../data/config';
import { cn } from '../../lib/utils';

export const CarePlansPreview = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-2">San Antonio Septic Care Plans</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            The Smarter Way to Take Care of Your Septic System
          </h3>
          <p className="text-lg text-slate-400">
            Progressive levels of preventive maintenance, priority scheduling, repair discounts, and annual pumping credits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {MAINTENANCE_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={cn(
                "flex flex-col bg-slate-800 rounded-2xl border border-teal-500/20 border relative transition-all duration-300",
                plan.isPopular ? "border-teal-400 shadow-[0_0_30px_rgba(45,212,191,0.15)]" : "border-slate-700 hover:border-slate-500"
              )}
            >
              {plan.label && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  {plan.label}
                </div>
              )}
              {plan.isPopular && !plan.label && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6 border-b border-slate-700 text-center">
                <h4 className="text-xl font-bold text-white mb-1">{plan.name}</h4>
                <div className="text-xs text-teal-400 font-semibold uppercase tracking-wider mb-4 h-8 flex items-center justify-center">
                  {plan.tagline}
                </div>
                <div className="flex justify-center items-end gap-1 mb-2">
                  <span className="text-3xl font-extrabold">${plan.monthlyPrice}</span>
                  <span className="text-slate-400 text-sm mb-1">/mo</span>
                </div>
                <div className="text-sm text-slate-400 mb-6">
                  or ${plan.annualPrice}/yr
                </div>
                <Link
                  to={`/maintenance-plans#${plan.id}`}
                  className={cn(
                    "w-full block py-3 px-4 rounded-lg font-bold text-sm transition-colors",
                    plan.isPopular 
                      ? "bg-teal-500 text-slate-950 hover:bg-teal-400" 
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  )}
                >
                  CHOOSE {plan.name.toUpperCase()}
                </Link>
              </div>
              
              <div className="p-6 flex-grow bg-slate-800/50 rounded-b-2xl">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="text-slate-400 text-sm max-w-4xl mx-auto flex flex-col gap-1">
            <p>* Terms and conditions apply. All benefits are subject to eligibility requirements and membership terms.</p>
            <p>* Major parts and repairs are not included unless specifically listed. Certain components may not be covered.</p>
            <p>* Pre-existing conditions are excluded unless otherwise stated. Pumping credits have no cash value.</p>
            <p>* Membership benefits may vary by system type.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/maintenance-plans"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              COMPARE ALL PLAN BENEFITS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
