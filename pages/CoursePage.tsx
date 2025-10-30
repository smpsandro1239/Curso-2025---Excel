import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useOutletContext } from 'react-router-dom';
import type { Lesson, Course } from '../types';
import QuizBlock from '../components/QuizBlock';
import CodeBlock from '../components/CodeBlock';
import GlossaryBlock from '../components/GlossaryBlock';
import { Lightbulb, Eye, EyeOff, Clipboard, CheckCircle2 } from 'lucide-react';

const CoursePage: React.FC = () => {
  const { moduleId, lessonId } = useParams();
  const { course } = useOutletContext<{ course: Course }>();
  const [lesson, setLesson] = useState<Lesson | null | undefined>(undefined);
  const [showSolution, setShowSolution] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Reset state when lesson changes
    setShowSolution(false);
    setCopied(false);

    if (course && moduleId && lessonId) {
      const module = course.modules.find(m => m.id === moduleId);
      const lessonData = module?.lessons.find(l => l.id === lessonId);
      setLesson(lessonData ?? null);
    }
  }, [moduleId, lessonId, course]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (lesson === undefined) {
    return <div className="text-center p-10 text-green animate-pulse">Carregando...</div>;
  }

  if (lesson === null) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-green mb-2">{lesson.id} - {lesson.title}</h1>
      <div className="prose prose-lg max-w-none text-light-slate prose-headings:text-lightest-slate prose-strong:text-green">
        
        <div className="my-8 p-4 border-l-4 border-green bg-light-navy rounded-r-md">
            <p className="text-lightest-slate">{lesson.theory}</p>
        </div>

        {lesson.quickNote && (
            <div className="my-6 p-4 bg-lightest-navy/10 rounded-lg flex items-start gap-3">
                <Lightbulb className="text-green flex-shrink-0 mt-1" size={20} />
                <div>
                    <h3 className="font-bold text-lightest-slate m-0">Nota Rápida</h3>
                    <p className="text-slate m-0">{lesson.quickNote}</p>
                </div>
            </div>
        )}

        <h2 className="text-2xl font-bold mt-12 mb-4">Exemplos Práticos</h2>
        <div className="space-y-6">
            {lesson.examples.map((ex, index) => (
                 <div key={index} className="bg-light-navy p-4 rounded-lg">
                    <CodeBlock
                        title={ex.title}
                        description={ex.description}
                        code={ex.code}
                    />
                 </div>
            ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Quiz Rápido</h2>
        <QuizBlock key={lesson.id} questions={lesson.quiz} />

        <h2 className="text-2xl font-bold mt-12 mb-4">Desafio Prático</h2>
        <div className="bg-light-navy p-6 rounded-lg">
            <p className="text-lightest-slate mb-4">{lesson.challenge.description}</p>
            <CodeBlock 
                title="Dados Iniciais"
                code={lesson.challenge.initialCode} 
            />
            <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="font-mono text-sm text-slate">Solução:</h4>
                    <button
                        onClick={() => setShowSolution(!showSolution)}
                        className="flex items-center gap-2 text-sm text-slate hover:text-green transition-colors"
                    >
                        {showSolution ? <EyeOff size={16} /> : <Eye size={16} />}
                        {showSolution ? 'Ocultar' : 'Mostrar'} Solução
                    </button>
                </div>
                {showSolution && (
                    <div className="relative group">
                        <CodeBlock code={lesson.challenge.solution} />
                        <button
                            onClick={() => handleCopy(lesson.challenge.solution)}
                            className="absolute top-2 right-2 p-2 bg-lightest-navy/20 rounded-md text-slate opacity-0 group-hover:opacity-100 transition-opacity hover:text-green"
                            title="Copiar solução"
                        >
                            {copied ? <CheckCircle2 size={16} className="text-green" /> : <Clipboard size={16} />}
                        </button>
                    </div>
                )}
            </div>
        </div>
        
        {lesson.glossary && lesson.glossary.length > 0 && (
          <GlossaryBlock terms={lesson.glossary} />
        )}
      </div>
    </div>
  );
};

export default CoursePage;
