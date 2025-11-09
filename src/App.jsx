import React from 'react';
import Header from './components/Header';
import FeatureGrid from './components/FeatureGrid';
import Tabs from './components/Tabs';
import AdminPanel from './components/AdminPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Header />

      <main className="pb-16">
        <section className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Middleware für Shopify × ERP</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Moderne Integrationsplattform für sichere Artikel-Synchronisation, robuste API-Verarbeitung und
            komfortables Admin-Frontend.
          </p>
        </section>

        <FeatureGrid />
        <Tabs />
        <AdminPanel />
      </main>

      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Middleware Suite</span>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-700" href="#">Datenschutz</a>
            <a className="hover:text-slate-700" href="#">Impressum</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
