import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { experience } from '../data/mockData';

const Experience = () => {
  const scrollRef = useRef(null);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        <div
          ref={scrollRef}
          className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-slate-800/50"
          style={{ scrollbarWidth: 'thin' }}
        >
          <div className="flex gap-6 min-w-max px-4">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="w-80 flex-shrink-0"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-white mb-3">Key Achievements:</p>
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-slate-400 text-sm">
            Scroll horizontally to explore my journey →
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
