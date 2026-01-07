'use client';

import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, XCircle, Scale } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

export default function TermsPage() {
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
            <Scale className="mx-auto text-primary-600 mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Legal agreement governing use of AfriBiobank platform
            </p>
            <p className="text-sm text-gray-500">
              Effective Date: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Acceptance */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using AfriBiobank ("Platform"), you ("User," "you," "your") agree to be bound by these Terms and Conditions, our Privacy Policy, and applicable Data Use Agreements. If you do not agree, do not use the Platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms constitute a legally binding agreement between you and AfriBiobank Foundation, a nonprofit organization registered in Nigeria and operating across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* 1. Definitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="text-primary-600 mr-3" size={28} />
              1. Definitions
            </h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>"Medical Data"</strong>: De-identified medical imaging data and associated clinical metadata contributed by healthcare institutions.</p>
              <p><strong>"Contributing Institution"</strong>: Healthcare facilities that provide Medical Data to the Platform.</p>
              <p><strong>"Researcher"</strong>: Individual user accessing data for academic or commercial research.</p>
              <p><strong>"Data Controller"</strong>: Contributing Institutions that maintain legal ownership of Medical Data.</p>
              <p><strong>"Data Processor"</strong>: AfriBiobank, which processes data on behalf of Data Controllers.</p>
            </div>
          </motion.div>

          {/* 2. Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Eligibility</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Users must be 18 years or older</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Affiliated with a recognized research institution, healthcare facility, or commercial entity</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Completed mandatory ethics training (provided free on Platform)</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Possess appropriate research ethics approval for intended use</p>
              </div>
            </div>
          </motion.div>

          {/* 3. Permitted Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Permitted Use</h2>
            <p className="text-gray-700 mb-4">You may use the Platform and Medical Data for:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Academic research and publication</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">AI/ML model development (with appropriate license)</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Clinical decision support tool development</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Drug development and clinical trials</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Public health research</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Educational purposes (teaching, training)</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">All uses subject to ethical approval and applicable licensing tier.</p>
          </motion.div>

          {/* 4. Prohibited Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-2xl p-8 border-2 border-red-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="text-red-600 mr-3" size={28} />
              4. Prohibited Use
            </h2>
            <p className="text-gray-700 mb-4 font-semibold">You are expressly prohibited from:</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Attempting to re-identify patients or reverse de-identification</p>
              </div>
              <div className="flex items-start">
                <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Sharing access credentials or datasets with unauthorized parties</p>
              </div>
              <div className="flex items-start">
                <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Using data for discriminatory purposes (insurance discrimination, employment screening, predictive policing)</p>
              </div>
              <div className="flex items-start">
                <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Commercial use without appropriate licensing (Enterprise tier or Custom agreement)</p>
              </div>
              <div className="flex items-start">
                <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Bypassing access controls, rate limits, or security measures</p>
              </div>
              <div className="flex items-start">
                <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Automated scraping or bulk downloading outside API limits</p>
              </div>
              <div className="flex items-start">
                <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Training generative AI models (GANs for synthetic patient creation) without explicit approval</p>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-xl p-4 border-2 border-red-300">
              <p className="text-red-800 font-semibold">⚠️ Violation may result in immediate account termination, legal action, and notification to institutional review boards.</p>
            </div>
          </motion.div>

          {/* 5. Data Ownership & IP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Ownership & Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>5.1 Medical Data Ownership:</strong> Contributing Institutions retain ownership of contributed Medical Data. Patients retain rights under applicable data protection laws.</p>
              <p><strong>5.2 Your Research Outputs:</strong> You own AI models, research findings, and publications derived from Platform data, subject to:</p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Citation requirements (acknowledge AfriBiobank and Contributing Institutions)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Revenue sharing for commercial models (Enterprise/Custom tiers)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Open-source requirements for publicly funded research (where applicable)
                </li>
              </ul>
              <p><strong>5.3 Platform IP:</strong> AfriBiobank retains all rights to Platform software, APIs, infrastructure, and branding.</p>
            </div>
          </motion.div>

          {/* 6. Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Payment Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>6.1 Fees:</strong> Professional, Enterprise, and Custom tiers require payment as specified at afribiobank.org/pricing.</p>
              <p><strong>6.2 Billing:</strong> Monthly billing via credit card or invoice (annual prepayment eligible for 20% discount).</p>
              <p><strong>6.3 Refunds:</strong> No refunds for partial months. Institutions may cancel anytime; cancellation effective end of billing period.</p>
              <p><strong>6.4 Overages:</strong> Exceeding compute or API limits may result in additional charges or throttling. Enterprise tier has no overages.</p>
              <p><strong>6.5 Academic Exemption:</strong> Bona fide academic researchers receive free access indefinitely. Commercial use requires upgrade.</p>
            </div>
          </motion.div>

          {/* 7. Confidentiality & NDA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Confidentiality & Non-Disclosure</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>7.1 Confidential Information:</strong> Medical Data, platform architecture details, unpublished research from collaborators, and business terms are confidential.</p>
              <p><strong>7.2 Your Obligations:</strong> You agree to:</p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Protect confidential information with same care as your own sensitive data (minimum: industry-standard security)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Not disclose to third parties without written consent
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Use confidential information solely for permitted research purposes
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Return or destroy confidential information upon account termination
                </li>
              </ul>
              <p><strong>7.3 Exceptions:</strong> Confidentiality does not apply to information that is (a) publicly available, (b) independently developed, (c) rightfully received from third party, or (d) required by law to disclose.</p>
              <p><strong>7.4 Term:</strong> Confidentiality obligations survive termination of account for 5 years.</p>
            </div>
          </motion.div>

          {/* 8. Warranties & Disclaimers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Warranties & Disclaimers</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>8.1 Platform "As Is":</strong> Platform provided "as is" without warranties of any kind. We do not guarantee uninterrupted access, absence of errors, or fitness for particular purpose.</p>
              <p><strong>8.2 Data Quality:</strong> While we implement quality controls, we do not warrant accuracy, completeness, or clinical validity of Medical Data. Verify data before clinical or commercial use.</p>
              <p><strong>8.3 Not Medical Advice:</strong> Platform is for research purposes only. AI models and analyses do not constitute medical advice, diagnosis, or treatment recommendations.</p>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <strong>⚠️ CRITICAL:</strong> Do not use Platform outputs for direct patient care without independent validation by licensed healthcare professionals.
              </p>
            </div>
          </motion.div>

          {/* 9. Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>9.1 No Consequential Damages:</strong> AfriBiobank not liable for indirect, incidental, special, or consequential damages including lost profits, data loss, or research delays.</p>
              <p><strong>9.2 Liability Cap:</strong> Total liability limited to fees paid in preceding 12 months (or $100 for free tier users).</p>
              <p><strong>9.3 Exceptions:</strong> Limitations do not apply to (a) gross negligence or willful misconduct, (b) data breaches caused by our security failures, or (c) violations of data protection laws.</p>
            </div>
          </motion.div>

          {/* 10. Indemnification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless AfriBiobank, Contributing Institutions, and their affiliates from claims arising from:
            </p>
            <ul className="ml-6 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Your violation of these Terms
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Unauthorized use or disclosure of Medical Data
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Clinical harm from unapproved use of research outputs
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Intellectual property infringement claims
              </li>
            </ul>
          </motion.div>

          {/* 11. Term & Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Term & Termination</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>11.1 Term:</strong> Agreement effective upon account creation and continues until terminated.</p>
              <p><strong>11.2 Termination by You:</strong> Cancel anytime via account settings. Access ends at current billing period.</p>
              <p><strong>11.3 Termination by Us:</strong> We may suspend or terminate accounts for (a) Terms violations, (b) non-payment, (c) fraudulent activity, or (d) legal compliance.</p>
              <p><strong>11.4 Effect of Termination:</strong> Upon termination, you must cease using Platform, delete downloaded data (unless published research), and return confidential information. Sections on confidentiality, IP, disclaimers, and liability survive termination.</p>
            </div>
          </motion.div>

          {/* 12. Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Governing Law & Disputes</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>12.1 Governing Law:</strong> These Terms governed by laws of Nigeria and applicable regional African laws (ECOWAS, AU conventions).</p>
              <p><strong>12.2 Dispute Resolution:</strong> Disputes resolved through:</p>
              <ol className="ml-6 space-y-2 list-decimal">
                <li>Good faith negotiation (30 days)</li>
                <li>Mediation via African Arbitration Association (60 days)</li>
                <li>Binding arbitration in Lagos, Nigeria (English language, 1 arbitrator)</li>
              </ol>
              <p><strong>12.3 Class Action Waiver:</strong> Disputes resolved individually, not as class actions.</p>
            </div>
          </motion.div>

          {/* 13. Miscellaneous */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Miscellaneous</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Entire Agreement:</strong> These Terms, Privacy Policy, and Data Use Agreements constitute entire agreement.</p>
              <p><strong>Amendments:</strong> We may update Terms with 30 days' notice. Continued use constitutes acceptance.</p>
              <p><strong>Severability:</strong> Invalid provisions severed; remainder remains in effect.</p>
              <p><strong>No Waiver:</strong> Failure to enforce does not waive future enforcement.</p>
              <p><strong>Assignment:</strong> You may not assign without consent. We may assign to successors or affiliates.</p>
              <p><strong>Force Majeure:</strong> Not liable for failures beyond reasonable control (natural disasters, pandemics, internet outages, government actions).</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Contact */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Questions About These Terms?</h3>
            <p className="text-xl mb-6">Contact our legal team for clarification</p>
            <div className="text-lg">
              <p className="mb-2">legal@afribiobank.org</p>
              <p className="text-sm opacity-90">AfriBiobank Foundation, Lagos, Nigeria</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
