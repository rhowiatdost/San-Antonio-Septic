import React from 'react';
import { ArrowRight, FileCheck } from 'lucide-react';
import { HIGHER_RATINGS_REFERRAL } from '../../data/config';
import { cn } from '../../lib/utils';

interface DesignReferralProps {
  className?: string;
}

export const DesignReferral: React.FC<DesignReferralProps> = ({ className }) => {
  return (
    <section className={cn("py-16 px-4 bg-slate-900", className)}>
      <div className="max-w-5xl mx-auto rounded-2xl bg-slate-800 border border-slate-700 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-slate-700/30 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="hidden md:flex flex-shrink-0 items-center justify-center w-24 h-24 rounded-full bg-slate-700 border border-slate-600">
            <FileCheck className="w-10 h-10 text-teal-400" />
          </div>

          <div className="flex-grow text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {HIGHER_RATINGS_REFERRAL.primaryHeadline}
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
              {HIGHER_RATINGS_REFERRAL.supportingCopy}
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col w-full md:w-auto gap-4">
            <a 
              href={HIGHER_RATINGS_REFERRAL.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-teal-400 transition-all shadow-lg hover:shadow-teal-500/20"
            >
              GET A SEPTIC DESIGN
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
