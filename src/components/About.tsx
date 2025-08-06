import React from 'react';
export const About = () => {
  const skills = ['User Research', 'UX Strategy', 'Interaction Design', 'UI Design', 'Prototyping', 'Usability Testing', 'Design Systems'];
  return <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="inline-block mb-3 px-4 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full">
        <p className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
          About Me
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Designing with purpose and precision
          </h2>
          <div className="space-y-6 text-gray-600 text-lg">
            <p>
              I'm a strategic product designer with 8+ years of experience
              creating digital experiences that solve complex problems and drive
              business growth.
            </p>
            <p>
              My approach combines deep user empathy with business acumen to
              deliver designs that not only delight users but also achieve
              measurable results.
            </p>
            <p>
              Previously, I've worked with startups and Fortune 500 companies
              across fintech, healthcare, e-commerce, and SaaS industries.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-8">
            Skills & Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => <span key={skill} className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full text-gray-800 text-sm">
                {skill}
              </span>)}
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-medium text-gray-900 mb-6">
              Experience Highlights
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-indigo-200 pl-4">
                <h4 className="font-medium text-gray-900">
                  Senior Product Designer
                </h4>
                <p className="text-indigo-600">TechCorp Inc • 2020 - Present</p>
              </div>
              <div className="border-l-2 border-indigo-200 pl-4">
                <h4 className="font-medium text-gray-900">UX Designer</h4>
                <p className="text-indigo-600">DesignStudio • 2017 - 2020</p>
              </div>
              <div className="border-l-2 border-indigo-200 pl-4">
                <h4 className="font-medium text-gray-900">UI/UX Designer</h4>
                <p className="text-indigo-600">CreativeAgency • 2015 - 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};