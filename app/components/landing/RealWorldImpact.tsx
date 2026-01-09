'use client';

import { motion } from 'framer-motion';
import { MapPin, Stethoscope, Brain, Building2, FlaskConical, Landmark, Heart, Users } from 'lucide-react';

export function RealWorldImpact() {
  const scenarios = [
    {
      icon: Stethoscope,
      location: 'Nairobi, Kenya',
      title: 'Radiologist Discovers Rare Cancer Insights',
      description: 'A radiologist can access certified, anonymized data that helps diagnose a rare pediatric cancer, using African historical records.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Brain,
      location: 'Accra, Ghana',
      title: 'Doctor Receives AI-Powered Support',
      description: 'A doctor can receive AI support trained on scans that reflect Ghanaian patients, not just foreign cohorts.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Users,
      location: 'Johannesburg, South Africa',
      title: 'Researcher Collaborates Without Borders',
      description: 'A researcher can collaborate seamlessly with colleagues in Dakar, working with federated data without borders.',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.3
    }
  ];

  const impacts = [
    {
      icon: Building2,
      stakeholder: 'For Hospitals',
      impact: 'It reduces misdiagnosis',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: FlaskConical,
      stakeholder: 'For Researchers',
      impact: 'It unlocks discovery',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Stethoscope,
      stakeholder: 'For Pharmaceutical Companies',
      impact: 'It de-risks clinical trials',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Landmark,
      stakeholder: 'For Governments',
      impact: 'It drives policy with evidence',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: Heart,
      stakeholder: 'For Patients',
      impact: 'It does what matters most—it saves lives',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Real-World Impact
          </h2>
          <p className="text-xl text-gray-900 dark:text-slate-300 max-w-3xl mx-auto">
            Transforming healthcare across Africa with data-driven insights and collaborative innovation
          </p>
        </motion.div>

        {/* Scenario Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {scenarios.map((scenario) => (
            <motion.div
              key={scenario.location}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white dark:bg-slate-900/80 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${scenario.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <scenario.icon className="text-white" size={32} />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-gray-500 dark:text-slate-400" />
                <span className="text-sm font-semibold text-gray-600 dark:text-slate-300 uppercase tracking-wide">
                  {scenario.location}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {scenario.title}
              </h3>

              <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                {scenario.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${scenario.gradient} text-white text-sm font-semibold rounded-full`}>
                  Live Implementation
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Delivering Value to Every Stakeholder
          </h3>
        </motion.div>

        {/* Impact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {impacts.map((impact) => (
            <motion.div
              key={impact.stakeholder}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`${impact.bgColor} ${impact.borderColor} dark:bg-slate-900/80 dark:border-slate-700 border-2 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 ${impact.color} bg-white dark:bg-slate-950 rounded-full flex items-center justify-center mb-4 shadow-md`}>
                  <impact.icon size={28} />
                </div>

                <h4 className={`text-lg font-bold ${impact.color} mb-2`}>
                  {impact.stakeholder}
                </h4>

                <p className="text-gray-700 dark:text-slate-300 text-sm font-medium">
                  {impact.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold text-white">
              Africa's health data. Africa's insights. Africa's future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
