'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Award, FileCheck, Lock, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

const complianceStandards = [
  {
    icon: Globe,
    title: 'International Standards',
    color: 'from-blue-500 to-cyan-500',
    standards: [
      {
        name: 'GDPR (EU)',
        description: 'General Data Protection Regulation',
        status: 'Fully Compliant',
        details: 'Data processing agreements, consent management, right to erasure, data portability',
      },
      {
        name: 'HIPAA (US)',
        description: 'Health Insurance Portability and Accountability Act',
        status: 'Compliant Architecture',
        details: 'Business Associate Agreements available, encrypted storage and transmission, audit logging',
      },
      {
        name: 'ISO 27001',
        description: 'Information Security Management',
        status: 'Certified 2024',
        details: 'Annual audits, risk management framework, incident response procedures',
      },
      {
        name: 'ISO 27701',
        description: 'Privacy Information Management',
        status: 'Certified 2024',
        details: 'Privacy by design, data minimization, purpose limitation',
      },
    ],
  },
  {
    icon: Users,
    title: 'African Regulations',
    color: 'from-green-500 to-emerald-500',
    standards: [
      {
        name: 'POPIA (South Africa)',
        description: 'Protection of Personal Information Act',
        status: 'Fully Compliant',
        details: 'Information Officer appointed, lawful processing basis, security safeguards',
      },
      {
        name: 'NDPR (Nigeria)',
        description: 'Nigeria Data Protection Regulation',
        status: 'Fully Compliant',
        details: 'NITDA registration, data audits, breach notification protocols',
      },
      {
        name: 'DPA (Kenya)',
        description: 'Data Protection Act 2019',
        status: 'Fully Compliant',
        details: 'Data Protection Officer, registration with ODPC, consent mechanisms',
      },
      {
        name: 'AU Convention',
        description: 'Malabo Convention on Cyber Security',
        status: 'Aligned',
        details: 'Pan-African data protection principles, cross-border transfer safeguards',
      },
    ],
  },
  {
    icon: FileCheck,
    title: 'Healthcare Standards',
    color: 'from-purple-500 to-pink-500',
    standards: [
      {
        name: 'DICOM',
        description: 'Digital Imaging Communications in Medicine',
        status: 'Fully Supported',
        details: 'Standard medical imaging formats, metadata preservation, viewer compatibility',
      },
      {
        name: 'HL7 FHIR',
        description: 'Fast Healthcare Interoperability Resources',
        status: 'Implemented',
        details: 'RESTful APIs, clinical data exchange, EHR integration',
      },
      {
        name: 'ICD-10/11',
        description: 'International Classification of Diseases',
        status: 'Standardized',
        details: 'Disease coding, diagnosis mapping, research categorization',
      },
      {
        name: 'SNOMED CT',
        description: 'Clinical Terminology',
        status: 'Integrated',
        details: 'Standardized medical terms, semantic interoperability',
      },
    ],
  },
  {
    icon: Lock,
    title: 'Security Certifications',
    color: 'from-orange-500 to-red-500',
    standards: [
      {
        name: 'SOC 2 Type II',
        description: 'Service Organization Control',
        status: 'Audited 2024',
        details: 'Security, availability, confidentiality, privacy, processing integrity',
      },
      {
        name: 'CSA STAR',
        description: 'Cloud Security Alliance',
        status: 'Level 2',
        details: 'Cloud security controls, transparency, continuous monitoring',
      },
      {
        name: 'PCI DSS',
        description: 'Payment Card Industry Data Security',
        status: 'Level 1',
        details: 'Secure payment processing for institutional subscriptions',
      },
    ],
  },
];

const certifications = [
  {
    title: 'Data De-identification',
    items: [
      'HIPAA Safe Harbor Method',
      'Expert Determination Process',
      'k-anonymity (k≥5) for metadata',
      'Differential privacy for aggregates',
    ],
  },
  {
    title: 'Ethical Oversight',
    items: [
      'International Ethics Committee',
      'Institutional Review Board (IRB) partnerships',
      'Community Advisory Boards in 12 countries',
      'Annual ethics training for all users',
    ],
  },
  {
    title: 'Audit & Transparency',
    items: [
      'Public audit logs (non-sensitive)',
      'Annual transparency reports',
      'Third-party security audits (quarterly)',
      'Open-source de-identification tools',
    ],
  },
];

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <ShieldCheck className="mx-auto mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Compliance & Certifications</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Meeting the highest global standards for data protection, security, and healthcare compliance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl">
                <span className="font-semibold">15+</span> International Certifications
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl">
                <span className="font-semibold">20+</span> African Regulations
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl">
                <span className="font-semibold">100%</span> Audit Pass Rate
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 border-l-4 border-primary-600 p-8 rounded-r-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AfriBiobank operates at the intersection of healthcare, technology, and data privacy—three highly regulated domains. We maintain rigorous compliance with international standards while respecting African data sovereignty principles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This page documents our compliance posture. For specific attestations or audit reports, contact compliance@afribiobank.org.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Standards & Regulations</h2>

          <div className="space-y-16">
            {complianceStandards.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg mr-4`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.standards.map((standard, index) => (
                    <motion.div
                      key={standard.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="h-full border-2 hover:border-primary-200 transition-all rounded-2xl">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <CardTitle className="text-xl mb-1">{standard.name}</CardTitle>
                              <p className="text-sm text-gray-600">{standard.description}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${
                              standard.status.includes('Fully') || standard.status.includes('Certified')
                                ? 'bg-green-100 text-green-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {standard.status}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{standard.details}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Award className="mx-auto text-primary-600 mb-4" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Compliance Measures</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cert.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <ShieldCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Timeline */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Continuous Compliance</h2>
            <p className="text-xl text-gray-600">Regular audits and certifications</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">Daily</div>
              <p className="text-gray-600">Automated security scans</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">Monthly</div>
              <p className="text-gray-600">Vulnerability assessments</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">Quarterly</div>
              <p className="text-gray-600">Penetration testing & audits</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 text-center"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">Annually</div>
              <p className="text-gray-600">Full compliance recertification</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document Request */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <FileCheck className="mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">Request Compliance Documentation</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Need specific audit reports, certifications, or attestations for your procurement process?
            </p>
            <div className="space-y-4">
              <p className="text-lg">Available documents:</p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="bg-white/20 px-4 py-2 rounded-lg">SOC 2 Type II Report</span>
                <span className="bg-white/20 px-4 py-2 rounded-lg">ISO 27001 Certificate</span>
                <span className="bg-white/20 px-4 py-2 rounded-lg">Penetration Test Results</span>
                <span className="bg-white/20 px-4 py-2 rounded-lg">Data Processing Agreements</span>
                <span className="bg-white/20 px-4 py-2 rounded-lg">Business Associate Agreements</span>
              </div>
              <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Request Documents
              </button>
              <p className="text-sm opacity-90 mt-4">compliance@afribiobank.org</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
