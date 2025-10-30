
import React from 'react';

interface SvgIllustrationProps {
  title: string;
  bigIdea: string;
}

const SvgIllustration: React.FC<SvgIllustrationProps> = ({ title, bigIdea }) => {
  return (
    <div className="aspect-video w-full bg-lightest-navy/10 rounded-lg flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate/20">
      <svg width="100%" height="100%" viewBox="0 0 160 90" className="text-slate">
        <rect width="160" height="90" fill="transparent" />
        <text x="80" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="text-lightest-slate">
          {title}
        </text>
        <text x="80" y="60" textAnchor="middle" fontSize="6" fill="currentColor" className="text-slate">
          ({bigIdea})
        </text>
      </svg>
    </div>
  );
};

export default SvgIllustration;
