import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';
export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="absolute top-0 right-0 w-full h-[90vh] overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 blur-3xl opacity-70"></div>
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-purple-50 to-pink-100 blur-3xl opacity-70"></div>
      </div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <Projects onProjectClick={setSelectedProject} />
        <About />
        <Contact />
      </main>
      <Footer />
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>;
}