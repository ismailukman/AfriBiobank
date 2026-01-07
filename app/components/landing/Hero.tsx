'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDna, faHeartPulse, faMicroscope, faStethoscope, faXRay } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, Brain, Activity, Scan, Microscope, Stethoscope, HeartPulse, Pill, Syringe, TestTube, Radio } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      <div className="hero-geo" />
      <div className="absolute inset-0" aria-hidden="true">
        <span
          className="hero-medical-icon large"
          style={{ top: '6%', left: '10%', ['--float-x' as any]: '26px', ['--float-y' as any]: '-30px', ['--float-rotate' as any]: '8deg', ['--float-duration' as any]: '20s', ['--float-delay' as any]: '0s' }}
        >
          <FontAwesomeIcon icon={faBrain} />
        </span>
        <span
          className="hero-medical-icon teal"
          style={{ top: '12%', right: '14%', ['--float-x' as any]: '18px', ['--float-y' as any]: '-22px', ['--float-duration' as any]: '16s', ['--float-delay' as any]: '2s' }}
        >
          <FontAwesomeIcon icon={faMicroscope} />
        </span>
        <span
          className="hero-medical-icon small green"
          style={{ top: '58%', left: '6%', ['--float-x' as any]: '16px', ['--float-y' as any]: '-18px', ['--float-duration' as any]: '14s', ['--float-delay' as any]: '4s' }}
        >
          <FontAwesomeIcon icon={faDna} />
        </span>
        <span
          className="hero-medical-icon"
          style={{ bottom: '18%', right: '8%', ['--float-x' as any]: '22px', ['--float-y' as any]: '-26px', ['--float-duration' as any]: '18s', ['--float-delay' as any]: '1s' }}
        >
          <FontAwesomeIcon icon={faXRay} />
        </span>
        <span
          className="hero-medical-icon small"
          style={{ bottom: '26%', left: '46%', ['--float-x' as any]: '14px', ['--float-y' as any]: '-16px', ['--float-duration' as any]: '15s', ['--float-delay' as any]: '3s' }}
        >
          <FontAwesomeIcon icon={faStethoscope} />
        </span>
        <span
          className="hero-medical-icon teal"
          style={{ top: '40%', right: '30%', ['--float-x' as any]: '20px', ['--float-y' as any]: '-20px', ['--float-duration' as any]: '17s', ['--float-delay' as any]: '5s' }}
        >
          <FontAwesomeIcon icon={faHeartPulse} />
        </span>
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

        {/* Medical Imaging Modalities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4"
        >
          <p className="text-xs text-gray-500 text-center mb-4 uppercase tracking-wider">
            Supported Medical Imaging Modalities
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { icon: Scan, label: 'MRI', delay: 0 },
              { icon: Activity, label: 'CT Scan', delay: 0.1 },
              { icon: Radio, label: 'X-Ray', delay: 0.2 },
              { icon: HeartPulse, label: 'Ultrasound', delay: 0.3 },
              { icon: Microscope, label: 'Pathology', delay: 0.4 },
              { icon: Brain, label: 'PET Scan', delay: 0.5 },
              { icon: Stethoscope, label: 'Cardiology', delay: 0.6 },
              { icon: TestTube, label: 'Lab Data', delay: 0.7 },
              { icon: Pill, label: 'Pharmacy', delay: 0.8 },
              { icon: Syringe, label: 'Biopsy', delay: 0.9 },
            ].map((modality) => (
              <motion.div
                key={modality.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: modality.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3
                }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 group-hover:from-primary-100 group-hover:to-secondary-100 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <modality.icon className="w-5 h-5 text-primary-600" />
                </div>
                <span className="text-xs text-gray-600 font-medium">{modality.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
