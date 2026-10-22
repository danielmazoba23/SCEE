import React, { useState } from 'react';
import ecosystemLayersImage from '../assets/images/ecosystem_accounting_layers_1792669676175.jpg';

interface BiomeData {
  id: string;
  name: string;
  initialExtentKm2: number;
  conditionIndex: number; // 0 to 100
  carbonTonnePerKm2: number;
  floodRetentionValPerKm2: number; // k€ / km2 / an
  waterPurificationValPerKm2: number; // k€ / km2 / an
  recreationValPerKm2: number; // k€ / km2 / an
}

export const ModuleEcosystemAccounting: React.FC = () => {
  // Land conversion slider: % of wetland converted to industrial/commercial zone
  const [wetlandConversionPercent, setWetlandConversionPercent] = useState<number>(0);
  const [forestRestorationHectares, setForestRestorationHectares] = useState<number>(0);

  // Baseline territorial extent (Total: 10,000 km2)
  const baseWetlandKm2 = 1200;
  const baseForestKm2 = 3400;
  const baseAgriculturalKm2 = 4200;
  const baseUrbanKm2 = 1200;

  // Impact of conversion
  const convertedWetlandKm2 = (baseWetlandKm2 * wetlandConversionPercent) / 100;
  const currentWetlandKm2 = baseWetlandKm2 - convertedWetlandKm2;
  const currentUrbanKm2 = baseUrbanKm2 + convertedWetlandKm2;
  const currentForestKm2 = baseForestKm2 + (forestRestorationHectares / 100);

  // Economic valuation parameters
  // Commercial immediate one-off land value: 85 k€ per converted km2
  const commercialGainMEur = (convertedWetlandKm2 * 85) / 1000;

  // Annual lost ecosystem services
  // Wetland provides 42 k€/km2/yr flood regulation + 28 k€/km2/yr water purification + 15 k€/km2/yr carbon + 12 k€/km2/yr biodiversity/recreation
  const annualFloodDamageIncreaseMEur = (convertedWetlandKm2 * 42) / 1000;
  const annualWaterTreatmentIncreaseMEur = (convertedWetlandKm2 * 28) / 1000;
  const annualCarbonLossMEur = (convertedWetlandKm2 * 15) / 1000;
  const annualAmenityLossMEur = (convertedWetlandKm2 * 12) / 1000;

  const totalAnnualEcosystemLossMEur = 
    annualFloodDamageIncreaseMEur +
    annualWaterTreatmentIncreaseMEur +
    annualCarbonLossMEur +
    annualAmenityLossMEur;

  // Over 20 years with 3% discount rate, multiplier is ~14.8
  const capitalizedEcosystemLossMEur = totalAnnualEcosystemLossMEur * 14.8;
  const netSceeBalanceMEur = commercialGainMEur - capitalizedEcosystemLossMEur;

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
          <span>Cadre SEEA-EA (ONU 2021)</span>
          <span aria-hidden="true">·</span>
          <span>Comptabilité des Écosystèmes</span>
          <span aria-hidden="true">·</span>
          <span>Approche Spatiale & Services Systémiques</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
          La Comptabilité des Écosystèmes : Révéler les Services Gratuits de la Nature
        </h2>
        <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed text-sm sm:text-base">
          Adopté en mars 2021 par l'ONU comme nouvelle norme statistique mondiale, le <strong>SEEA Ecosystem Accounting (SEEA-EA)</strong> dépasse l'analyse ressource par ressource. Il cartographie les biomes comme des entités productrices vivantes et mesure leurs services de régulation vitaux (eau, crues, carbone, pollinisation).
        </p>
      </div>

      {/* Layered Infographic Visual */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-7 p-6 sm:p-8 text-white z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-2">
              L'Architecture en 5 Niveaux du SEEA-EA
            </span>
            <ul className="text-xs sm:text-sm text-slate-200 space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                <span><strong>Étendue :</strong> Cartographie spatiale des biomes (km², hectares).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                <span><strong>Condition :</strong> Indice de santé écologique, fertilité des sols et biodiversité.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                <span><strong>Services physiques :</strong> Volumes de carbone séquestrés, débits filtrés, pollens.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">4</span>
                <span><strong>Services monétaires :</strong> Valeur économique annuelle générée par la nature.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">5</span>
                <span><strong>Actifs écosystémiques :</strong> Valeur patrimoniale du capital naturel total.</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-5 h-64 md:h-full min-h-[240px]">
            <img
              src={ecosystemLayersImage}
              alt="Diagramme isométrique des 5 étages de la comptabilité des écosystèmes SEEA-EA"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Interactive Land-Use Decision Sandbox */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">
              Simulateur d'Aménagement : Le Dilemme de la Zone Humide
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Que se passe-t-il lorsqu'une collectivité décide d'assécher et bétonner une zone humide pour un parc d'activités logistiques ?
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-md shrink-0">
            Territoire témoin : 10 000 km²
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Slider input */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="wetland-conversion" className="font-bold text-slate-800">
                  Taux de conversion de la zone humide en zone commerciale :
                </label>
                <span className="font-mono tabular-nums font-bold text-amber-900 text-sm">
                  {wetlandConversionPercent}%
                </span>
              </div>
              <input
                id="wetland-conversion"
                type="range"
                min={0}
                max={50}
                step={2}
                value={wetlandConversionPercent}
                onChange={(e) => setWetlandConversionPercent(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>0 km² artificialisés</span>
                <span className="font-mono font-semibold text-slate-800">{convertedWetlandKm2.toFixed(0)} km² convertis</span>
                <span>Max 600 km²</span>
              </div>
            </div>

            {/* Spatial Extent Breakdown */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 block">
                Compte d'Étendue (Tier 1 SEEA-EA)
              </span>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between p-2 bg-emerald-50 rounded-lg border border-emerald-100">
                  <span className="text-emerald-950 font-medium">Zones humides & tourbières :</span>
                  <span className="font-mono tabular-nums font-bold text-emerald-900">
                    {currentWetlandKm2.toFixed(0)} km² ({((currentWetlandKm2/10000)*100).toFixed(1)}%)
                  </span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-700 font-medium">Forêts & espaces semi-naturels :</span>
                  <span className="font-mono tabular-nums font-semibold text-slate-800">
                    {currentForestKm2.toFixed(0)} km²
                  </span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-700 font-medium">Terres agricoles :</span>
                  <span className="font-mono tabular-nums font-semibold text-slate-800">
                    {baseAgriculturalKm2} km²
                  </span>
                </div>
                <div className="flex justify-between p-2 bg-amber-50 rounded-lg border border-amber-100">
                  <span className="text-amber-950 font-medium">Surfaces artificielles & villes :</span>
                  <span className="font-mono tabular-nums font-bold text-amber-900">
                    {currentUrbanKm2.toFixed(0)} km² (+{convertedWetlandKm2.toFixed(0)} km²)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results: Classical SCN vs SEEA-EA */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Classical View */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Calcul SCN Traditionnel
                  </span>
                  <span className="text-xs text-slate-600 mt-1 block">
                    Bénéfice marchand immédiat perçu
                  </span>
                  <span className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums block mt-2">
                    +{commercialGainMEur.toFixed(1)} M€
                  </span>
                  <span className="text-xs text-slate-500 block mt-1">
                    Recettes de vente foncière et travaux de terrassement (PIB BTP).
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600">
                  Le PIB enregistre une création de richesse positive et aucune charge environnementale.
                </div>
              </div>

              {/* SEEA-EA View */}
              <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/70 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 block">
                    Bilan Complet SEEA-EA
                  </span>
                  <span className="text-xs text-emerald-800 mt-1 block">
                    Services écologiques capitalisés
                  </span>
                  <span className={`text-2xl font-extrabold font-mono tabular-nums block mt-2 ${
                    netSceeBalanceMEur < 0 ? 'text-red-900' : 'text-emerald-900'
                  }`}>
                    {netSceeBalanceMEur > 0 ? '+' : ''}{netSceeBalanceMEur.toFixed(1)} M€
                  </span>
                  <span className="text-xs text-emerald-950 block mt-1">
                    Valeur nette globale pour la société sur 20 ans.
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200 text-xs text-emerald-900">
                  {wetlandConversionPercent > 0 ? (
                    <strong className="text-red-800">Déficit écologique massif !</strong>
                  ) : (
                    <span>Équilibre des services préservé.</span>
                  )}
                </div>
              </div>
            </div>

            {/* Detailed Annual Service Loss Breakdown */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                Services Écosystémiques Perdus Annuellement (SEEA-EA Tiers 3 & 4)
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-700">Régulation des crues (inondations évitées en aval) :</span>
                  <span className="font-mono tabular-nums font-semibold text-red-900">
                    -{annualFloodDamageIncreaseMEur.toFixed(2)} M€ / an
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-700">Filtration biologique et épuration naturelle de l'eau :</span>
                  <span className="font-mono tabular-nums font-semibold text-red-900">
                    -{annualWaterTreatmentIncreaseMEur.toFixed(2)} M€ / an
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-700">Séquestration de carbone et régulation climatique :</span>
                  <span className="font-mono tabular-nums font-semibold text-amber-900">
                    -{annualCarbonLossMEur.toFixed(2)} M€ / an
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-700">Attrait paysager, fraîcheur et bien-être récréatif :</span>
                  <span className="font-mono tabular-nums font-semibold text-slate-700">
                    -{annualAmenityLossMEur.toFixed(2)} M€ / an
                  </span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200 flex justify-between items-center text-xs font-bold text-slate-900">
                <span>Perte totale récurrente de services :</span>
                <span className="font-mono tabular-nums text-red-900 text-sm">
                  -{totalAnnualEcosystemLossMEur.toFixed(2)} M€ / an
                </span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-950 leading-relaxed">
              <strong>Enseignement méthodologique ONU :</strong> Détruire une zone humide pour un projet commercial rapporte un gain ponctuel à un promoteur, mais reporte une charge annuelle disproportionnée sur la collectivité (construction de digues, surcoût de traitement de l'eau). Le SEEA-EA rend ce calcul visible avant de signer le permis de construire.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
