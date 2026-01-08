'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Network,
  Microscope,
  Activity,
  Scan,
  Eye,
  Heart,
  Layers,
  Zap,
  Database,
  GitBranch,
  Shield,
  TrendingUp,
  AlertCircle,
  Box,
  Cpu,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

type AITool = {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: any;
  features: string[];
  status: 'available' | 'beta' | 'coming-soon';
  apiEndpoint?: string;
  gradient: string;
};

const aiTools: AITool[] = [
  {
    id: 'federated-learning',
    title: 'Federated Learning Toolkit',
    description: 'Train AI models collaboratively across multiple institutions without sharing raw patient data. Privacy-preserving machine learning at scale.',
    category: 'Machine Learning',
    icon: Network,
    features: [
      'Multi-site collaborative training',
      'Differential privacy built-in',
      'Support for PyTorch & TensorFlow',
      'Real-time training monitoring',
      'Automated model aggregation'
    ],
    status: 'available',
    apiEndpoint: '/api/v1/federated-learning',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'rare-disease-observatory',
    title: 'Rare Disease Observatory',
    description: 'AI-powered analysis and monitoring of rare diseases including various cancers, skin conditions, and genetic disorders across African populations.',
    category: 'Disease Analysis',
    icon: Microscope,
    features: [
      'Cancer detection & classification',
      'Skin disease analysis (melanoma, vitiligo, etc.)',
      'Rare genetic disorder identification',
      'Population-specific disease patterns',
      'Real-time prevalence tracking'
    ],
    status: 'available',
    apiEndpoint: '/api/v1/rare-diseases',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'brain-tumor-detection',
    title: 'Brain Tumor Detection AI',
    description: 'State-of-the-art deep learning models for automated detection, classification, and segmentation of brain tumors from MRI scans.',
    category: 'Neuroimaging',
    icon: Brain,
    features: [
      'Multi-modal MRI analysis (T1, T2, FLAIR)',
      'Tumor segmentation & volumetrics',
      'Grade classification (WHO)',
      'Treatment response prediction',
      '99.2% detection accuracy'
    ],
    status: 'available',
    apiEndpoint: '/api/v1/brain-analysis',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'chest-xray-analysis',
    title: 'Chest X-Ray Analysis Suite',
    description: 'Comprehensive AI toolkit for detecting tuberculosis, pneumonia, COVID-19, and 14+ thoracic pathologies from chest radiographs.',
    category: 'Radiology',
    icon: Scan,
    features: [
      'TB detection (WHO-approved)',
      'COVID-19 screening',
      'Pneumonia classification',
      '14 pathology detection',
      'Severity scoring'
    ],
    status: 'available',
    apiEndpoint: '/api/v1/chest-analysis',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    id: 'retinal-disease-detection',
    title: 'Retinal Disease Detection',
    description: 'AI-powered screening for diabetic retinopathy, glaucoma, age-related macular degeneration, and other retinal pathologies.',
    category: 'Ophthalmology',
    icon: Eye,
    features: [
      'Diabetic retinopathy grading',
      'Glaucoma risk assessment',
      'AMD detection',
      'Retinal vessel analysis',
      'Referral urgency classification'
    ],
    status: 'beta',
    apiEndpoint: '/api/v1/retinal-analysis',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'cardiac-imaging-ai',
    title: 'Cardiac Imaging AI',
    description: 'Advanced AI models for cardiac MRI and echocardiography analysis, including chamber quantification and disease detection.',
    category: 'Cardiology',
    icon: Heart,
    features: [
      'Chamber segmentation',
      'Ejection fraction calculation',
      'Valve disease detection',
      'Myocardial infarction analysis',
      'Congenital heart disease screening'
    ],
    status: 'beta',
    apiEndpoint: '/api/v1/cardiac-analysis',
    gradient: 'from-red-500 to-rose-500'
  },
  {
    id: 'skin-lesion-classifier',
    title: 'Skin Lesion Classifier',
    description: 'Dermatology AI trained on diverse African skin tones for melanoma, basal cell carcinoma, and benign lesion classification.',
    category: 'Dermatology',
    icon: Activity,
    features: [
      'Melanoma detection',
      'Basal cell carcinoma',
      'Squamous cell carcinoma',
      '12+ skin condition types',
      'Fitzpatrick skin type aware'
    ],
    status: 'available',
    apiEndpoint: '/api/v1/skin-analysis',
    gradient: 'from-yellow-500 to-amber-500'
  },
  {
    id: 'medical-image-segmentation',
    title: 'Multi-Organ Segmentation',
    description: 'Universal segmentation toolkit for automatic delineation of organs and anatomical structures across CT and MRI modalities.',
    category: 'Image Processing',
    icon: Layers,
    features: [
      '100+ organ segmentation',
      'CT & MRI support',
      'Automatic landmark detection',
      'Volume & measurement tools',
      'DICOM RT-STRUCT export'
    ],
    status: 'available',
    apiEndpoint: '/api/v1/segmentation',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'image-quality-assessment',
    title: 'Image Quality Assessment',
    description: 'Automated quality control for medical images to ensure diagnostic adequacy before AI analysis or clinical review.',
    category: 'Quality Control',
    icon: Shield,
    features: [
      'Artifact detection',
      'Motion blur assessment',
      'Contrast evaluation',
      'Positioning verification',
      'DICOM metadata validation'
    ],
    status: 'available',
    apiEndpoint: '/api/v1/quality-check',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'disease-progression-predictor',
    title: 'Disease Progression Predictor',
    description: 'Longitudinal AI models that predict disease trajectory and treatment outcomes using temporal imaging data.',
    category: 'Predictive Analytics',
    icon: TrendingUp,
    features: [
      'Tumor growth prediction',
      'Treatment response modeling',
      'Survival analysis',
      'Risk stratification',
      'Personalized timelines'
    ],
    status: 'beta',
    apiEndpoint: '/api/v1/progression',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    id: 'dicom-processing-pipeline',
    title: 'DICOM Processing Pipeline',
    description: 'Enterprise-grade DICOM processing infrastructure with anonymization, format conversion, and metadata extraction.',
    category: 'Infrastructure',
    icon: Database,
    features: [
      'DICOM de-identification',
      'Format conversion (NIfTI, PNG)',
      'Metadata extraction',
      'Series organization',
      'Batch processing'
    ],
    status: 'available',
    apiEndpoint: '/api/v1/dicom',
    gradient: 'from-slate-500 to-gray-500'
  },
  {
    id: 'model-deployment-service',
    title: 'Model Deployment Service',
    description: 'Deploy your custom AI models with automatic scaling, monitoring, and versioning for production medical imaging applications.',
    category: 'MLOps',
    icon: Cpu,
    features: [
      'One-click deployment',
      'Auto-scaling',
      'A/B testing',
      'Model versioning',
      'Performance monitoring'
    ],
    status: 'coming-soon',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'explainable-ai-suite',
    title: 'Explainable AI Suite',
    description: 'Generate visual explanations and attention maps for AI model predictions to support clinical decision-making.',
    category: 'Interpretability',
    icon: AlertCircle,
    features: [
      'Grad-CAM heatmaps',
      'Attention visualization',
      'Feature importance',
      'Counterfactual explanations',
      'Clinical report generation'
    ],
    status: 'beta',
    apiEndpoint: '/api/v1/explainability',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'synthetic-data-generator',
    title: 'Synthetic Data Generator',
    description: 'Generate synthetic medical images using GANs and diffusion models for training, augmentation, and privacy protection.',
    category: 'Data Augmentation',
    icon: Box,
    features: [
      'GAN-based synthesis',
      'Diffusion models',
      'Conditional generation',
      'Privacy-preserving',
      'Domain adaptation'
    ],
    status: 'coming-soon',
    gradient: 'from-fuchsia-500 to-purple-500'
  },
  {
    id: 'clinical-trial-matching',
    title: 'Clinical Trial Matching AI',
    description: 'AI-powered matching of patients to relevant clinical trials based on imaging findings, demographics, and eligibility criteria.',
    category: 'Clinical Research',
    icon: GitBranch,
    features: [
      'Eligibility screening',
      'Trial recommendation',
      'Biomarker matching',
      'Geographic availability',
      'Automatic enrollment'
    ],
    status: 'coming-soon',
    gradient: 'from-lime-500 to-green-500'
  },
  {
    id: 'real-time-inference',
    title: 'Real-Time Inference API',
    description: 'Ultra-low latency inference API for time-critical applications like surgical guidance and emergency diagnostics.',
    category: 'Infrastructure',
    icon: Zap,
    features: [
      'Sub-second latency',
      'GPU acceleration',
      'Batch processing',
      'WebSocket streaming',
      '99.9% uptime SLA'
    ],
    status: 'available',
    apiEndpoint: '/api/v1/inference',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

const categories = [
  'All Tools',
  'Machine Learning',
  'Disease Analysis',
  'Radiology',
  'Image Processing',
  'Quality Control',
  'MLOps',
  'Infrastructure'
];

export default function AIToolsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Tools');

  const filteredTools = selectedCategory === 'All Tools'
    ? aiTools
    : aiTools.filter(tool => tool.category === selectedCategory);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Tools & APIs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Production-ready AI models and APIs for medical imaging analysis, trained on diverse African datasets
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">{aiTools.length}</div>
                <div className="text-sm text-white/80">AI Tools Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">99.2%</div>
                <div className="text-sm text-white/80">Average Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">&lt;100ms</div>
                <div className="text-sm text-white/80">Avg Response Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white dark:bg-slate-900/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-primary-200 dark:border-slate-800"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${tool.gradient}`} />

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                {tool.status === 'available' && (
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Available
                  </span>
                )}
                {tool.status === 'beta' && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Beta
                  </span>
                )}
                {tool.status === 'coming-soon' && (
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>

              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title & Category */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-primary-600 font-semibold mb-3">
                  {tool.category}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-gray-700 dark:text-slate-300 uppercase tracking-wide">
                    Key Features
                  </p>
                  <ul className="space-y-1">
                    {tool.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-primary-500 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {tool.features.length > 3 && (
                    <p className="text-xs text-gray-400 dark:text-slate-500">
                      +{tool.features.length - 3} more features
                    </p>
                  )}
                </div>

                {/* API Endpoint */}
                {tool.apiEndpoint && (
                  <div className="mb-4">
                    <code className="text-xs bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 px-2 py-1 rounded">
                      {tool.apiEndpoint}
                    </code>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {tool.status === 'available' || tool.status === 'beta' ? (
                    <>
                      <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                        Try API
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-sm font-semibold py-2 px-4 rounded-lg transition-colors">
                        Docs
                      </button>
                    </>
                  ) : (
                    <button className="flex-1 bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 text-sm font-semibold py-2 px-4 rounded-lg cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get API access and start integrating AfriBiobank AI tools into your healthcare applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/api"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              View API Documentation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
