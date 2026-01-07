# Firebase Deployment Guide

Complete guide for deploying AfriBiobank to Firebase Hosting.

## Prerequisites

1. **GitHub Repository**: https://github.com/ismailukman/AfriBiobank
2. **Firebase Project**: afribiobank (https://console.firebase.google.com/u/0/project/afribiobank/overview)
3. **Firebase CLI**: Install globally with `npm install -g firebase-tools`

## Initial Setup

### Step 1: Push Code to GitHub

```bash
# Navigate to project root
cd /Users/ismaila/Documents/E-Others/AI_Dev/AfriBioBank

# Initialize git (if not already initialized)
git init

# Add all files (excludes .claude and implementations_docs via .gitignore)
git add .

# Create initial commit
git commit -m "Initial commit: AfriBiobank platform with Firebase hosting"

# Add remote repository
git remote add origin https://github.com/ismailukman/AfriBiobank.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Set Up Firebase Service Account

1. Go to Firebase Console: https://console.firebase.google.com/u/0/project/afribiobank/settings/serviceaccounts/adminsdk

2. Click "Generate new private key"

3. Save the JSON file securely

4. Go to GitHub repository settings:
   - Navigate to: https://github.com/ismailukman/AfriBiobank/settings/secrets/actions

5. Click "New repository secret"
   - Name: `FIREBASE_SERVICE_ACCOUNT_AFRIBIOBANK`
   - Value: Paste the entire contents of the downloaded JSON file

6. Click "Add secret"

### Step 3: Configure Environment Variables (Optional)

If you need custom API URLs:

1. Go to GitHub repository secrets
2. Add these secrets:
   - `NEXT_PUBLIC_API_URL`: Your API endpoint (e.g., https://api.afribiobank.org/api/v1)
   - `NEXT_PUBLIC_WS_URL`: Your WebSocket endpoint (e.g., wss://api.afribiobank.org/ws)

## Automatic Deployment

Once set up, deployments happen automatically:

1. **Push to main branch** → Triggers GitHub Actions
2. **GitHub Actions** → Builds the Next.js app
3. **Firebase Hosting** → Deploys the built app
4. **Live site** → Updates at afribiobank.web.app

### Monitoring Deployments

- **GitHub Actions**: https://github.com/ismailukman/AfriBiobank/actions
- **Firebase Console**: https://console.firebase.google.com/u/0/project/afribiobank/hosting

## Manual Deployment

If you need to deploy manually:

```bash
# Navigate to app directory
cd app

# Login to Firebase
firebase login

# Build the app
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

## Deployment Workflow

```
┌─────────────┐
│   Git Push  │
│   to main   │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ GitHub Actions  │
│  - Checkout     │
│  - Install deps │
│  - Build app    │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│ Firebase Deploy │
│  - Upload files │
│  - Update site  │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│   Live Site     │
│ afribiobank     │
│  .web.app       │
└─────────────────┘
```

## Custom Domain Setup

To use a custom domain (e.g., afribiobank.org):

1. Go to Firebase Console → Hosting → Add custom domain
2. Follow the DNS configuration steps
3. Firebase will automatically provision SSL certificate

## Troubleshooting

### Build Fails

Check GitHub Actions logs:
- https://github.com/ismailukman/AfriBiobank/actions

Common issues:
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run type-check`
- Build errors: Run `npm run build` locally

### Deployment Fails

1. Verify Firebase service account secret is correct
2. Check Firebase project ID matches in `.firebaserc`
3. Ensure Firebase Hosting is enabled in Firebase Console

### Site Not Updating

1. Check GitHub Actions completed successfully
2. Clear browser cache
3. Wait 2-3 minutes for CDN propagation
4. Check Firebase Console for deployment status

## Environment-Specific Builds

### Development
```bash
cd app
npm run dev
# Runs on http://localhost:3000
```

### Production Preview
```bash
cd app
npm run build
# Creates static export in /out folder
# Test with: npx serve out
```

### Firebase Preview Channels

Deploy to a preview channel for testing:

```bash
firebase hosting:channel:deploy preview
```

## Rollback

To rollback to a previous version:

1. Go to Firebase Console → Hosting → Release history
2. Find the previous version
3. Click the three dots → "Rollback"

Or via CLI:
```bash
firebase hosting:releases:list
firebase hosting:rollback
```

## Performance Optimization

The deployment is optimized for:
- ✅ Static export (no server required)
- ✅ Image optimization disabled for static hosting
- ✅ CDN caching for assets
- ✅ Gzip compression
- ✅ HTTP/2 support

## Security

- All traffic served over HTTPS
- Automatic SSL certificate renewal
- Firebase security rules (can be added later)

## Next Steps

After successful deployment:

1. ✅ Verify site is live at afribiobank.web.app
2. ✅ Set up custom domain (optional)
3. ✅ Configure Firebase Authentication (for future backend)
4. ✅ Set up Firebase Firestore (for future backend)
5. ✅ Monitor site performance in Firebase Console

---

## Support

For deployment issues:
- **Firebase Support**: https://firebase.google.com/support
- **GitHub Actions**: https://docs.github.com/en/actions
- **Project Email**: support@afribiobank.org

---

**Last Updated**: January 7, 2025
