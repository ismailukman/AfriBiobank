'use client';

import { motion } from 'framer-motion';
import { Building2, Globe, DollarSign, GraduationCap, Handshake } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const partnerCategories = [
  { icon: Building2, title: 'Institutions', count: '20+', color: 'from-blue-500 to-cyan-500', partners: ['Lagos University Teaching Hospital, Nigeria', 'Korle-Bu Teaching Hospital, Ghana', 'Kenyatta National Hospital, Kenya', 'Groote Schuur Hospital, South Africa'] },
  { icon: Globe, title: 'Technology', count: '12+', color: 'from-purple-500 to-pink-500', partners: ['NVIDIA - GPU & AI', 'Microsoft Azure - Cloud', 'AWS - Infrastructure', 'Google Cloud - Healthcare API'] },
  { icon: DollarSign, title: 'Funding', count: '8+', color: 'from-green-500 to-emerald-500', partners: ['Bill & Melinda Gates Foundation', 'Wellcome Trust', 'African Development Bank', 'European Commission'] },
  { icon: GraduationCap, title: 'Academic', count: '30+', color: 'from-orange-500 to-red-500', partners: ['Harvard Medical School', 'Johns Hopkins University', 'Imperial College London', 'University of Cape Town'] },
];

export function Partners() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-2">Our Growing Network</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Building Africa's Healthcare Future</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnerCategories.map((cat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5 }}>
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-primary-200 rounded-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} shadow-lg`}>
                      <cat.icon className="text-white" size={24} />
                    </div>
                    <span className="text-3xl font-bold text-gray-300">{cat.count}</span>
                  </div>
                  <CardTitle className="text-xl mb-4">{cat.title} Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {cat.partners.map((p, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-secondary-500 mr-2">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <Handshake className="mx-auto mb-4" size={48} />
          <h4 className="text-3xl font-bold mb-4">Become a Partner</h4>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join leading institutions, technology providers, and funders transforming African healthcare.</p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">Become a Partner</button>
        </motion.div>
      </div>
    </section>
  );
}
