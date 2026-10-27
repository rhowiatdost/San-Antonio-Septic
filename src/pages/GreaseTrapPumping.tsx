import React, { useState } from 'react';
import { Container, Utensils, CalendarCheck, FileText, Briefcase, AlertOctagon, CheckCircle2, ShieldCheck, Clock, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import { DesignReferral } from '../components/sections/DesignReferral';

export const GreaseTrapPumping = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    address: '',
    facilityType: 'Restaurant',
    trapSize: '',
    frequency: 'Monthly',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to an API.
    alert('Thank you for your request. Our commercial account team will contact you shortly to confirm your service schedule.');
    setFormData({
      businessName: '',
      contactName: '',
      phone: '',
      email: '',
      address: '',
      facilityType: 'Restaurant',
      trapSize: '',
      frequency: 'Monthly',
      additionalInfo: ''
    });
  };

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-900/30 text-teal-400 mb-6 border border-teal-500/20">
            <Container className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Grease Trap Pumping</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Dedicated commercial grease trap maintenance designed for restaurants, kitchens, and food production facilities. Keep your kitchen running smoothly and stay compliant.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="xl:col-span-7 space-y-16">
            
            {/* Target Customers */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Serve</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Fats, oils, and grease (FOG) can wreak havoc on city sewer lines and your own plumbing. We provide specialized grease trap services for a wide variety of commercial facilities:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Restaurants',
                  'Bars & Pubs',
                  'Commercial Kitchens',
                  'Hotels & Resorts',
                  'Schools & Universities',
                  'Food Production Facilities',
                  'Convenience Stores',
                  'Institutional Kitchens'
                ].map((facility, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <Utensils className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="font-medium text-slate-800 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What We Emphasize */}
            <section className="bg-slate-950 p-8 md:p-12 rounded-3xl border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-8">Commercial Account Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <CalendarCheck className="w-8 h-8 text-teal-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Scheduled Preventive Service</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Recurring service schedules tailored to your facility's volume to prevent overflows and non-compliance fines.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FileText className="w-8 h-8 text-teal-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Reliable Documentation</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Complete manifests and service reports provided after every pump to ensure health inspector compliance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Briefcase className="w-8 h-8 text-teal-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Account Management</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Dedicated commercial account handling. We track your schedule so you can focus on running your business.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <AlertOctagon className="w-8 h-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Emergency Pumping</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">When backups happen, we provide priority emergency pumping services (when available) for our commercial accounts.</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Form Column */}
          <div className="xl:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sticky top-24 shadow-xl">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Setup Recurring Service</h2>
              <p className="text-slate-600 mb-8">Request a grease trap pumping quote or establish a recurring maintenance schedule for your facility.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700">Business/Facility Name *</label>
                  <input required type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="Acme Kitchen" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Contact Name *</label>
                    <input required type="text" name="contactName" value={formData.contactName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="John Doe" />
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
                    <label className="text-sm font-bold text-slate-700">Facility Type</label>
                    <select name="facilityType" value={formData.facilityType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white">
                      <option>Restaurant</option>
                      <option>Bar / Pub</option>
                      <option>Commercial Kitchen</option>
                      <option>Hotel / Resort</option>
                      <option>School / Institutional</option>
                      <option>Food Production</option>
                      <option>Convenience Store</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Desired Frequency</label>
                    <select name="frequency" value={formData.frequency} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white">
                      <option>Weekly</option>
                      <option>Bi-Weekly</option>
                      <option>Monthly</option>
                      <option>Quarterly</option>
                      <option>One-Time / On-Demand</option>
                      <option>Custom / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700">Grease Trap Size (if known)</label>
                  <input type="text" name="trapSize" value={formData.trapSize} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="e.g., 500 gal or dimensions" />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700">Additional Information / Emergency Needs</label>
                  <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none" placeholder="Let us know about accessibility, specific health department requirements, or if this is an emergency." />
                </div>

                <button type="submit" className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-500 transition-colors shadow-lg shadow-teal-500/30">
                  REQUEST GREASE TRAP SERVICE
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
