'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

const faqCategories = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'What is AfriBiobank?',
        answer: 'AfriBiobank is Africa\'s largest federated medical imaging platform. We connect healthcare institutions across Africa to share medical imaging data securely while maintaining local data sovereignty. Our platform enables collaborative research, AI model training, and clinical decision support specifically designed for African populations.',
      },
      {
        question: 'How do I get access to AfriBiobank?',
        answer: 'Academic researchers can sign up for free access immediately. Healthcare institutions and commercial organizations should contact our team to discuss institutional partnerships. All users must complete our ethics training and agree to our data use policies before accessing datasets.',
      },
      {
        question: 'What types of medical images are available?',
        answer: 'Our repository includes X-rays, CT scans, MRIs, ultrasounds, pathology slides, and retinal images. We cover diverse disease areas including oncology, infectious diseases (TB, malaria), cardiovascular conditions, and neurological disorders. All images are de-identified and annotated by certified radiologists.',
      },
      {
        question: 'Is AfriBiobank only for African researchers?',
        answer: 'No. While we prioritize African institutions and researchers, we welcome global collaborations. Our mission is to ensure African patients benefit from AI and medical research, which often requires international partnerships. We do require that all research demonstrates clear benefit to African healthcare.',
      },
    ],
  },
  {
    category: 'Data & Privacy',
    questions: [
      {
        question: 'How is patient privacy protected?',
        answer: 'We employ military-grade encryption, blockchain-based consent tracking, and federated learning to keep data at source institutions. All images are de-identified using advanced techniques including face detection in medical images. We comply with GDPR, POPIA (South Africa), NDPR (Nigeria), and other regional data protection laws.',
      },
      {
        question: 'Who owns the data?',
        answer: 'Data ownership remains with the originating healthcare institution and ultimately with patients. AfriBiobank facilitates secure sharing and collaboration but never claims ownership. Institutions maintain full control over their data, including the ability to revoke access at any time.',
      },
      {
        question: 'Where is data stored?',
        answer: 'Data is stored in regional data centers across Africa (Lagos, Nairobi, Johannesburg, Cairo) with backup infrastructure in partner countries. Institutions can choose to keep sensitive data on-premises using our federated learning approach, where only model updates are shared, not raw data.',
      },
      {
        question: 'Can I delete my institution\'s data?',
        answer: 'Yes. Institutions have the "right to be forgotten" and can request deletion of their contributed data at any time. We provide audit trails showing exactly where your data has been used and who has accessed it.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'What file formats are supported?',
        answer: 'We support DICOM, NIfTI, JPEG, PNG, and TIFF formats. Our platform automatically converts images to standardized formats and performs quality checks. We also support HL7 FHIR for clinical metadata and provide tools to convert from proprietary formats.',
      },
      {
        question: 'How do I integrate AfriBiobank with my existing PACS system?',
        answer: 'We provide DICOM nodes, REST APIs, and direct integrations with major PACS vendors. Our technical team offers free integration support for institutional partners. Most integrations are completed within 2-4 weeks.',
      },
      {
        question: 'What computational resources are available?',
        answer: 'Free tier users get 100 GPU hours/month on NVIDIA A100s. Professional tier includes 500 hours, and Enterprise tier has unlimited access. We also provide Jupyter notebook environments, containerized workflows, and support for popular frameworks (PyTorch, TensorFlow, MONAI).',
      },
      {
        question: 'Can I train AI models on the platform?',
        answer: 'Yes. We provide MLOps infrastructure including experiment tracking (MLflow), model registries, and deployment pipelines. You can train locally and deploy to our platform, or use our federated learning framework to train across multiple institutions without moving data.',
      },
    ],
  },
  {
    category: 'Collaboration & Research',
    questions: [
      {
        question: 'How does federated learning work?',
        answer: 'In federated learning, AI models are trained locally at each institution using their own data. Only model updates (weights) are shared centrally and aggregated. This means raw patient data never leaves the hospital, addressing privacy concerns while enabling collaborative model training across multiple sites.',
      },
      {
        question: 'What are the publication requirements?',
        answer: 'Academic users must cite AfriBiobank and acknowledge contributing institutions in publications. We provide suggested citation formats. Commercial users have different licensing terms. All publications must be shared with us for impact tracking.',
      },
      {
        question: 'Can I collaborate with other researchers on the platform?',
        answer: 'Absolutely. We provide collaboration workspaces, shared notebooks, and discussion forums. You can invite colleagues to joint projects, share annotations, and co-author studies. Our platform facilitates both within-Africa and international research partnerships.',
      },
      {
        question: 'Do you offer research grants or funding?',
        answer: 'We partner with funding organizations and occasionally offer competitive grants for high-impact research. We also help connect researchers with funding opportunities from partners like the Gates Foundation, Wellcome Trust, and African Development Bank.',
      },
    ],
  },
  {
    category: 'Commercial Use',
    questions: [
      {
        question: 'Can pharmaceutical companies use AfriBiobank for drug trials?',
        answer: 'Yes. We support clinical trial recruitment, biomarker discovery, and real-world evidence generation. Commercial licensing includes rights to use data for regulatory submissions. We facilitate connections between pharma companies and African clinical sites.',
      },
      {
        question: 'What are the licensing terms for commercial AI development?',
        answer: 'Enterprise tier includes commercial licensing rights. We offer both exclusive and non-exclusive licenses depending on use case. Revenue sharing with contributing institutions is built into all commercial agreements, ensuring African institutions benefit financially.',
      },
      {
        question: 'Can I use AfriBiobank data to train proprietary models?',
        answer: 'Yes, with appropriate licensing. Enterprise and Custom tiers include commercial model development rights. We require that models demonstrate equivalent performance on African populations and that some benefit flows back to African healthcare (e.g., discounted access, capacity building).',
      },
      {
        question: 'How does revenue sharing work?',
        answer: 'When commercial entities use data from institutional partners, we share revenue based on data contribution volume, quality, and utility. Typical splits are 40% to contributing institutions, 40% to AfriBiobank operations, and 20% to a research fund for African healthcare innovation.',
      },
    ],
  },
  {
    category: 'Support & Training',
    questions: [
      {
        question: 'What support is available?',
        answer: 'Free tier users access community forums and documentation. Professional tier includes email/phone support with 24-hour response times. Enterprise tier gets 24/7 support with dedicated account managers. All tiers include comprehensive documentation and video tutorials.',
      },
      {
        question: 'Do you provide training?',
        answer: 'Yes. We offer free online courses in medical imaging AI, federated learning, and ethical data use. Institutional partners receive quarterly on-site training sessions. We also host annual workshops and hackathons across Africa.',
      },
      {
        question: 'What if I have a custom requirement?',
        answer: 'Contact our Custom Solutions team. We\'ve built bespoke solutions for governments (disease surveillance dashboards), pharmaceutical companies (trial optimization), and AI companies (model validation services). If it involves African medical data, we can probably help.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

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
            <HelpCircle className="mx-auto text-primary-600 mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about AfriBiobank
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mr-3" />
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary-200 transition-all duration-300 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          size={24}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No questions found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
            <p className="text-xl mb-6">Our team is here to help you get started with AfriBiobank</p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Contact Support
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
