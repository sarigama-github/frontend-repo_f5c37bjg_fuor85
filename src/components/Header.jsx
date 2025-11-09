import React from 'react';
import { Rocket, Server, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shadow">
            <Rocket size={20} />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900">Shopify ↔ ERP Middleware</h1>
            <p className="text-xs text-slate-500 flex items-center gap-2">
              <Server size={14} /> Node.js Backend · <Shield size={14} /> Sicher & robust
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-slate-600">
          <span className="px-2 py-1 rounded bg-slate-100">REST API</span>
          <span className="px-2 py-1 rounded bg-slate-100">Tab-fähiges Frontend</span>
          <span className="px-2 py-1 rounded bg-slate-100">Multi-Shop</span>
        </div>
      </div>
    </header>
  );
}
