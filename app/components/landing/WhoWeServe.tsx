'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Code, Pill, Landmark } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const personas = [
  {
    icon: GraduationCap,
    title: 'Academic Researchers',
    headline: 'Accelerate Your Research',
    description: 'Access Africa\'s largest medical imaging repository for groundbreaking research. Collaborate globally while maintaining local control of your data.',
    benefits: [
      'Free access for academic research',
      '1M+ curated medical images',
      'Multi-institutional collaboration',
      'GPU infrastructure for analysis',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building2,
    title: 'Healthcare Institutions',
    headline: 'Join Africa\'s Premier Medical Network',
    description: 'Connect with peer institutions, contribute to cutting-edge research, and access AI tools that improve patient outcomes.',
    benefits: [
      'Access pre-trained AI models',
      'Federated learning participation',
      'Revenue sharing for data',
      'Staff training included',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Code,
    title: 'AI/ML Developers',
    headline: 'Build AI That Works for Africa',
    description: 'Access high-quality, diverse African medical imaging data to train models that actually work for African patients.',
    benefits: [
      'Largest African medical dataset',
      'Pre-labeled training data',
      'Model deployment platform',
      'Commercial licensing available',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Pill,
    title: 'Pharmaceutical Companies',
    headline: 'De-Risk Clinical Trials',
    description: 'Access diverse patient populations for clinical trials, validate diagnostics, and develop products that work for African markets.',
    benefits: [
      'Representative patient cohorts',
      'Clinical trial recruitment support',
      'Biomarker discovery',
      'Regulatory compliance support',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Landmark,
    title: 'Government & Policy Makers',
    headline: 'Data-Driven Healthcare Policy',
    description: 'Access population-level insights to inform healthcare policy, allocate resources effectively, and monitor public health trends.',
    benefits: [
      'Population health analytics',
      'Disease burden assessment',
      'Resource allocation insights',
      'Evidence-based decision making',
    ],
    color: 'from-indigo-500 to-blue-500',
  },
];

export function WhoWeServe() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Who We Serve
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Empowering Africa's Healthcare Ecosystem
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform serves diverse stakeholders across the African healthcare ecosystem and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-primary-200 rounded-2xl">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${persona.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <persona.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{persona.title}</CardTitle>
                      <p className="text-sm text-primary-600 font-semibold">{persona.headline}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base mb-4">
                    {persona.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {persona.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="text-secondary-500 mr-2 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
