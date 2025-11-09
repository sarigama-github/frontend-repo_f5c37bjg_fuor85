import React, { useState } from 'react';

const tabs = [
  { key: 'arch', label: 'Architektur' },
  { key: 'api', label: 'API & Endpunkte' },
  { key: 'debug', label: 'Debugging' },
];

export default function Tabs() {
  const [active, setActive] = useState('arch');

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-4 py-2 text-sm rounded-md transition ${
              active === t.key
                ? 'bg-indigo-600 text-white'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {active === 'arch' && (
          <div className="prose prose-slate max-w-none">
            <h3>Modulare, fehlertolerante Architektur</h3>
            <ul>
              <li>Node.js-Service mit getrennten Modulen: Connector (ERP/Shopify), Mapper, Orchestrator, Scheduler, Logger.</li>
              <li>Robuste Queues und Retries, Idempotenz-Keys pro Artikel/Variante und Shop.</li>
              <li>Konfigurierbarer Multi-Shop-Layer mit kanalspezifischen Preis-/Bestandsregeln.</li>
              <li>Admin-Frontend: tab-fähig, Modusumschaltung (Test/Echt), Auto-Sync, Filter, Detailmodal und Import-Modul.</li>
            </ul>
          </div>
        )}

        {active === 'api' && (
          <div className="prose prose-slate max-w-none">
            <h3>API-Handling & Endpunkt-Spezifika</h3>
            <ul>
              <li>ERP-Endpoint: (Base)/external/webShop/GetArticles</li>
              <li>Auth via POST mit Body {`{ "Identification": {"Id":"SERVICE-ID"}, "WebShopId": NUMMER }`}</li>
              <li>Exakte Header (Content-Type: application/json), klare Fehler für 404, falsche URL, doppelte Response.</li>
              <li>Shopify-REST: Produkte, Varianten, Inventar, Bilder, Metafelder – mit sauberen Write-Scopes.</li>
              <li>Abstraktion für Delta-/CSV-Import, Attribut-/Metafeld-Mapping und Bild-Erkennung.</li>
            </ul>
          </div>
        )}

        {active === 'debug' && (
          <div className="prose prose-slate max-w-none">
            <h3>Debugging-Strategien</h3>
            <ul>
              <li>Endpoint-Varianten testen (Stage/Prod), Response-Formate per Schema validieren.</li>
              <li>Eine Response pro Request sicherstellen; Stream-/Promise-Lebenszyklus streng managen.</li>
              <li>Correlation-IDs pro Lauf, strukturierte Logs, Redaktionen für sensible Daten.</li>
              <li>Timeouts, Circuit Breaker, Backoff, Dead-letter-Queues für Hard-Fails.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
