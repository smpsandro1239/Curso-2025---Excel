
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
          <div key={qIndex} className="bg-light-navy p-6 rounded-lg">
            <p className="font-bold text-lightest-slate">{qIndex + 1}. {q.question}</p>
            <div className="mt-4 space-y-3">
              {q.options.map((option, oIndex) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = q.correctAnswer === option;

                let buttonClass = "w-full text-left p-3 rounded-md border-2 border-lightest-navy/20 hover:border-green/50 transition-colors duration-200";
                if (isAnswered) {
                  if (isSelected && isCorrect) {
                    buttonClass += " bg-green/10 border-green text-green";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += " bg-red-500/10 border-red-500 text-red-300";
                  } else if (isCorrect) {
                    buttonClass += " bg-green/10 border-green text-green";
                  } else {
                     buttonClass += " opacity-50";
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
              <div className="mt-4 p-3 bg-lightest-navy/10 rounded-md flex items-start gap-3">
                {selectedAnswer === q.correctAnswer ? (
                    <CheckCircle2 className="text-green flex-shrink-0 mt-1" size={20}/>
                ) : (
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20}/>
                )}
                <p className="text-slate">{q.feedback}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuizBlock;
