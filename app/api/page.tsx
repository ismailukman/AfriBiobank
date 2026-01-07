'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Database, Lock, Zap, CheckCircle, Copy } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/landing/Footer';

const apiEndpoints = [
  {
    category: 'Authentication',
    icon: Lock,
    color: 'from-red-500 to-orange-500',
    endpoints: [
      {
        method: 'POST',
        path: '/api/v1/auth/login',
        description: 'Authenticate and receive JWT access token',
        request: `{
  "email": "researcher@institution.edu",
  "password": "your-secure-password"
}`,
        response: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "user": {
    "id": "usr_123456",
    "email": "researcher@institution.edu",
    "role": "researcher",
    "institution": "University of Lagos"
  }
}`,
      },
      {
        method: 'POST',
        path: '/api/v1/auth/refresh',
        description: 'Refresh access token using refresh token',
        request: `{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`,
        response: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}`,
      },
    ],
  },
  {
    category: 'Datasets',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/datasets',
        description: 'List available datasets with filters',
        request: `GET /api/v1/datasets?modality=ct&disease=tuberculosis&limit=20

Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`,
        response: `{
  "datasets": [
    {
      "id": "ds_tb_west_africa_2024",
      "name": "West Africa TB Chest X-Ray Collection",
      "description": "25,000 chest X-rays from Nigeria, Ghana, Senegal",
      "modality": "x-ray",
      "disease_focus": ["tuberculosis"],
      "institutions": 12,
      "image_count": 25000,
      "annotation_status": "complete",
      "access_level": "academic",
      "created_at": "2024-01-15T10:00:00Z"
    }
  ],
  "total": 234,
  "page": 1,
  "per_page": 20
}`,
      },
      {
        method: 'GET',
        path: '/api/v1/datasets/{dataset_id}',
        description: 'Get detailed information about a specific dataset',
        request: `GET /api/v1/datasets/ds_tb_west_africa_2024

Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`,
        response: `{
  "id": "ds_tb_west_africa_2024",
  "name": "West Africa TB Chest X-Ray Collection",
  "description": "25,000 chest X-rays from Nigeria, Ghana, Senegal...",
  "statistics": {
    "total_images": 25000,
    "positive_cases": 8750,
    "negative_cases": 16250,
    "age_range": "18-75",
    "gender_distribution": {"male": 0.52, "female": 0.48}
  },
  "institutions": [...],
  "citation": "Adeyemi et al. (2024). Lancet Digital Health...",
  "license": "CC-BY-NC-4.0",
  "download_url": "/api/v1/datasets/ds_tb_west_africa_2024/download"
}`,
      },
    ],
  },
  {
    category: 'Images',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/images/search',
        description: 'Search for specific medical images',
        request: `POST /api/v1/images/search

Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Body:
{
  "modality": "ct",
  "body_part": "brain",
  "disease": "glioblastoma",
  "age_range": [40, 70],
  "country": "KE",
  "annotated_only": true
}`,
        response: `{
  "images": [
    {
      "id": "img_brain_001",
      "dataset_id": "ds_brain_tumors_ea",
      "modality": "ct",
      "body_part": "brain",
      "format": "dicom",
      "size_mb": 45.2,
      "dimensions": "512x512x120",
      "annotations": [
        {
          "type": "segmentation",
          "label": "tumor",
          "annotator": "radiologist_certified",
          "confidence": 0.98
        }
      ],
      "metadata": {
        "age": 54,
        "gender": "M",
        "acquisition_date": "2024-02-10",
        "institution": "Kenyatta National Hospital"
      },
      "download_url": "/api/v1/images/img_brain_001/download"
    }
  ],
  "total": 1247,
  "page": 1
}`,
      },
      {
        method: 'GET',
        path: '/api/v1/images/{image_id}/download',
        description: 'Download a specific image file',
        request: `GET /api/v1/images/img_brain_001/download?format=nifti

Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`,
        response: `Binary file download with appropriate Content-Type header
Content-Type: application/octet-stream
Content-Disposition: attachment; filename="img_brain_001.nii.gz"`,
      },
    ],
  },
  {
    category: 'ML Models',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/models',
        description: 'List available pre-trained models',
        request: `GET /api/v1/models?task=classification&disease=tuberculosis

Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`,
        response: `{
  "models": [
    {
      "id": "model_tb_classifier_v2",
      "name": "TB Detection - West Africa v2.0",
      "task": "classification",
      "disease": "tuberculosis",
      "modality": "x-ray",
      "accuracy": 0.95,
      "trained_on": "ds_tb_west_africa_2024",
      "framework": "pytorch",
      "deployment_status": "production",
      "api_endpoint": "/api/v1/models/model_tb_classifier_v2/predict"
    }
  ]
}`,
      },
      {
        method: 'POST',
        path: '/api/v1/models/{model_id}/predict',
        description: 'Run inference on uploaded image',
        request: `POST /api/v1/models/model_tb_classifier_v2/predict

Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: multipart/form-data

Body:
image: <binary_file_upload>`,
        response: `{
  "prediction": {
    "class": "tuberculosis_positive",
    "confidence": 0.94,
    "probabilities": {
      "tuberculosis_positive": 0.94,
      "normal": 0.04,
      "other_pathology": 0.02
    },
    "attention_map_url": "/results/attn_img_001.png",
    "processing_time_ms": 234
  },
  "model_version": "2.0.3",
  "disclaimer": "For research use only. Not for clinical diagnosis."
}`,
      },
    ],
  },
];

export default function APIReferencePage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <Code className="mx-auto mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">API Reference</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              RESTful API for accessing Africa's largest medical imaging platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl">
                <span className="font-semibold">Base URL:</span> https://api.afribiobank.org/v1
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl">
                <span className="font-semibold">Version:</span> 1.0.0
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
            <Card className="border-2 rounded-2xl">
              <CardContent className="p-6">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">1</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Sign up for an account</h3>
                      <p className="text-gray-600">Create a free account at <a href="/pricing" className="text-primary-600 hover:underline">afribiobank.org/pricing</a></p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">2</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Generate API keys</h3>
                      <p className="text-gray-600">Navigate to Dashboard → API Keys and generate your authentication credentials</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">3</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Make your first request</h3>
                      <p className="text-gray-600">Start with authentication endpoint to obtain JWT token</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </motion.div>

          {/* Rate Limits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="border-2 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Academic Tier</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary-600 mb-2">1,000</p>
                <p className="text-gray-600">requests per hour</p>
              </CardContent>
            </Card>
            <Card className="border-2 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Professional Tier</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600 mb-2">10,000</p>
                <p className="text-gray-600">requests per hour</p>
              </CardContent>
            </Card>
            <Card className="border-2 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Enterprise Tier</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600 mb-2">Unlimited</p>
                <p className="text-gray-600">with custom SLA</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Endpoints</h2>

          {apiEndpoints.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg mr-4`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="space-y-8">
                {category.endpoints.map((endpoint, endpointIndex) => (
                  <Card key={endpointIndex} className="border-2 hover:border-primary-200 transition-all rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                              endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                              endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="ml-3 text-lg font-mono text-gray-800">{endpoint.path}</code>
                          </div>
                          <p className="text-gray-600">{endpoint.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Request */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">Request</h4>
                            <button
                              onClick={() => copyToClipboard(endpoint.request, `req-${categoryIndex}-${endpointIndex}`)}
                              className="text-gray-500 hover:text-primary-600 transition-colors"
                            >
                              {copiedCode === `req-${categoryIndex}-${endpointIndex}` ? (
                                <CheckCircle size={18} className="text-green-600" />
                              ) : (
                                <Copy size={18} />
                              )}
                            </button>
                          </div>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{endpoint.request}</code>
                          </pre>
                        </div>

                        {/* Response */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">Response</h4>
                            <button
                              onClick={() => copyToClipboard(endpoint.response, `res-${categoryIndex}-${endpointIndex}`)}
                              className="text-gray-500 hover:text-primary-600 transition-colors"
                            >
                              {copiedCode === `res-${categoryIndex}-${endpointIndex}` ? (
                                <CheckCircle size={18} className="text-green-600" />
                              ) : (
                                <Copy size={18} />
                              )}
                            </button>
                          </div>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{endpoint.response}</code>
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SDKs */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Official SDKs</h3>
            <p className="text-xl mb-6">Get started faster with our official client libraries</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Python SDK
              </button>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                JavaScript SDK
              </button>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                R SDK
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
