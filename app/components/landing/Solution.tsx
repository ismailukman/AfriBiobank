'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Bot, Scale } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const solutions = [
  {
    icon: Shield,
    title: 'FAIR-Compliant Data Storage',
    description: 'Centralized access to decentralized data. We store medical imaging metadata and provide secure access without moving sensitive patient information.',
    features: [
      'Multi-modal imaging support',
      'De-identification and anonymization',
      'Quality certification process',
      'Searchable metadata catalog',
    ],
  },
  {
    icon: Users,
    title: 'Collaborate Without Sharing Data',
    description: 'Revolutionary federated learning technology that trains AI models across multiple hospitals without any institution sharing raw patient data.',
    features: [
      'Privacy-preserving machine learning',
      'Differential privacy guarantees',
      'Secure multi-party computation',
      'Real-time collaborative training',
    ],
  },
  {
    icon: Bot,
    title: 'Pre-trained Models & Development Tools',
    description: 'Access dozens of AI models already trained on African medical images. Or build your own using our comprehensive ML platform.',
    features: [
      '50+ pre-trained models',
      'Custom model training',
      'Automated deployment',
      'Explainable AI (Grad-CAM, SHAP)',
    ],
  },
  {
    icon: Scale,
    title: 'Transparent, Compliant Operations',
    description: 'Built-in ethics and compliance frameworks ensure all research follows international standards while respecting local regulations.',
    features: [
      'Consent management system',
      'Ethics committee oversight',
      'GDPR/HIPAA compliance',
      'Audit trails and transparency',
    ],
  },
];

export function Solution() {
  return (
    <section className="py-20 bg-white geometric-pattern">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-secondary-600 dark:text-secondary-300 uppercase tracking-wide mb-2">
            Our Solution
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            A Medical Imaging Biobank Built for Africa, by Africa
          </h3>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
            AfriBiobank is more than a database. It's a collaborative platform that connects
            hospitals, researchers, policymakers, and communities across Africa through
            cutting-edge federated learning technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <solution.icon className="text-primary-600" size={24} />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base mb-4">
                    {solution.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-gray-600">
                        <span className="text-secondary-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            We don't just talk about equity—we build it into the architecture of African healthcare innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
