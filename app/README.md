# AfriBiobank Platform

![AfriBiobank Logo](./docs/assets/logo.png)

> Empowering Africa's Medical Research Through Intelligent Data Sharing

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)

## 🌍 Overview

AfriBiobank is Africa's premier medical imaging biobank—a collaborative platform that connects hospitals, researchers, and AI developers across the continent. Through cutting-edge federated learning technology, we enable institutions to train AI systems together while keeping patient data secure and local.

### Mission

To democratize access to African medical imaging data while preserving privacy and data sovereignty, enabling researchers and AI developers to build solutions that work for African populations.

### Vision

A future where every diagnostic AI system understands African patients as well as any other population—where data drives equitable healthcare outcomes across the continent.

## ✨ Key Features

- **🔐 FAIR-Compliant Data Storage**: Centralized access to decentralized data
- **🤝 Federated Learning**: Collaborate without sharing raw patient data
- **🤖 AI/ML Platform**: 50+ pre-trained models trained on African data
- **⚖️ Ethical Governance**: Built-in ethics and compliance frameworks
- **📊 Advanced Analytics**: Real-time insights and visualizations
- **🌐 Global Standards**: DICOM, FHIR, OMIABIS compliant
- **🔍 Semantic Search**: SPARQL-powered semantic queries
- **📱 Mobile Access**: Responsive design for any device

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Web App │  │Mobile App│  │  Admin   │  │ Research │  │
│  │ (Next.js)│  │          │  │  Portal  │  │  Tools   │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    MICROSERVICES LAYER                       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│  │ User │ │Image │ │ AI/ML│ │  FL  │ │Meta  │ │ RDF  │  │
│  │ Auth │ │DICOM │ │Model │ │Train │ │Data  │ │Query │  │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                      DATA LAYER                              │
│  PostgreSQL │ MongoDB │ Redis │ Neo4j │ Elasticsearch      │
│  Apache Jena Fuseki │ MinIO │ MLflow │ Prometheus          │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ and npm 10+
- Docker and Docker Compose
- (Optional) Kubernetes cluster
- (Optional) NVIDIA GPU for ML training

### Development Setup

1. **Clone the repository**

```bash
git clone https://github.com/afribiobank/afribiobank-platform.git
cd afribiobank-platform
```

2. **Install frontend dependencies**

```bash
cd app
npm install
```

3. **Start all services with Docker Compose**

```bash
# From root directory
docker-compose up -d
```

This will start:
- Frontend (Next.js) on http://localhost:3000
- API Gateway (Kong) on http://localhost:8000
- All microservices
- All databases (PostgreSQL, MongoDB, Redis, etc.)
- Monitoring tools (Grafana on http://localhost:3001)

4. **Access the application**

- **Web App**: http://localhost:3000
- **API Gateway**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Grafana Dashboards**: http://localhost:3001 (admin/admin)
- **MLflow**: http://localhost:5000
- **MinIO Console**: http://localhost:9001 (minioadmin/minioadmin)

### Development Mode

```bash
# Frontend only
cd app
npm run dev

# Watch mode for services
docker-compose up user-service image-service ml-service
```

## 📁 Project Structure

```
AfriBioBank/
├── app/                          # Next.js application
│   ├── about/                    # About page
│   ├── ai-tools/                 # AI Tools showcase
│   ├── contact/                  # Contact page
│   ├── docs/                     # Documentation pages
│   ├── components/               # React components
│   │   ├── landing/              # Landing page sections
│   │   ├── navigation/           # Navigation components
│   │   └── ui/                   # UI component library
│   ├── lib/                      # Utility functions
│   ├── public/                   # Static assets
│   │   └── diagrams/             # Architecture diagrams (SVG)
│   ├── services/                 # Backend microservices
│   │   ├── user-service/         # Authentication & authorization
│   │   ├── image-service/        # DICOM processing
│   │   ├── ml-service/           # AI/ML training & inference
│   │   ├── fl-service/           # Federated learning coordinator
│   │   └── semantic-service/     # RDF/SPARQL queries
│   ├── kubernetes/               # K8s deployment configs
│   ├── scripts/                  # Database scripts
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   ├── docker-compose.yml        # Development environment
│   ├── package.json              # Dependencies
│   ├── tsconfig.json             # TypeScript configuration
│   ├── next.config.js            # Next.js configuration
│   ├── .env                      # Environment variables
│   ├── README.md                 # This file
│   └── DOCUMENTATION.md          # Complete setup guide
│
└── implementations_docs/         # Reference documentation
    ├── AfriBiobank_Technical_Implementation_Guide.txt
    ├── AfriBiobank_Technical_Implementation_Guide_Part2.txt
    ├── AfriBiobank_Technical_Implementation_Guide_Part3.txt
    ├── AfriBiobank_Process_Flowcharts.txt
    ├── AfriBiobank_Website_Content_Guide.txt
    ├── Afribiobank_paper.pdf
    ├── Afribiobank_paper_supplementary.pdf
    └── Report_AfriBiobank2025.docx
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run E2E tests
npm run test:e2e

# Run with coverage
npm test -- --coverage
```

## 📚 Documentation

### Main Documentation

- **[DOCUMENTATION.md](./DOCUMENTATION.md)**: Complete setup guide, deployment, troubleshooting, and contributing guidelines

### Reference Documentation

Comprehensive technical documentation is available in the `../implementations_docs/` directory:

- **[Technical Implementation Guide Part 1](../implementations_docs/AfriBiobank_Technical_Implementation_Guide.txt)**: Architecture, Tech Stack, Landing Page
- **[Technical Implementation Guide Part 2](../implementations_docs/AfriBiobank_Technical_Implementation_Guide_Part2.txt)**: Dashboard, Image Analysis, AI/ML, Federated Learning
- **[Technical Implementation Guide Part 3](../implementations_docs/AfriBiobank_Technical_Implementation_Guide_Part3.txt)**: API Specs, Security, Testing, Monitoring
- **[Process Flowcharts](../implementations_docs/AfriBiobank_Process_Flowcharts.txt)**: All workflow diagrams
- **[Website Content Guide](../implementations_docs/AfriBiobank_Website_Content_Guide.txt)**: Copywriting and content
- **[Research Paper](../implementations_docs/Afribiobank_paper.pdf)**: Scientific publication
- **[Supplementary Materials](../implementations_docs/Afribiobank_paper_supplementary.pdf)**: Additional research data

### API Documentation

- REST API: http://localhost:8000/docs
- GraphQL Playground: http://localhost:8000/graphql
- SPARQL Endpoint: http://localhost:3030/afribiobank/sparql

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Application
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

# Database
DATABASE_URL=postgresql://afribiobank:afribiobank_password@localhost:5432/afribiobank
MONGODB_URL=mongodb://localhost:27017/afribiobank
REDIS_URL=redis://localhost:6379

# Authentication
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRY=1h

# Storage
MINIO_URL=localhost:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin

# ML/AI
MLFLOW_TRACKING_URI=http://localhost:5000
```

## 🚢 Deployment

### Docker Deployment

```bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Deploy
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes Deployment

```bash
# Apply configurations
kubectl apply -f kubernetes/namespace.yaml
kubectl apply -f kubernetes/secrets.yaml
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/ingress.yaml

# Check status
kubectl get pods -n afribiobank
```

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Monitoring & Observability

- **Metrics**: Prometheus + Grafana (http://localhost:3001)
- **Logs**: ELK Stack
- **Tracing**: Jaeger
- **Uptime**: Status page at https://status.afribiobank.org

## 🔒 Security

- All data encrypted in transit (TLS 1.3) and at rest (AES-256)
- GDPR and HIPAA-equivalent compliance
- Regular security audits and penetration testing
- Bug bounty program: security@afribiobank.org

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Shade's story inspired this platform
- All contributing institutions across Africa
- Open source community
- Bill & Melinda Gates Foundation
- Wellcome Trust
- African Development Bank

## 📞 Support & Contact

- **Email**: support@afribiobank.org
- **Website**: https://afribiobank.org
- **Documentation**: https://docs.afribiobank.org
- **Community Forum**: https://community.afribiobank.org
- **Twitter**: [@afribiobank](https://twitter.com/afribiobank)
- **LinkedIn**: [/company/afribiobank](https://linkedin.com/company/afribiobank)

## 🗺️ Roadmap

### Phase 1: Foundation (Months 1-3) ✅
- Infrastructure setup
- Core services
- Landing page
- Basic data ingestion

### Phase 2: Core Features (Months 4-6) 🔄
- Database Dashboard
- DICOM Viewer
- RDF Semantic Layer
- Testing with 5 institutions

### Phase 3: AI/ML & FL (Months 7-9)
- ML platform with pre-trained models
- Federated learning framework
- Cloud Node Toolkit
- Deploy at 5 pilot sites

### Phase 4: Launch (Months 10-12)
- Agentic API
- Blockchain integration
- Governance framework
- Public launch with 20 institutions

---

<div align="center">

**"The strength of the crocodile lies in the water it lives in."**

*AfriBiobank is that water. Let's make sure Africa's health insight flows from its own data.*

Developed and Maintained by AfriBiobank Open-Source Team

[Get Started](https://afribiobank.org/signup) • [Documentation](https://docs.afribiobank.org) • [Community](https://community.afribiobank.org)

</div>
