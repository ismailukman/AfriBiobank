'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, Brain, Scan, BrainCircuit, Waves, HeartPulse, Microscope, TestTube } from 'lucide-react';
import { Tac, Xray, UltrasoundScanner, HeartCardiogram } from 'healthicons-react';
import Link from 'next/link';

export function Hero() {
  const modalityIcons = [
    // Neuroimaging
    { icon: Scan, label: 'MRI', position: { top: '10%', left: '8%' }, size: 'large', color: 'primary', type: 'lucide' },
    { icon: BrainCircuit, label: 'fMRI', position: { top: '25%', right: '8%' }, size: 'large', color: 'secondary', type: 'lucide' },
    { icon: Waves, label: 'DTI', position: { bottom: '35%', left: '15%' }, size: 'medium', color: 'primary', type: 'lucide' },
    { icon: Brain, label: 'PET', position: { bottom: '15%', right: '12%' }, size: 'medium', color: 'secondary', type: 'lucide' },

    // General Imaging
    { icon: Tac, label: 'CT', position: { top: '45%', right: '6%' }, size: 'large', color: 'primary', type: 'healthicon' },
    { icon: Xray, label: 'X-Ray', position: { top: '60%', left: '10%' }, size: 'medium', color: 'secondary', type: 'healthicon' },
    { icon: UltrasoundScanner, label: 'Ultrasound', position: { top: '15%', left: '45%' }, size: 'medium', color: 'primary', type: 'healthicon' },

    // Cardiac & Vascular
    { icon: HeartCardiogram, label: 'Echo', position: { bottom: '25%', right: '40%' }, size: 'medium', color: 'secondary', type: 'healthicon' },
    { icon: HeartPulse, label: 'ECG', position: { top: '35%', left: '25%' }, size: 'small', color: 'primary', type: 'lucide' },

    // Pathology & Lab
    { icon: Microscope, label: 'Pathology', position: { bottom: '45%', left: '35%' }, size: 'small', color: 'secondary', type: 'lucide' },
    { icon: TestTube, label: 'Lab', position: { bottom: '10%', left: '25%' }, size: 'small', color: 'primary', type: 'lucide' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      <div className="hero-geo" />
      <div className="absolute inset-0" aria-hidden="true">
        {modalityIcons.map((modality, index) => (
          <motion.div
            key={modality.label}
            className="absolute flex flex-col items-center gap-1 cursor-pointer group"
            style={modality.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1 },
              scale: { duration: 0.5, delay: index * 0.1 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }
            }}
            whileHover={{ scale: 1.2, y: -10 }}
          >
            <div className={`
              rounded-2xl bg-gradient-to-br shadow-lg group-hover:shadow-xl transition-all duration-300
              ${modality.color === 'primary'
                ? 'from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300'
                : 'from-secondary-100 to-secondary-200 group-hover:from-secondary-200 group-hover:to-secondary-300'
              }
              ${modality.size === 'large' ? 'p-5' : modality.size === 'medium' ? 'p-4' : 'p-3'}
            `}>
              <modality.icon
                className={`
                  ${modality.color === 'primary' ? 'text-primary-700' : 'text-secondary-700'}
                  ${modality.size === 'large' ? 'w-8 h-8' : modality.size === 'medium' ? 'w-6 h-6' : 'w-5 h-5'}
                `}
              />
            </div>
            <span className="text-[10px] font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
              {modality.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              AfriBiobank
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
            Empowering Africa's Medical Research Through Intelligent Data Sharing
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            The continent's premier medical imaging biobank, enabling breakthrough research,
            AI development, and improved healthcare outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="xl" className="group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button size="xl" variant="outline" className="border-2 border-black hover:bg-black hover:text-white" asChild>
              <Link href="/explore">
                Explore Data
                <Database className="ml-2" />
              </Link>
            </Button>

            <Button size="xl" variant="outline" className="border-2 border-black hover:bg-black hover:text-white" asChild>
              <Link href="/ai-tools">
                AI Tools
                <Brain className="ml-2" />
              </Link>
            </Button>
          </div>

          {/* Supporting Text */}
          <p className="mt-8 text-sm text-gray-500">
            Join 20+ institutions across 10 African countries already collaborating on AfriBiobank
          </p>
        </motion.div>
      </div>
    </section>
  );
}
