'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Code,
  Key,
  Zap,
  FileText,
  Terminal,
  CheckCircle,
  ArrowRight,
  Download,
  Globe,
  Shield,
  Cpu
} from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

const apiEndpoints = [
  {
    method: 'POST',
    endpoint: '/api/v1/brain-analysis',
    description: 'Analyze brain MRI scans for tumor detection and segmentation',
    category: 'Neuroimaging'
  },
  {
    method: 'POST',
    endpoint: '/api/v1/chest-analysis',
    description: 'Detect TB, pneumonia, and thoracic pathologies from chest X-rays',
    category: 'Radiology'
  },
  {
    method: 'POST',
    endpoint: '/api/v1/skin-analysis',
    description: 'Classify skin lesions and detect melanoma',
    category: 'Dermatology'
  },
  {
    method: 'POST',
    endpoint: '/api/v1/retinal-analysis',
    description: 'Grade diabetic retinopathy and detect retinal diseases',
    category: 'Ophthalmology'
  },
  {
    method: 'POST',
    endpoint: '/api/v1/segmentation',
    description: 'Segment organs and anatomical structures',
    category: 'Image Processing'
  }
];

const sdks = [
  { name: 'Python', icon: Terminal, available: true },
  { name: 'JavaScript/TypeScript', icon: Code, available: true },
  { name: 'R', icon: FileText, available: true },
  { name: 'Java', icon: Cpu, available: false }
];

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-12 h-12" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Documentation
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                Everything you need to integrate AfriBiobank AI tools into your applications
              </p>
            </motion.div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="#getting-started" className="bg-white dark:bg-slate-900/80 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow dark:ring-1 dark:ring-slate-700/60">
              <Zap className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Quick Start</h3>
              <p className="text-sm text-gray-900 dark:text-slate-300">Get up and running in minutes</p>
            </Link>
            <Link href="#api-reference" className="bg-white dark:bg-slate-900/80 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow dark:ring-1 dark:ring-slate-700/60">
              <Code className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">API Reference</h3>
              <p className="text-sm text-gray-900 dark:text-slate-300">Complete API documentation</p>
            </Link>
            <Link href="#authentication" className="bg-white dark:bg-slate-900/80 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow dark:ring-1 dark:ring-slate-700/60">
              <Key className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Authentication</h3>
              <p className="text-sm text-gray-900 dark:text-slate-300">Secure your API requests</p>
            </Link>
            <Link href="#sdks" className="bg-white dark:bg-slate-900/80 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow dark:ring-1 dark:ring-slate-700/60">
              <Terminal className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">SDKs</h3>
              <p className="text-sm text-gray-900 dark:text-slate-300">Client libraries for all languages</p>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Getting Started */}
          <motion.section
            id="getting-started"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <Zap className="w-8 h-8 text-primary-600" />
              Getting Started
            </h2>
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-lg p-8 dark:ring-1 dark:ring-slate-700/60">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Installation</h3>
                <p className="text-gray-900 dark:text-slate-300 mb-4">
                  Install the AfriBiobank SDK using your preferred package manager:
                </p>
                <div className="bg-gray-900 text-white rounded-lg p-6 mb-6 overflow-x-auto">
                  <code className="text-sm">
                    # Python<br/>
                    pip install afribiobank<br/><br/>
                    # Node.js<br/>
                    npm install @afribiobank/sdk<br/><br/>
                    # R<br/>
                    install.packages("afribiobank")
                  </code>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">First API Call</h3>
                <p className="text-gray-900 dark:text-slate-300 mb-4">
                  Make your first API call to analyze a medical image:
                </p>
                <div className="bg-gray-900 text-white rounded-lg p-6 overflow-x-auto">
                  <code className="text-sm">
                    {`import afribiobank

# Initialize the client
client = afribiobank.Client(api_key="your_api_key")

# Analyze a chest X-ray
result = client.chest_analysis.predict(
    image_path="chest_xray.jpg",
    model="tb-detection-v2"
)

print(result.predictions)`}
                  </code>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Authentication */}
          <motion.section
            id="authentication"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <Key className="w-8 h-8 text-primary-600" />
              Authentication
            </h2>
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-lg p-8 dark:ring-1 dark:ring-slate-700/60">
              <div className="prose max-w-none">
                <p className="text-gray-900 dark:text-slate-300 mb-4">
                  All API requests require authentication using an API key. Include your API key in the request header:
                </p>
                <div className="bg-gray-900 text-white rounded-lg p-6 mb-6 overflow-x-auto">
                  <code className="text-sm">
                    {`Authorization: Bearer YOUR_API_KEY`}
                  </code>
                </div>
                <div className="bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-amber-600 dark:text-amber-300 mr-3 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-800 dark:text-amber-200">Keep your API key secure</p>
                      <p className="text-sm text-amber-700 dark:text-amber-200/90 mt-1">
                        Never expose your API key in client-side code or public repositories. Store it securely in environment variables.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get API Key
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* API Reference */}
          <motion.section
            id="api-reference"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <Code className="w-8 h-8 text-primary-600" />
              API Reference
            </h2>
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-900/80 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all dark:ring-1 dark:ring-slate-700/60"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded">
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-gray-700 dark:text-slate-300 font-mono">{endpoint.endpoint}</code>
                    </div>
                    <span className="text-xs bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                      {endpoint.category}
                    </span>
                  </div>
                  <p className="text-gray-900 dark:text-slate-300 mb-4">{endpoint.description}</p>
                  <Link
                    href={`/docs/api${endpoint.endpoint}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center gap-1"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* SDKs */}
          <motion.section
            id="sdks"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <Terminal className="w-8 h-8 text-primary-600" />
              Official SDKs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sdks.map((sdk, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-slate-900/80 rounded-xl shadow-lg p-6 dark:ring-1 dark:ring-slate-700/60 ${
                    sdk.available ? 'hover:shadow-xl transition-shadow' : 'opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <sdk.icon className="w-8 h-8 text-primary-600" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{sdk.name}</h3>
                    </div>
                    {sdk.available ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <span className="text-xs bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  {sdk.available && (
                    <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download SDK
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Additional Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <Globe className="w-8 h-8 text-primary-600" />
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-lg p-6 dark:ring-1 dark:ring-slate-700/60">
                <FileText className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Tutorials</h3>
                <p className="text-gray-900 dark:text-slate-300 mb-4">
                  Step-by-step guides for common use cases
                </p>
                <Link
                  href="/docs/tutorials"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center gap-1"
                >
                  Browse Tutorials
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-lg p-6 dark:ring-1 dark:ring-slate-700/60">
                <Code className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Code Examples</h3>
                <p className="text-gray-900 dark:text-slate-300 mb-4">
                  Ready-to-use code snippets and samples
                </p>
                <Link
                  href="/docs/examples"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center gap-1"
                >
                  View Examples
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-lg p-6 dark:ring-1 dark:ring-slate-700/60">
                <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Research Papers</h3>
                <p className="text-gray-900 dark:text-slate-300 mb-4">
                  Scientific publications and methodology
                </p>
                <Link
                  href="/research"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center gap-1"
                >
                  Read Papers
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.section>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore Our AI Tools?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you integrate AfriBiobank AI into your workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/ai-tools"
                  className="relative bg-white text-primary-600 font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:shadow-2xl inline-flex items-center justify-center gap-2 overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore AI Tools
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
