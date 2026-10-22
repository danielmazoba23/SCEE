import React, { useState } from 'react';

export const ModulePhysicalFlows: React.FC = () => {
  // Base physical inputs in Million Tonnes (Mt)
  const [fossilFuelsMt, setFossilFuelsMt] = useState<number>(140);
  const [mineralsMt, setMineralsMt] = useState<number>(360); // Sand, gravel, cement
  const [metalsMt, setMetalsMt] = useState<number>(45);
  const [biomassMt, setBiomassMt] = useState<number>(190);
  const [waterAbstractionHm3, setWaterAbstractionHm3] = useState<number>(28500); // Millions m3

  // Levers of the circular and technical economy
  const [recyclingRate, setRecyclingRate] = useState<number>(24); // %
  const [materialEfficiencyGain, setMaterialEfficiencyGain] = useState<number>(12); // %
  const [renewableEnergyShare, setRenewableEnergyShare] = useState<number>(28); // %

  // Calculated physical flows
  const adjustedFossils = fossilFuelsMt * (1 - (renewableEnergyShare - 20) * 0.015);
  const rawExtractionTotal = adjustedFossils + mineralsMt + metalsMt + biomassMt;
  
  // Secondary recycled materials entering back into the economy
  const secondaryMaterials = (mineralsMt + metalsMt) * (recyclingRate / 100);
  const totalDomesticMaterialConsumption = rawExtractionTotal * (1 - materialEfficiencyGain / 100);

  // Net physical stock accumulation (buildings, roads, durable goods)
  const netStockAccumulation = (mineralsMt * 0.65 + metalsMt * 0.5) * (1 - materialEfficiencyGain / 200);

  // Residual flows back to nature
  // 1 tonne fossil generates ~2.8 tonnes CO2 with atmospheric oxygen
  const atmosphericEmissions = adjustedFossils * 2.65 * (1 - renewableEnergyShare / 150);
  const solidWasteLandfilled = (rawExtractionTotal - netStockAccumulation) * (1 - recyclingRate / 100) * 0.45;
  const dissipativeLosses = rawExtractionTotal * 0.08; // Fertilizer, tyre wear, pesticide dispersion
  const waterReturnedToNature = waterAbstractionHm3 * 0.88; // 88% returned after cooling/treatment

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
          <span>Cadre Central du SCEE</span>
          <span aria-hidden="true">·</span>
          <span>Chapitre 3 : Comptes des Flux Physiques</span>
          <span aria-hidden="true">·</span>
          <span>TRE-P (Ressources-Emplois)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
          Comptabilité des Flux Physiques : Matière, Énergie, Eau & Résidus
        </h2>
        <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed text-sm sm:text-base">
          L'argent n'est qu'un voile conventionnel ; la réalité physique de l'économie est un métabolisme de matières et d'énergie. Le SCEE trace <strong>chaque tonne prélevée dans la nature</strong>, son parcours à travers les filières industrielles et ménagères, et <strong>chaque tonne de résidu rejetée dans l'environnement</strong> selon la loi inviolable de conservation de la masse.
        </p>
      </div>

      {/* Main interactive area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-base">
              Prélèvements & Efficacité
            </h3>
            <span className="text-xs text-slate-500">Flux annuels</span>
          </div>

          {/* Fossils */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <label htmlFor="fossil-fuels" className="font-semibold text-slate-700">
                Combustibles Fossiles (Pétrole, Gaz, Charbon)
              </label>
              <span className="font-mono tabular-nums font-bold text-slate-900">
                {adjustedFossils.toFixed(0)} Mt
              </span>
            </div>
            <input
              id="fossil-fuels"
              type="range"
              min={60}
              max={220}
              step={5}
              value={fossilFuelsMt}
              onChange={(e) => setFossilFuelsMt(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
          </div>

          {/* Minerals */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <label htmlFor="minerals" className="font-semibold text-slate-700">
                Minéraux non métalliques (Gravier, Sable, Ciment)
              </label>
              <span className="font-mono tabular-nums font-bold text-slate-900">
                {mineralsMt} Mt
              </span>
            </div>
            <input
              id="minerals"
              type="range"
              min={150}
              max={550}
              step={10}
              value={mineralsMt}
              onChange={(e) => setMineralsMt(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
          </div>

          {/* Metals & Biomass */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <label htmlFor="metals" className="font-semibold text-slate-700 truncate">
                  Minerais Métaux
                </label>
                <span className="font-mono tabular-nums font-bold text-slate-900">
                  {metalsMt} Mt
                </span>
              </div>
              <input
                id="metals"
                type="range"
                min={20}
                max={90}
                step={5}
                value={metalsMt}
                onChange={(e) => setMetalsMt(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <label htmlFor="biomass" className="font-semibold text-slate-700 truncate">
                  Biomasse
                </label>
                <span className="font-mono tabular-nums font-bold text-slate-900">
                  {biomassMt} Mt
                </span>
              </div>
              <input
                id="biomass"
                type="range"
                min={100}
                max={300}
                step={10}
                value={biomassMt}
                onChange={(e) => setBiomassMt(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>
          </div>

          {/* Policy levers */}
          <div className="pt-3 border-t border-slate-100 space-y-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Leviers de Transformation
            </span>

            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <label htmlFor="recycling-rate" className="font-semibold text-slate-700">
                  Taux de Recyclage & Circularité
                </label>
                <span className="font-mono tabular-nums font-bold text-emerald-800">
                  {recyclingRate}%
                </span>
              </div>
              <input
                id="recycling-rate"
                type="range"
                min={10}
                max={70}
                step={2}
                value={recyclingRate}
                onChange={(e) => setRecyclingRate(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Matières secondaires réinjectées : <strong>{secondaryMaterials.toFixed(1)} Mt</strong>
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <label htmlFor="renewables-share" className="font-semibold text-slate-700">
                  Part d'Énergie Renouvelable
                </label>
                <span className="font-mono tabular-nums font-bold text-emerald-800">
                  {renewableEnergyShare}%
                </span>
              </div>
              <input
                id="renewables-share"
                type="range"
                min={15}
                max={85}
                step={5}
                value={renewableEnergyShare}
                onChange={(e) => setRenewableEnergyShare(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <label htmlFor="efficiency-gain" className="font-semibold text-slate-700">
                  Gain d'Efficacité Matière
                </label>
                <span className="font-mono tabular-nums font-bold text-slate-900">
                  +{materialEfficiencyGain}%
                </span>
              </div>
              <input
                id="efficiency-gain"
                type="range"
                min={0}
                max={40}
                step={2}
                value={materialEfficiencyGain}
                onChange={(e) => setMaterialEfficiencyGain(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Metabolic Diagram & Mass Balance */}
        <div className="lg:col-span-8 space-y-6">
          {/* 3-Sphere Metabolic Flow Architecture */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base mb-4">
              Le Métabolisme Territorial : De l'Environnement aux Résidus
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {/* Sphere 1: Natural Environment (Inputs) */}
              <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                      1. Milieu Naturel
                    </span>
                    <span className="text-[11px] font-medium text-emerald-800">Entrées</span>
                  </div>
                  <span className="text-2xl font-extrabold text-emerald-950 font-mono tabular-nums block">
                    {rawExtractionTotal.toFixed(0)} Mt
                  </span>
                  <span className="text-xs text-emerald-800/90 block mt-1">
                    Prélèvements bruts annuels
                  </span>
                </div>

                <ul className="text-xs text-slate-700 space-y-1.5 mt-4 pt-3 border-t border-emerald-200/80">
                  <li className="flex justify-between">
                    <span>Minéraux BTP :</span>
                    <span className="font-mono tabular-nums font-semibold">{mineralsMt} Mt</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Biomasse végétale :</span>
                    <span className="font-mono tabular-nums font-semibold">{biomassMt} Mt</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Énergies fossiles :</span>
                    <span className="font-mono tabular-nums font-semibold">{adjustedFossils.toFixed(0)} Mt</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Minerais métaux :</span>
                    <span className="font-mono tabular-nums font-semibold">{metalsMt} Mt</span>
                  </li>
                </ul>
              </div>

              {/* Sphere 2: Economy & Stock Accumulation */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      2. Système Économique
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">Transformation</span>
                  </div>
                  <span className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums block">
                    {totalDomesticMaterialConsumption.toFixed(0)} Mt
                  </span>
                  <span className="text-xs text-slate-600 block mt-1">
                    Consommation Intérieure Apparente
                  </span>
                </div>

                <div className="space-y-3 mt-4 pt-3 border-t border-slate-200">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs">
                    <span className="text-slate-500 block text-[11px]">Accumulation nette de stock</span>
                    <span className="font-mono tabular-nums font-bold text-slate-900 text-sm block mt-0.5">
                      +{netStockAccumulation.toFixed(0)} Mt / an
                    </span>
                    <span className="text-[11px] text-slate-500">Infrastructures, bâtiments, ponts</span>
                  </div>

                  <div className="flex justify-between text-xs text-slate-700">
                    <span>Boucle circulaire recyclée :</span>
                    <span className="font-mono tabular-nums font-semibold text-emerald-800">
                      {secondaryMaterials.toFixed(0)} Mt
                    </span>
                  </div>
                </div>
              </div>

              {/* Sphere 3: Residuals returned to nature */}
              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-950">
                      3. Résidus Émis
                    </span>
                    <span className="text-[11px] font-medium text-amber-800">Sorties</span>
                  </div>
                  <span className="text-2xl font-extrabold text-amber-950 font-mono tabular-nums block">
                    {(atmosphericEmissions + solidWasteLandfilled + dissipativeLosses).toFixed(0)} Mt
                  </span>
                  <span className="text-xs text-amber-800/90 block mt-1">
                    Charge résiduelle pour les récepteurs
                  </span>
                </div>

                <ul className="text-xs text-slate-700 space-y-1.5 mt-4 pt-3 border-t border-amber-200/80">
                  <li className="flex justify-between">
                    <span>Émissions atmosphériques :</span>
                    <span className="font-mono tabular-nums font-semibold text-amber-900">
                      {atmosphericEmissions.toFixed(0)} Mt
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Déchets ultimes enfouis :</span>
                    <span className="font-mono tabular-nums font-semibold text-amber-900">
                      {solidWasteLandfilled.toFixed(0)} Mt
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pertes dissipatives (engrais, pneus) :</span>
                    <span className="font-mono tabular-nums font-semibold">
                      {dissipativeLosses.toFixed(0)} Mt
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Official SEEA Matrix Representation (TRE-P) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-base">
                Tableau Synthétique Ressources-Emplois Physiques (TRE-P)
              </h3>
              <span className="text-xs text-slate-500">Norme statistique Eurostat / ONU</span>
            </div>

            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-600 bg-slate-50">
                  <th className="py-2.5 px-3 font-semibold">Catégorie de Flux</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Ressources (Entrées)</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Emplois (Utilisations)</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Résidus (Sorties)</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Accumulation Nette</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono tabular-nums">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-2 px-3 font-sans font-medium text-slate-900">Minéraux BTP</td>
                  <td className="py-2 px-3 text-right text-emerald-800">{mineralsMt} Mt</td>
                  <td className="py-2 px-3 text-right text-slate-700">{mineralsMt} Mt</td>
                  <td className="py-2 px-3 text-right text-slate-500">{(mineralsMt * 0.35 * (1 - recyclingRate/100)).toFixed(0)} Mt</td>
                  <td className="py-2 px-3 text-right font-semibold text-slate-900">+{(mineralsMt * 0.65).toFixed(0)} Mt</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-2 px-3 font-sans font-medium text-slate-900">Combustibles Fossiles</td>
                  <td className="py-2 px-3 text-right text-emerald-800">{adjustedFossils.toFixed(0)} Mt</td>
                  <td className="py-2 px-3 text-right text-slate-700">{adjustedFossils.toFixed(0)} Mt</td>
                  <td className="py-2 px-3 text-right text-amber-900">{atmosphericEmissions.toFixed(0)} Mt</td>
                  <td className="py-2 px-3 text-right text-slate-400">0 Mt</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-2 px-3 font-sans font-medium text-slate-900">Biomasse & Aliments</td>
                  <td className="py-2 px-3 text-right text-emerald-800">{biomassMt} Mt</td>
                  <td className="py-2 px-3 text-right text-slate-700">{biomassMt} Mt</td>
                  <td className="py-2 px-3 text-right text-slate-500">{(biomassMt * 0.85).toFixed(0)} Mt</td>
                  <td className="py-2 px-3 text-right text-slate-400">0 Mt</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-2 px-3 font-sans font-medium text-slate-900">Eau Prélevée</td>
                  <td className="py-2 px-3 text-right text-blue-800">{(waterAbstractionHm3 / 1000).toFixed(1)} km³</td>
                  <td className="py-2 px-3 text-right text-slate-700">{(waterAbstractionHm3 / 1000).toFixed(1)} km³</td>
                  <td className="py-2 px-3 text-right text-blue-800">{(waterReturnedToNature / 1000).toFixed(1)} km³</td>
                  <td className="py-2 px-3 text-right text-slate-400">{( (waterAbstractionHm3 - waterReturnedToNature) / 1000 ).toFixed(1)} km³ cons.</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-600 leading-relaxed">
              <strong>Principe de fermeture de bilan :</strong> Dans la comptabilité physique du SCEE, aucun gramme de matière ne disparaît magiquement. Si une économie réduit sa consommation de combustibles fossiles, ses émissions de résidus gazeux diminuent instantanément dans le compte d'émissions atmosphériques (Air Emission Accounts - AEA).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
