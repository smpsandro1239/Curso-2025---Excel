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
      {title && <h3 className="text-lg font-bold text-slate-900 dark:text-lightest-slate mb-1">{title}</h3>}
      {description && <p className="text-sm text-slate-600 dark:text-slate mb-3">{description}</p>}
      <pre className="bg-slate-200/50 dark:bg-navy p-4 rounded-md text-slate-800 dark:text-lightest-slate font-mono text-sm whitespace-pre-wrap overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
