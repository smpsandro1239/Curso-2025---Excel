import React from 'react';
import type { GlossaryTerm } from '../types';
import { BookMarked } from 'lucide-react';

interface GlossaryBlockProps {
  terms: GlossaryTerm[];
}

const GlossaryBlock: React.FC<GlossaryBlockProps> = ({ terms }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <BookMarked size={22} className="text-emerald-500 dark:text-green" />
        Glossário
      </h2>
      <dl className="bg-white dark:bg-light-navy p-6 rounded-lg shadow-sm space-y-4">
        {terms.map((term, index) => (
          <div key={index}>
            <dt className="font-bold text-emerald-600 dark:text-green">{term.word}</dt>
            <dd className="text-sm text-slate-600 dark:text-light-slate ml-4">{term.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default GlossaryBlock;
