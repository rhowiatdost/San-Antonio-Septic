import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Residential } from './pages/Residential';
import { Commercial } from './pages/Commercial';
import { MaintenancePlans } from './pages/MaintenancePlans';
import { ServiceAreas } from './pages/ServiceAreas';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { SepticPumping } from './pages/SepticPumping';
import { GreaseTrapPumping } from './pages/GreaseTrapPumping';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="residential" element={<Residential />} />
        <Route path="commercial" element={<Commercial />} />
        <Route path="maintenance-plans" element={<MaintenancePlans />} />
        <Route path="service-areas" element={<ServiceAreas />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="pumping" element={<SepticPumping />} />
        <Route path="grease-traps" element={<GreaseTrapPumping />} />
      </Route>
    </Routes>
  );
}

export default App;
