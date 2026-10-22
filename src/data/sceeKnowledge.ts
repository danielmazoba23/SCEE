import { CaseStudy, GlossaryTerm, QuizQuestion } from '../types/scee';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'australia-water',
    country: 'Australie',
    flag: '🇦🇺',
    title: 'Les Comptes de l\'Eau du Bassin Murray-Darling',
    frameworkPillar: 'SCEE Cadre Central — Compte d\'Actifs & Flux Hydriques',
    problem: 'Face à des sécheresses historiques récurrentes ("Millennium Drought"), l\'agriculture intensive irriguée (coton, riz) et les villes puisaient de l\'eau sans visibilité sur les recharges réelles des nappes et débits des rivières.',
    sceeSolution: 'L\'Australian Bureau of Statistics (ABS) a déployé des comptes de l\'eau SEEA-Water intégrés : matrices des flux physiques (prélèvements par secteur, pertes, réutilisations) reliées aux valeurs économiques de la production agricole.',
    concreteResult: 'Création du premier marché officiel de droits d\'eau au monde avec plafonds écologiques stricts garantissant un débit minimal pour la survie des zones humides, évitant l\'effondrement hydrique du bassin.',
    source: 'Australian Bureau of Statistics (ABS) & UN SEEA Case Studies'
  },
  {
    id: 'france-forest-carbon',
    country: 'France',
    flag: '🇫🇷',
    title: 'Comptes Physiques et Économiques de la Forêt et du Bois',
    frameworkPillar: 'SCEE Cadre Central — Actifs Biologiques & Comptabilité Carbone',
    problem: 'Le PIB classique n\'enregistrait que la valeur marchande du bois coupé vendu aux scieries, ignorant totalement la fonction de puits de carbone, la croissance biologique naturelle et la dégradation par les tempêtes ou scolytes.',
    sceeSolution: 'L\'Insee et le Ministère de la Transition Écologique établissent des comptes physiques de la forêt : stock sur pied en millions de mètres cubes, bilan annuel (accroissement biologique naturel vs prélèvements et mortalité), couplés à l\'évaluation du stock de carbone biomasse.',
    concreteResult: 'Mise en évidence que la forêt française stocke plus de 80 millions de tonnes de CO2 équivalent par an et identification précoce de la baisse récente du puits de carbone forestier due au réchauffement climatique.',
    source: 'Insee, SDES (Service des Données et Études Statistiques)'
  },
  {
    id: 'costa-rica-ecosystems',
    country: 'Costa Rica',
    flag: '🇨🇷',
    title: 'Comptabilité des Écosystèmes et Paiement des Services Environnementaux',
    frameworkPillar: 'SCEE Comptabilité des Écosystèmes (SEEA-EA)',
    problem: 'Dans les années 1980, le Costa Rica connaissait l\'un des taux de déforestation les plus rapides d\'Amérique centrale pour créer des pâturages bovins à faible rentabilité économique.',
    sceeSolution: 'Adoption précoce du cadre SEEA-EA pour cartographier l\'étendue et l\'état des forêts tropicales, et quantifier la valeur économique des services écosystémiques : rétention d\'eau pour les barrages hydroélectriques, protection contre l\'érosion, pollinisation et attrait de l\'écotourisme.',
    concreteResult: 'La couverture forestière est passée de 26% en 1983 à plus de 59% aujourd\'hui, financée en partie par une taxe sur les carburants redistribuée aux propriétaires forestiers (programme PSE).',
    source: 'Banco Central de Costa Rica & WAVES (World Bank)'
  },
  {
    id: 'netherlands-environmental-taxes',
    country: 'Pays-Bas',
    flag: '🇳🇱',
    title: 'Comptes des Dépenses Environnementales et Fiscalité Écologique',
    frameworkPillar: 'SCEE Cadre Central — Transactions Économiques Liées à l\'Environnement',
    problem: 'Besoin d\'évaluer avec précision si les taxes sur l\'énergie, les eaux usées et la pollution incitaient réellement les entreprises à décarboner ou si elles constituaient une charge fiscale sans gain écologique mesuré.',
    sceeSolution: 'Statistics Netherlands (CBS) publie annuellement les comptes EPEA (Environmental Protection Expenditure Accounts) et les comptes des taxes environnementales harmonisés avec la comptabilité nationale.',
    concreteResult: 'Alignement précis entre les secteurs les plus émetteurs de nitrates/GES et le rendement des taxes incitatives, orientant les investissements publics massifs vers la dépollution industrielle.',
    source: 'Centraal Bureau voor de Statistiek (CBS) / Eurostat'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    level: 'Débutant',
    question: 'Pourquoi le PIB (Produit Intérieur Brut) traditionnel est-il qualifié d\'"aveugle à la nature" ?',
    options: [
      'Parce qu\'il ne prend en compte que les monnaies virtuelles et ignore les entreprises physiques.',
      'Parce qu\'il compte positivement l\'extraction des ressources sans déduire la dégradation ou l\'épuisement des actifs naturels.',
      'Parce qu\'il mesure uniquement la pollution et refuse de mesurer les bénéfices de l\'industrie.',
      'Parce qu\'il est calculé uniquement une fois tous les dix ans par les Nations Unies.'
    ],
    correctIndex: 1,
    explanation: 'Dans le Système de Comptabilité Nationale classique (SCN), couper une forêt primaire et vendre le bois augmente le PIB via la valeur ajoutée forestière, mais la perte irréversible du patrimoine naturel n\'est imputée nulle part comme dépréciation de capital.',
    referenceDoc: 'SCEE Cadre Central ONU, Chapitre 1'
  },
  {
    id: 2,
    level: 'Débutant',
    question: 'Quelle est la principale différence entre le Cadre Central du SCEE (SEEA-CF) et la Comptabilité des Écosystèmes (SEEA-EA) ?',
    options: [
      'Le Cadre Central traite des ressources environnementales individuelles (eau, bois, minerais) tandis que le SEEA-EA adopte une approche spatiale et systémique des écosystèmes interconnectés.',
      'Le Cadre Central concerne uniquement l\'agriculture tandis que le SEEA-EA concerne les villes et transports.',
      'Le Cadre Central est réservé aux pays en développement et le SEEA-EA aux pays de l\'OCDE.',
      'Le Cadre Central utilise l\'euro alors que le SEEA-EA utilise obligatoirement le dollar US.'
    ],
    correctIndex: 0,
    explanation: 'Le Cadre Central du SCEE (adopté en 2012) suit les ressources prises individuellement (stocks de bois, de minerais, d\'eau). Le SEEA-EA (adopté en 2021) examine la nature par entités spatiales (forêts, zones humides, prairies) et mesure les services systémiques générés.',
    referenceDoc: 'Nations Unies, Division de Statistique (UNSD) - Cadre SEEA-EA 2021'
  },
  {
    id: 3,
    level: 'Intermédiaire',
    question: 'Dans les comptes de flux physiques (TRE-P), quelle loi fondamentale régit obligatoirement la comptabilité matière ?',
    options: [
      'La loi de l\'offre et de la demande monétaire.',
      'Le principe de conservation de la masse : Total Entrées = Total Sorties + Accumulation nette au sein de l\'économie.',
      'La règle selon laquelle les importations doivent toujours dépasser les exportations.',
      'Le théorème d\'accroissement spontané de la matière organique.'
    ],
    correctIndex: 1,
    explanation: 'Le SCEE repose sur le principe de conservation de la matière (Lavoisier) : toute ressource prélevée dans la nature (matières premières, eau, oxygène pour combustion) doit se retrouver soit dans les produits consommés/accumulés, soit sous forme de résidus (émissions, déchets, eaux usées).',
    referenceDoc: 'SCEE Cadre Central, Section 3.2 - Principes de comptabilisation des flux physiques'
  },
  {
    id: 4,
    level: 'Intermédiaire',
    question: 'Comment passe-t-on du PIB (Produit Intérieur Brut) au PINE (Produit Intérieur Net Écologiquement Ajusté) ?',
    options: [
      'PINE = PIB + Subventions agricoles + Importations de matières premières.',
      'PINE = PIB - Consommation de Capital Fixe (Amortissement produit) - Épuisement des ressources naturelles - Coût de dégradation de l\'environnement.',
      'PINE = PIB multiplié par le taux de recyclage national divisé par l\'inflation.',
      'PINE = PIB - Dépenses militaires + Investissements d\'infrastructures routières.'
    ],
    correctIndex: 1,
    explanation: 'Le PINE (souvent appelé "PIB Vert net") soustrait au PIB : 1) l\'usure des machines et bâtiments (PIN), 2) la consommation/épuisement du capital naturel non renouvelé, et 3) le coût des dommages ou de restauration de la pollution résiduelle.',
    referenceDoc: 'Manuel SCN / SCEE - Intégration macroéconomique et agrégats ajustés'
  },
  {
    id: 5,
    level: 'Intermédiaire',
    question: 'Qu\'est-ce qu\'un "compte d\'étendue des écosystèmes" (Ecosystem Extent Account) dans le SEEA-EA ?',
    options: [
      'Un relevé financier du budget accordé aux parcs nationaux régionaux.',
      'Une matrice spatiale qui mesure la surface occupée par chaque type d\'écosystème (forêt, zone humide, terres cultivées) au fil du temps et trace les conversions d\'usage.',
      'Un calcul du nombre total d\'arbres abattus par habitant dans le monde.',
      'Une estimation du volume d\'eau minérale embouteillée vendue en supermarché.'
    ],
    correctIndex: 1,
    explanation: 'Le compte d\'étendue sert de socle spatial (en hectares ou km²) en identifiant les types d\'écosystèmes à l\'ouverture et à la clôture de l\'exercice comptable, permettant de quantifier l\'artificialisation des sols et la fragmentation écologique.',
    referenceDoc: 'SEEA Ecosystem Accounting, Chapitre 4 - Ecosystem Extent'
  },
  {
    id: 6,
    level: 'Avancé',
    question: 'Parmi les propositions suivantes, laquelle relève des "services écosystémiques de régulation" selon le SCEE ?',
    options: [
      'La récolte de 10 000 tonnes de blé sur des terres labourées.',
      'L\'extraction de 5 millions de barils de pétrole brut.',
      'La rétention des eaux de crues par une zone humide et la pollinisation des cultures par les insectes sauvages.',
      'La vente de billets d\'entrée pour une station balnéaire côtière.'
    ],
    correctIndex: 2,
    explanation: 'Les services de régulation désignent la capacité des écosystèmes à modérer l\'environnement physique : atténuation des inondations, purification de l\'air et de l\'eau, séquestration de carbone et pollinisation. La récolte de blé est un service d\'approvisionnement.',
    referenceDoc: 'SEEA-EA 2021, Chapitre 6 - Services Écosystémiques'
  },
  {
    id: 7,
    level: 'Avancé',
    question: 'Quelle est la méthode économique recommandée par le SCEE pour valoriser les actifs minéraux non renouvelables en l\'absence de prix de marché direct du gisement ?',
    options: [
      'La méthode du coût historique de découverte d\'il y a un siècle sans réévaluation.',
      'La méthode de la rente de la ressource actualisée (Net Present Value - Valeur Actuelle Nette des rentes futures attendues).',
      'L\'alignement obligatoire sur le cours de l\'or à la bourse de Londres.',
      'L\'attribution forfaitaire d\'une valeur symbolique de 1 euro par tonne de minerai.'
    ],
    correctIndex: 1,
    explanation: 'Pour les actifs non marchands dans le sol, le SCEE préconise la méthode de la Rente de la Ressource (surplus d\'exploitation après rémunération normale du capital produit et du travail), actualisée sur la durée de vie estimée de la réserve (VAN).',
    referenceDoc: 'SCEE Cadre Central, Chapitre 5.4 - Évaluation monétaire des actifs environnementaux'
  },
  {
    id: 8,
    level: 'Avancé',
    question: 'Comment le SCEE classe-t-il les dépenses de dépollution réalisées par une industrie pour installer des filtres à particules ?',
    options: [
      'Comme une perte financière sèche qui réduit la production industrielle de biens.',
      'Dans le compte EPEA (Environmental Protection Expenditure Account) sous la catégorie "Dépenses de protection de l\'environnement" (capital fixe ou consommation intermédiaire).',
      'Comme une subvention environnementale accordée par l\'entreprise à l\'État.',
      'Comme une importation invisible de technologie étrangère.'
    ],
    correctIndex: 1,
    explanation: 'Le compte des dépenses de protection de l\'environnement (EPEA) identifie et isole les investissements (technologies propres, filtres) et dépenses courantes consacrés à prévenir, réduire ou éliminer la pollution générée par l\'activité productive.',
    referenceDoc: 'SCEE Cadre Central, Chapitre 4 - Comptes des activités environnementales'
  },
  {
    id: 9,
    level: 'Intermédiaire',
    question: 'Pourquoi l\'approche du SCEE interdit-elle d\'additionner simplement la valeur monétaire des actifs produits et la valeur des écosystèmes sans prudence statistique ?',
    options: [
      'Parce que les ordinateurs des banques centrales ne peuvent pas gérer des nombres avec des décimales.',
      'Parce que le capital naturel critique assure des fonctions vitales de survie non substituables par du capital produit (hypothèse de durabilité forte).',
      'Parce que la comptabilité nationale classique n\'est pas reconnue au niveau international.',
      'Parce que les impôts sur le revenu sont déjà calculés sur la biomasse.'
    ],
    correctIndex: 1,
    explanation: 'Les économistes écologiques rappellent qu\'un capital produit (machines, usines) ne peut pas remplacer l\'atmosphère respirable ou la couche d\'ozone. Le SCEE fournit donc toujours des comptes physiques détaillés en parallèle des comptes monétaires.',
    referenceDoc: 'Rapport Stiglitz-Sen-Fitoussi & SEEA Synthesis'
  },
  {
    id: 10,
    level: 'Avancé',
    question: 'Quel organisme international centralise les normes méthodologiques du SCEE et publie les manuels de référence mondiaux ?',
    options: [
      'Le Comité d\'experts des Nations Unies sur la comptabilité économique et environnementale (UNCEEA) avec la Division de Statistique de l\'ONU (UNSD).',
      'L\'Organisation Mondiale du Commerce (OMC) uniquement.',
      'L\'Union Internationale des Télécommunications (UIT).',
      'L\'Association Internationale du Transport Aérien (IATA).'
    ],
    correctIndex: 0,
    explanation: 'L\'UNCEEA (Comité d\'experts sur le SCEE des Nations Unies), en étroite collaboration avec la Commission Européenne (Eurostat), l\'OCDE, la FAO et la Banque Mondiale, supervise le développement, la révision et l\'adoption des normes du SCEE.',
    referenceDoc: 'UN Committee of Experts on Environmental-Economic Accounting (UNCEEA)'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'SCEE / SEEA',
    acronym: 'Système de Comptabilité Économique et Environnementale',
    category: 'Cadre Central',
    definition: 'Norme statistique internationale adoptée par la Commission de Statistique de l\'ONU qui intègre les données économiques et environnementales dans un système cohérent et harmonisé avec la comptabilité nationale.',
    example: 'Les comptes du SCEE permettent de mesurer la quantité d\'eau consommée par euro de valeur ajoutée dans l\'agriculture.'
  },
  {
    term: 'SCN / SNA',
    acronym: 'Système de Comptabilité Nationale',
    category: 'Macroéconomie',
    definition: 'Cadre comptable conventionnel qui sert de base au calcul du PIB, du Revenu National, de l\'épargne et des investissements (FBCF) des États, historiquement aveugle aux stocks naturels.',
    example: 'Le SCN 2008 est le cadre standard mondial auquel s\'articule le satellite environnemental SCEE.'
  },
  {
    term: 'PINE / EDP',
    acronym: 'Produit Intérieur Net Écologiquement Ajusté',
    category: 'Macroéconomie',
    definition: 'Agrégat macroéconomique synthétique obtenu en déduisant du Produit Intérieur Net (PIN) l\'épuisement des ressources naturelles et les coûts de dégradation écologique imputables aux activités humaines.',
    example: 'Si un pays a un PIB de 1 000 Md€ mais détruit 150 Md€ de capital naturel et de climat, son PINE est nettement inférieur à son PIN.'
  },
  {
    term: 'SEEA-CF',
    acronym: 'SEEA Central Framework',
    category: 'Cadre Central',
    definition: 'Premier volet du système (adopté en 2012) centré sur les flux physiques de matières, d\'eau et d\'énergie, ainsi que sur les comptes d\'actifs environnementaux individuels (bois, sous-sol, faune halieutique).',
    example: 'Suivi du stock physique de gaz naturel en mètres cubes et évaluation de la rente minière annuelle.'
  },
  {
    term: 'SEEA-EA',
    acronym: 'SEEA Ecosystem Accounting',
    category: 'Écosystèmes',
    definition: 'Deuxième volet du système (adopté en 2021) fondé sur une approche spatiale intégrée mesurant l\'étendue, la condition et les flux de services écosystémiques fournis par les biomes.',
    example: 'Évaluation des services de pollinisation fournis par les lisières de forêts aux champs de colza environnants.'
  },
  {
    term: 'TRE-P',
    acronym: 'Tableau Ressources-Emplois Physiques',
    category: 'Flux Physiques',
    definition: 'Tableau matriciel comptable reliant l\'origine des matières et de l\'énergie (environnement, importations) à leur destination finale (consommation, exportations, émissions résiduelles).',
    example: 'Comptabilisation des 450 000 tonnes de cuivre importées et transformées dans l\'électronique nationale.'
  },
  {
    term: 'Services Écosystémiques',
    category: 'Écosystèmes',
    definition: 'Flux de contributions directes et indirectes des écosystèmes au bien-être humain et à l\'économie marchande, décomposés en approvisionnement, régulation et culturels.',
    example: 'La filtration naturelle de l\'eau par les tourbières évite la construction d\'usines de traitement coûteuses.'
  },
  {
    term: 'Rente de la Ressource',
    category: 'Cadre Central',
    definition: 'Surplus économique dégagé par l\'extraction ou la récolte d\'une ressource naturelle après déduction de tous les coûts de production (travail, capital technique et marge normale).',
    example: 'Sur un baril de pétrole vendu 80$ avec un coût d\'extraction technique de 25$, la rente de la ressource est de 55$.'
  },
  {
    term: 'Déplétion / Épuisement',
    category: 'Cadre Central',
    definition: 'Diminution quantitative permanente de la valeur ou du volume d\'un actif naturel résultant de son extraction au-delà de sa capacité de régénération naturelle.',
    example: 'Surpêche entraînant l\'effondrement du stock reproducteur de cabillaud en mer du Nord.'
  },
  {
    term: 'Compte de Condition Écologique',
    category: 'Écosystèmes',
    definition: 'Compte structuré rassemblant des indicateurs physiques et biotiques mesurant la santé, l\'intégrité et la résilience d\'un écosystème par rapport à un état de référence.',
    example: 'Mesure de la teneur en carbone organique des sols et de l\'indice d\'abondance des oiseaux forestiers.'
  },
  {
    term: 'EPEA',
    acronym: 'Environmental Protection Expenditure Accounts',
    category: 'Cadre Central',
    definition: 'Comptes des dépenses de protection de l\'environnement retraçant l\'effort financier consenti par les administrations, entreprises et ménages pour prévenir la dégradation environnementale.',
    example: 'Mesure des investissements industriels en stations d\'épuration des eaux usées.'
  },
  {
    term: 'Flux Résiduels',
    category: 'Flux Physiques',
    definition: 'Flux de matières et d\'énergie quittant le système économique pour être rejetés dans le milieu récepteur sous forme d\'émissions dans l\'air, d\'effluents aqueux ou de déchets solides.',
    example: 'Rejets de dioxyde de soufre (SO2) et de microparticules lors de la combustion de fioul lourd.'
  }
];
