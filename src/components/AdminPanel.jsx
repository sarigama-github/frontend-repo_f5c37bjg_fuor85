import React, { useState } from 'react';
import { Play, Pause, Settings, RefreshCw, Search, Info } from 'lucide-react';

function Toggle({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <span className="text-sm text-slate-700 w-28">{label}</span>
      <div
        className={`w-11 h-6 rounded-full p-1 transition ${
          checked ? 'bg-indigo-600' : 'bg-slate-300'
        }`}
        onClick={() => onChange(!checked)}
      >
        <div
          className={`h-4 w-4 bg-white rounded-full shadow transition transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
    </label>
  );
}

export default function AdminPanel() {
  const [testMode, setTestMode] = useState(true);
  const [autoSync, setAutoSync] = useState(false);
  const [query, setQuery] = useState('');

  const onSync = () => {
    // Mocked action; in a real app this would call the backend
    alert(`Synchronisation gestartet (Modus: ${testMode ? 'Test' : 'Echt'})`);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-slate-900">Admin</h3>
            <button
              onClick={onSync}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500"
            >
              <RefreshCw size={16} /> Jetzt synchronisieren
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Toggle label="Testmodus" checked={testMode} onChange={setTestMode} />
            <Toggle label="Auto-Sync" checked={autoSync} onChange={setAutoSync} />
          </div>

          <div className="mt-6">
            <label className="text-sm text-slate-700">Filter</label>
            <div className="mt-2 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Artikelnummer, Titel oder SKU"
                />
              </div>
              <button className="px-3 py-2 rounded-lg border text-sm text-slate-700 hover:bg-slate-50">Anwenden</button>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-slate-900 mb-2">Import-Modul</h4>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm hover:bg-slate-50">
                <Play size={16} /> Delta-Import
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm hover:bg-slate-50">
                <Pause size={16} /> Vollabgleich
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm hover:bg-slate-50">
                <Settings size={16} /> Mapping
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
          <h4 className="text-sm font-medium text-slate-900 mb-3">Live-Status</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> API verfügbar</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> Warteschlange: 3</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Letzter Lauf: vor 5 Min.</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-300" /> Fehler heute: 0</li>
          </ul>

          <div className="mt-4 p-3 rounded-lg bg-slate-50 text-xs text-slate-600">
            <div className="flex items-start gap-2">
              <Info size={14} className="mt-0.5" />
              <p>
                ERP-Endpunkt: <span className="font-mono">(Base)/external/webShop/GetArticles</span><br />
                Auth via POST: {`{"Identification":{"Id":"SERVICE-ID"},"WebShopId":NUMMER}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
