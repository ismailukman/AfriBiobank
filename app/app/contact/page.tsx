'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle, Building2, HelpCircle, Briefcase, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  inquiryType: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
  consent?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    inquiryType: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const notificationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const showNotification = (status: 'success' | 'error', message: string) => {
    setSubmitStatus(status);
    setSubmitMessage(message);
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }
    notificationTimeoutRef.current = setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate inquiry type
    if (!formData.inquiryType || formData.inquiryType === 'Select an option') {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    // Validate consent
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    try {
      const submissionTimeout = new Promise((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error('Request timed out')), 15000);
      });

      // Add document to Firestore
      const contactsRef = collection(db, 'contacts');
      await Promise.race([
        addDoc(contactsRef, {
          ...formData,
          submittedAt: serverTimestamp(),
          status: 'new',
        }),
        submissionTimeout,
      ]);

      showNotification('success', 'Thank you for contacting us! We\'ll get back to you within 24-48 hours.');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        institution: '',
        inquiryType: '',
        message: '',
        consent: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage =
        error instanceof Error && error.message === 'Request timed out'
          ? 'Request timed out. Please check your connection and try again.'
          : 'Something went wrong. Please try again or email us directly.';
      showNotification('error', errorMessage);
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-900 dark:text-slate-300 max-w-3xl mx-auto">
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What can we help you with?</h2>
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
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-primary-200 dark:border-slate-700 dark:bg-slate-900/80 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${reason.color} shadow-lg flex-shrink-0`}>
                        <reason.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-gray-900 dark:text-white">{reason.title}</CardTitle>
                        <CardDescription className="text-sm mb-3 text-gray-600 dark:text-slate-300">
                          {reason.description}
                        </CardDescription>
                        <a
                          href={`mailto:${reason.email}`}
                          className="text-primary-600 dark:text-primary-300 hover:text-primary-700 font-semibold text-sm flex items-center"
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
            className="bg-white dark:bg-slate-900/80 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Send us a message</h3>

            {/* Notification Toast */}
            <AnimatePresence>
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`fixed top-24 left-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm rounded-xl border-2 px-4 py-3 shadow-xl sm:left-auto sm:right-6 sm:w-auto ${
                    submitStatus === 'success'
                      ? 'border-green-200 bg-green-50 text-green-800'
                      : 'border-red-200 bg-red-50 text-red-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submitStatus === 'success' ? (
                      <CheckCircle className="text-green-600 flex-shrink-0" size={22} />
                    ) : (
                      <AlertCircle className="text-red-600 flex-shrink-0" size={22} />
                    )}
                    <p className="text-sm leading-snug">{submitMessage}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'
                    } focus:border-primary-500 focus:outline-none transition-colors dark:bg-slate-950 dark:text-white`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'
                    } focus:border-primary-500 focus:outline-none transition-colors dark:bg-slate-950 dark:text-white`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'
                  } focus:border-primary-500 focus:outline-none transition-colors dark:bg-slate-950 dark:text-white`}
                  placeholder="john.doe@institution.edu"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                  Institution / Organization
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-700 focus:border-primary-500 focus:outline-none transition-colors dark:bg-slate-950 dark:text-white"
                  placeholder="University of Lagos"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                  Inquiry Type *
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.inquiryType ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'
                  } focus:border-primary-500 focus:outline-none transition-colors dark:bg-slate-950 dark:text-white`}
                >
                  <option>Select an option</option>
                  <option>Institutional Partnership</option>
                  <option>Commercial Inquiry</option>
                  <option>Technical Support</option>
                  <option>Media & Press</option>
                  <option>Academic Research</option>
                  <option>Other</option>
                </select>
                {errors.inquiryType && (
                  <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-slate-700'
                  } focus:border-primary-500 focus:outline-none resize-none transition-colors dark:bg-slate-950 dark:text-white`}
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className={`mt-1 mr-2 w-4 h-4 ${
                    errors.consent ? 'border-red-500' : ''
                  }`}
                />
                <label htmlFor="consent" className="text-sm text-gray-600 dark:text-slate-300">
                  I agree to AfriBiobank's <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a> and consent to being contacted about my inquiry.
                </label>
              </div>
              {errors.consent && (
                <p className="text-sm text-red-600 -mt-4">{errors.consent}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-xs text-center text-gray-500 dark:text-slate-400">
                We typically respond within 24-48 hours during business days
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="pb-20 bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <MapPin className="mx-auto text-primary-600 mb-4" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600 dark:text-slate-300">Visit us at any of our locations across Africa</p>
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
                <Card className="h-full border-2 rounded-2xl hover:shadow-lg transition-all dark:border-slate-700 dark:bg-slate-900/80">
                  <CardHeader>
                    <div className="text-4xl mb-3">{office.flag}</div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{office.city}</CardTitle>
                    <CardDescription className="text-sm font-semibold text-primary-600 dark:text-primary-300">
                      {office.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start text-sm text-gray-600 dark:text-slate-300">
                      <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gray-400 dark:text-slate-500" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-slate-300">
                      <Phone size={16} className="mr-2 flex-shrink-0 text-gray-400 dark:text-slate-500" />
                      <a href={`tel:${office.phone}`} className="hover:text-primary-600">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-slate-300">
                      <Mail size={16} className="mr-2 flex-shrink-0 text-gray-400 dark:text-slate-500" />
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
