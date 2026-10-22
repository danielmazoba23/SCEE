import React, { useState } from 'react';

export const ModulePibVsPine: React.FC = () => {
  // Base parameters in billions of euros (Md€)
  const [baseGdp, setBaseGdp] = useState<number>(2450); // Typical medium/large European economy
  const [capitalDepreciationRate, setCapitalDepreciationRate] = useState<number>(16); // % of GDP for CCF
  const [resourceDepletionRate, setResourceDepletionRate] = useState<number>(4.2); // % of GDP for resource extraction beyond renewal
  const [ghgEmissionsMt, setGhgEmissionsMt] = useState<number>(380); // Mt CO2eq
  const [carbonShadowPrice, setCarbonShadowPrice] = useState<number>(150); // €/tonne CO2
  const [ecosystemDegradation, setEcosystemDegradation] = useState<number>(45); // Md€ for water/soil/biodiversity damage

  // Extreme pedagogical scenario toggle
  const [isExtremeScenarioActive, setIsExtremeScenarioActive] = useState<boolean>(false);

  // Computed accounting aggregates
  const effectiveGdp = isExtremeScenarioActive ? baseGdp + 220 : baseGdp;
  const capitalConsumption = (effectiveGdp * capitalDepreciationRate) / 100;
  const netDomesticProduct = effectiveGdp - capitalConsumption; // PIN classique

  const resourceDepletion = isExtremeScenarioActive
    ? ((effectiveGdp * resourceDepletionRate) / 100) + 260
    : (effectiveGdp * resourceDepletionRate) / 100;

  const carbonCost = (ghgEmissionsMt * (isExtremeScenarioActive ? 1.4 : 1.0) * carbonShadowPrice) / 1000; // in Md€
  const totalDegradation = (isExtremeScenarioActive ? ecosystemDegradation * 2.8 : ecosystemDegradation) + carbonCost;

  // Environmentally-adjusted Net Domestic Product (PINE / EDP)
  const pine = netDomesticProduct - resourceDepletion - totalDegradation;
  const ecologicalGapPercent = ((effectiveGdp - pine) / effectiveGdp) * 100;

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
          <span>Cadre Central du SCEE</span>
          <span aria-hidden="true">·</span>
          <span>Chapitre 6 : Intégration Macroéconomique</span>
          <span aria-hidden="true">·</span>
          <span>Du SCN au SCEE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
          Du PIB au PINE : Le Calculateur de Produit Intérieur Net Ajusté
        </h2>
        <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed text-sm sm:text-base">
          Le Système de Comptabilité Nationale (SCN) déduit déjà l'usure des machines et bâtiments pour calculer le Produit Intérieur Net (PIN). Le SCEE applique cette même rigueur aux actifs naturels : <strong>pourquoi amortir un tracteur en métal et considérer gratuites la perte d'une forêt ou la dégradation du climat ?</strong>
        </p>
      </div>

      {/* Extreme Scenario Banner */}
      <div className={`p-4 rounded-xl border transition-colors ${
        isExtremeScenarioActive 
          ? 'bg-amber-50/80 border-amber-300 text-amber-950' 
          : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Expérience de pensée économique
            </span>
            <span className="font-bold text-base block mt-0.5">
              Le paradoxe de la « Déforestation Totale Immédiate »
            </span>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              Si un pays rase toutes ses forêts en une année pour exporter le bois, son PIB marchand augmente temporairement (ventes de bois), mais son PINE s'effondre en raison de la liquidation totale de l'actif naturel.
            </p>
          </div>
          <button
            onClick={() => setIsExtremeScenarioActive(!isExtremeScenarioActive)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg shrink-0 transition-colors cursor-pointer ${
              isExtremeScenarioActive
                ? 'bg-amber-900 text-white hover:bg-amber-950'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {isExtremeScenarioActive ? 'Désactiver le scénario' : 'Simuler ce choc écologique'}
          </button>
        </div>
      </div>

      {/* Main Two-Zone Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-base">
              Leviers Macroéconomiques & Environnementaux
            </h3>
            <span className="text-xs text-slate-500">Unités monétaires & physiques</span>
          </div>

          {/* Slider 1: Base GDP */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor="base-gdp" className="font-semibold text-slate-700">
                PIB Marchand Brut (SCN)
              </label>
              <span className="font-mono tabular-nums font-bold text-slate-900">
                {effectiveGdp.toLocaleString('fr-FR')} Md€
              </span>
            </div>
            <input
              id="base-gdp"
              type="range"
              min={1000}
              max={3500}
              step={50}
              value={baseGdp}
              onChange={(e) => setBaseGdp(Number(e.target.value))}
              disabled={isExtremeScenarioActive}
              className="w-full cursor-pointer disabled:opacity-50"
            />
            <span className="text-[11px] text-slate-500 block mt-1">
              Production de biens et services marchands sur le territoire national.
            </span>
          </div>

          {/* Slider 2: Capital depreciation */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor="capital-depreciation" className="font-semibold text-slate-700">
                Amortissement du Capital Produit (CCF)
              </label>
              <span className="font-mono tabular-nums font-bold text-slate-900">
                {capitalDepreciationRate}% ({capitalConsumption.toFixed(1)} Md€)
              </span>
            </div>
            <input
              id="capital-depreciation"
              type="range"
              min={10}
              max={25}
              step={0.5}
              value={capitalDepreciationRate}
              onChange={(e) => setCapitalDepreciationRate(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
            <span className="text-[11px] text-slate-500 block mt-1">
              Consommation de capital fixe : usure des machines, bâtiments, réseaux routiers.
            </span>
          </div>

          {/* Slider 3: Natural Resource Depletion */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor="resource-depletion" className="font-semibold text-slate-700">
                Déplétion des Actifs Naturels (Bois, Minerais, Eau)
              </label>
              <span className="font-mono tabular-nums font-bold text-amber-900">
                -{resourceDepletion.toFixed(1)} Md€
              </span>
            </div>
            <input
              id="resource-depletion"
              type="range"
              min={1}
              max={10}
              step={0.2}
              value={resourceDepletionRate}
              onChange={(e) => setResourceDepletionRate(Number(e.target.value))}
              disabled={isExtremeScenarioActive}
              className="w-full cursor-pointer disabled:opacity-50"
            />
            <span className="text-[11px] text-slate-500 block mt-1">
              Prélèvements au-delà du renouvellement biologique ou épuisement des réserves fossiles.
            </span>
          </div>

          {/* Slider 4: GHG Emissions & Carbon Price */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <label htmlFor="ghg-emissions" className="font-semibold text-slate-700">
                  Émissions Nationales de GES
                </label>
                <span className="font-mono tabular-nums font-bold text-slate-900">
                  {ghgEmissionsMt} Mt CO₂eq
                </span>
              </div>
              <input
                id="ghg-emissions"
                type="range"
                min={100}
                max={700}
                step={20}
                value={ghgEmissionsMt}
                onChange={(e) => setGhgEmissionsMt(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <label htmlFor="carbon-price" className="font-semibold text-slate-700">
                  Valeur Tutélaire du Carbone
                </label>
                <span className="font-mono tabular-nums font-bold text-slate-900">
                  {carbonShadowPrice} € / tonne
                </span>
              </div>
              <input
                id="carbon-price"
                type="range"
                min={50}
                max={300}
                step={10}
                value={carbonShadowPrice}
                onChange={(e) => setCarbonShadowPrice(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Coût des dommages climatiques estimés : <strong>{carbonCost.toFixed(1)} Md€</strong>.
              </span>
            </div>
          </div>

          {/* Slider 5: Ecosystem Degradation */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor="ecosystem-damage" className="font-semibold text-slate-700">
                Dégradation Sols, Eaux & Biodiversité
              </label>
              <span className="font-mono tabular-nums font-bold text-red-900">
                -{(isExtremeScenarioActive ? ecosystemDegradation * 2.8 : ecosystemDegradation).toFixed(1)} Md€
              </span>
            </div>
            <input
              id="ecosystem-damage"
              type="range"
              min={10}
              max={120}
              step={5}
              value={ecosystemDegradation}
              onChange={(e) => setEcosystemDegradation(Number(e.target.value))}
              disabled={isExtremeScenarioActive}
              className="w-full cursor-pointer disabled:opacity-50"
            />
            <span className="text-[11px] text-slate-500 block mt-1">
              Coûts de restauration pour rétablir le bon état écologique des écosystèmes.
            </span>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setBaseGdp(2450);
                setCapitalDepreciationRate(16);
                setResourceDepletionRate(4.2);
                setGhgEmissionsMt(380);
                setCarbonShadowPrice(150);
                setEcosystemDegradation(45);
                setIsExtremeScenarioActive(false);
              }}
              className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
            >
              Réinitialiser aux valeurs de référence européennes
            </button>
          </div>
        </div>

        {/* Right: Cascade Waterfall Visualization */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-base">
              Décomposition Comptable Normalisée (Cascade SCN ➔ SCEE)
            </h3>
            <span className="text-xs text-slate-500">Milliards d'euros (Md€)</span>
          </div>

          {/* Comparative Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium block">
                1. PIB Traditionnel (SCN)
              </span>
              <span className="text-xl font-extrabold text-slate-900 font-mono tabular-nums block mt-1">
                {effectiveGdp.toFixed(1)} Md€
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Brut · Sans dépréciation
              </span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium block">
                2. PIN Classique (SCN)
              </span>
              <span className="text-xl font-extrabold text-slate-700 font-mono tabular-nums block mt-1">
                {netDomesticProduct.toFixed(1)} Md€
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Net de capital produit
              </span>
            </div>

            <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
              <span className="text-xs text-emerald-800 font-medium block">
                3. PINE Ajusté (SCEE)
              </span>
              <span className="text-xl font-extrabold text-emerald-900 font-mono tabular-nums block mt-1">
                {pine.toFixed(1)} Md€
              </span>
              <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">
                Net écologique réel
              </span>
            </div>
          </div>

          {/* Waterfall Steps */}
          <div className="space-y-3 pt-2">
            {/* Step 1 */}
            <div className="p-3 rounded-lg border border-slate-200 bg-white">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-900">
                  PIB (Produit Intérieur Brut)
                </span>
                <span className="font-mono tabular-nums font-bold text-slate-900">
                  +{effectiveGdp.toFixed(1)} Md€
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mt-2">
                <div className="bg-slate-800 h-full w-full rounded-full"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/60">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-700">
                  - Consommation de Capital Fixe (Amortissement usines, routes)
                </span>
                <span className="font-mono tabular-nums font-semibold text-slate-600">
                  -{capitalConsumption.toFixed(1)} Md€
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 mt-1">
                <span>Agrégat intermédiaire : <strong>PIN = {netDomesticProduct.toFixed(1)} Md€</strong></span>
                <span>-{capitalDepreciationRate}% du PIB</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/50">
              <div className="flex justify-between items-center text-sm">
                <span className="text-amber-950 font-medium">
                  - Déplétion des Actifs Naturels (Épuisement réserves & sur-récolte)
                </span>
                <span className="font-mono tabular-nums font-bold text-amber-900">
                  -{resourceDepletion.toFixed(1)} Md€
                </span>
              </div>
              <p className="text-xs text-amber-800 mt-1">
                Selon le Cadre Central du SCEE, la rente de la ressource épuisée est déduite car le patrimoine s'est appauvri.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-3 rounded-lg border border-red-200 bg-red-50/50">
              <div className="flex justify-between items-center text-sm">
                <span className="text-red-950 font-medium">
                  - Dégradation de l'Environnement (Climat, Air, Eau, Sols)
                </span>
                <span className="font-mono tabular-nums font-bold text-red-900">
                  -{totalDegradation.toFixed(1)} Md€
                </span>
              </div>
              <div className="text-xs text-red-800 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                <span>Climat (GES) : {carbonCost.toFixed(1)} Md€</span>
                <span>Sols & Eaux : {(isExtremeScenarioActive ? ecosystemDegradation * 2.8 : ecosystemDegradation).toFixed(1)} Md€</span>
              </div>
            </div>

            {/* Final Aggregate */}
            <div className="p-4 rounded-xl border-2 border-emerald-700 bg-emerald-50/70">
              <div className="flex justify-between items-center text-base">
                <span className="font-extrabold text-emerald-950">
                  = PINE (Produit Intérieur Net Écologiquement Ajusté)
                </span>
                <span className="font-mono tabular-nums font-extrabold text-emerald-900 text-lg">
                  {pine.toFixed(1)} Md€
                </span>
              </div>
              <div className="mt-2 text-xs text-emerald-900/90 leading-relaxed">
                L'écart écologique global s'élève à <strong className="font-mono">{ecologicalGapPercent.toFixed(1)}%</strong> du PIB brut. C'est le flux annuel net de valeur réellement durable créé par l'économie sans léguer une dette écologique invisible aux générations suivantes.
              </div>
            </div>
          </div>

          {/* Didactic Callout */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2">
            <span className="font-bold text-slate-900 block">
              Ce que la comptabilité conventionnelle nous cache :
            </span>
            <p>
              Tant qu'un pays s'appuie uniquement sur le PIB, détruire ses actifs environnementaux apparaît comme un enrichissement immédiat. Le SCEE restaure la vérité comptable élémentaire : <strong>on ne peut pas consommer son capital et appeler cela un revenu</strong> (John Hicks).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
