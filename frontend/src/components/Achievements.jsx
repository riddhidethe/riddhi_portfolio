import React, { useEffect, useRef, useState } from 'react';
import { achievements } from '../data/mock';
import { Trophy, Award, Code, BookOpen } from 'lucide-react';

const iconMap = {
  trophy: Trophy,
  award: Award,
  code: Code,
  'book-open': BookOpen
};

const AchievementCard = ({ achievement, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const Icon = iconMap[achievement.icon] || Trophy;

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
    <div
      ref={ref}
      className={`group bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 transition-all duration-700 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="space-y-4">
        {/* Icon */}
        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
          <Icon size={28} className="text-black" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {achievement.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {achievement.description}
          </p>
          <span className="text-cyan-400 text-xs font-mono">{achievement.year}</span>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">&lt;</span>
            Achievements
            <span className="font-mono text-cyan-400">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">
            Recognition and milestones in my journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
