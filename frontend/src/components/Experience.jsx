import React, { useEffect, useRef, useState } from 'react';
import { experiences } from '../data/mock';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Badge } from './ui/badge';

const ExperienceCard = ({ experience, index, isLast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent" />
      )}

      <div
        className={`relative flex gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Timeline dot */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-[#0a0a0f] shadow-lg shadow-cyan-500/50">
            <Briefcase size={20} className="text-black" />
          </div>
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 mb-8 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {experience.role}
              </h3>
              <p className="text-cyan-400 font-semibold text-lg mb-2">
                {experience.company}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-cyan-400" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300">{experience.description}</p>

            {/* Achievements */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-cyan-400">Key Achievements:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <ChevronRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {experience.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 text-xs font-mono"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">&lt;</span>
            Experience
            <span className="font-mono text-cyan-400">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional journey across multiple tech domains
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
