import React, { useState } from 'react';
import type { QuizQuestion } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizBlockProps {
  questions: QuizQuestion[];
}

const QuizBlock: React.FC<QuizBlockProps> = ({ questions }) => {
  const [answers, setAnswers] = useState<Record<number, string | null>>({});

  const handleSelectAnswer = (questionIndex: number, option: string) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: option }));
  };

  return (
    <div className="space-y-8">
      {questions.map((q, qIndex) => {
        const selectedAnswer = answers[qIndex];
        const isAnswered = selectedAnswer !== null && selectedAnswer !== undefined;

        return (
          <div key={qIndex} className="bg-white dark:bg-light-navy p-6 rounded-lg shadow-sm">
            <p className="font-bold text-slate-900 dark:text-lightest-slate">{qIndex + 1}. {q.question}</p>
            <div className="mt-4 space-y-3">
              {q.options.map((option, oIndex) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = q.correctAnswer === option;

                let buttonClass = "w-full text-left p-3 rounded-md border-2 border-slate-200 dark:border-lightest-navy/20 hover:border-emerald-400 dark:hover:border-green/50 transition-colors duration-200";
                if (isAnswered) {
                  if (isSelected && isCorrect) {
                    buttonClass += " bg-emerald-50 dark:bg-green/10 border-emerald-500 dark:border-green text-emerald-700 dark:text-green";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += " bg-red-50 dark:bg-red-500/10 border-red-400 dark:border-red-500 text-red-600 dark:text-red-300";
                  } else if (isCorrect) {
                    buttonClass += " bg-emerald-50 dark:bg-green/10 border-emerald-500 dark:border-green text-emerald-700 dark:text-green";
                  } else {
                     buttonClass += " opacity-60 dark:opacity-50";
                  }
                }

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleSelectAnswer(qIndex, option)}
                    disabled={isAnswered}
                    className={buttonClass}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {isAnswered && (
              <div className="mt-4 p-3 bg-slate-100 dark:bg-lightest-navy/10 rounded-md flex items-start gap-3">
                {selectedAnswer === q.correctAnswer ? (
                    <CheckCircle2 className="text-emerald-500 dark:text-green flex-shrink-0 mt-1" size={20}/>
                ) : (
                    <XCircle className="text-red-500 dark:text-red-400 flex-shrink-0 mt-1" size={20}/>
                )}
                <p className="text-slate-600 dark:text-slate">{q.feedback}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuizBlock;
