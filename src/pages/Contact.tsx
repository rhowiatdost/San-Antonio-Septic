import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO, HIGHER_RATINGS_REFERRAL } from '../data/config';

export const Contact = () => {
  const [formType, setFormType] = useState<'general' | 'installation' | 'commercial'>('general');
  const [hasDesign, setHasDesign] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submission placeholder");
  };

  return (
    <div className="w-full pb-24 bg-slate-950">
      <div className="bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-500 drop-shadow-[0_0_10px_rgba(45,212,191,0.2)] mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Ready to schedule service or request a quote? We're here to help with all your residential and commercial septic needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-teal-500/20 border border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="flex items-start gap-4 group">
                  <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors">
                    <Phone className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Phone</div>
                    <div className="text-white font-bold">{COMPANY_INFO.phone}</div>
                  </div>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-start gap-4 group">
                  <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Email</div>
                    <div className="text-white font-bold">{COMPANY_INFO.email}</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Office</div>
                    <div className="text-white font-medium">{COMPANY_INFO.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Hours</div>
                    <div className="text-white font-medium">{COMPANY_INFO.businessHours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-500 p-8 rounded-2xl shadow-sm text-slate-950">
              <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
              <p className="font-medium mb-6">Sewage backup or alarms sounding? Call us immediately for rapid response.</p>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="block w-full bg-slate-950 text-white text-center font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">
                CALL NOW
              </a>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-sm">
              <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
                {(['general', 'installation', 'commercial'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setFormType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                      formType === type ? 'bg-slate-900 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {type} Request
                  </button>
                ))}
              </div>

              {formType === 'installation' && (
                <div className="mb-8 p-6 bg-slate-950 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-white mb-3">Do you already have an approved septic system design?</h4>
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={() => setHasDesign(true)}
                      className={`flex-1 py-2 rounded-lg border font-medium ${hasDesign === true ? 'bg-teal-900/50 border-teal-500 text-teal-300' : 'border-slate-700 text-slate-400 bg-slate-800'}`}
                    >
                      Yes, I have a design
                    </button>
                    <button 
                      type="button"
                      onClick={() => setHasDesign(false)}
                      className={`flex-1 py-2 rounded-lg border font-medium ${hasDesign === false ? 'bg-teal-900/50 border-teal-500 text-teal-300' : 'border-slate-700 text-slate-400 bg-slate-800'}`}
                    >
                      No, I need a design
                    </button>
                  </div>
                  
                  {hasDesign === false && (
                    <div className="mt-6 p-6 bg-slate-900 rounded-xl text-center">
                      <h5 className="text-lg font-bold text-white mb-2">{HIGHER_RATINGS_REFERRAL.primaryHeadline}</h5>
                      <p className="text-slate-300 text-sm mb-4">
                        Before we can install your new septic system, your project requires an approved septic system design. Visit Higher Ratings LLC for your septic system design needs.
                      </p>
                      <a 
                        href={HIGHER_RATINGS_REFERRAL.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-teal-500 text-slate-950 font-bold px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors"
                      >
                        GET MY SEPTIC SYSTEM DESIGNED
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Show form only if not needing design, or if general/commercial */}
              {(formType !== 'installation' || hasDesign === true || hasDesign === null) && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">First Name *</label>
                      <input required type="text" className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Last Name *</label>
                      <input required type="text" className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Email Address *</label>
                      <input required type="email" className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number *</label>
                      <input required type="tel" className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Service Address *</label>
                    <input required type="text" className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                  </div>

                  {formType === 'commercial' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Business Name</label>
                        <input type="text" className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Facility Type</label>
                        <select className="w-full border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-800 text-teal-400">
                          <option>Restaurant / Food Service</option>
                          <option>Office Building</option>
                          <option>Retail / Shopping Center</option>
                          <option>RV Park / Campground</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {formType === 'general' && (
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Service Needed *</label>
                      <select required className="w-full border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-800 text-white">
                        <option value="">Select a service...</option>
                        <option>Septic Tank Pumping</option>
                        <option>Septic Repair</option>
                        <option>Septic Maintenance</option>
                        <option>Maintenance Membership</option>
                        <option>Grease Trap Pumping</option>
                        <option>Other</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Additional Details</label>
                    <textarea rows={4} className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-teal-500 text-slate-950 font-bold py-4 rounded-lg hover:bg-teal-400 transition-colors">
                    SUBMIT REQUEST
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
