'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Microscope, Brain, TrendingUp, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const impactMetrics = [
  { icon: BookOpen, title: 'Publications', count: '127', desc: 'Peer-reviewed papers', trend: '+23%', color: 'from-blue-500 to-cyan-500' },
  { icon: Users, title: 'Researchers', count: '1,243', desc: 'From 45 countries', trend: '78% Africa', color: 'from-green-500 to-emerald-500' },
  { icon: Microscope, title: 'Studies', count: '234', desc: 'Active projects', trend: '34% Oncology', color: 'from-purple-500 to-pink-500' },
  { icon: Brain, title: 'AI Models', count: '89', desc: 'Serving 150+ institutions', trend: '+23% accuracy', color: 'from-orange-500 to-red-500' },
];

export function ImpactDashboard() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Our Growing Impact</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Advancing African Healthcare</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5 }}>
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-primary-200 rounded-2xl">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <metric.icon className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-5xl font-bold text-gray-900 mb-2">{metric.count}</CardTitle>
                  <CardDescription className="text-base font-semibold text-gray-900">{metric.title}</CardDescription>
                  <p className="text-sm text-gray-600 mb-2">{metric.desc}</p>
                  <div className="flex items-center text-sm">
                    <TrendingUp size={14} className="text-green-500 mr-1" />
                    <span className="text-green-600 font-semibold">{metric.trend}</span>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl">
          <Award className="mx-auto text-primary-600 mb-4" size={40} />
          <h4 className="text-2xl font-bold text-gray-900 mb-3">Citation Impact</h4>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            AfriBiobank publications cited <span className="font-bold text-primary-600">3,400+ times</span>, avg impact factor <span className="font-bold text-secondary-600">12.8</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
