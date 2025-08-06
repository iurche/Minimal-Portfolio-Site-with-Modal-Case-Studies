import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
export const Hero = () => {
  return <section className="pt-40 pb-24 md:pt-48 md:pb-32 relative">
      <div className="max-w-4xl">
        <div className="inline-block mb-3 px-4 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full">
          <p className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
            Product Designer & UX Strategist
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 inline-block text-transparent bg-clip-text">
            Transforming complex challenges into
          </span>
          <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
            elegant experiences
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
          I help ambitious companies create digital products that drive growth
          through strategic design thinking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#work" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
            View my work
            <ArrowDownIcon size={18} className="ml-2" />
          </a>
          <a href="#contact" className="px-8 py-4 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center">
            Get in touch
          </a>
        </div>
      </div>
    </section>;
};