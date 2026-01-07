'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Building2, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

const pricingTiers = [
  {
    name: 'Academic',
    icon: Star,
    price: 'Free',
    period: 'Forever',
    description: 'For researchers and academic institutions advancing medical science',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Access to 1M+ curated medical images',
      'Up to 5 active research projects',
      'Basic GPU compute (100 hours/month)',
      'Standard API access',
      'Community support',
      'Public dataset contributions',
      'Citation required for publications',
      'Data export (limited formats)',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Professional',
    icon: Building2,
    price: '$2,500',
    period: 'per month',
    description: 'For healthcare institutions and clinical research organizations',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Everything in Academic, plus:',
      'Unlimited active projects',
      'Advanced GPU compute (500 hours/month)',
      'Priority API access with SLA',
      'Federated learning participation',
      'Private dataset storage (up to 10TB)',
      'Email & phone support',
      'HIPAA-compliant workflows',
      'Staff training (quarterly sessions)',
      'Custom integration support',
    ],
    cta: 'Start 30-Day Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Zap,
    price: '$12,000',
    period: 'per month',
    description: 'For pharmaceutical companies, AI developers, and large-scale deployments',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Everything in Professional, plus:',
      'Unlimited GPU compute',
      'Dedicated infrastructure',
      'White-label deployment options',
      'Private data lakes (unlimited)',
      'Commercial licensing rights',
      'Real-time data synchronization',
      'Advanced analytics dashboard',
      '24/7 priority support',
      'Dedicated account manager',
      'Custom model development',
      'Multi-region deployment',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
  {
    name: 'Custom',
    icon: Sparkles,
    price: 'Let\'s Talk',
    period: 'Tailored to your needs',
    description: 'For governments, consortiums, and organizations with unique requirements',
    color: 'from-orange-500 to-red-500',
    features: [
      'Everything in Enterprise, plus:',
      'Custom regulatory compliance (FDA, EMA, etc.)',
      'Sovereign data hosting options',
      'Multi-tenant architecture',
      'Custom feature development',
      'Strategic partnership opportunities',
      'Revenue sharing models',
      'Joint research initiatives',
      'Policy advisory services',
      'Custom SLAs and contracts',
      'Unlimited everything',
    ],
    cta: 'Schedule Consultation',
    popular: false,
  },
];

export default function PricingPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transparent, Equitable Access
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that fits your research needs. All plans include access to Africa's largest medical imaging repository.
            </p>
            <p className="text-lg text-primary-600 font-semibold">
              🎓 Academic researchers get free access forever
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full ${tier.popular ? 'border-4 border-primary-200 shadow-2xl' : 'border-2'} hover:shadow-xl transition-all duration-500 rounded-2xl`}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <tier.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                      {tier.period !== 'Forever' && tier.period !== 'Tailored to your needs' && (
                        <span className="text-gray-600 ml-2">/ {tier.period}</span>
                      )}
                      {tier.period === 'Forever' && (
                        <span className="text-green-600 ml-2 font-semibold">{tier.period}</span>
                      )}
                      {tier.period === 'Tailored to your needs' && (
                        <p className="text-sm text-gray-600 mt-1">{tier.period}</p>
                      )}
                    </div>
                    <CardDescription className="text-base mb-6">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className={feature.startsWith('Everything in') ? 'font-semibold text-gray-900' : 'text-gray-600'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${tier.popular ? `bg-gradient-to-r ${tier.color} text-white hover:opacity-90` : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} font-semibold py-6 rounded-xl transition-all duration-300`}
                    >
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Sovereignty</h3>
              <p className="text-gray-600">
                Your data stays in Africa. We support regional hosting and comply with local data protection laws.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Revenue Sharing</h3>
              <p className="text-gray-600">
                Institutions earn when their data contributes to commercial projects. Transparent, equitable compensation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Contracts</h3>
              <p className="text-gray-600">
                Monthly billing, annual discounts (save 20%), or custom arrangements. No long-term lock-ins.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
