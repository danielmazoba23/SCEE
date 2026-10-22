import React from 'react';

interface PedagogicalGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PedagogicalGuideModal: React.FC<PedagogicalGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">
              Guide Pédagogique du SCEE (SEEA de l'ONU)
            </h3>
            <span className="text-xs text-slate-500">
              Système de Comptabilité Économique et Environnementale
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-sm font-bold p-1 cursor-pointer"
            aria-label="Fermer la modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base">
              1. Pourquoi le SCEE a-t-il été créé ?
            </h4>
            <p>
              Historiquement, la prospérité économique est mesurée par le <strong>Système de Comptabilité Nationale (SCN)</strong> et son agrégat phare, le <strong>PIB</strong>. Or, le PIB ne mesure que la production de biens et services marchands.
            </p>
            <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <strong>Le paradoxe écologique :</strong> Lorsqu'une marée noire survient, le PIB augmente grâce aux dépenses engagées pour nettoyer les plages. Lorsqu'une forêt primaire est rasée, le PIB augmente grâce aux ventes de grumes. Mais la destruction des stocks naturels n'apparaît dans aucun passif national.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base">
              2. Les Deux Volets du SCEE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-950 block text-xs uppercase tracking-wider mb-1">
                  1. Cadre Central (SEEA-CF, 2012)
                </span>
                <p className="text-xs text-slate-700">
                  Adopté comme norme statistique internationale en 2012. Il aborde l'environnement sous l'angle des <strong>ressources individuelles</strong> : flux de matières (TRE-P), stocks d'eau, de bois, de minerais, et dépenses de protection de l'environnement (EPEA).
                </p>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-950 block text-xs uppercase tracking-wider mb-1">
                  2. Comptabilité des Écosystèmes (SEEA-EA, 2021)
                </span>
                <p className="text-xs text-slate-700">
                  Adopté en 2021. Il traite l'environnement comme des <strong>systèmes vivants spatiaux</strong> (forêts, zones humides, océans). Il mesure leur étendue, leur condition écologique et le flux de services vitaux rendus à l'humanité (régulation des crues, climat, pollinisation).
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base">
              3. L'Agrégat Clé : Le PINE (Produit Intérieur Net Ajusté)
            </h4>
            <div className="p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs leading-relaxed">
              PIB (Brut)<br/>
              - Consommation de Capital Fixe (Amortissement usines / routes)<br/>
              = PIN (Produit Intérieur Net classique)<br/>
              - Déplétion des actifs naturels (épuisement non renouvelé)<br/>
              - Coûts de dégradation environnementale (pollution, climat, sols)<br/>
              = <strong>PINE (Produit Intérieur Net Écologique)</strong>
            </div>
            <p className="text-xs text-slate-600">
              Le PINE indique la véritable richesse créée nette qui ne compromet pas la capacité des générations futures à vivre dignement.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base">
              4. Rôle International & Cibles Mondiales
            </h4>
            <p className="text-xs">
              Le SCEE est au cœur de l'Accord de Kunming-Montréal sur la Biodiversité (Cible 14 : intégration obligatoire de la biodiversité dans la comptabilité nationale d'ici 2030) et des Objectifs de Développement Durable (ODD 6, 12, 14, 15) de l'ONU.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            Imprimer / Exporter cette Fiche
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
