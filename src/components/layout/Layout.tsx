import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans text-white selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar />
      <main className="flex-grow flex flex-col relative w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
