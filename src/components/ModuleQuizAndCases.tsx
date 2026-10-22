import React, { useState } from 'react';
import { CASE_STUDIES, GLOSSARY_TERMS, QUIZ_QUESTIONS } from '../data/sceeKnowledge';

export const ModuleQuizAndCases: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'quiz' | 'cases' | 'glossary'>('quiz');

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  // Glossary filter & search
  const [glossarySearch, setGlossarySearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: index }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsQuizCompleted(false);
  };

  // Calculate final score
  const score = Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
    const q = QUIZ_QUESTIONS.find(item => item.id === Number(qId));
    return q && q.correctIndex === ansIdx ? acc + 1 : acc;
  }, 0);

  // Filter glossary
  const filteredGlossary = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      (item.acronym && item.acronym.toLowerCase().includes(glossarySearch.toLowerCase())) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
          <span>Pédagogie & Pratique</span>
          <span aria-hidden="true">·</span>
          <span>Certification des Connaissances</span>
          <span aria-hidden="true">·</span>
          <span>Données de Terrain</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
          Quiz d'Évaluation, Études de Cas & Dictionnaire du SCEE
        </h2>
        <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed text-sm sm:text-base">
          Testez votre maîtrise des concepts de la comptabilité environnementale, découvrez comment des pays comme l'Australie, la France ou le Costa Rica appliquent le SCEE au quotidien, et explorez le lexique des termes méthodologiques.
        </p>
      </div>

      {/* Sub-tab navigation */}
      <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl w-fit">
        <button
          onClick={() => setActiveSubTab('quiz')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'quiz'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Quiz Interactif ({totalQuestions} questions)
        </button>
        <button
          onClick={() => setActiveSubTab('cases')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'cases'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Études de Cas Réels ({CASE_STUDIES.length})
        </button>
        <button
          onClick={() => setActiveSubTab('glossary')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'glossary'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Lexique Méthodologique
        </button>
      </div>

      {/* SUB-TAB 1: QUIZ */}
      {activeSubTab === 'quiz' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm max-w-3xl">
          {!isQuizCompleted ? (
            <div className="space-y-6">
              {/* Progress & level */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                <span className="font-semibold text-slate-500">
                  Question {currentQuestionIndex + 1} sur {totalQuestions}
                </span>
                <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                  Niveau {currentQ.level}
                </span>
              </div>

              {/* Question */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQ.id] === idx;
                  const isCorrect = idx === currentQ.correctIndex;

                  let optionClasses = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
                  if (showExplanation) {
                    if (isCorrect) {
                      optionClasses = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
                    } else if (isSelected) {
                      optionClasses = 'border-red-400 bg-red-50 text-red-950';
                    } else {
                      optionClasses = 'border-slate-200 bg-slate-50/50 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 cursor-pointer ${optionClasses}`}
                    >
                      <span className="font-mono text-xs font-bold w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation block when answered */}
              {showExplanation && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs leading-relaxed animate-in fade-in duration-200">
                  <div className="flex items-center justify-between font-bold">
                    <span className={selectedAnswers[currentQ.id] === currentQ.correctIndex ? 'text-emerald-800' : 'text-red-800'}>
                      {selectedAnswers[currentQ.id] === currentQ.correctIndex ? '✓ Excellente réponse !' : '✗ Réponse incorrecte.'}
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      Réf : {currentQ.referenceDoc}
                    </span>
                  </div>
                  <p className="text-slate-700">{currentQ.explanation}</p>
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 cursor-pointer"
                    >
                      {currentQuestionIndex < totalQuestions - 1 ? 'Question suivante' : 'Voir les résultats du quiz'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-8 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block">
                Bilan de Compétences SCEE
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900">
                Votre Score : <span className="font-mono text-emerald-800">{score} / {totalQuestions}</span>
              </h3>

              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {score >= 8
                  ? 'Félicitations ! Vous possédez une compréhension experte des mécanismes du Cadre Central et de la comptabilité des écosystèmes SEEA-EA.'
                  : score >= 5
                  ? 'Bon niveau d\'assimilation ! Vous comprenez bien la différence essentielle entre SCN et SCEE. Quelques révisions sur les flux physiques et les actifs consolideront vos acquis.'
                  : 'Parcours d\'initiation complété. N\'hésitez pas à manipuler les modules "PIB vs PINE" et "Flux Physiques" pour visualiser concrètement les équilibres comptables.'}
              </p>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleRestartQuiz}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 cursor-pointer"
                >
                  Recommencer le Quiz
                </button>
                <button
                  onClick={() => setActiveSubTab('cases')}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer"
                >
                  Lire les études de cas réels
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 2: REAL-WORLD CASE STUDIES */}
      {activeSubTab === 'cases' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map(study => (
            <div
              key={study.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{study.flag}</span>
                  <div>
                    <span className="text-xs font-bold text-slate-900">{study.country}</span>
                    <span className="text-[11px] text-slate-500 block">{study.frameworkPillar}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-3">
                  {study.title}
                </h3>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-3 bg-red-50/60 rounded-xl border border-red-100">
                    <span className="font-bold text-red-950 block mb-0.5">Le Défi :</span>
                    <p className="text-slate-700">{study.problem}</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-0.5">La Solution SCEE :</span>
                    <p className="text-slate-700">{study.sceeSolution}</p>
                  </div>

                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                    <span className="font-bold text-emerald-950 block mb-0.5">Le Résultat Concret :</span>
                    <p className="text-slate-700">{study.concreteResult}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Source officielle : {study.source}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUB-TAB 3: GLOSSARY */}
      {activeSubTab === 'glossary' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Rechercher un terme, un acronyme (ex: PINE, TRE-P, Rente)..."
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              className="px-4 py-2 text-xs border border-slate-300 rounded-lg w-full sm:w-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            />

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1 p-1 bg-slate-100 rounded-lg text-xs">
              {['Tous', 'Cadre Central', 'Écosystèmes', 'Macroéconomie', 'Flux Physiques'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-slate-900 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-2 text-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-sm">{item.term}</span>
                    <span className="text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  {item.acronym && (
                    <span className="text-[11px] text-emerald-800 font-semibold block mb-2">
                      {item.acronym}
                    </span>
                  )}
                  <p className="text-slate-700 leading-relaxed">{item.definition}</p>
                </div>

                <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 italic">
                  <strong>Exemple concret :</strong> {item.example}
                </div>
              </div>
            ))}
          </div>

          {filteredGlossary.length === 0 && (
            <p className="text-center py-8 text-xs text-slate-500">
              Aucun terme ne correspond à votre recherche.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
