import React, { useEffect, useRef } from 'react';
import { XIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Project } from '../types';
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}
export const ProjectModal = ({
  project,
  onClose
}: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  return <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-start overflow-y-auto p-4 sm:p-6 md:p-10">
      <div ref={modalRef} className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close modal">
            <XIcon size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-indigo-600 mb-1">
                Client
              </h3>
              <p className="text-gray-900 font-medium">{project.client}</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-indigo-600 mb-1">Year</h3>
              <p className="text-gray-900 font-medium">{project.year}</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-indigo-600 mb-1">Role</h3>
              <p className="text-gray-900 font-medium">{project.role}</p>
            </div>
          </div>
          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  1
                </span>
                Challenge
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  2
                </span>
                Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.caseStudy.approach}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  3
                </span>
                Outcome
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.caseStudy.outcome}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  4
                </span>
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {project.caseStudy.images.map((image, index) => <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                    <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-auto" />
                  </div>)}
              </div>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
            <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors" onClick={onClose}>
              <ArrowLeftIcon size={16} className="mr-2" />
              Back to all projects
            </button>
          </div>
        </div>
      </div>
    </div>;
};