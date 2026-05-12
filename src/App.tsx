/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import ProductGallery from './components/ProductGallery';
import TechnicalSpecs from './components/TechnicalSpecs';
import WholesaleSection from './components/WholesaleSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import { trackEvent } from './lib/tracking';

export default function App() {
  useEffect(() => {
    // Track initial page view
    trackEvent('page_view', 'home');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <UseCases />
        <ProductGallery />
        <TechnicalSpecs />
        <WholesaleSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
