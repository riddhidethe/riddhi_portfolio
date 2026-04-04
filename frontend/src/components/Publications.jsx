import React, { useEffect, useRef, useState } from 'react';
import { publications } from '../data/mock';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Publications = () => {
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
    <section id="publications" className="py-20 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">&lt;</span>
            Publications
            <span className="font-mono text-cyan-400">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">
            Research contributions to the academic community
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <div
              key={publication.id}
              ref={ref}
              className={`bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-xl p-8 transition-all duration-700 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <BookOpen size={28} className="text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-relaxed">
                      {publication.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-2">
                        <FileText size={16} className="text-cyan-400" />
                        {publication.authors}
                      </span>
                      <span>•</span>
                      <span className="text-cyan-400 font-semibold">{publication.venue}</span>
                      <span>•</span>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                        {publication.year}
                      </Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {publication.abstract}
                    </p>
                    <div className="mt-3">
                      <Badge variant="outline" className="text-cyan-400 border-cyan-500/30 text-xs">
                        {publication.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <Button
                      asChild
                      className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      <a
                        href={publication.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        View Publication
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
