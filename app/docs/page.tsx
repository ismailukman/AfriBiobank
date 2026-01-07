'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Zap, Download, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';
import Link from 'next/link';

const docSections = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    color: 'from-blue-500 to-cyan-500',
    docs: [
      { name: 'Quick Start Guide', description: '5-minute setup for new users', time: '5 min read' },
      { name: 'Platform Overview', description: 'Architecture and key concepts', time: '10 min read' },
      { name: 'Account Setup', description: 'Creating and configuring your account', time: '8 min read' },
      { name: 'First Dataset Access', description: 'Browse and download your first dataset', time: '12 min read' },
    ],
  },
  {
    icon: Code,
    title: 'API Documentation',
    color: 'from-green-500 to-emerald-500',
    docs: [
      { name: 'API Reference', description: 'Complete REST API documentation', time: 'Reference', link: '/api' },
      { name: 'Authentication', description: 'OAuth 2.0 and JWT token management', time: '15 min read' },
      { name: 'Python SDK', description: 'Official Python client library', time: '20 min read' },
      { name: 'JavaScript SDK', description: 'Node.js and browser integration', time: '18 min read' },
      { name: 'Rate Limits', description: 'Understanding API quotas and throttling', time: '5 min read' },
    ],
  },
  {
    icon: Database,
    title: 'Working with Data',
    color: 'from-purple-500 to-pink-500',
    docs: [
      { name: 'Dataset Browser', description: 'Finding and filtering medical images', time: '15 min read' },
      { name: 'DICOM Viewer', description: 'Using the built-in medical image viewer', time: '12 min read' },
      { name: 'Data Formats', description: 'Supported formats and conversions', time: '10 min read' },
      { name: 'Annotations', description: 'Working with radiologist annotations', time: '15 min read' },
      { name: 'Federated Learning', description: 'Training models without moving data', time: '25 min read' },
    ],
  },
  {
    icon: Zap,
    title: 'AI/ML Development',
    color: 'from-orange-500 to-red-500',
    docs: [
      { name: 'Training Models', description: 'Using GPU infrastructure for model training', time: '30 min read' },
      { name: 'MLOps Pipeline', description: 'Experiment tracking and model registry', time: '20 min read' },
      { name: 'Pre-trained Models', description: 'Using and fine-tuning existing models', time: '18 min read' },
      { name: 'Model Deployment', description: 'Deploying models for inference', time: '25 min read' },
      { name: 'Best Practices', description: 'African medical AI development guide', time: '15 min read' },
    ],
  },
];

const resources = [
  { title: 'GitHub Repositories', description: 'Open-source tools and examples', icon: Code, link: 'https://github.com/afribiobank' },
  { title: 'Video Tutorials', description: 'Step-by-step video guides', icon: BookOpen, link: '/tutorials' },
  { title: 'API Playground', description: 'Interactive API testing environment', icon: Zap, link: '#' },
  { title: 'Community Forum', description: 'Get help from other researchers', icon: ExternalLink, link: '#' },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <BookOpen className="mx-auto text-primary-600 mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to start building with AfriBiobank
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/api">
                <button className="bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all">
                  API Reference
                </button>
              </Link>
              <Link href="/tutorials">
                <button className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all">
                  Tutorials
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-primary-500 focus:outline-none text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {docSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} shadow-lg mr-4`}>
                    <section.icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.docs.map((doc, index) => (
                    <motion.div
                      key={doc.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                    >
                      <Link href={doc.link || '#'}>
                        <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-200 rounded-2xl cursor-pointer">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-start justify-between">
                              <span>{doc.name}</span>
                              <ExternalLink className="text-gray-400" size={16} />
                            </CardTitle>
                            <CardDescription className="text-sm">{doc.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <span className="text-xs text-primary-600 font-semibold">{doc.time}</span>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-600">More ways to learn and get help</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={resource.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-200 rounded-2xl cursor-pointer text-center">
                    <CardHeader>
                      <resource.icon className="mx-auto text-primary-600 mb-3" size={32} />
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription className="text-sm">{resource.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <Download className="mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">Download Complete Documentation</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the full documentation as a PDF for offline reference
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Download PDF (12.5 MB)
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
