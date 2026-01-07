'use client';

import { motion } from 'framer-motion';
import { Users, Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

const leadership = [
  {
    name: 'Dr. Amina Okafor',
    role: 'Founder & CEO',
    bio: 'Former Head of Radiology at Lagos University Teaching Hospital. PhD in Medical Imaging AI from MIT.',
    location: 'Lagos, Nigeria',
    image: '👩🏿‍⚕️',
  },
  {
    name: 'Prof. Kofi Mensah',
    role: 'Chief Scientific Officer',
    bio: 'Pioneer in African genomics. 15+ years leading medical research consortiums across West Africa.',
    location: 'Accra, Ghana',
    image: '👨🏿‍🔬',
  },
  {
    name: 'Dr. Thandiwe Moyo',
    role: 'Chief Medical Officer',
    bio: 'Oncologist and clinical researcher. Led brain tumor research featured in Nature Medicine.',
    location: 'Johannesburg, South Africa',
    image: '👩🏿‍⚕️',
  },
  {
    name: 'David Kimani',
    role: 'Chief Technology Officer',
    bio: 'Former engineering lead at Google AI. Built ML infrastructure serving 1B+ users.',
    location: 'Nairobi, Kenya',
    image: '👨🏿‍💻',
  },
];

const advisors = [
  {
    name: 'Prof. Olufunmilayo Olopade',
    title: 'Scientific Advisor',
    affiliation: 'University of Chicago',
    expertise: 'Cancer Genetics',
  },
  {
    name: 'Dr. John Nkengasong',
    title: 'Public Health Advisor',
    affiliation: 'Africa CDC',
    expertise: 'Infectious Diseases',
  },
  {
    name: 'Prof. Segun Toyin',
    title: 'Ethics Advisor',
    affiliation: 'University of Ibadan',
    expertise: 'Medical Ethics & Data Privacy',
  },
  {
    name: 'Dr. Matshidiso Moeti',
    title: 'Policy Advisor',
    affiliation: 'WHO Africa',
    expertise: 'Health Policy',
  },
];

const stats = [
  { number: '45+', label: 'Team Members' },
  { number: '12', label: 'Countries' },
  { number: '20+', label: 'Partner Institutions' },
  { number: '75%', label: 'African-based' },
];

export default function TeamPage() {
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
            <Users className="mx-auto text-primary-600 mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              World-class medical researchers, AI engineers, and healthcare professionals building Africa's medical future
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md"
                >
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Driving innovation in African medical research</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-primary-200 rounded-2xl text-center">
                  <CardHeader>
                    <div className="text-6xl mb-4">{member.image}</div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary-600 font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
                    <p className="text-xs text-gray-500 mb-4">📍 {member.location}</p>
                    <div className="flex justify-center space-x-3">
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Linkedin size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Twitter size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Mail size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-600">Guiding our strategic direction and ethical standards</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">{advisor.name}</CardTitle>
                    <CardDescription className="text-sm">
                      <span className="text-primary-600 font-semibold">{advisor.title}</span>
                      <br />
                      {advisor.affiliation}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">{advisor.expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Departments</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Building scalable infrastructure for medical AI
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>• Platform Engineering (8 members)</li>
                    <li>• ML Infrastructure (6 members)</li>
                    <li>• DevOps & Security (4 members)</li>
                    <li>• Data Engineering (5 members)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-2 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Research & Clinical</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Medical expertise and scientific leadership
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>• Clinical Research (7 members)</li>
                    <li>• Radiologists (5 members)</li>
                    <li>• Data Science (6 members)</li>
                    <li>• Ethics & Compliance (3 members)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-2 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Supporting our global partnerships
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>• Partnerships (4 members)</li>
                    <li>• Customer Success (3 members)</li>
                    <li>• Finance & Legal (3 members)</li>
                    <li>• Marketing & Comms (2 members)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're hiring world-class talent across engineering, research, and operations. Help us transform African healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                View Open Positions
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Submit Resume
              </button>
            </div>
            <p className="text-sm mt-6 opacity-90">careers@afribiobank.org</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
