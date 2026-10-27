import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Wrench, Droplet, Container, Briefcase, Shovel, FileSearch } from 'lucide-react';

export const ServiceCards = () => {
  const services = [
    {
      title: 'Septic Installation',
      description: 'New residential and commercial septic system installations professionally coordinated and installed for long-term performance.',
      icon: Shovel,
      buttonText: 'EXPLORE INSTALLATION',
      link: '/residential#installation'
    },
    {
      title: 'Real Estate Inspections',
      description: 'Thorough, professional septic inspections for buyers and sellers to ensure code compliance and system health before closing.',
      icon: FileSearch,
      buttonText: 'SCHEDULE INSPECTION',
      link: '/residential#inspections'
    },
    {
      title: 'Septic Maintenance',
      description: 'Routine inspections and preventive maintenance designed to help keep septic systems operating properly and identify potential problems.',
      icon: Settings,
      buttonText: 'EXPLORE MAINTENANCE',
      link: '/residential#maintenance'
    },
    {
      title: 'Septic Repairs',
      description: 'Professional troubleshooting and repair services for septic alarms, pumps, control panels, aerators, and electrical components.',
      icon: Wrench,
      buttonText: 'REQUEST A REPAIR',
      link: '/contact'
    },
    {
      title: 'Septic Tank Pumping',
      description: 'Routine and on-demand septic tank pumping for residential and commercial properties to prevent backup and failure.',
      icon: Droplet,
      buttonText: 'SCHEDULE PUMPING',
      link: '/pumping'
    },
    {
      title: 'Commercial Septic Services',
      description: 'Comprehensive septic installation, maintenance, repairs, and pumping services designed around the needs of commercial properties.',
      icon: Briefcase,
      buttonText: 'VIEW COMMERCIAL SERVICES',
      link: '/commercial'
    }
  ];

  return (
    <section className="py-24 bg-slate-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">How Can We Help?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-teal-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center justify-center w-full py-3 px-4 border-2 border-slate-800 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
              >
                {service.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
