'use client';

import { Search, BarChart3, Bot, Shield, Globe, FileText, Users, Smartphone, Target, Zap, GitBranch, CheckCircle } from 'lucide-react';

const features = [
  { icon: Search, title: 'Advanced Search', description: 'Find exactly what you need with multi-faceted search and semantic queries.' },
  { icon: BarChart3, title: 'Analytics Dashboard', description: 'Real-time insights with beautiful visualizations.' },
  { icon: Bot, title: 'AI-Powered Analysis', description: 'State-of-the-art AI models trained on African data.' },
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-level encryption and comprehensive audit logs.' },
  { icon: Globe, title: 'Federated Learning', description: 'Train AI collaboratively without sharing patient data.' },
  { icon: FileText, title: 'Semantic Metadata', description: 'Rich metadata using international standards.' },
  { icon: Users, title: 'Collaboration Tools', description: 'Work together across continents in real-time.' },
  { icon: Smartphone, title: 'Mobile Access', description: 'Access datasets from anywhere with mobile-optimized interface.' },
  { icon: Target, title: 'FAIR Principles', description: 'Findable, Accessible, Interoperable, and Reusable data.' },
  { icon: Zap, title: 'High Performance', description: 'Lightning-fast search and GPU-accelerated inference.' },
  { icon: GitBranch, title: 'Version Control', description: 'Track changes with complete versioning and rollback.' },
  { icon: CheckCircle, title: 'Global Standards', description: 'Full compliance with international standards.' },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Every User</h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                <feature.icon className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
