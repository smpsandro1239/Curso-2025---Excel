import React from 'react';
import { Link } from 'react-router-dom';

interface HomePageProps {
    firstLessonPath: string;
}

const HomePage: React.FC<HomePageProps> = ({ firstLessonPath }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Link to={firstLessonPath} className="w-full max-w-5xl group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy focus:ring-green rounded-lg">
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105" aria-labelledby="svg-title" role="img">
          <title id="svg-title">Excel Completo - Do zero ao dashboard profissional</title>
          {/* Fundo gradiente */}
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="800" y2="600">
              <stop offset="0%" stopColor="#0F1B2E" />
              <stop offset="100%" stopColor="#1E3A5F" />
            </linearGradient>
            {/* Gradiente verde para células */}
            <linearGradient id="cellGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00D084" />
              <stop offset="100%" stopColor="#00A86B" />
            </linearGradient>
            {/* Sombra suave */}
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="4" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Fundo */}
          <rect width="800" height="600" fill="url(#bg)" />
          {/* Grade do Excel (translúcida) */}
          <g opacity="0.15">
            {/* linhas horizontais */}
            <g stroke="#FFFFFF" strokeWidth="1">
              <line x1="0" y1="80" x2="800" y2="80" />
              <line x1="0" y1="120" x2="800" y2="120" />
              <line x1="0" y1="160" x2="800" y2="160" />
              <line x1="0" y1="200" x2="800" y2="200" />
              <line x1="0" y1="240" x2="800" y2="240" />
              <line x1="0" y1="280" x2="800" y2="280" />
              <line x1="0" y1="320" x2="800" y2="320" />
              <line x1="0" y1="360" x2="800" y2="360" />
              <line x1="0" y1="400" x2="800" y2="400" />
              <line x1="0" y1="440" x2="800" y2="440" />
              <line x1="0" y1="480" x2="800" y2="480" />
              <line x1="0" y1="520" x2="800" y2="520" />
            </g>
            {/* linhas verticais */}
            <g stroke="#FFFFFF" strokeWidth="1">
              <line x1="80" y1="0" x2="80" y2="600" />
              <line x1="120" y1="0" x2="120" y2="600" />
              <line x1="160" y1="0" x2="160" y2="600" />
              <line x1="200" y1="0" x2="200" y2="600" />
              <line x1="240" y1="0" x2="240" y2="600" />
              <line x1="280" y1="0" x2="280" y2="600" />
              <line x1="320" y1="0" x2="320" y2="600" />
              <line x1="360" y1="0" x2="360" y2="600" />
              <line x1="400" y1="0" x2="400" y2="600" />
              <line x1="440" y1="0" x2="440" y2="600" />
              <line x1="480" y1="0" x2="480" y2="600" />
              <line x1="520" y1="0" x2="520" y2="600" />
              <line x1="560" y1="0" x2="560" y2="600" />
              <line x1="600" y1="0" x2="600" y2="600" />
              <line x1="640" y1="0" x2="640" y2="600" />
              <line x1="680" y1="0" x2="680" y2="600" />
              <line x1="720" y1="0" x2="720" y2="600" />
              <line x1="760" y1="0" x2="760" y2="600" />
            </g>
          </g>
          {/* Células em destaque (simulando dashboard) */}
          <g filter="url(#shadow)">
            {/* Célula A1 */}
            <rect x="85" y="85" width="35" height="35" rx="4" fill="url(#cellGrad)" />
            <text x="102" y="108" fontFamily="Arial, sans-serif" fontSize="16" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">A1</text>
            {/* Célula B2 */}
            <rect x="125" y="125" width="35" height="35" rx="4" fill="url(#cellGrad)" />
            <text x="142" y="148" fontFamily="Arial, sans-serif" fontSize="16" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">B2</text>
            {/* Célula C3 */}
            <rect x="165" y="165" width="35" height="35" rx="4" fill="url(#cellGrad)" />
            <text x="182" y="188" fontFamily="Arial, sans-serif" fontSize="16" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">C3</text>
          </g>
          {/* Título principal */}
          <text x="400" y="120" fontFamily="Arial, sans-serif" fontSize="48" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">Excel Completo</text>
          {/* Subtítulo */}
          <text x="400" y="160" fontFamily="Arial, sans-serif" fontSize="24" fill="#B8D4F0" textAnchor="middle">Do zero ao dashboard profissional</text>
          {/* Módulos (coluna esquerda) */}
          <g fontFamily="Arial, sans-serif" fontSize="18" fill="#FFFFFF">
            <text x="100" y="250">1. Introdução ao Excel</text>
            <text x="100" y="280">2. Formatação &amp; Estética</text>
            <text x="100" y="310">3. Fórmulas Essenciais</text>
            <text x="100" y="340">4. Lógica &amp; Condicionais</text>
            <text x="100" y="370">5. Tabelas Dinâmicas</text>
          </g>
          {/* Módulos (coluna direita) */}
          <g fontFamily="Arial, sans-serif" fontSize="18" fill="#FFFFFF">
            <text x="500" y="250">6. Gráficos &amp; Dashboards</text>
            <text x="500" y="280">7. Colaboração &amp; Automização</text>
            <text x="500" y="310">Power Query, Macros, OneDrive</text>
            <text x="500" y="340">100% em português (PT-PT)</text>
            <text x="500" y="370">Interativo e com certificado</text>
          </g>
          {/* Botão "Começar a aprender" */}
          <g filter="url(#shadow)">
            <rect x="300" y="450" width="200" height="50" rx="25" fill="#00D084" />
            <text x="400" y="480" fontFamily="Arial, sans-serif" fontSize="20" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">Começar a aprender</text>
          </g>
          {/* Rodapé */}
          <text x="400" y="580" fontFamily="Arial, sans-serif" fontSize="14" fill="#B8D4F0" textAnchor="middle">Curso interativo • Do zero ao dashboard profissional</text>
        </svg>
      </Link>
    </div>
  );
};

export default HomePage;
