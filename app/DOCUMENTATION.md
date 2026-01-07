# AfriBioBank Platform Documentation

Complete guide for the AfriBioBank platform - Africa's leading medical imaging biobank infrastructure.

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Project Structure](#project-structure)
4. [Technology Stack](#technology-stack)
5. [Development Setup](#development-setup)
6. [Production Deployment](#production-deployment)
7. [Features Implemented](#features-implemented)
8. [Troubleshooting](#troubleshooting)
9. [Contributing](#contributing)

---

## Overview

AfriBioBank is a comprehensive medical imaging biobank platform designed to empower African healthcare through data sovereignty, federated learning, and AI-powered diagnostics.

### Key Capabilities

- **Medical Image Management**: DICOM, NIfTI, NRRD format support
- **Federated Learning**: Privacy-preserving collaborative AI training
- **AI-Powered Tools**: 16+ AI tools for disease detection and analysis
- **Data Sovereignty**: African health data controlled by African institutions
- **Microservices Architecture**: Scalable, cloud-native design
- **Standards Compliant**: FHIR, DICOM, HL7 support

---

## Quick Start

### Prerequisites

**Required**:
- Node.js 20.0.0+
- npm 10.0.0+
- Docker 24.0+
- Docker Compose 2.0+

**Optional**:
- Kubernetes (minikube, kind, or cloud provider)
- NVIDIA GPU with CUDA 12.1+ (for ML training)
- Python 3.11+ (for backend development)

### Installation

```bash
# Clone repository
git clone https://github.com/afribiobank/afribiobank-platform.git
cd AfriBioBank/app

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Docker Deployment

```bash
# Start all services
docker-compose up -d

# Check service status
docker-compose ps

# View logs
docker-compose logs -f
```

**Service URLs**:
- Web App: http://localhost:3000
- API Gateway: http://localhost:8000
- API Docs: http://localhost:8000/docs
- Grafana: http://localhost:3001 (admin/admin)
- MLflow: http://localhost:5000
- MinIO Console: http://localhost:9001 (minioadmin/minioadmin)

---

## Project Structure

```
app/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Route groups
│   │   ├── about/                # About page
│   │   ├── ai-tools/             # AI Tools showcase
│   │   ├── contact/              # Contact page
│   │   └── docs/                 # Documentation
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
│
├── components/
│   ├── landing/                  # Landing page sections
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Statistics.tsx        # Live stats
│   │   ├── Problem.tsx           # Problem statement
│   │   ├── Solution.tsx          # Solution overview
│   │   ├── RealWorldImpact.tsx   # Use cases
│   │   ├── HowItWorks.tsx        # Process flow
│   │   ├── Features.tsx          # Feature grid
│   │   ├── WhoWeServe.tsx        # Target personas
│   │   ├── SuccessStories.tsx    # Case studies
│   │   ├── ImpactDashboard.tsx   # Metrics
│   │   ├── Partners.tsx          # Partner logos
│   │   ├── CTA.tsx               # Call to action
│   │   ├── Footer.tsx            # Site footer
│   │   └── ZuriAssistant.tsx     # AI chatbot
│   ├── navigation/
│   │   └── Navbar.tsx            # Main navigation
│   └── ui/                       # Reusable components
│       ├── button.tsx
│       └── card.tsx
│
├── lib/
│   └── utils.ts                  # Utility functions
│
├── public/
│   └── diagrams/                 # Architecture diagrams
│       ├── Afribiobank_system.svg
│       ├── stakeholder_AfriBiobank.svg
│       └── Afribiobank_Fedrated_Learning.svg
│
├── services/                     # Backend microservices
│   ├── user-service/             # Authentication
│   ├── image-service/            # DICOM processing
│   ├── ml-service/               # AI/ML models
│   ├── fl-service/               # Federated learning
│   └── semantic-service/         # RDF/SPARQL
│
├── kubernetes/                   # K8s manifests
│   └── deployment.yaml
│
├── scripts/
│   └── init-db.sql               # Database schema
│
├── implementations_docs/         # Reference documentation
│
├── docker-compose.yml            # Development stack
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind setup
├── next.config.js                # Next.js config
├── .env                          # Environment variables
└── DOCUMENTATION.md              # This file
```

---

## Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0
- **UI Components**: Radix UI
- **State Management**: Zustand, React Query
- **Medical Imaging**: Cornerstone.js

### Backend
- **API Gateway**: Kong
- **User Service**: Node.js + Express + JWT
- **Image Service**: Python + FastAPI + PyDICOM
- **ML Service**: Python + PyTorch + MONAI
- **FL Service**: Python + Flower (Federated Learning)
- **Semantic Service**: Python + RDFLib + SPARQL

### Data Layer
- **Relational DB**: PostgreSQL 16
- **Document Store**: MongoDB 7
- **Cache**: Redis 7
- **Graph DB**: Neo4j 5
- **Search Engine**: Elasticsearch 8
- **RDF Store**: Apache Jena Fuseki
- **Object Storage**: MinIO (S3-compatible)

### MLOps & Monitoring
- **Experiment Tracking**: MLflow
- **Model Registry**: MLflow
- **Metrics**: Prometheus
- **Visualization**: Grafana

### Infrastructure
- **Containers**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions (ready)

---

## Development Setup

### Frontend Development

```bash
cd app

# Development mode with hot reload
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

### Backend Service Development

Each service in `/services` can be developed independently:

#### User Service (Node.js)

```bash
cd services/user-service

# Initialize
npm init -y
npm install express bcrypt jsonwebtoken pg dotenv

# Create src/index.js
mkdir -p src
cat > src/index.js << 'EOF'
const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'user-service' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
EOF

# Run
node src/index.js
```

#### Image Service (Python)

```bash
cd services/image-service

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
cat > requirements.txt << 'EOF'
fastapi==0.109.0
uvicorn[standard]==0.27.0
pydicom==2.4.4
Pillow==10.2.0
python-multipart==0.0.6
boto3==1.34.0
psycopg2-binary==2.9.9
EOF

pip install -r requirements.txt

# Create main.py
cat > main.py << 'EOF'
from fastapi import FastAPI

app = FastAPI(title="AfriBiobank Image Service")

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "image-service"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
EOF

# Run
python main.py
```

### Database Setup

#### PostgreSQL

The database is automatically initialized via `scripts/init-db.sql`:

```bash
# Connect to database
docker-compose exec postgres psql -U afribiobank

# List tables
\dt

# View schema
\d+ users

# Run custom migration
\i /path/to/migration.sql
```

#### MongoDB

```bash
# Connect to MongoDB
docker-compose exec mongodb mongosh

# Switch to database
use afribiobank

# Create collections
db.createCollection('medical_images_metadata')

# Insert sample document
db.medical_images_metadata.insertOne({
  study_id: "1.2.3.4.5",
  patient_age: 45,
  modality: "CT",
  institution: "Nairobi Teaching Hospital"
})
```

### Environment Configuration

Create `.env` file (use `.env.example` as template):

```bash
# Application
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

# Database
DATABASE_URL=postgresql://afribiobank:afribiobank_password@localhost:5432/afribiobank
MONGODB_URI=mongodb://afribiobank:afribiobank_password@localhost:27017/afribiobank
REDIS_URL=redis://localhost:6379
NEO4J_URI=bolt://localhost:7687
ELASTICSEARCH_URL=http://localhost:9200

# Authentication
JWT_SECRET=development-secret-key-change-in-production
JWT_EXPIRES_IN=7d

# Object Storage
MINIO_ENDPOINT=localhost:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_BUCKET=medical-images

# ML/AI
MLFLOW_TRACKING_URI=http://localhost:5000
```

**Generate secure keys for production**:

```bash
# JWT Secret
openssl rand -base64 32

# Database password
openssl rand -base64 24
```

---

## Production Deployment

### Option 1: Docker Compose

```bash
# Create production compose file
cp docker-compose.yml docker-compose.prod.yml

# Edit for production:
# - Set NODE_ENV=production
# - Use secure passwords
# - Configure resource limits
# - Set proper domain names
# - Enable SSL/TLS

# Deploy
docker-compose -f docker-compose.prod.yml up -d

# Monitor
docker-compose -f docker-compose.prod.yml logs -f
```

### Option 2: Kubernetes (Recommended)

```bash
# Create namespace
kubectl create namespace afribiobank

# Create secrets
kubectl create secret generic db-credentials \
  --from-literal=postgres-password=<secure-password> \
  --from-literal=mongodb-password=<secure-password> \
  --from-literal=jwt-secret=<secure-secret> \
  -n afribiobank

# Deploy services
kubectl apply -f kubernetes/deployment.yaml

# Check status
kubectl get pods -n afribiobank
kubectl get services -n afribiobank

# View logs
kubectl logs -f deployment/frontend -n afribiobank

# Set up ingress
kubectl apply -f kubernetes/ingress.yaml
```

### SSL/TLS Setup

```bash
# Install cert-manager
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml

# Create Let's Encrypt issuer
cat <<EOF | kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: admin@afribiobank.org
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
EOF
```

### Production Checklist

Before going live:

- [ ] Change all default passwords
- [ ] Generate secure JWT secrets
- [ ] Configure SSL/TLS certificates
- [ ] Set up database backups (automated)
- [ ] Configure monitoring alerts (Grafana)
- [ ] Review security settings
- [ ] Test disaster recovery procedures
- [ ] Set up CDN for static assets
- [ ] Configure rate limiting (API Gateway)
- [ ] Enable CORS properly
- [ ] Review firewall rules
- [ ] Conduct security audit
- [ ] Set up staging environment
- [ ] Create operational runbooks
- [ ] Train operations team
- [ ] Test with real medical images
- [ ] Verify HIPAA/GDPR compliance

---

## Features Implemented

### Landing Page ✅
- Hero section with animated background
- Live statistics counter
- Problem statement (Shade's story)
- Solution pillars (4 main features)
- Real-world impact scenarios (Nairobi, Accra, Johannesburg)
- How It Works (5-step process)
- Features grid (12 key features)
- Who We Serve (target personas)
- Success stories
- Impact dashboard
- Partners showcase
- Call-to-action
- Footer with comprehensive links

### About Page ✅
- Mission and vision statements
- Core values (6 values)
- Interactive architecture diagrams:
  - System Architecture
  - Stakeholder Ecosystem
  - Federated Learning Framework
- Impact statistics
- African proverb quote card

### AI Tools Page ✅
- 16+ AI tool cards with descriptions:
  - Federated Learning Toolkit
  - Rare Disease Observatory
  - Brain Tumor Detection
  - Cancer Classification Suite
  - Tuberculosis Screening
  - COVID-19 Analysis
  - Sickle Cell Disease Tracker
  - And more...
- Category filtering (All, Imaging, Learning, Analysis)
- Interactive cards with hover effects
- Status badges (Available, Beta, Coming Soon)
- API endpoint information

### UI/UX Features ✅
- Dark mode support
- Responsive design (mobile-first)
- Smooth scroll animations
- Gradient backgrounds
- Interactive hover effects
- Animated navigation menu
- Collapsible Zuri AI assistant
- Voice input support (Zuri)
- Professional typography
- Accessible components (Radix UI)

### Backend Infrastructure ✅
- Microservices architecture (5 services)
- Docker containerization
- Kubernetes manifests
- Complete database schema (PostgreSQL)
- Health check endpoints
- API Gateway configuration (Kong)
- MLOps setup (MLflow)
- Monitoring stack (Prometheus + Grafana)

### Database Schema ✅
- Users & authentication tables
- Institutions management
- Datasets and studies
- Medical images metadata
- AI/ML models registry
- Federated learning campaigns
- Access requests workflow
- Audit logs for compliance
- Consent management

---

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process (macOS/Linux)
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### Docker Container Won't Start

```bash
# Check logs
docker-compose logs <service-name>

# Restart service
docker-compose restart <service-name>

# Rebuild image
docker-compose build --no-cache <service-name>
docker-compose up -d <service-name>

# Reset everything
docker-compose down -v
docker-compose up -d
```

#### Database Connection Failed

```bash
# Check PostgreSQL is running
docker-compose ps postgres

# Test connection
docker-compose exec postgres pg_isready

# Connect to database
docker-compose exec postgres psql -U afribiobank

# Reset database
docker-compose down -v
docker-compose up -d postgres
```

#### Out of Memory

```bash
# Increase Docker memory (Docker Desktop)
# Settings → Resources → Memory → Set to 8GB+

# Or limit service memory in docker-compose.yml
deploy:
  resources:
    limits:
      memory: 2G
    reservations:
      memory: 1G
```

#### Next.js Build Errors

```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build

# Check Node version
node -v  # Should be 20.0.0+
```

### Performance Tuning

#### PostgreSQL

```sql
-- Increase shared buffers
ALTER SYSTEM SET shared_buffers = '512MB';
ALTER SYSTEM SET effective_cache_size = '2GB';
ALTER SYSTEM SET maintenance_work_mem = '128MB';
ALTER SYSTEM SET work_mem = '16MB';
SELECT pg_reload_conf();
```

#### Node.js

```bash
# Increase memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm start
```

#### Next.js

```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
}
```

### Debugging

```bash
# Enable debug logs
DEBUG=* npm run dev

# Check service health
curl http://localhost:8000/health

# Monitor Docker stats
docker stats

# View PostgreSQL logs
docker-compose exec postgres tail -f /var/lib/postgresql/data/log/postgresql.log

# Check TypeScript errors
npm run type-check

# Run linter
npm run lint
```

### Getting Help

- **Documentation**: https://docs.afribiobank.org
- **Community Forum**: https://community.afribiobank.org
- **GitHub Issues**: https://github.com/afribiobank/afribiobank-platform/issues
- **Email Support**: support@afribiobank.org
- **Slack Community**: https://afribiobank.slack.com

---

## Contributing

### Development Workflow

1. **Fork the repository**

```bash
git clone https://github.com/YOUR_USERNAME/afribiobank-platform.git
cd afribiobank-platform/app
```

2. **Create a feature branch**

```bash
git checkout -b feature/your-feature-name
```

3. **Make your changes**

- Follow TypeScript/ESLint rules
- Write tests for new features
- Update documentation
- Keep commits atomic and descriptive

4. **Test your changes**

```bash
npm run type-check
npm run lint
npm run build
```

5. **Submit a pull request**

```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

### Code Standards

- **TypeScript**: Strict mode enabled
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier (automatic)
- **Commits**: Conventional Commits format
- **Testing**: Jest + React Testing Library

### Areas for Contribution

1. **Frontend Components**
   - Dashboard components
   - DICOM viewer integration
   - Data visualization widgets
   - User management UI

2. **Backend Services**
   - API endpoint implementation
   - Authentication middleware
   - Data processing pipelines
   - Federated learning algorithms

3. **Documentation**
   - API documentation
   - Tutorial videos
   - Code examples
   - Translation (French, Swahili, Arabic)

4. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests (Playwright)
   - Performance tests

5. **DevOps**
   - CI/CD pipelines
   - Monitoring dashboards
   - Deployment scripts
   - Security hardening

---

## System Requirements

### Development

**Minimum**:
- CPU: 4 cores
- RAM: 8 GB
- Storage: 50 GB
- Network: 10 Mbps

**Recommended**:
- CPU: 8+ cores
- RAM: 16+ GB
- Storage: 200+ GB SSD
- Network: 100+ Mbps
- GPU: NVIDIA with 8+ GB VRAM (for ML)

### Production

**Small Deployment** (1-10 institutions):
- CPU: 16 cores
- RAM: 32 GB
- Storage: 1 TB SSD
- Network: 1 Gbps
- GPU: Optional

**Medium Deployment** (10-50 institutions):
- CPU: 32 cores
- RAM: 64 GB
- Storage: 5 TB SSD
- Network: 10 Gbps
- GPU: 2x NVIDIA A100 (for ML)

**Large Deployment** (50+ institutions):
- CPU: 64+ cores (distributed)
- RAM: 128+ GB (distributed)
- Storage: 20+ TB (distributed)
- Network: 10+ Gbps
- GPU: 4+ NVIDIA A100 (for ML)

---

## Reference Documentation

All implementation is based on official AfriBioBank documentation located in `../implementations_docs/` (project root level):

- `AfriBiobank_Technical_Implementation_Guide.txt` (Parts 1-3)
- `AfriBiobank_Process_Flowcharts.txt`
- `AfriBiobank_Website_Content_Guide.txt`
- Research papers: `Afribiobank_paper.pdf` and supplementary materials

These reference documents are kept at the project root level for easy access by all team members and are not part of the deployed application.

---

## License

Copyright © 2025 AfriBiobank. All rights reserved.

This project is licensed under the terms specified in the LICENSE file.

---

## Acknowledgments

**Developed and Maintained by AfriBiobank Open-Source Team**

Powering Africa's Healthcare with Precision and Insight.

**"The strength of the crocodile lies in the water it lives in."**

AfriBiobank is that water. Let's make sure Africa's health insight flows from its own data.

---

## Project History

### Structure Evolution

**January 7, 2025** - Project reorganization completed:

1. **Documentation Consolidation**
   - Merged `IMPLEMENTATION_SUMMARY.md` and `SETUP_GUIDE.md` into single `DOCUMENTATION.md`
   - Eliminated redundancy and created single source of truth

2. **Directory Structure**
   - Simplified to two main folders: `app/` (application) and `implementations_docs/` (reference)
   - Removed confusing nested folder structure
   - Asset files organized in `public/diagrams/`

3. **Features Implemented**
   - Complete landing page with 12+ sections
   - About page with interactive architecture diagrams
   - AI Tools showcase with 16+ tool cards
   - Real-World Impact section with use cases
   - Animated UI components throughout

### Before vs After

**Before**: Multiple scattered docs, nested folders, high redundancy
**After**: Clean 2-folder structure, single consolidated documentation, zero redundancy

---

**Ready to build the future of African healthcare!** 🌍💙

For questions or support, contact: support@afribiobank.org
