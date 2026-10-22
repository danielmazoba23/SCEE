import React, { useState } from 'react';
import { ActiveTab } from './types/scee';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ModulePibVsPine } from './components/ModulePibVsPine';
import { ModulePhysicalFlows } from './components/ModulePhysicalFlows';
import { ModuleAssetAccounts } from './components/ModuleAssetAccounts';
import { ModuleEcosystemAccounting } from './components/ModuleEcosystemAccounting';
import { ModuleTerritorySimulator } from './components/ModuleTerritorySimulator';
import { ModuleQuizAndCases } from './components/ModuleQuizAndCases';
import { PedagogicalGuideModal } from './components/PedagogicalGuideModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div className="space-y-12 pb-16">
            <HeroSection onSelectTab={setActiveTab} />

            {/* 6 Core Pedagogical Modules Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1">
                  <span>Parcours d'Apprentissage Interactif</span>
                  <span aria-hidden="true">·</span>
                  <span>6 Modules Didactiques</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Explorez les Composantes Fondamentales du SCEE
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
                  Chaque module vous permet de manipuler les variables économiques et biophysiques pour comprendre comment la nature s'intègre rigoureusement dans la comptabilité.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Module 1 Card */}
                <button
                  onClick={() => setActiveTab('pib-pine')}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-600 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                      01. Macroéconomie & Richesse Nette
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                      Du PIB au PINE (PIB Vert)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Découvrez comment déduire l'épuisement des ressources naturelles et les coûts de dégradation écologique pour obtenir le véritable Produit Intérieur Net Ajusté.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                    <span>Lancer le calculateur</span>
                    <span>→</span>
                  </div>
                </button>

                {/* Module 2 Card */}
                <button
                  onClick={() => setActiveTab('physical-flows')}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-600 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                      02. Bilan Matière & Énergie
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                      Comptes de Flux Physiques (TRE-P)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Visualisez le métabolisme de l'économie : de l'extraction des minéraux, fossiles et de l'eau aux émissions résiduelles rejetées dans l'air et les sols.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                    <span>Explorer les flux physiques</span>
                    <span>→</span>
                  </div>
                </button>

                {/* Module 3 Card */}
                <button
                  onClick={() => setActiveTab('assets')}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-600 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                      03. Bilan Patrimonial National
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                      Comptes d'Actifs Naturels
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      L'équation universelle des stocks d'ouverture et de clôture appliquée aux forêts, nappes aquifères et gisements miniers en unités physiques et monétaires.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                    <span>Manipuler les actifs</span>
                    <span>→</span>
                  </div>
                </button>

                {/* Module 4 Card */}
                <button
                  onClick={() => setActiveTab('ecosystems')}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-600 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                      04. Norme Spatiale ONU 2021
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                      Comptabilité des Écosystèmes (SEEA-EA)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Les 5 comptes clés : étendue spatiale, état écologique, et services de régulation (crues, filtration d'eau, captation carbone, pollinisation).
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                    <span>Explorer les écosystèmes</span>
                    <span>→</span>
                  </div>
                </button>

                {/* Module 5 Card */}
                <button
                  onClick={() => setActiveTab('simulator')}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-600 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                      05. Pilotage Public
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                      Simulateur de Gouvernance Territoriale
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Prenez les commandes d'une région : arbitrez entre fiscalité verte, renaturation et circularité, et comparez le bilan SCN vs SCEE.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                    <span>Gérer le territoire</span>
                    <span>→</span>
                  </div>
                </button>

                {/* Module 6 Card */}
                <button
                  onClick={() => setActiveTab('quiz-cases')}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-600 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                      06. Validation & Terrain
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                      Quiz, Études de Cas & Lexique
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      10 questions certifiantes, études de cas concrètes (Australie, France Insee, Costa Rica) et dictionnaire interactif des termes officiels.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                    <span>Tester ses connaissances</span>
                    <span>→</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Historical Milestone Timeline */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Chronologie Internationale
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  L'Émergence du Système de Comptabilité Environnementale
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="border-l-2 border-emerald-600 pl-4 py-1">
                    <span className="font-mono text-xs font-bold text-emerald-800 block">1993</span>
                    <span className="font-bold text-sm text-slate-900 block mt-1">Première Ébauche</span>
                    <p className="text-xs text-slate-600 mt-1 leading-snug">
                      Publication du premier manuel provisoire SCEE par l'ONU dans le sillage du Sommet de la Terre de Rio (1992).
                    </p>
                  </div>

                  <div className="border-l-2 border-emerald-600 pl-4 py-1">
                    <span className="font-mono text-xs font-bold text-emerald-800 block">2012</span>
                    <span className="font-bold text-sm text-slate-900 block mt-1">Norme Cadre Central</span>
                    <p className="text-xs text-slate-600 mt-1 leading-snug">
                      Adoption officielle du SEEA Central Framework (SEEA-CF) comme standard statistique mondial par la Commission de Statistique de l'ONU.
                    </p>
                  </div>

                  <div className="border-l-2 border-emerald-600 pl-4 py-1">
                    <span className="font-mono text-xs font-bold text-emerald-800 block">2021</span>
                    <span className="font-bold text-sm text-slate-900 block mt-1">Révolution SEEA-EA</span>
                    <p className="text-xs text-slate-600 mt-1 leading-snug">
                      Adoption formelle de la Comptabilité des Écosystèmes (SEEA-EA) intégrant les services de régulation et les biomes vivants.
                    </p>
                  </div>

                  <div className="border-l-2 border-emerald-600 pl-4 py-1">
                    <span className="font-mono text-xs font-bold text-emerald-800 block">Horizon 2030</span>
                    <span className="font-bold text-sm text-slate-900 block mt-1">Cible 14 Kunming-Montréal</span>
                    <p className="text-xs text-slate-600 mt-1 leading-snug">
                      Engagement contraignant de 196 pays d'intégrer le capital naturel et la biodiversité dans leurs comptes nationaux.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: PIB vs PINE */}
        {activeTab === 'pib-pine' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ModulePibVsPine />
          </div>
        )}

        {/* Tab 2: Physical Flows */}
        {activeTab === 'physical-flows' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ModulePhysicalFlows />
          </div>
        )}

        {/* Tab 3: Natural Asset Accounts */}
        {activeTab === 'assets' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ModuleAssetAccounts />
          </div>
        )}

        {/* Tab 4: Ecosystem Accounting */}
        {activeTab === 'ecosystems' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ModuleEcosystemAccounting />
          </div>
        )}

        {/* Tab 5: Territorial Governance Simulator */}
        {activeTab === 'simulator' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ModuleTerritorySimulator />
          </div>
        )}

        {/* Tab 6: Quiz & Real Cases */}
        {activeTab === 'quiz-cases' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ModuleQuizAndCases />
          </div>
        )}
      </main>

      {/* Institutional Scannable Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-700">SCEE Explorer</span> · Outil didactique d'apprentissage de la comptabilité écologique.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsGuideOpen(true)}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Guide Méthodologique
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveTab('quiz-cases')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Lexique Officiel
            </button>
            <span aria-hidden="true">·</span>
            <span>Fondé sur les manuels de l'ONU, Insee & Eurostat</span>
          </div>
        </div>
      </footer>

      {/* Pedagogical Synthesis Modal */}
      <PedagogicalGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
