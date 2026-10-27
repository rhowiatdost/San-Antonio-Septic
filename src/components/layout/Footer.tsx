import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Droplet } from 'lucide-react';
import { COMPANY_INFO } from '../../data/config';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pb-20 lg:pb-0"> {/* padding bottom for mobile sticky nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                <Droplet className="w-6 h-6 text-teal-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">San Antonio</span>
                <span className="text-sm font-bold text-teal-500 uppercase tracking-widest leading-none mt-1">Septic LLC</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Serving San Antonio and Surrounding South Central Texas Communities. One call for all your septic service needs.
            </p>
            <div className="space-y-3 pt-2">
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-sm hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4 text-teal-400" />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-sm hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4 text-teal-400" />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/residential" className="text-sm hover:text-teal-400 transition-colors">Residential Services</Link></li>
              <li><Link to="/commercial" className="text-sm hover:text-teal-400 transition-colors">Commercial Services</Link></li>
              <li><Link to="/maintenance-plans" className="text-sm hover:text-teal-400 transition-colors">Maintenance Plans</Link></li>
              <li><Link to="/service-areas" className="text-sm hover:text-teal-400 transition-colors">Service Areas</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-teal-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-teal-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/residential#installation" className="text-sm hover:text-teal-400 transition-colors">Septic Installation</Link></li>
              <li><Link to="/residential#inspections" className="text-sm hover:text-teal-400 transition-colors">Real Estate Inspections</Link></li>
              <li><Link to="/residential#maintenance" className="text-sm hover:text-teal-400 transition-colors">Septic Maintenance</Link></li>
              <li><Link to="/residential#repair" className="text-sm hover:text-teal-400 transition-colors">Septic Repairs</Link></li>
              <li><Link to="/pumping" className="text-sm hover:text-teal-400 transition-colors">Septic Tank Pumping</Link></li>
              <li><Link to="/grease-traps" className="text-sm hover:text-teal-400 transition-colors">Grease Trap Pumping</Link></li>
            </ul>
          </div>

          {/* Emergency / Call to action */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6 tracking-wide">Emergency Service</h4>
            <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-teal-400 pl-4">
              {COMPANY_INFO.emergencyAvailability}
            </p>
            <div className="pt-4">
              <Link to="/contact" className="inline-flex justify-center w-full bg-teal-500 text-slate-950 font-bold py-3 px-6 rounded-lg hover:bg-teal-400 transition-colors">
                REQUEST SERVICE
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            <Link to="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-teal-400 transition-colors">Terms and Conditions</Link>
            <Link to="#" className="hover:text-teal-400 transition-colors">Maintenance Plan Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
