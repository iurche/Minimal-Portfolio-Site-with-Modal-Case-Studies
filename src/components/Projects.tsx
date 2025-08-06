import React from 'react';
import { Project } from '../types';
import { ArrowRightIcon } from 'lucide-react';
interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}
export const Projects = ({
  onProjectClick
}: ProjectsProps) => {
  const projects: Project[] = [{
    id: 1,
    title: 'Financial App Redesign',
    description: 'A complete UX overhaul for a leading fintech platform',
    category: 'UX/UI Design',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    client: 'FinanceHub',
    year: '2023',
    role: 'Lead Designer',
    caseStudy: {
      challenge: 'The client needed to simplify complex financial data while improving user engagement metrics by 40%.',
      approach: 'I conducted extensive user research with 50+ participants to identify pain points, created information architecture from scratch, and designed an intuitive interface with clear visual hierarchy.',
      outcome: 'The redesign resulted in a 52% increase in daily active users and reduced support tickets by 30%.',
      images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80']
    }
  }, {
    id: 2,
    title: 'Healthcare Platform',
    description: 'Patient-centered design for a telemedicine application',
    category: 'Product Design',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    client: 'MediConnect',
    year: '2022',
    role: 'Product Designer',
    caseStudy: {
      challenge: 'Design an accessible telemedicine platform for users of all ages and abilities.',
      approach: 'Implemented inclusive design principles through extensive accessibility testing and iterative design with diverse user groups.',
      outcome: 'Platform achieved WCAG 2.1 AA compliance and received recognition for its inclusive approach to healthcare.',
      images: ['https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80']
    }
  }, {
    id: 3,
    title: 'E-commerce Optimization',
    description: 'Conversion-focused redesign for a global retailer',
    category: 'UI Design',
    thumbnail: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    client: 'GlobalShop',
    year: '2023',
    role: 'UX Consultant',
    caseStudy: {
      challenge: 'Increase conversion rates and reduce cart abandonment for a major e-commerce platform.',
      approach: 'Conducted A/B testing on key user flows, optimized the checkout process, and redesigned product pages based on heatmap analysis.',
      outcome: 'Increased conversion rates by 24% and reduced cart abandonment by 18% within three months of implementation.',
      images: ['https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80']
    }
  }];
  return <section id="work" className="py-24 relative">
      <div className="absolute left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent to-gray-50"></div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="inline-block mb-3 px-4 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full">
            <p className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
              Portfolio
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Selected Work
          </h2>
          <p className="text-gray-600 max-w-2xl">
            A collection of projects where strategic design thinking helped
            solve complex business challenges.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => <div key={project.id} onClick={() => onProjectClick(project)} className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="overflow-hidden h-64">
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="mb-3">
                <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center text-indigo-600 font-medium">
                View case study
                <ArrowRightIcon size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>)}
      </div>
    </section>;
};