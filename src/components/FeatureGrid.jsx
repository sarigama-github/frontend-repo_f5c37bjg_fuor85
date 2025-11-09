import React from 'react';
import { ShieldCheck, Images, Package, Layers, RefreshCw, Map, Settings, FileDown } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Geschützte Artikel-Synchronisation',
    desc: 'Produkte, Varianten (Größen/Farben), Preise, Lagerbestände und Attribute zuverlässig zwischen ERP und Shopify abgleichen.',
  },
  {
    icon: Images,
    title: 'Bild-Handling',
    desc: 'Automatische Erkennung, Duplikatprüfung und Upload von Produktbildern inklusive Alt-Texten und Reihenfolgen.',
  },
  {
    icon: Layers,
    title: 'Multi-Shop-Support',
    desc: 'Mandantenfähig mit kanal- und sprachspezifischen Katalogen, Preislisten und Inventaren.',
  },
  {
    icon: ShieldCheck,
    title: 'Robuste API-Verarbeitung',
    desc: 'Korrekte Authentifizierung, POST-Requests, JSON-Parsing, Parameter-Validierung und Fehlerbehandlung bei Endpoint-Issues.',
  },
  {
    icon: Map,
    title: 'Attribut- & Metafeld-Mapping',
    desc: 'Flexible Zuordnung von ERP-Feldern zu Shopify-Attributen/Metafeldern mit Fallbacks und Typvalidierung.',
  },
  {
    icon: RefreshCw,
    title: 'Delta-/CSV-Import',
    desc: 'Zeitgesteuerte Voll- und Deltaimporte, inklusive CSV-Upload und automatischer Duplikat-/Konflikterkennung.',
  },
  {
    icon: Settings,
    title: 'Update-Abstraktion',
    desc: 'Smartes Merge von Änderungen, Idempotenz & Retries zur Vermeidung doppelter oder verlorener Updates.',
  },
  {
    icon: FileDown,
    title: 'Protokolle & Audits',
    desc: 'Detailierte Logs, Korrelation-IDs und Revisionshistorie für Compliance und Debugging.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">Kernfunktionen</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <div>
                <h3 className="font-medium text-slate-900">{f.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
