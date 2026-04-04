import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/mock';

const SkillBar = ({ skill, delay }) => {
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
    <div ref={ref} className="space-y-2" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)'
          }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skillList, icon }) => {
  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skillList.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} delay={index * 100} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">&lt;</span>
            Technical Skills
            <span className="font-mono text-cyan-400">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory
            title="Programming Languages"
            skillList={skills.languages}
            icon="💻"
          />
          <SkillCategory
            title="Frontend Development"
            skillList={skills.frontend}
            icon="🎨"
          />
          <SkillCategory
            title="Backend Development"
            skillList={skills.backend}
            icon="⚙️"
          />
          <SkillCategory
            title="Databases"
            skillList={skills.databases}
            icon="🗄️"
          />
          <SkillCategory
            title="AI/ML & Data Science"
            skillList={skills.aiml}
            icon="🤖"
          />
          <SkillCategory
            title="Tools & Platforms"
            skillList={skills.tools}
            icon="🛠️"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
