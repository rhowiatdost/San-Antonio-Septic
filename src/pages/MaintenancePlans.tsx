import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Info } from 'lucide-react';
import { MAINTENANCE_PLANS } from '../data/config';
import { CarePlansPreview } from '../components/sections/CarePlansPreview';

export const MaintenancePlans = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual');
  const [quizResult, setQuizResult] = useState<string | null>(null);

  // Simple static quiz logic for demonstration
  const handleQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    setQuizResult('gold');
  };

  return (
    <div className="w-full pb-24">
      {/* Header handled by CarePlansPreview */}
      <CarePlansPreview />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        
        {/* Pumping Credit System */}
        <div className="bg-slate-950 rounded-3xl p-8 md:p-12 border border-slate-800 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Your Membership Helps Pay for Your Next Pump</h2>
            <p className="text-slate-400">
              Members receive annual pumping credits based on their membership level. When it is time to pump the septic tank, eligible accumulated credits can be applied toward the cost of pumping services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {MAINTENANCE_PLANS.map((plan) => (
              <div key={plan.id} className="bg-slate-900 rounded-xl p-6 text-center border border-slate-800 shadow-sm flex flex-col items-center justify-center">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{plan.name}</div>
                <div className="text-3xl font-extrabold text-teal-500 drop-shadow-[0_0_5px_rgba(45,212,191,0.3)]">${plan.pumpingCredit}</div>
                <div className="text-xs text-slate-400 mt-1">CREDIT</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex items-start gap-3 bg-teal-900/30 p-4 rounded-lg border border-teal-900/50 text-sm text-slate-300">
            <Info className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <p><strong>Note:</strong> Terms and conditions apply. All benefits are subject to eligibility requirements and membership terms.</p>
              <p>Major parts and repairs are not included unless specifically listed. Certain components may not be covered.</p>
              <p>Pre-existing conditions are excluded unless otherwise stated. Pumping credits have no cash value.</p>
              <p>Membership benefits may vary by system type. Diamond members may roll over unused pumping credits into the next year for a total of two years.</p>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="mb-24 overflow-x-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Compare All Plan Benefits</h2>
          </div>
          
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-4 border-b-2 border-slate-800 bg-slate-950 font-bold text-white w-1/4">Features</th>
                {MAINTENANCE_PLANS.map(plan => (
                  <th key={plan.id} className="p-4 border-b-2 border-slate-800 bg-slate-950 text-center w-[15%]">
                    <div className="font-bold text-teal-400">{plan.name}</div>
                    <div className="text-sm font-normal text-slate-500">${plan.monthlyPrice}/mo</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 border-b border-slate-800 font-medium text-slate-300">Required Inspections</td>
                {MAINTENANCE_PLANS.map(plan => (
                  <td key={plan.id} className="p-4 border-b border-slate-800 text-center text-slate-400">{plan.inspections}/Year</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-800 font-medium text-slate-300">Priority Scheduling</td>
                {MAINTENANCE_PLANS.map(plan => (
                  <td key={plan.id} className="p-4 border-b border-slate-800 text-center text-slate-400">{plan.priorityLevel}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-800 font-medium text-slate-300">Repair Discount</td>
                {MAINTENANCE_PLANS.map(plan => (
                  <td key={plan.id} className="p-4 border-b border-slate-800 text-center font-bold text-white">{plan.repairDiscount > 0 ? `${plan.repairDiscount}%` : '-'}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-800 font-medium text-slate-300">Annual Pumping Credit</td>
                {MAINTENANCE_PLANS.map(plan => (
                  <td key={plan.id} className="p-4 border-b border-slate-800 text-center font-bold text-teal-400">${plan.pumpingCredit}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-800 font-medium text-slate-300">System Performance Check</td>
                {MAINTENANCE_PLANS.map(plan => (
                  <td key={plan.id} className="p-4 border-b border-slate-800 text-center"><Check className="w-5 h-5 text-teal-500 mx-auto" /></td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-800 font-medium text-slate-300">Annual System Health Review</td>
                {MAINTENANCE_PLANS.map(plan => (
                  <td key={plan.id} className="p-4 border-b border-slate-800 text-center">
                    {['gold', 'platinum', 'diamond'].includes(plan.id) ? <Check className="w-5 h-5 text-teal-500 mx-auto" /> : '-'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-800 font-medium text-slate-300">Dedicated Support</td>
                {MAINTENANCE_PLANS.map(plan => (
                  <td key={plan.id} className="p-4 border-b border-slate-800 text-center">
                    {plan.id === 'diamond' ? <Check className="w-5 h-5 text-teal-500 mx-auto" /> : '-'}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Plan Recommendation Quiz */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-slate-800/50 blur-3xl pointer-events-none" />
           <div className="relative z-10">
             <div className="text-center mb-8">
               <h2 className="text-2xl font-bold mb-2">Not Sure Which Plan is Right for You?</h2>
               <p className="text-slate-400">Answer a few quick questions to find your perfect match.</p>
             </div>
             
             {!quizResult ? (
               <form onSubmit={handleQuiz} className="max-w-2xl mx-auto space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-300 mb-2">1. What type of septic system do you have?</label>
                   <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-teal-500 outline-none">
                     <option>Conventional</option>
                     <option>Aerobic Treatment System</option>
                     <option>Not Sure</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-300 mb-2">2. How much maintenance coverage do you want?</label>
                   <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-teal-500 outline-none">
                     <option>Basic Required Maintenance</option>
                     <option>Comprehensive Preventive Care</option>
                     <option>Maximum Protection & Discounts</option>
                   </select>
                 </div>
                 <div className="text-center pt-4">
                   <button type="submit" className="bg-teal-500 text-slate-950 font-bold px-8 py-3 rounded-lg hover:bg-teal-400 transition-colors">
                     HELP ME CHOOSE
                   </button>
                 </div>
               </form>
             ) : (
               <div className="text-center max-w-xl mx-auto">
                 <div className="inline-block bg-teal-500/10 border border-teal-500/20 text-teal-400 px-4 border-teal-500/40 py-2 rounded-full font-bold mb-4">
                   RECOMMENDED PLAN: GOLD
                 </div>
                 <h3 className="text-3xl font-bold mb-4">Gold Care Plan</h3>
                 <p className="text-slate-300 mb-8">Based on your answers, our Gold Plan offers the best balance of comprehensive preventive care, solid discounts, and priority service for your system type.</p>
                 <div className="flex justify-center gap-4">
                   <button onClick={() => setQuizResult(null)} className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors">
                     Retake Quiz
                   </button>
                   <Link to="/contact" className="bg-teal-500 text-slate-950 font-bold px-6 py-2 rounded-lg hover:bg-teal-400 transition-colors">
                     SIGN UP FOR GOLD
                   </Link>
                 </div>
               </div>
             )}
           </div>
        </div>

      </div>
    </div>
  );
};
