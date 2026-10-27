import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS, COMPANY_INFO } from '../data/config';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-900/50 text-teal-400 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-teal-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(45,212,191,0.3)] tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-300 font-medium">
            Find answers to common questions about septic maintenance, installation, and our service plans.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-20">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-slate-900 rounded-2xl border transition-colors overflow-hidden ${isOpen ? 'border-teal-500/50' : 'border-teal-500/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-teal-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="bg-teal-900/30 border border-teal-500/30 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you with any specific questions you might have about your property's septic system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-500 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-teal-400 transition-colors"
            >
              <Phone className="w-5 h-5 text-slate-950" />
              Call {COMPANY_INFO.phone}
            </a>
            <Link 
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
              Contact Us Online
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
