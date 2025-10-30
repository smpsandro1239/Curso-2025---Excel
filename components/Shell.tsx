import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { Course } from '../types';

const Shell: React.FC<{ course: Course }> = ({ course }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 dark:bg-navy text-slate-800 dark:text-lightest-slate">
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-slate-100 dark:bg-light-navy transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-72 z-30 flex-shrink-0`}
      >
        <Sidebar course={course} />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 bg-white/80 dark:bg-navy/80 backdrop-blur-sm z-10 p-4 flex justify-between items-center md:hidden border-b border-slate-200 dark:border-lightest-navy/20">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 text-emerald-600 dark:text-green">
            <Menu size={24} />
          </button>
          <h1 className="text-lg font-bold text-emerald-600 dark:text-green">Excel Completo</h1>
          <button onClick={toggleTheme} className="p-2 text-emerald-600 dark:text-green">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet context={{ course }} />
        </main>
      </div>
    </div>
  );
};

export default Shell;
