import React, { useState } from 'react';
import { Droplet, AlertTriangle, ShieldCheck, Home, Building, Clock, Calendar, Info, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import { DesignReferral } from '../components/sections/DesignReferral';

export const SepticPumping = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    type: 'Residential',
    tankSize: '',
    lastPumping: '',
    reason: '',
    preferredDate: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to an API.
    alert('Thank you for your request. We will contact you shortly to confirm your pumping service.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      type: 'Residential',
      tankSize: '',
      lastPumping: '',
      reason: '',
      preferredDate: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-900/30 text-teal-400 mb-6 border border-teal-500/20">
            <Droplet className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Septic Tank Pumping</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Professional routine and emergency septic tank pumping for residential and commercial properties. Protect your investment and prevent system failures.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="xl:col-span-7 space-y-16">
            
            {/* Why Pumping is Important */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Septic Tanks Need Pumping</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Over time, solid waste accumulates at the bottom of your septic tank as "sludge," while lighter solids form a "scum" layer at the top. If these layers are not regularly pumped out, they can overflow into your drain field, causing catastrophic failure, severe environmental contamination, and thousands of dollars in property damage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <ShieldCheck className="w-8 h-8 text-teal-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Protect Drain Fields</h3>
                  <p className="text-sm text-slate-600">Pumping prevents solids from clogging your leach field, which is the most expensive part to replace.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <Clock className="w-8 h-8 text-teal-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Extend System Life</h3>
                  <p className="text-sm text-slate-600">Regular pumping significantly increases the longevity of your entire septic system.</p>
                </div>
              </div>
            </section>

            {/* Warning Signs */}
            <section className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                Warning Signs You Need Pumping Now
              </h2>
              <ul className="space-y-4">
                {[
                  'Slow draining sinks, bathtubs, and toilets',
                  'Gurgling sounds in the plumbing system',
                  'Sewage odors inside your home or around the drain field',
                  'Standing water or unusually lush, green grass over the drain field',
                  'Sewage backing up into the lowest drains in your house',
                  'Septic alarm sounding (for aerobic or pumped systems)'
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-900 font-medium">{sign}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Residential vs Commercial */}
            <section className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-teal-400">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Residential Pumping</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We recommend pumping standard residential septic tanks every 3-5 years. Our residential service includes complete removal of all liquids and solids, a visual inspection of the tank interior, checking the inlet/outlet baffles, and ensuring the lid is properly secured.
                  </p>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-teal-400">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Commercial Pumping</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Commercial facilities often require more frequent pumping due to higher usage volumes. We offer customized, scheduled pumping programs to ensure your business experiences zero downtime. We also offer grease trap pumping for food service establishments.
                  </p>
                </div>
              </div>
            </section>

            {/* What to Expect */}
            <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-8">What to Expect During Service</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Locate & Access", desc: "Our technicians locate the tank and carefully uncover the access lids (if not already exposed via risers)." },
                  { step: "2", title: "Complete Pumping", desc: "We use a high-powered vacuum truck to agitate and completely remove all liquids, sludge, and scum." },
                  { step: "3", title: "Visual Inspection", desc: "We inspect the interior condition of the tank, checking for cracks, root intrusion, and the condition of the baffles." },
                  { step: "4", title: "Clean Up & Report", desc: "We secure the lids, clean the work area, and provide you with a manifest and detailed condition report." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal-500 text-slate-950 font-bold flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-teal-400 mb-1">{item.title}</h4>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Factors */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-teal-600" />
                Factors Affecting Pumping Frequency
              </h2>
              <p className="text-slate-600 mb-4">How often you need to pump depends on several variables:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 font-medium">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full" /> Household size / Occupancy</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full" /> Total wastewater generated</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full" /> Septic tank capacity</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full" /> Volume of solids (garbage disposals increase solids)</li>
              </ul>
            </section>
          </div>

          {/* Form Column */}
          <div className="xl:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sticky top-24 shadow-xl">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Schedule Pumping</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and our dispatch team will contact you to confirm your appointment.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700">Service Address *</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="123 Main St, City, Zip" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Property Type</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white">
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Reason for Service</label>
                    <select required name="reason" value={formData.reason} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white">
                      <option value="">Select a reason...</option>
                      <option value="routine">Routine Maintenance</option>
                      <option value="backup">System Backup / Emergency</option>
                      <option value="sale">Real Estate Transaction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Tank Size (if known)</label>
                    <input type="text" name="tankSize" value={formData.tankSize} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="e.g., 1000 gal" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Last Pumping Date</label>
                    <input type="text" name="lastPumping" value={formData.lastPumping} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="e.g., 2019 or Unknown" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" /> Preferred Service Date
                  </label>
                  <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-700" />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700">Additional Information</label>
                  <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none" placeholder="Is the tank lid exposed? Are there dogs in the yard? Any specific issues?" />
                </div>

                <button type="submit" className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-500 transition-colors shadow-lg shadow-teal-500/30">
                  REQUEST PUMPING
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-24">
        <DesignReferral className="bg-slate-900 text-white" />
      </div>
    </div>
  );
};
