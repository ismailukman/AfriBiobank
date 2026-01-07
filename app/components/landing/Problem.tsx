'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const problems = [
  {
    title: 'Limited Access to African Medical Data',
    description: 'Africa is home to 1.4 billion people, yet global health databases barely represent our diversity.',
  },
  {
    title: 'Fragmented Data Silos',
    description: 'Medical data is locked away in individual hospitals, preventing collaborative research and AI development.',
  },
  {
    title: 'AI Bias & Misdiagnosis',
    description: 'Diagnostic AI trained on non-African data leads to dangerous misinterpretations of African patient scans.',
  },
  {
    title: 'Lack of Standardization',
    description: 'Without common formats and standards, sharing data between institutions is nearly impossible.',
  },
  {
    title: 'Privacy & Ethical Concerns',
    description: 'Traditional data sharing raises serious privacy issues and violates patient trust.',
  },
];

export function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            The Challenge
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            AI Trained Elsewhere Fails African Patients
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet Shade, a brilliant high school student in Lagos. When she fell ill, AI-assisted
            tools misdiagnosed her brain tumor because they were trained on European and North
            American data—not African patients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <AlertCircle className="text-red-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-gray-900">
            We are data-rich, yet insight-poor. It's time to change that.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
