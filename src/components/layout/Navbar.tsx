import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Droplet } from 'lucide-react';
import { COMPANY_INFO } from '../../data/config';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Residential', path: '/residential' },
    { name: 'Commercial', path: '/commercial' },
    { name: 'Pumping', path: '/pumping' },
    { name: 'Grease Traps', path: '/grease-traps' },
    { name: 'Maintenance Plans', path: '/maintenance-plans' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 text-white text-sm font-medium py-2 px-4 text-center">
        Need Septic Service? Residential & Commercial Service Available — Call {COMPANY_INFO.name} Today at <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-teal-400 hover:text-teal-300 font-bold">{COMPANY_INFO.phone}</a>
      </div>

      <header className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-slate-800 transition-colors">
                <Droplet className="w-6 h-6 text-teal-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">San Antonio</span>
                <span className="text-sm font-bold text-teal-400 uppercase tracking-widest leading-none mt-1">Septic LLC</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-teal-400",
                    location.pathname === link.path ? "text-teal-400" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="text-white font-semibold text-sm hover:text-teal-400 transition-colors"
              >
                REQUEST SERVICE
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all hover:shadow-md"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                CALL NOW
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-400 hover:text-teal-400 hover:bg-slate-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-4 absolute w-full shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-base font-semibold text-white hover:text-teal-400"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 flex divide-x divide-slate-700 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
        <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="flex-1 py-4 flex justify-center items-center gap-2 text-white font-bold text-sm bg-slate-900 hover:bg-slate-800 transition-colors">
          <Phone className="w-4 h-4 text-teal-400" />
          CALL NOW
        </a>
        <Link to="/contact" className="flex-1 py-4 flex justify-center items-center text-slate-950 font-bold text-sm bg-teal-500 hover:bg-teal-400 transition-colors">
          REQUEST SERVICE
        </Link>
      </div>
    </>
  );
};
