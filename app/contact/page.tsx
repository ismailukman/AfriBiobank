'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle, Building2, HelpCircle, Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

const offices = [
  {
    city: 'Lagos',
    country: 'Nigeria',
    flag: '🇳🇬',
    address: '1004 Victoria Island, Lagos, Nigeria',
    phone: '+234 1 234 5678',
    email: 'lagos@afribiobank.org',
    type: 'Headquarters',
  },
  {
    city: 'Nairobi',
    country: 'Kenya',
    flag: '🇰🇪',
    address: 'Upperhill, Nairobi, Kenya',
    phone: '+254 20 123 4567',
    email: 'nairobi@afribiobank.org',
    type: 'East Africa Hub',
  },
  {
    city: 'Johannesburg',
    country: 'South Africa',
    flag: '🇿🇦',
    address: 'Sandton, Johannesburg, South Africa',
    phone: '+27 11 123 4567',
    email: 'joburg@afribiobank.org',
    type: 'Southern Africa Hub',
  },
  {
    city: 'Accra',
    country: 'Ghana',
    flag: '🇬🇭',
    address: 'Airport City, Accra, Ghana',
    phone: '+233 30 123 4567',
    email: 'accra@afribiobank.org',
    type: 'West Africa Hub',
  },
];

const contactReasons = [
  {
    icon: Building2,
    title: 'Institutional Partnership',
    description: 'Hospitals and research institutions interested in joining the network',
    email: 'partnerships@afribiobank.org',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'Commercial Inquiries',
    description: 'Pharmaceutical, AI companies, and enterprise licensing',
    email: 'enterprise@afribiobank.org',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: HelpCircle,
    title: 'Technical Support',
    description: 'Platform usage, API integration, and troubleshooting',
    email: 'support@afribiobank.org',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MessageCircle,
    title: 'Media & Press',
    description: 'Journalists, media inquiries, and speaking opportunities',
    email: 'press@afribiobank.org',
    color: 'from-orange-500 to-red-500',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Mail className="mx-auto text-primary-600 mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to our team across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What can we help you with?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-primary-200 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${reason.color} shadow-lg flex-shrink-0`}>
                        <reason.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{reason.title}</CardTitle>
                        <CardDescription className="text-sm mb-3">
                          {reason.description}
                        </CardDescription>
                        <a
                          href={`mailto:${reason.email}`}
                          className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center"
                        >
                          <Mail size={16} className="mr-2" />
                          {reason.email}
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                  placeholder="john.doe@institution.edu"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Institution / Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                  placeholder="University of Lagos"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Inquiry Type *
                </label>
                <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none">
                  <option>Select an option</option>
                  <option>Institutional Partnership</option>
                  <option>Commercial Inquiry</option>
                  <option>Technical Support</option>
                  <option>Media & Press</option>
                  <option>Academic Research</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-2"
                  id="consent"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to AfriBiobank's <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a> and consent to being contacted about my inquiry.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg"
              >
                Send Message
              </button>

              <p className="text-xs text-center text-gray-500">
                We typically respond within 24-48 hours during business days
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <MapPin className="mx-auto text-primary-600 mb-4" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600">Visit us at any of our locations across Africa</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 rounded-2xl hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="text-4xl mb-3">{office.flag}</div>
                    <CardTitle className="text-xl">{office.city}</CardTitle>
                    <CardDescription className="text-sm font-semibold text-primary-600">
                      {office.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start text-sm text-gray-600">
                      <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone size={16} className="mr-2 flex-shrink-0 text-gray-400" />
                      <a href={`tel:${office.phone}`} className="hover:text-primary-600">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail size={16} className="mr-2 flex-shrink-0 text-gray-400" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary-600">
                        {office.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Community */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <MessageCircle className="mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with researchers, developers, and healthcare professionals across Africa
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Slack Community
              </button>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                GitHub
              </button>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Twitter
              </button>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                LinkedIn
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
