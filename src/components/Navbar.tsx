import React from 'react';
import { ActiveTab } from '../types/scee';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, onOpenGuide }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('overview')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
        >
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
            SCEE Explorer
          </span>
        </button>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onSelectTab('pib-pine')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'pib-pine'
                ? 'border-emerald-600 text-emerald-950 font-semibold'
                : 'border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            PIB vs PINE
          </button>
          <button
            onClick={() => onSelectTab('physical-flows')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'physical-flows'
                ? 'border-emerald-600 text-emerald-950 font-semibold'
                : 'border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Flux Physiques (TRE-P)
          </button>
          <button
            onClick={() => onSelectTab('assets')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'assets'
                ? 'border-emerald-600 text-emerald-950 font-semibold'
                : 'border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Actifs Naturels
          </button>
          <button
            onClick={() => onSelectTab('ecosystems')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'ecosystems'
                ? 'border-emerald-600 text-emerald-950 font-semibold'
                : 'border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Écosystèmes (SEEA-EA)
          </button>
          <button
            onClick={() => onSelectTab('simulator')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'simulator'
                ? 'border-emerald-600 text-emerald-950 font-semibold'
                : 'border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Gouvernance
          </button>
          <button
            onClick={() => onSelectTab('quiz-cases')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'quiz-cases'
                ? 'border-emerald-600 text-emerald-950 font-semibold'
                : 'border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Quiz & Cas
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenGuide}
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 cursor-pointer"
          >
            Guide Pédagogique
          </button>
        </div>
      </div>
    </header>
  );
};
