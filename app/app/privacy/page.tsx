'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

const sections = [
  {
    icon: Shield,
    title: 'Data Protection Principles',
    color: 'from-blue-500 to-cyan-500',
    content: [
      {
        heading: 'Our Commitment',
        text: 'AfriBiobank is committed to protecting the privacy and security of medical data. We adhere to the highest international standards for data protection including GDPR (EU), POPIA (South Africa), NDPR (Nigeria), and other regional African data protection laws.',
      },
      {
        heading: 'Data Minimization',
        text: 'We collect only the minimum data necessary for platform operation and research purposes. All medical images are de-identified before sharing, with advanced techniques including facial detection in medical scans.',
      },
      {
        heading: 'Purpose Limitation',
        text: 'Data is used exclusively for stated research purposes. Any change in data usage requires explicit consent from data controllers (healthcare institutions) and, where applicable, from patients.',
      },
    ],
  },
  {
    icon: Database,
    title: 'What Data We Collect',
    color: 'from-green-500 to-emerald-500',
    content: [
      {
        heading: 'Medical Imaging Data',
        text: 'De-identified medical images (X-rays, CT, MRI, ultrasound, pathology slides) with associated clinical metadata. All personally identifiable information (PII) is removed using automated and manual review processes.',
      },
      {
        heading: 'User Account Information',
        text: 'Name, email, institutional affiliation, research credentials, and access permissions. This information is necessary for authentication, authorization, and audit purposes.',
      },
      {
        heading: 'Usage Analytics',
        text: 'Technical data including API calls, dataset downloads, compute usage, and platform interactions. This helps us improve services and detect unauthorized usage.',
      },
      {
        heading: 'Research Metadata',
        text: 'Project descriptions, collaboration networks, publication citations, and model training logs. This supports transparency and reproducibility in African medical research.',
      },
    ],
  },
  {
    icon: Lock,
    title: 'How We Protect Your Data',
    color: 'from-purple-500 to-pink-500',
    content: [
      {
        heading: 'Encryption',
        text: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Encryption keys are managed using hardware security modules (HSMs) in African data centers.',
      },
      {
        heading: 'Access Controls',
        text: 'Role-based access control (RBAC), multi-factor authentication (MFA), and just-in-time access for privileged operations. All access is logged and auditable.',
      },
      {
        heading: 'Federated Architecture',
        text: 'Sensitive data can remain at source institutions using federated learning. Only model updates (not raw data) are shared centrally, preserving data sovereignty.',
      },
      {
        heading: 'Regular Audits',
        text: 'Third-party security audits, penetration testing, and compliance assessments conducted quarterly. Vulnerability management with 24-hour SLA for critical issues.',
      },
    ],
  },
  {
    icon: Eye,
    title: 'Your Rights',
    color: 'from-orange-500 to-red-500',
    content: [
      {
        heading: 'Right to Access',
        text: 'You can request access to all data associated with your account, including usage logs and contributed datasets. We provide machine-readable exports within 30 days.',
      },
      {
        heading: 'Right to Erasure ("Right to be Forgotten")',
        text: 'Institutions can request deletion of their contributed data. We provide detailed reports of where data has been used before deletion. Note: data used in published research may persist in public repositories.',
      },
      {
        heading: 'Right to Rectification',
        text: 'You can correct inaccurate metadata or annotations. Major corrections trigger notifications to researchers who have used the affected datasets.',
      },
      {
        heading: 'Right to Data Portability',
        text: 'Export your data in standard formats (DICOM, NIfTI, CSV) at any time. No vendor lock-in.',
      },
      {
        heading: 'Right to Object',
        text: 'You can object to specific data processing activities, including automated decision-making and profiling. We honor these requests within legal constraints.',
      },
    ],
  },
  {
    icon: Users,
    title: 'Data Sharing & Third Parties',
    color: 'from-indigo-500 to-blue-500',
    content: [
      {
        heading: 'Research Collaborators',
        text: 'Data is shared with approved researchers subject to data use agreements. All recipients undergo ethics training and agree to citation requirements.',
      },
      {
        heading: 'Commercial Partners',
        text: 'Commercial access requires explicit consent from contributing institutions and revenue-sharing agreements. We maintain a public registry of commercial data usage.',
      },
      {
        heading: 'Service Providers',
        text: 'We use trusted cloud providers (AWS, Azure, Google Cloud) for infrastructure, all with data processing agreements and African hosting options. Providers cannot access medical data without explicit authorization.',
      },
      {
        heading: 'Legal Requirements',
        text: 'We may disclose data to comply with valid legal requests (court orders, regulatory investigations). We challenge overly broad requests and notify affected parties when legally permitted.',
      },
      {
        heading: 'No Sale of Data',
        text: 'We never sell personal data or medical imaging data. Revenue sharing with institutions is based on collaborative use, not data sales.',
      },
    ],
  },
  {
    icon: FileText,
    title: 'Cookies & Tracking',
    color: 'from-pink-500 to-red-500',
    content: [
      {
        heading: 'Essential Cookies',
        text: 'Session management, authentication tokens, and security features. These cannot be disabled without breaking platform functionality.',
      },
      {
        heading: 'Analytics Cookies',
        text: 'We use privacy-respecting analytics (not Google Analytics) to understand platform usage. These are optional and can be disabled in your account settings.',
      },
      {
        heading: 'No Third-Party Tracking',
        text: 'We do not use advertising trackers, social media pixels, or other third-party tracking technologies. Your research activity is private.',
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Shield className="mx-auto text-primary-600 mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              How we protect and handle your data
            </p>
            <p className="text-sm text-gray-500">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AfriBiobank ("we," "us," "our") operates a federated medical imaging platform connecting African healthcare institutions. This Privacy Policy explains how we collect, use, protect, and share data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Key Principle:</strong> Medical data remains under the control of originating institutions. Patients maintain rights over their data even after contribution to research. We are stewards, not owners, of African medical data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} shadow-lg mr-4`}>
                  <section.icon className="text-white" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>

              <div className="space-y-6 pl-16">
                {section.content.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-primary-100 transition-all">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.heading}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* International Transfers */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We prioritize African data sovereignty. Primary data storage is in African data centers (Nigeria, Kenya, South Africa, Egypt). Data may be transferred outside Africa only:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-700 flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                With explicit institutional consent
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                For collaboration with international research partners
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Using Standard Contractual Clauses (SCCs) or equivalent protections
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                With data processing agreements ensuring equivalent protection
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pediatric Data</h2>
            <p className="text-gray-700 leading-relaxed">
              Medical images from patients under 18 require additional protections. We obtain parental/guardian consent (documented in institutional records), apply stricter de-identification (face blurring, dental charts redaction), and limit usage to ethically approved pediatric research. Pediatric data is flagged in our systems and subject to extra access controls.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <div className="space-y-3">
              <p className="text-gray-700 flex justify-between">
                <span><strong>Medical Images:</strong></span>
                <span className="text-gray-600">Retained indefinitely for research continuity (unless deletion requested)</span>
              </p>
              <p className="text-gray-700 flex justify-between">
                <span><strong>User Accounts:</strong></span>
                <span className="text-gray-600">Active + 3 years after last activity</span>
              </p>
              <p className="text-gray-700 flex justify-between">
                <span><strong>Access Logs:</strong></span>
                <span className="text-gray-600">7 years (regulatory requirement)</span>
              </p>
              <p className="text-gray-700 flex justify-between">
                <span><strong>Usage Analytics:</strong></span>
                <span className="text-gray-600">2 years</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Changes */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">For privacy-related inquiries:</p>
              <p className="text-gray-700"><strong>Data Protection Officer:</strong></p>
              <p className="text-gray-600">privacy@afribiobank.org</p>
              <p className="text-gray-600 mt-2">AfriBiobank Foundation</p>
              <p className="text-gray-600">Lagos, Nigeria</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Changes</h2>
              <p className="text-gray-700 mb-4">
                We may update this policy as regulations evolve. Material changes will be announced via:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Email to registered users
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Platform notifications
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  30-day notice period
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
