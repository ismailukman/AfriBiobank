'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Cloud, Cpu, Database, FlaskConical, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Total Images', value: '1.24M', trend: '+8.2% YoY' },
  { label: 'Studies', value: '282K', trend: '+5.4% YoY' },
  { label: 'Partner Institutions', value: '450+', trend: '+22 this quarter' },
  { label: 'Countries', value: '35', trend: '+4 new' },
  { label: 'Modalities', value: '12', trend: 'multi-site' },
  { label: 'Disease Groups', value: '180+', trend: 'curated' },
];

const modalities = [
  { label: 'CT', value: 32 },
  { label: 'MRI', value: 24 },
  { label: 'X-Ray', value: 22 },
  { label: 'Ultrasound', value: 14 },
  { label: 'PET', value: 5 },
  { label: 'Pathology', value: 3 },
];

const genders = [
  { label: 'Female', value: 54 },
  { label: 'Male', value: 45 },
  { label: 'Other/Unknown', value: 1 },
];

const ageGroups = [
  { label: '0-17', value: 18 },
  { label: '18-35', value: 28 },
  { label: '36-55', value: 30 },
  { label: '56-75', value: 19 },
  { label: '76+', value: 5 },
];

const countries = [
  { label: 'Nigeria', value: '210K' },
  { label: 'South Africa', value: '185K' },
  { label: 'Kenya', value: '142K' },
  { label: 'Egypt', value: '118K' },
  { label: 'Ghana', value: '96K' },
  { label: 'Rwanda', value: '74K' },
];

const diseaseGroups = [
  'Tuberculosis',
  'Stroke',
  'Oncology',
  'Cardiometabolic',
  'Maternal & Neonatal',
  'Respiratory',
  'Neurodegenerative',
  'Infectious Disease',
];

const toolkit = [
  {
    title: 'Preprocessing Pipeline',
    description: 'Automated de-identification, normalization, and harmonization with reproducible versions.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Control',
    description: 'Artifact detection, missing slice checks, and modality-specific validation rules.',
    icon: SlidersHorizontal,
  },
  {
    title: 'AI-Ready Outputs',
    description: 'Segmentation, cohort labeling, and feature extraction with explainability hooks.',
    icon: Cpu,
  },
  {
    title: 'Cloud Node Toolkit',
    description: 'Federated training nodes, secure inference, and audit-ready governance.',
    icon: Cloud,
  },
];

const labs = [
  {
    title: 'University Hospitals',
    description: 'Academic medical centers contributing longitudinal cohorts and rare disease cases.',
  },
  {
    title: 'Medical Laboratories',
    description: 'High-throughput diagnostic labs validating imaging biomarkers and quality metrics.',
  },
  {
    title: 'Research Institutes',
    description: 'Collaborative research hubs accelerating AI evaluation and translation.',
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

function AnimatedNumber({ value, duration = 1400 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
  const suffix = value.replace(/[\d.]/g, '');

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(progress * numericValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericValue, duration]);

  const formatted = suffix.includes('M')
    ? count.toFixed(2)
    : suffix.includes('K')
      ? count.toFixed(0)
      : count.toFixed(0);

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-primary-300 blur-3xl" />
          <div className="absolute top-20 right-12 h-72 w-72 rounded-full bg-secondary-300 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <Link href="/" className="hover:text-primary-600 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-primary-600">Explore Data</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-slate-900">
              African Medical Imagery Dashboard
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              A live view of AfriBiobank’s medical imaging footprint, with modality distributions,
              demographics, disease groups, and cloud-ready preprocessing tools.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Request Dataset Access
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/docs">Read API Docs</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardMotion}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)' }}
                className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 transition-shadow"
              >
                <p className="text-sm text-slate-500">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  <AnimatedNumber value={stat.value} />
                </p>
                <p className="mt-2 text-xs font-semibold text-secondary-600">{stat.trend}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-primary-600" />
              <h2 className="text-xl font-semibold text-slate-900">Data Modality Mix</h2>
            </div>
            <div className="space-y-4">
              {modalities.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <FlaskConical className="text-secondary-600" />
              <h2 className="text-xl font-semibold text-slate-900">Population Characteristics</h2>
            </div>
            <div className="grid gap-6">
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">Gender</p>
                <div className="grid grid-cols-3 gap-3">
                  {genders.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ scale: 1.04 }}
                      className="rounded-xl bg-slate-50 p-3 text-center"
                    >
                      <p className="text-lg font-bold text-slate-900">
                        <AnimatedNumber value={`${item.value}%`} duration={900} />
                      </p>
                      <p className="text-xs text-slate-500">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">Age Groups</p>
                <div className="grid grid-cols-5 gap-2">
                  {ageGroups.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ scale: 1.04 }}
                      className="rounded-xl bg-slate-50 p-3 text-center"
                    >
                      <p className="text-base font-bold text-slate-900">
                        <AnimatedNumber value={`${item.value}%`} duration={900} />
                      </p>
                      <p className="text-[11px] text-slate-500">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Top Contributing Countries</h2>
            <div className="space-y-3">
              {countries.map((country, index) => (
                <motion.div
                  key={country.label}
                  whileHover={{ x: 6 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-700">{country.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{country.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Disease Group Coverage</h2>
            <div className="flex flex-wrap gap-2">
              {diseaseGroups.map((group) => (
                <motion.span
                  key={group}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600"
                >
                  {group}
                </motion.span>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 p-4 text-sm text-slate-600">
              Labeling coverage includes cohort stratification by disease stage, imaging protocol,
              and clinical outcomes.
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="flex items-center gap-3 mb-8">
              <Cloud className="text-primary-600" />
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  AfriBiobank Cloud Node Toolkit
                </h2>
                <p className="text-sm text-slate-500">
                  Preprocessing and analysis workflows built for secure, compliant collaboration.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {toolkit.map((item, index) => (
                <motion.div
                  key={item.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardMotion}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <item.icon className="text-secondary-600" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-white border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Preprocessing Stack</p>
                <p className="mt-2">DICOM cleanup, bias correction, resampling, harmonization.</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Analysis Suite</p>
                <p className="mt-2">Cohort builder, outcome explorer, automated reports.</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Secure Collaboration</p>
                <p className="mt-2">Federated learning, access controls, audit trails.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {labs.map((lab, index) => (
              <motion.div
                key={lab.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardMotion}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{lab.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{lab.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Ready to explore Africa’s imaging data?</h2>
              <p className="mt-2 text-sm text-white/80">
                Get access to curated cohorts, secure compute, and collaborative tooling.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Talk to the AfriBiobank team
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
