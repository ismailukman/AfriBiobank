# AfriBiobank Platform

> Powering Africa's Healthcare with Precision and Insight

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌍 Overview

AfriBiobank is Africa's premier medical imaging biobank—a collaborative platform that connects hospitals, researchers, and AI developers across the continent. Through cutting-edge federated learning technology, we enable institutions to train AI systems together while keeping patient data secure and local.

**Live Site**: [https://afribiobank.web.app](https://afribiobank.web.app)

## 📁 Repository Structure

```
AfriBioBank/
├── app/                    # Next.js application (main codebase)
└── implementations_docs/   # Reference documentation (not deployed)
```

## 🚀 Quick Start

```bash
# Navigate to app directory
cd app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

## 🔥 Firebase Deployment

This project is configured for automatic deployment to Firebase Hosting via GitHub Actions.

### Automatic Deployment

Every push to the `main` branch automatically triggers a deployment to Firebase Hosting.

### Manual Deployment

```bash
cd app

# Build the app
npm run build

# Deploy to Firebase (requires Firebase CLI)
firebase deploy --only hosting
```

## 📚 Documentation

- **[App README](app/README.md)** - Detailed application documentation
- **[DOCUMENTATION](app/DOCUMENTATION.md)** - Complete setup and deployment guide

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **State Management**: Zustand, React Query
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions

## 🤝 Contributing

We welcome contributions! See [app/DOCUMENTATION.md](app/DOCUMENTATION.md) for development guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Website**: https://afribiobank.org
- **Email**: support@afribiobank.org
- **GitHub**: https://github.com/ismailukman/AfriBiobank

## 📄 License

Copyright © 2025 AfriBiobank. All rights reserved.

---

<div align="center">

**"The strength of the crocodile lies in the water it lives in."**

*AfriBiobank is that water. Let's make sure Africa's health insight flows from its own data.*

Developed and Maintained by AfriBiobank Open-Source Team

</div>
