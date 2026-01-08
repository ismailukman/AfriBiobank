'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Award, TrendingUp } from 'lucide-react';

const stories = [
  {
    icon: '🫁',
    category: 'Public Health',
    title: 'TB Detection in West Africa',
    challenge: 'TB remains a leading cause of death with varying diagnostic accuracy across facilities.',
    solution: 'Consortium trained AI on 25,000 chest X-rays from Nigeria, Ghana, and Senegal.',
    results: [
      { metric: '95%', label: 'Accuracy' },
      { metric: '50K+', label: 'X-rays Analyzed' },
      { metric: '40%', label: 'Missed Cases Reduced' },
      { metric: '50+', label: 'Clinics Using' },
    ],
    quote: 'Saving lives where TB often goes undiagnosed until too late.',
    author: 'Dr. Olabisi Adeyemi',
    publication: 'Lancet Digital Health (2024)',
  },
  {
    icon: '🧠',
    category: 'Oncology',
    title: 'Brain Tumor Classification',
    challenge: 'African patients misclassified by AI trained on non-African data.',
    solution: '8-country study built Africa\'s first comprehensive brain tumor dataset.',
    results: [
      { metric: '10K', label: 'MRI Scans' },
      { metric: '94.2%', label: 'Accuracy' },
      { metric: '+15%', label: 'vs Generic' },
      { metric: '3', label: 'Novel Subtypes' },
    ],
    quote: 'Genetic diversity revealed characteristics never seen in Western datasets.',
    author: 'Prof. Thandiwe Moyo',
    publication: 'Nature Medicine (2024)',
  },
  {
    icon: '🦠',
    category: 'Pandemic Response',
    title: 'COVID-19 Rapid Response',
    challenge: 'African countries needed rapid diagnostic tools during pandemic.',
    solution: 'Emergency data sharing across 20 institutions in 5 weeks.',
    results: [
      { metric: '92.1%', label: 'Detection' },
      { metric: '18K', label: 'Scans' },
      { metric: '25', label: 'Facilities' },
      { metric: '5wks', label: 'To Deploy' },
    ],
    quote: 'Demonstrated effective African collaboration during crises.',
    author: 'Hon. Minister of Health',
    publication: 'NEJM AI (2024)',
  },
];

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = stories.length - 1;
      if (next >= stories.length) next = 0;
      return next;
    });
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-2">Success Stories</h2>
          <h3 className="text-4xl font-bold mb-4">Real Impact, Real Results</h3>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl">{currentStory.icon}</span>
                      <div>
                        <p className="text-sm text-primary-400 font-semibold">{currentStory.category}</p>
                        <CardTitle className="text-2xl text-white">{currentStory.title}</CardTitle>
                      </div>
                    </div>
                    <Award className="text-yellow-400" size={32} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Challenge:</h4>
                        <p className="text-gray-100">{currentStory.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">Solution:</h4>
                        <p className="text-gray-100">{currentStory.solution}</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg border-l-4 border-primary-500">
                        <p className="italic text-gray-200 mb-2">"{currentStory.quote}"</p>
                        <p className="text-sm text-gray-200">— {currentStory.author}</p>
                      </div>
                      <p className="text-sm text-primary-400">📄 {currentStory.publication}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-4 flex items-center">
                        <TrendingUp className="mr-2" size={20} />
                        Key Results:
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {currentStory.results.map((result, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 p-4 rounded-xl text-center"
                          >
                            <div className="text-3xl font-bold text-white mb-1">{result.metric}</div>
                            <div className="text-sm text-gray-100">{result.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {stories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
              className={`h-2 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-primary-400' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
