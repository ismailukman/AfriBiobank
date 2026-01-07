'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Clock, Star, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

const tutorials = [
  {
    category: 'Beginner',
    color: 'from-green-500 to-emerald-500',
    videos: [
      {
        title: 'Getting Started with AfriBiobank',
        description: 'Create account, navigate the platform, and access your first dataset',
        duration: '15:30',
        difficulty: 'Beginner',
        views: '12.5K',
        rating: 4.8,
      },
      {
        title: 'Understanding Medical Imaging Data',
        description: 'Learn about DICOM, NIfTI, and other medical imaging formats',
        duration: '22:15',
        difficulty: 'Beginner',
        views: '9.2K',
        rating: 4.9,
      },
      {
        title: 'Using the DICOM Viewer',
        description: 'Navigate, annotate, and export medical images',
        duration: '18:45',
        difficulty: 'Beginner',
        views: '8.7K',
        rating: 4.7,
      },
    ],
  },
  {
    category: 'Intermediate',
    color: 'from-blue-500 to-cyan-500',
    videos: [
      {
        title: 'Building Your First AI Model',
        description: 'Train a chest X-ray classifier using PyTorch and AfriBiobank data',
        duration: '45:20',
        difficulty: 'Intermediate',
        views: '15.3K',
        rating: 4.9,
      },
      {
        title: 'Federated Learning Tutorial',
        description: 'Train models across multiple institutions without sharing data',
        duration: '38:50',
        difficulty: 'Intermediate',
        views: '7.1K',
        rating: 4.8,
      },
      {
        title: 'Data Preprocessing Pipeline',
        description: 'Clean, normalize, and augment medical imaging data',
        duration: '32:15',
        difficulty: 'Intermediate',
        views: '11.4K',
        rating: 4.7,
      },
      {
        title: 'Using Pre-trained Models',
        description: 'Fine-tune existing models for your specific use case',
        duration: '28:40',
        difficulty: 'Intermediate',
        views: '9.8K',
        rating: 4.8,
      },
    ],
  },
  {
    category: 'Advanced',
    color: 'from-purple-500 to-pink-500',
    videos: [
      {
        title: 'Multi-Modal AI for Diagnosis',
        description: 'Combine X-rays, CT scans, and clinical data in one model',
        duration: '52:30',
        difficulty: 'Advanced',
        views: '5.9K',
        rating: 4.9,
      },
      {
        title: 'Deploying Models to Production',
        description: 'MLOps, containerization, and real-time inference',
        duration: '48:15',
        difficulty: 'Advanced',
        views: '6.2K',
        rating: 4.8,
      },
      {
        title: 'Explainable AI for Healthcare',
        description: 'Grad-CAM, attention maps, and model interpretability',
        duration: '41:20',
        difficulty: 'Advanced',
        views: '7.3K',
        rating: 4.9,
      },
    ],
  },
  {
    category: 'Specialized',
    color: 'from-orange-500 to-red-500',
    videos: [
      {
        title: 'TB Detection in West Africa',
        description: 'Case study: Building a production TB classifier',
        duration: '1:02:45',
        difficulty: 'Advanced',
        views: '4.1K',
        rating: 5.0,
      },
      {
        title: 'Brain Tumor Segmentation',
        description: 'U-Net and 3D CNNs for medical image segmentation',
        duration: '56:20',
        difficulty: 'Advanced',
        views: '5.5K',
        rating: 4.9,
      },
      {
        title: 'Clinical Trial Recruitment',
        description: 'Using AfriBiobank for patient cohort identification',
        duration: '35:15',
        difficulty: 'Intermediate',
        views: '3.2K',
        rating: 4.7,
      },
    ],
  },
];

export default function TutorialsPage() {
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
            <PlayCircle className="mx-auto text-primary-600 mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Video Tutorials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Step-by-step guides to master medical AI development on AfriBiobank
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <PlayCircle className="text-primary-600 mr-2" size={20} />
                <span className="text-gray-700"><strong>45+</strong> Video Tutorials</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-green-600 mr-2" size={20} />
                <span className="text-gray-700"><strong>18 hours</strong> of Content</span>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-500 mr-2" size={20} />
                <span className="text-gray-700"><strong>4.8</strong> Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tutorial Categories */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {tutorials.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`h-12 w-2 rounded-full bg-gradient-to-b ${category.color} mr-4`} />
                  <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.videos.map((video, index) => (
                    <motion.div
                      key={video.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-200 rounded-2xl overflow-hidden cursor-pointer">
                        {/* Video Thumbnail */}
                        <div className={`h-40 bg-gradient-to-br ${category.color} relative flex items-center justify-center`}>
                          <PlayCircle className="text-white opacity-80 hover:opacity-100 transition-opacity" size={64} />
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                            {video.duration}
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle className="text-lg">{video.title}</CardTitle>
                          <CardDescription className="text-sm line-clamp-2">
                            {video.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <span className={`px-2 py-1 rounded ${
                              video.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                              video.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {video.difficulty}
                            </span>
                            <div className="flex items-center space-x-3">
                              <span>{video.views} views</span>
                              <div className="flex items-center">
                                <Star className="text-yellow-500 mr-1" size={14} />
                                <span className="font-semibold">{video.rating}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <TrendingUp className="mx-auto text-primary-600 mb-4" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curated Learning Paths</h2>
            <p className="text-xl text-gray-600">Structured courses for different roles</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Academic Researcher Path</CardTitle>
                  <CardDescription>For PhDs and postdocs new to medical AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">1.</span>
                      Getting Started (3 videos, 56 min)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">2.</span>
                      Data Exploration (4 videos, 1h 18min)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">3.</span>
                      First Model (5 videos, 2h 5min)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">4.</span>
                      Publication (3 videos, 45min)
                    </li>
                  </ul>
                  <button className="w-full mt-6 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-all">
                    Start Learning
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-2 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">ML Engineer Path</CardTitle>
                  <CardDescription>For AI developers building products</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">1.</span>
                      API Integration (4 videos, 1h 12min)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">2.</span>
                      Model Training (6 videos, 2h 45min)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">3.</span>
                      MLOps (5 videos, 2h 18min)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">4.</span>
                      Production Deployment (4 videos, 1h 52min)
                    </li>
                  </ul>
                  <button className="w-full mt-6 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-all">
                    Start Learning
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-2 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Clinical Researcher Path</CardTitle>
                  <CardDescription>For MDs and clinical investigators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">1.</span>
                      Platform Basics (3 videos, 42min)
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">2.</span>
                      Clinical Trial Support (5 videos, 1h 38min)
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">3.</span>
                      Using AI Models (4 videos, 1h 15min)
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">4.</span>
                      Regulatory Considerations (3 videos, 58min)
                    </li>
                  </ul>
                  <button className="w-full mt-6 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-all">
                    Start Learning
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">New Tutorials Every Week</h3>
            <p className="text-xl mb-6">Subscribe to our YouTube channel for the latest tutorials</p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Subscribe on YouTube
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
