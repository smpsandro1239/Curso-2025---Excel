import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Shell from './components/Shell';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import type { Course, Module } from './types';

function App() {
  const [courseData, setCourseData] = useState<Course | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const moduleFiles = [
      './data/module-1.json',
      './data/module-2.json',
      './data/module-3.json',
      './data/module-4.json',
      './data/module-5.json',
      './data/module-6.json',
      './data/module-7.json',
    ];

    Promise.all(
      moduleFiles.map(file =>
        fetch(file).then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} for file ${file}`);
          }
          return response.json();
        })
      )
    )
      .then(modules => {
        setCourseData({
          title: "Excel Completo",
          modules: modules as Module[],
        });
      })
      .catch(e => {
        console.error("Failed to load course data:", e);
        setError("Não foi possível carregar os dados do curso. Por favor, tente recarregar a página.");
      });
  }, []);

  if (error) {
    return (
       <div className="bg-white dark:bg-navy min-h-screen flex items-center justify-center text-center p-4">
        <h1 className="text-xl font-bold text-red-500">{error}</h1>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="bg-white dark:bg-navy min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-emerald-600 dark:text-green animate-pulse">
            A carregar o curso...
          </h1>
        </div>
      </div>
    );
  }

  const firstLesson = courseData.modules[0]?.lessons[0];
  const firstLessonPath = firstLesson
    ? `/modules/${courseData.modules[0].id}/lessons/${firstLesson.id}`
    : '/';

  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Shell course={courseData} />}>
            <Route index element={<HomePage firstLessonPath={firstLessonPath} />} />
            <Route path="modules/:moduleId/lessons/:lessonId" element={<CoursePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
