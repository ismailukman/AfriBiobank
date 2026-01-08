'use client';

import { motion } from 'framer-motion';
import { FileCheck, Upload, Edit, Brain, BarChart } from 'lucide-react';

const steps = [
  {
    icon: FileCheck,
    title: 'Register & Get Approved',
    description: 'Create an account and submit your credentials. Institutions undergo verification, while researchers get fast-tracked approval from their home institutions.',
    timeline: '1-3 business days',
  },
  {
    icon: Upload,
    title: 'Upload or Access Data',
    description: 'Institutions upload medical images through our secure portal. Researchers browse our catalog of certified datasets and request access based on their research needs.',
    features: 'Automated de-identification, quality checks, metadata extraction',
  },
  {
    icon: Edit,
    title: 'Annotate & Curate',
    description: 'Collaborate with experts to annotate images, add labels, and enrich metadata. Our tools support multi-user annotation with version control and approval workflows.',
    tools: 'Web-based annotation tools, collaborative features, export formats',
  },
  {
    icon: Brain,
    title: 'Analyze with AI Tools',
    description: 'Run pre-trained AI models, train custom models, or participate in federated learning campaigns. Access powerful GPU infrastructure and experiment tracking.',
    capabilities: 'Inference, training, federated learning, model deployment',
  },
  {
    icon: BarChart,
    title: 'Real Insights & Impact',
    description: 'Share findings with the community, publish research, and contribute insights back to the platform. Co-authorship opportunities and recognition for data contributors.',
    outcomes: 'Publications, patents, clinical guidelines, AI models',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-600 dark:text-primary-300 uppercase tracking-wide mb-2">
            How It Works
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            From Data to Discovery in Five Simple Steps
          </h3>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-secondary-200 transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`bg-white dark:bg-slate-900/80 p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? 'lg:text-right' : ''
                  }`}>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Step {index + 1}: {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-slate-300 mb-4">
                      {step.description}
                    </p>
                    {step.timeline && (
                      <p className="text-sm text-primary-600 dark:text-primary-300 font-semibold">
                        Timeline: {step.timeline}
                      </p>
                    )}
                    {step.features && (
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        {step.features}
                      </p>
                    )}
                    {step.tools && (
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        Tools: {step.tools}
                      </p>
                    )}
                    {step.capabilities && (
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        Capabilities: {step.capabilities}
                      </p>
                    )}
                    {step.outcomes && (
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        Outcomes: {step.outcomes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="text-white" size={32} />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Begin Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
