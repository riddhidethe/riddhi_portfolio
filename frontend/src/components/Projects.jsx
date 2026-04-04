import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/mock';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className={`group bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-xl overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${project.featured ? 'md:col-span-2' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project Image/Icon Area */}
      <div className="relative h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center overflow-hidden">
        <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
          {project.category === 'AI/ML' ? '🤖' : '💻'}
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <Badge variant="outline" className="text-cyan-400 border-cyan-500/30 text-xs">
            {project.category}
          </Badge>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">
          {isExpanded ? project.longDescription : project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features - shown when expanded */}
        {isExpanded && (
          <div className="space-y-2 pt-4 border-t border-cyan-500/20">
            <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                  <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            size="sm"
            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </Button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI/ML', 'Full-Stack'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">&lt;</span>
            Projects
            <span className="font-mono text-cyan-400">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects spanning full-stack development and AI/ML
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              className={`font-mono transition-all duration-300 ${
                filter === category
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-black shadow-lg shadow-cyan-500/30'
                  : 'bg-transparent border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
