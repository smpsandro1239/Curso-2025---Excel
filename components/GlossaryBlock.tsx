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
        <BookMarked size={22} className="text-green" />
        Glossário
      </h2>
      <dl className="bg-light-navy p-6 rounded-lg space-y-4">
        {terms.map((term, index) => (
          <div key={index}>
            <dt className="font-bold text-green">{term.word}</dt>
            <dd className="text-sm text-light-slate ml-4">{term.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default GlossaryBlock;
