import React from 'react';
import { MailIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 blur-3xl opacity-70 -z-10"></div>
      <div className="inline-block mb-3 px-4 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full">
        <p className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
          Contact
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's create something amazing together
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-md">
            I'm currently available for new projects and collaborations. Let's
            discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:hello@iuraosadchuk.com" className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
              <MailIcon size={18} className="mr-2" />
              Email Me
            </a>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all" aria-label="LinkedIn Profile">
                <LinkedinIcon size={20} className="text-indigo-600" />
              </a>
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all" aria-label="Twitter Profile">
                <TwitterIcon size={20} className="text-indigo-600" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>;
};