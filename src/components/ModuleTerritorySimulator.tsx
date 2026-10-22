import React, { useState } from 'react';

type StrategyPreset = 'extractivist' | 'status-quo' | 'scee-transition' | 'regeneration';

export const ModuleTerritorySimulator: React.FC = () => {
  const [strategy, setStrategy] = useState<StrategyPreset>('scee-transition');

  // Policy levers
  const [greenTaxShare, setGreenTaxShare] = useState<number>(18); // %
  const [renaturationInvestmentMEur, setRenaturationInvestmentMEur] = useState<number>(350); // M€/yr
  const [circularObligationRate, setCircularObligationRate] = useState<number>(45); // %
  const [carbonShadowPrice, setCarbonShadowPrice] = useState<number>(160); // €/t

  // Apply presets
  const applyPreset = (preset: StrategyPreset) => {
    setStrategy(preset);
    if (preset === 'extractivist') {
      setGreenTaxShare(4);
      setRenaturationInvestmentMEur(40);
      setCircularObligationRate(15);
      setCarbonShadowPrice(30);
    } else if (preset === 'status-quo') {
      setGreenTaxShare(10);
      setRenaturationInvestmentMEur(120);
      setCircularObligationRate(28);
      setCarbonShadowPrice(85);
    } else if (preset === 'scee-transition') {
      setGreenTaxShare(22);
      setRenaturationInvestmentMEur(380);
      setCircularObligationRate(52);
      setCarbonShadowPrice(175);
    } else if (preset === 'regeneration') {
      setGreenTaxShare(35);
      setRenaturationInvestmentMEur(650);
      setCircularObligationRate(75);
      setCarbonShadowPrice(250);
    }
  };

  // Territorial base metrics (Region of 2.5 million inhabitants)
  const baseTerritorialGdp = 78.5; // Md€
  
  // Traditional economic indicators
  const gdpGrowthRate = strategy === 'extractivist' ? 2.8 : strategy === 'status-quo' ? 1.4 : strategy === 'scee-transition' ? 1.9 : 1.2;
  const simulatedGdp = baseTerritorialGdp * (1 + gdpGrowthRate / 100);
  const employmentRate = strategy === 'extractivist' ? 73.5 : strategy === 'status-quo' ? 71.8 : strategy === 'scee-transition' ? 73.2 : 72.4;
  const publicDebtPercent = strategy === 'extractivist' ? 62 : strategy === 'status-quo' ? 67 : strategy === 'scee-transition' ? 65 : 69;

  // SEEA Environmental-Economic Accounting indicators
  const naturalCapitalHealthIndex = Math.min(
    100,
    Math.max(
      20,
      Math.round(
        35 +
          (greenTaxShare * 0.7) +
          (renaturationInvestmentMEur * 0.05) +
          (circularObligationRate * 0.3) -
          (strategy === 'extractivist' ? 30 : 0)
      )
    )
  );

  const annualEcologicalDepletionMEur = Math.max(
    150,
    Math.round(2400 - (greenTaxShare * 35) - (circularObligationRate * 20) - (renaturationInvestmentMEur * 1.5))
  );

  const carbonCostMEur = Math.round(
    ((strategy === 'extractivist' ? 18.5 : strategy === 'status-quo' ? 14.2 : strategy === 'scee-transition' ? 8.6 : 5.1) *
      carbonShadowPrice)
  );

  const totalEnvironmentalDebitMEur = annualEcologicalDepletionMEur + carbonCostMEur;
  const simulatedPine = simulatedGdp - (simulatedGdp * 0.15) - (totalEnvironmentalDebitMEur / 1000);
  const netEcologicalDebt10YearsMdEur = ((totalEnvironmentalDebitMEur / 1000) * 10).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
          <span>Gouvernance Publique</span>
          <span aria-hidden="true">·</span>
          <span>Aide à la Décision Macroéconomique</span>
          <span aria-hidden="true">·</span>
          <span>Double Bilan SCN / SCEE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
          Simulateur Territorial : Piloter l'Économie avec les Lunettes du SCEE
        </h2>
        <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed text-sm sm:text-base">
          Mettez-vous à la place d'un exécutif régional à la tête d'un territoire de 2,5 millions d'habitants. Observez en temps réel le décalage frappant entre le <strong>tableau de bord traditionnel</strong> (qui applaudit la croissance sans voir l'érosion) et le <strong>tableau de bord SCEE</strong> qui révèle la dette écologique transmise.
        </p>
      </div>

      {/* Preset Strategy Buttons */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl">
        <button
          onClick={() => applyPreset('extractivist')}
          className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
            strategy === 'extractivist'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Croissance Extractiviste Maximale
        </button>
        <button
          onClick={() => applyPreset('status-quo')}
          className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
            strategy === 'status-quo'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Politique au Statut Quo
        </button>
        <button
          onClick={() => applyPreset('scee-transition')}
          className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
            strategy === 'scee-transition'
              ? 'bg-emerald-900 text-white shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          (Recommandé) Transition SCEE Intégrée
        </button>
        <button
          onClick={() => applyPreset('regeneration')}
          className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
            strategy === 'regeneration'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Haute Régénération du Capital Naturel
        </button>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-base">
              Leviers d'Action Politique Territoriale
            </h3>
            <span className="text-xs text-slate-500">Plan 2026-2035</span>
          </div>

          {/* Lever 1 */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <label htmlFor="green-tax" className="font-semibold text-slate-700">
                Part de Fiscalité Environnementale Incitative
              </label>
              <span className="font-mono tabular-nums font-bold text-emerald-800">
                {greenTaxShare}%
              </span>
            </div>
            <input
              id="green-tax"
              type="range"
              min={2}
              max={40}
              step={1}
              value={greenTaxShare}
              onChange={(e) => setGreenTaxShare(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
            <span className="text-[11px] text-slate-500 block mt-0.5">
              Taxes sur pollutions et déplétion réinvesties dans le capital naturel.
            </span>
          </div>

          {/* Lever 2 */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <label htmlFor="renaturation-inv" className="font-semibold text-slate-700">
                Budget Annuel de Renaturation & Restauration
              </label>
              <span className="font-mono tabular-nums font-bold text-slate-900">
                {renaturationInvestmentMEur} M€ / an
              </span>
            </div>
            <input
              id="renaturation-inv"
              type="range"
              min={20}
              max={800}
              step={20}
              value={renaturationInvestmentMEur}
              onChange={(e) => setRenaturationInvestmentMEur(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
            <span className="text-[11px] text-slate-500 block mt-0.5">
              Restauration des haies, tourbières, ripisylves et corridors écologiques.
            </span>
          </div>

          {/* Lever 3 */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <label htmlFor="circular-obligation" className="font-semibold text-slate-700">
                Obligation de Circularité dans les Marchés Publics
              </label>
              <span className="font-mono tabular-nums font-bold text-emerald-800">
                {circularObligationRate}%
              </span>
            </div>
            <input
              id="circular-obligation"
              type="range"
              min={10}
              max={80}
              step={5}
              value={circularObligationRate}
              onChange={(e) => setCircularObligationRate(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
            <span className="text-[11px] text-slate-500 block mt-0.5">
              Taux minimum de matériaux réemployés ou biosourcés exigé dans le BTP.
            </span>
          </div>

          {/* Lever 4 */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <label htmlFor="shadow-price-ter" className="font-semibold text-slate-700">
                Valeur Tutélaire du Carbone dans les Arbitrages Publics
              </label>
              <span className="font-mono tabular-nums font-bold text-slate-900">
                {carbonShadowPrice} € / t
              </span>
            </div>
            <input
              id="shadow-price-ter"
              type="range"
              min={20}
              max={300}
              step={10}
              value={carbonShadowPrice}
              onChange={(e) => setCarbonShadowPrice(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
          </div>

          {/* Diagnosis Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed space-y-1.5">
            <span className="font-bold text-slate-900 block">
              Synthèse de Gouvernance :
            </span>
            {naturalCapitalHealthIndex < 45 ? (
              <p className="text-red-900">
                <strong>Attention critique :</strong> Votre trajectoire produit une hausse apparente du PIB mais épuise le patrimoine naturel. Dans 15 ans, le coût des sinistres climatiques et des pénuries d'eau surpassera les gains économiques initiaux.
              </p>
            ) : naturalCapitalHealthIndex >= 70 ? (
              <p className="text-emerald-950 font-medium">
                <strong>Excellence systémique :</strong> Votre territoire restaure son capital naturel tout en maintenant un tissu d'emplois solides dans l'économie circulaire et les services de résilience.
              </p>
            ) : (
              <p className="text-slate-700">
                <strong>Trajectoire de stabilisation :</strong> Les dégradations sont ralenties mais le capital naturel reste sous tension. L'augmentation des investissements de régénération permettrait d'atteindre un bilan écologique net positif.
              </p>
            )}
          </div>
        </div>

        {/* Dual Dashboard: Classical vs SEEA */}
        <div className="lg:col-span-7 space-y-6">
          {/* Dashboard 1: Traditional SCN */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Tableau de Bord Conventionnel (SCN Traditionnel)
                </h3>
                <span className="text-xs text-slate-500">Ce que voient les agences de notation financières</span>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                Indicateurs 1D
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">PIB Territorial</span>
                <span className="text-xl font-extrabold text-slate-900 font-mono tabular-nums block mt-1">
                  {simulatedGdp.toFixed(1)} Md€
                </span>
                <span className="text-xs text-emerald-800 font-semibold block mt-0.5">
                  +{gdpGrowthRate}% / an
                </span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Taux d'Emploi</span>
                <span className="text-xl font-extrabold text-slate-900 font-mono tabular-nums block mt-1">
                  {employmentRate}%
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">
                  Population active occupée
                </span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Dette Financière / PIB</span>
                <span className="text-xl font-extrabold text-slate-900 font-mono tabular-nums block mt-1">
                  {publicDebtPercent}%
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">
                  Conforme critères Maastricht
                </span>
              </div>
            </div>
          </div>

          {/* Dashboard 2: SEEA Integrated Dashboard */}
          <div className="bg-white p-6 rounded-2xl border-2 border-emerald-700/80 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-100 mb-4">
              <div>
                <h3 className="font-bold text-emerald-950 text-base">
                  Tableau de Bord Intégré SCEE (Norme ONU)
                </h3>
                <span className="text-xs text-emerald-800">Ce que révèle la comptabilité environnementale complète</span>
              </div>
              <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded">
                Bilan Réel
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="text-xs text-emerald-900 block font-medium">PINE Territorial</span>
                <span className="text-xl font-extrabold text-emerald-950 font-mono tabular-nums block mt-1">
                  {simulatedPine.toFixed(1)} Md€
                </span>
                <span className="text-xs text-slate-600 block mt-0.5">
                  Net de dégradation écologique
                </span>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="text-xs text-emerald-900 block font-medium">Indice Capital Naturel</span>
                <span className="text-xl font-extrabold text-emerald-950 font-mono tabular-nums block mt-1">
                  {naturalCapitalHealthIndex} / 100
                </span>
                <span className={`text-xs font-semibold block mt-0.5 ${
                  naturalCapitalHealthIndex >= 60 ? 'text-emerald-800' : 'text-amber-800'
                }`}>
                  {naturalCapitalHealthIndex >= 70 ? 'Patrimoine régénéré' : naturalCapitalHealthIndex >= 50 ? 'Équilibre fragile' : 'Érosion marquée'}
                </span>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="text-xs text-emerald-900 block font-medium">Dette Écologique (10 ans)</span>
                <span className="text-xl font-extrabold text-red-950 font-mono tabular-nums block mt-1">
                  {netEcologicalDebt10YearsMdEur} Md€
                </span>
                <span className="text-xs text-slate-600 block mt-0.5">
                  Reportée aux générations futures
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
              <div>
                <span>Coût écologique annuel non compensé : </span>
                <strong className="font-mono text-red-900">{totalEnvironmentalDebitMEur} M€ / an</strong>
              </div>
              <div className="text-[11px] text-slate-500">
                Calculé selon les méthodes officielles de valorisation SEEA-CF & SEEA-EA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
