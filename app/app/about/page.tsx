'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';
import { Target, Eye, Heart, Shield, Users, Lightbulb, TrendingUp, Network, Building2, Brain } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const [activeDiagram, setActiveDiagram] = useState(0);

  const values = [
    { icon: Target, title: 'Equity & Inclusion', desc: 'Healthcare AI should work for everyone, everywhere.' },
    { icon: Shield, title: 'Privacy & Sovereignty', desc: 'Data belongs to institutions and communities that generate it.' },
    { icon: Users, title: 'Collaboration', desc: 'Progress requires working together across borders.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'We embrace cutting-edge technology and open science.' },
    { icon: Heart, title: 'Ethical Leadership', desc: 'Transparent governance with community oversight.' },
    { icon: TrendingUp, title: 'Capacity Building', desc: 'Building capabilities, not dependencies.' },
  ];

  const diagrams = [
    {
      id: 0,
      title: 'AfriBiobank System Architecture',
      description: 'Comprehensive overview of the AfriBiobank platform architecture, showing the integration of data storage, processing, and AI/ML components.',
      icon: Network,
      image: '/diagrams/Afribiobank_system.svg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 1,
      title: 'Stakeholder Ecosystem',
      description: 'Multi-stakeholder collaboration model connecting hospitals, researchers, governments, and patients across Africa.',
      icon: Building2,
      image: '/diagrams/stakeholder_AfriBiobank.svg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Federated Learning Framework',
      description: 'Privacy-preserving federated learning infrastructure enabling collaborative AI training without sharing raw patient data.',
      icon: Brain,
      image: '/diagrams/Afribiobank_Fedrated_Learning.svg',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building the Future of<br />African Healthcare
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Where African medical data powers global innovation and equitable healthcare outcomes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem to Solution Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4 font-semibold">The Problem</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Fails African Patients</h2>
              <p className="text-lg text-gray-600 mb-4">
                Meet Shade—a brilliant high school student in Lagos whose brain tumor was misdiagnosed by AI trained on European and North American data.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Across Africa, medical decisions are being made by systems that don't understand our unique genetics, disease profiles, or healthcare contexts.
              </p>
              <div className="space-y-3 mt-6">
                {['1.4B people barely represented in global health databases', 'Data locked in hospital silos', 'AI bias leads to misdiagnosis', 'Privacy concerns block collaboration'].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4 font-semibold">Our Solution</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AfriBiobank Changes Everything</h2>
              <p className="text-lg text-gray-600 mb-4">
                A collaborative platform connecting hospitals, researchers, and AI developers across Africa through revolutionary federated learning technology.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Institutions train AI together while keeping patient data secure and local—no more choosing between collaboration and privacy.
              </p>
              <div className="space-y-3 mt-6">
                {['Privacy-preserving federated learning', 'FAIR-compliant data repository', '50+ pre-trained AI models', 'Built-in ethics & compliance'].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-primary-200 shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 text-white">
                  <Eye size={48} className="mb-4" />
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                </div>
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A future where every diagnostic AI system understands African patients as well as any other population—where data drives equitable healthcare outcomes across the continent.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-2 border-secondary-200 shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 p-8 text-white">
                  <Target size={48} className="mb-4" />
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                </div>
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To democratize access to African medical imaging data while preserving privacy and data sovereignty, enabling researchers and AI developers to build solutions that work for African populations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principles that guide everything we do at AfriBiobank
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-primary-200 rounded-2xl">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4 shadow-lg">
                      <value.icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                    <p className="text-gray-600">{value.desc}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Diagrams */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the technical infrastructure powering Africa's healthcare data revolution
            </p>
          </motion.div>

          {/* Diagram Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {diagrams.map((diagram) => (
              <motion.button
                key={diagram.id}
                onClick={() => setActiveDiagram(diagram.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeDiagram === diagram.id
                    ? `bg-gradient-to-r ${diagram.color} text-white shadow-xl`
                    : 'bg-white text-gray-700 hover:shadow-lg border-2 border-gray-200'
                }`}
              >
                <diagram.icon size={24} />
                <span className="hidden sm:inline">{diagram.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Active Diagram Display */}
          <motion.div
            key={activeDiagram}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200"
          >
            <div className={`bg-gradient-to-r ${diagrams[activeDiagram].color} p-8 text-white`}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  {(() => {
                    const DiagramIcon = diagrams[activeDiagram].icon;
                    return <DiagramIcon size={32} />;
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">{diagrams[activeDiagram].title}</h3>
                  <p className="text-white/90 text-lg">{diagrams[activeDiagram].description}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden bg-gray-50 p-6 shadow-inner"
              >
                <Image
                  src={diagrams[activeDiagram].image}
                  alt={diagrams[activeDiagram].title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                  priority={activeDiagram === 0}
                />
              </motion.div>

              {/* Diagram Legend/Info */}
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                {activeDiagram === 0 && (
                  <>
                    <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-2">Multi-Layer Architecture</h4>
                      <p className="text-sm text-blue-700">Presentation, microservices, and data layers for scalability</p>
                    </div>
                    <div className="bg-cyan-50 rounded-xl p-4 border-2 border-cyan-200">
                      <h4 className="font-bold text-cyan-900 mb-2">DICOM & FHIR Support</h4>
                      <p className="text-sm text-cyan-700">Standards-compliant medical data processing</p>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-200">
                      <h4 className="font-bold text-indigo-900 mb-2">Cloud-Native Design</h4>
                      <p className="text-sm text-indigo-700">Kubernetes-ready containerized deployment</p>
                    </div>
                  </>
                )}
                {activeDiagram === 1 && (
                  <>
                    <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                      <h4 className="font-bold text-purple-900 mb-2">Multi-Stakeholder</h4>
                      <p className="text-sm text-purple-700">Hospitals, researchers, governments, and patients</p>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-4 border-2 border-pink-200">
                      <h4 className="font-bold text-pink-900 mb-2">Ethical Governance</h4>
                      <p className="text-sm text-pink-700">Community oversight and transparent decision-making</p>
                    </div>
                    <div className="bg-rose-50 rounded-xl p-4 border-2 border-rose-200">
                      <h4 className="font-bold text-rose-900 mb-2">Pan-African Network</h4>
                      <p className="text-sm text-rose-700">Connecting institutions across the continent</p>
                    </div>
                  </>
                )}
                {activeDiagram === 2 && (
                  <>
                    <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                      <h4 className="font-bold text-green-900 mb-2">Privacy-Preserving</h4>
                      <p className="text-sm text-green-700">Local data stays local, only models are shared</p>
                    </div>
                    <div className="bg-teal-50 rounded-xl p-4 border-2 border-teal-200">
                      <h4 className="font-bold text-teal-900 mb-2">Differential Privacy</h4>
                      <p className="text-sm text-teal-700">Mathematical guarantees for data protection</p>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-200">
                      <h4 className="font-bold text-emerald-900 mb-2">Collaborative AI</h4>
                      <p className="text-sm text-emerald-700">Train together without sharing raw data</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12">Potential Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '10M+', label: 'Medical Images (5yr goal)' },
                { num: '500+', label: 'Partner Institutions' },
                { num: '1,000+', label: 'Research Publications' },
                { num: '2.5B', label: 'Africans by 2050' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl"
                >
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">{stat.num}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border-2 border-primary-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-6">
              <p className="text-white/90 text-sm font-semibold uppercase tracking-wider text-center">
                African Proverb
              </p>
            </div>
            <div className="p-10 text-center">
              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative">
                <span className="text-primary-500 text-6xl absolute -top-4 -left-2 opacity-30">"</span>
                The strength of the crocodile lies in the water it lives in.
                <span className="text-primary-500 text-6xl absolute -bottom-8 -right-2 opacity-30">"</span>
              </blockquote>
              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <p className="text-xl text-gray-700 font-medium">
                  AfriBiobank is that water. Let's make sure Africa's health insight flows from its own data.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
