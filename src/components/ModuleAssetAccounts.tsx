import React, { useState } from 'react';
import assetsImage from '../assets/images/economic_natural_assets_1792669676418.jpg';

export const ModuleAssetAccounts: React.FC = () => {
  // Valuation mode: Physical units vs Monetary valuation
  const [valuationMode, setValuationMode] = useState<'physical' | 'monetary'>('physical');

  // Forest asset parameters
  const [forestOpeningStockMm3, setForestOpeningStockMm3] = useState<number>(2850); // Millions m3 timber
  const [forestNaturalGrowthMm3, setForestNaturalGrowthMm3] = useState<number>(88); // Annual biological growth
  const [forestHarvestMm3, setForestHarvestMm3] = useState<number>(64); // Annual fellings
  const [forestDisturbancesMm3, setForestDisturbancesMm3] = useState<number>(14); // Storms, bark beetle, fire
  const timberPricePerM3 = 62; // € / m3 standing timber (rente de la ressource)

  // Groundwater asset parameters
  const [aquiferCapacityMm3] = useState<number>(14200);
  const [aquiferOpeningStockMm3, setAquiferOpeningStockMm3] = useState<number>(11400);
  const [annualRechargeMm3, setAnnualRechargeMm3] = useState<number>(1650);
  const [annualWithdrawalsMm3, setAnnualWithdrawalsMm3] = useState<number>(1950);
  const waterShadowPricePerM3 = 0.85; // € / m3

  // Mineral asset parameters (Lithium / Copper critical metals)
  const [mineReservesMt, setMineReservesMt] = useState<number>(42); // Million tonnes
  const [newDiscoveriesMt, setNewDiscoveriesMt] = useState<number>(2.5);
  const [annualExtractionMt, setAnnualExtractionMt] = useState<number>(3.8);
  const metalRentPerTonne = 1250; // € / tonne ore rent

  // Computed Forest Closing Stock
  const forestClosingStockMm3 = forestOpeningStockMm3 + forestNaturalGrowthMm3 - forestHarvestMm3 - forestDisturbancesMm3;
  const forestNetVariationMm3 = forestClosingStockMm3 - forestOpeningStockMm3;

  // Computed Aquifer Closing Stock
  const aquiferClosingStockMm3 = aquiferOpeningStockMm3 + annualRechargeMm3 - annualWithdrawalsMm3;
  const aquiferNetVariationMm3 = aquiferClosingStockMm3 - aquiferOpeningStockMm3;

  // Computed Mineral Closing Stock & R/P ratio
  const mineClosingStockMt = mineReservesMt + newDiscoveriesMt - annualExtractionMt;
  const mineYearsRemaining = annualExtractionMt > 0 ? (mineClosingStockMt / annualExtractionMt).toFixed(1) : '∞';

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
          <span>Cadre Central du SCEE</span>
          <span aria-hidden="true">·</span>
          <span>Chapitre 5 : Comptes d'Actifs Environnementaux</span>
          <span aria-hidden="true">·</span>
          <span>Stocks & Variations de Patrimoine</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
          Les Comptes d'Actifs Naturels : L'Équation Fondamentale du Patrimoine
        </h2>
        <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed text-sm sm:text-base">
          Tout comme une entreprise tient un bilan comptable de ses machines et de sa trésorerie, une nation doit comptabiliser ses <strong>stocks d'ouverture et de clôture</strong> de capital naturel. Si les prélèvements dépassent la régénération biologique, l'actif diminue : c'est la <strong>déplétion</strong>.
        </p>
      </div>

      {/* Banner with scientific illustration */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-7 p-6 sm:p-8 text-white z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-2">
              L'Équation Normative Universelle de l'ONU
            </span>
            <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 font-mono text-xs sm:text-sm text-emerald-100 mb-4 leading-relaxed">
              Stock d'ouverture + Croissance naturelle + Découvertes - Extraction - Pertes = Stock de clôture
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Cette identité comptable garantit qu'aucune perte de ressource ne passe inaperçue. Elle s'applique aussi bien aux mètres cubes de bois sur pied qu'aux nappes phréatiques et aux réserves minières sous-terraines.
            </p>
          </div>
          <div className="md:col-span-5 h-64 md:h-full min-h-[220px]">
            <img
              src={assetsImage}
              alt="Coupe scientifique des actifs naturels : forêt, nappe aquifère et réserves minérales"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Valuation Switcher */}
      <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200">
        <span className="text-xs font-semibold text-slate-700">
          Système de Mesure du SCEE :
        </span>
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setValuationMode('physical')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              valuationMode === 'physical'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Unités Physiques (m³, tonnes, km²)
          </button>
          <button
            onClick={() => setValuationMode('monetary')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              valuationMode === 'monetary'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Évaluation Monétaire (Rente de la Ressource - M€)
          </button>
        </div>
      </div>

      {/* 3 Interactive Asset Accounts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Asset 1: Forest & Timber */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                1. Forêt & Bois sur Pied
              </span>
              <span className="text-[11px] text-slate-500">Ressource biologique renouvelable</span>
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded-xl space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">Stock de clôture :</span>
                <span className="font-mono tabular-nums font-bold text-slate-900 text-sm">
                  {valuationMode === 'physical'
                    ? `${forestClosingStockMm3} Mm³`
                    : `${((forestClosingStockMm3 * timberPricePerM3) / 1000).toFixed(1)} Md€`}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Bilan net annuel :</span>
                <span className={`font-mono tabular-nums font-semibold ${
                  forestNetVariationMm3 >= 0 ? 'text-emerald-800' : 'text-red-800'
                }`}>
                  {forestNetVariationMm3 >= 0 ? '+' : ''}
                  {valuationMode === 'physical'
                    ? `${forestNetVariationMm3} Mm³`
                    : `${((forestNetVariationMm3 * timberPricePerM3) / 1000).toFixed(2)} Md€`}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-3 mt-4 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="forest-harvest" className="font-medium text-slate-700">
                    Récoltes / Exploitation forestière :
                  </label>
                  <span className="font-mono tabular-nums font-semibold text-slate-900">
                    {forestHarvestMm3} Mm³
                  </span>
                </div>
                <input
                  id="forest-harvest"
                  type="range"
                  min={30}
                  max={120}
                  step={2}
                  value={forestHarvestMm3}
                  onChange={(e) => setForestHarvestMm3(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="forest-disturbances" className="font-medium text-slate-700">
                    Aléas climatiques (Tempêtes, Scolytes, Feux) :
                  </label>
                  <span className="font-mono tabular-nums font-semibold text-amber-900">
                    {forestDisturbancesMm3} Mm³
                  </span>
                </div>
                <input
                  id="forest-disturbances"
                  type="range"
                  min={5}
                  max={45}
                  step={1}
                  value={forestDisturbancesMm3}
                  onChange={(e) => setForestDisturbancesMm3(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-snug">
            {forestHarvestMm3 + forestDisturbancesMm3 > forestNaturalGrowthMm3 ? (
              <span className="text-red-800 font-medium">
                ⚠️ Décapitalisation biologique : Les prélèvements et pertes dépassent l'accroissement naturel (+{forestNaturalGrowthMm3} Mm³).
              </span>
            ) : (
              <span className="text-emerald-800 font-medium">
                ✓ Gestion sylvicole soutenable : Le volume de bois sur pied augmente ou se stabilise.
              </span>
            )}
          </div>
        </div>

        {/* Asset 2: Groundwater Aquifer */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-950">
                2. Nappe Phréatique
              </span>
              <span className="text-[11px] text-slate-500">Ressource hydrique à cycle</span>
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded-xl space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">Stock de clôture :</span>
                <span className="font-mono tabular-nums font-bold text-slate-900 text-sm">
                  {valuationMode === 'physical'
                    ? `${aquiferClosingStockMm3} Mm³`
                    : `${((aquiferClosingStockMm3 * waterShadowPricePerM3) / 1000).toFixed(1)} Md€`}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Taux de remplissage :</span>
                <span className="font-mono tabular-nums font-semibold text-blue-900">
                  {((aquiferClosingStockMm3 / aquiferCapacityMm3) * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-3 mt-4 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="water-withdrawals" className="font-medium text-slate-700">
                    Prélèvements annuels (Irrigation & Eau potable) :
                  </label>
                  <span className="font-mono tabular-nums font-semibold text-slate-900">
                    {annualWithdrawalsMm3} Mm³
                  </span>
                </div>
                <input
                  id="water-withdrawals"
                  type="range"
                  min={1000}
                  max={3000}
                  step={50}
                  value={annualWithdrawalsMm3}
                  onChange={(e) => setAnnualWithdrawalsMm3(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="water-recharge" className="font-medium text-slate-700">
                    Recharge naturelle (Précipitations infiltrées) :
                  </label>
                  <span className="font-mono tabular-nums font-semibold text-blue-900">
                    {annualRechargeMm3} Mm³
                  </span>
                </div>
                <input
                  id="water-recharge"
                  type="range"
                  min={800}
                  max={2500}
                  step={50}
                  value={annualRechargeMm3}
                  onChange={(e) => setAnnualRechargeMm3(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-snug">
            {aquiferNetVariationMm3 < 0 ? (
              <span className="text-red-800 font-medium">
                ⚠️ Stress hydrique structurel : Déficit annuel de {Math.abs(aquiferNetVariationMm3)} Mm³. Risque de rabattement irréversible de la nappe.
              </span>
            ) : (
              <span className="text-emerald-800 font-medium">
                ✓ Équilibre piézométrique préservé : La recharge compense les pompages.
              </span>
            )}
          </div>
        </div>

        {/* Asset 3: Mineral Reserve (Subsurface) */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-950">
                3. Gisement Minier Critique
              </span>
              <span className="text-[11px] text-slate-500">Ressource non renouvelable</span>
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded-xl space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">Réserves prouvées (Clôture) :</span>
                <span className="font-mono tabular-nums font-bold text-slate-900 text-sm">
                  {valuationMode === 'physical'
                    ? `${mineClosingStockMt.toFixed(1)} Mt`
                    : `${((mineClosingStockMt * metalRentPerTonne) / 1000).toFixed(1)} Md€`}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Durée de vie résiduelle (R/P) :</span>
                <span className="font-mono tabular-nums font-semibold text-amber-900">
                  {mineYearsRemaining} années
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-3 mt-4 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="mining-rate" className="font-medium text-slate-700">
                    Rythme d'extraction annuel :
                  </label>
                  <span className="font-mono tabular-nums font-semibold text-slate-900">
                    {annualExtractionMt} Mt / an
                  </span>
                </div>
                <input
                  id="mining-rate"
                  type="range"
                  min={1}
                  max={8}
                  step={0.2}
                  value={annualExtractionMt}
                  onChange={(e) => setAnnualExtractionMt(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="new-discoveries" className="font-medium text-slate-700">
                    Nouvelles découvertes géologiques :
                  </label>
                  <span className="font-mono tabular-nums font-semibold text-slate-700">
                    +{newDiscoveriesMt} Mt
                  </span>
                </div>
                <input
                  id="new-discoveries"
                  type="range"
                  min={0}
                  max={5}
                  step={0.5}
                  value={newDiscoveriesMt}
                  onChange={(e) => setNewDiscoveriesMt(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-snug">
            <span className="text-slate-600">
              <strong>Règle de Hartwick :</strong> Pour maintenir la richesse globale constante lors de l'extraction d'un stock fini, la totalité de la rente minière ({((annualExtractionMt * metalRentPerTonne)/1000).toFixed(1)} Md€) doit être réinvestie dans du capital humain ou des énergies pérennes.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
