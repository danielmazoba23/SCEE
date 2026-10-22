import React from 'react';
import { ActiveTab } from '../types/scee';
import heroImage from '../assets/images/scee_hero_concept_1792669675253.jpg';

interface HeroSectionProps {
  onSelectTab: (tab: ActiveTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectTab }) => {
  return (
    <section className="pt-8 pb-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Clean unboxed metadata */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                <span>Norme Statistique Internationale</span>
                <span aria-hidden="true">·</span>
                <span>Nations Unies · Eurostat · OCDE</span>
                <span aria-hidden="true">·</span>
                <span>Manuel SEEA 2021</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4 text-balance">
                Comprendre le Système de Comptabilité Économique et Environnementale
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Le PIB traditionnel mesure la production marchande mais ignore l'épuisement des ressources et la dégradation de la biosphère. Le <strong>SCEE (SEEA)</strong> comble cette faille majeure en intégrant les actifs naturels, les flux de matière physique et la valeur vitale des écosystèmes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onSelectTab('pib-pine')}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 cursor-pointer"
                >
                  Expérimenter le Calculateur PIB vs PINE
                </button>
                <button
                  onClick={() => onSelectTab('physical-flows')}
                  className="px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
                >
                  Explorer les Flux Physiques (TRE-P)
                </button>
              </div>

              <p className="text-xs text-slate-500">
                Outil interactif d'apprentissage conçu pour les étudiants, décideurs publics, économistes et citoyens curieux.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm flex flex-col justify-end min-h-[320px]">
              <img
                src={heroImage}
                alt="Diagramme scientifique de la relation nature et économie dans le cadre du SCEE"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-1">
                  Boucle Économie-Biosphère
                </span>
                <p className="text-sm font-medium leading-snug">
                  De l'extraction des ressources naturelles aux résidus rejetés : boucler le bilan comptable global de notre planète.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI / Context strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Cadre Normatif
            </span>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums block">
              2 Volets Majeurs
            </span>
            <span className="text-xs text-slate-600 mt-1 block">
              Cadre Central (SEEA-CF) & Écosystèmes (SEEA-EA)
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Agrégat Clé
            </span>
            <span className="text-xl sm:text-2xl font-bold text-emerald-800 tabular-nums block">
              PINE / EDP
            </span>
            <span className="text-xs text-slate-600 mt-1 block">
              Produit Intérieur Net Écologiquement Ajusté
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Bilan Physique
            </span>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums block">
              Conservation
            </span>
            <span className="text-xs text-slate-600 mt-1 block">
              Masse Entrante = Masse Sortante + Stockage
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Services Écosystémiques
            </span>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums block">
              3 Catégories
            </span>
            <span className="text-xs text-slate-600 mt-1 block">
              Approvisionnement, Régulation & Culturels
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
