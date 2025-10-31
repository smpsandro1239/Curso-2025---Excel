import React from 'react';

interface CodeBlockProps {
  title?: string;
  description?: string;
  code: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, description, code, className }) => {
  return (
    <div className={className}>
      {title && <h3 className="text-lg font-bold text-lightest-slate mb-1">{title}</h3>}
      {description && <p className="text-sm text-slate mb-3">{description}</p>}
      <pre className="bg-navy p-4 rounded-md text-lightest-slate font-mono text-sm whitespace-pre-wrap overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
