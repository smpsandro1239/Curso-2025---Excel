
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
    firstLessonPath: string;
}

const HomePage: React.FC<HomePageProps> = ({ firstLessonPath }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lightest-slate mb-4">
        Bem-vindo ao <span className="text-green">Excel Completo</span>
      </h1>
      <p className="max-w-2xl text-lg text-slate mb-8">
        Um curso interativo para levar suas habilidades em Excel do zero à criação de dashboards profissionais. Pronto para começar?
      </p>
      <Link
        to={firstLessonPath}
        className="group flex items-center justify-center gap-2 px-8 py-4 bg-green text-navy font-bold rounded-md hover:bg-green/80 transition-colors duration-300 text-lg"
      >
        Começar a aprender
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
      </Link>
    </div>
  );
};

export default HomePage;
