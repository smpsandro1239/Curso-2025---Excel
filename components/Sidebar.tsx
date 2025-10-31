import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import type { Course } from '../types';
import { ChevronDown, ChevronRight, BookOpen, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SidebarProps {
  course: Course;
}

const Sidebar: React.FC<SidebarProps> = ({ course }) => {
  const [openModules, setOpenModules] = useState<Set<string>>(new Set());
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    // Path is /modules/:moduleId/lessons/:lessonId
    if (pathParts[1] === 'modules' && pathParts[2]) {
      const currentModuleId = pathParts[2];
      if (!openModules.has(currentModuleId)) {
        setOpenModules(prev => {
          const newSet = new Set(prev);
          newSet.add(currentModuleId);
          return newSet;
        });
      }
    }
  }, [location.pathname, openModules]);

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId);
      } else {
        newSet.add(moduleId);
      }
      return newSet;
    });
  };

  const activeLinkClass = 'bg-green/10 text-green';
  const inactiveLinkClass = 'text-slate hover:bg-green/5 hover:text-lightest-slate';

  return (
    <div className="h-full flex flex-col text-lightest-slate p-4">
        <div className="flex justify-between items-center mb-6 px-2">
            <h1 className="text-2xl font-bold text-green">{course.title}</h1>
            <button onClick={toggleTheme} className="p-2 rounded-full text-slate hover:bg-green/10 hover:text-green hidden md:block">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
      <nav className="flex-1 overflow-y-auto">
        <ul>
          {course.modules.map((module) => (
            <li key={module.id} className="mb-4">
              <button 
                onClick={() => toggleModule(module.id)} 
                className="w-full flex justify-between items-center text-left p-2 rounded-md font-bold text-lg text-light-slate hover:bg-lightest-navy/50"
              >
                <span>{module.id}. {module.title}</span>
                {openModules.has(module.id) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {openModules.has(module.id) && (
                <ul className="mt-2 pl-4 border-l-2 border-lightest-navy/20">
                  {module.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <NavLink
                        to={`/modules/${module.id}/lessons/${lesson.id}`}
                        className={({ isActive }) =>
                          `flex items-center gap-3 w-full p-2 my-1 rounded-md transition-colors duration-200 text-sm ${isActive ? activeLinkClass : inactiveLinkClass}`
                        }
                      >
                        <BookOpen size={16} />
                        <span>{lesson.id} {lesson.title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <footer className="mt-auto text-center text-xs text-slate p-2">
        <p>Sandro Pereira © 2025</p>
      </footer>
    </div>
  );
};

export default Sidebar;