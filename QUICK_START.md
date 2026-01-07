# Quick Start: Push to GitHub & Deploy to Firebase

## 🚀 Step-by-Step Commands

### 1. Initialize Git and Push to GitHub

```bash
# Navigate to project root
cd /Users/ismaila/Documents/E-Others/AI_Dev/AfriBioBank

# Initialize git
git init

# Add all files (.claude folder will be excluded automatically)
git add .

# Check what will be committed
git status

# Create initial commit
git commit -m "Initial commit: AfriBiobank platform"

# Add remote repository
git remote add origin https://github.com/ismailukman/AfriBiobank.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Set Up Firebase Service Account

1. **Generate Service Account Key**:
   - Go to: https://console.firebase.google.com/u/0/project/afribiobank/settings/serviceaccounts/adminsdk
   - Click "Generate new private key"
   - Download the JSON file

2. **Add to GitHub Secrets**:
   - Go to: https://github.com/ismailukman/AfriBiobank/settings/secrets/actions
   - Click "New repository secret"
   - Name: `FIREBASE_SERVICE_ACCOUNT_AFRIBIOBANK`
   - Value: Paste entire JSON content
   - Click "Add secret"

### 3. Enable Firebase Hosting

1. Go to Firebase Console: https://console.firebase.google.com/u/0/project/afribiobank/hosting
2. Click "Get Started" if hosting is not enabled
3. Follow the prompts

### 4. Trigger First Deployment

```bash
# Make a small change to trigger deployment
cd /Users/ismaila/Documents/E-Others/AI_Dev/AfriBioBank

# Add a space or comment to trigger rebuild
echo "" >> app/README.md

# Commit and push
git add .
git commit -m "Trigger initial Firebase deployment"
git push
```

### 5. Monitor Deployment

- **GitHub Actions**: https://github.com/ismailukman/AfriBiobank/actions
- **Firebase Console**: https://console.firebase.google.com/u/0/project/afribiobank/hosting

### 6. View Live Site

Once deployed, your site will be live at:
- **Firebase URL**: https://afribiobank.web.app
- **Alternative**: https://afribiobank.firebaseapp.com

---

## ✅ What's Configured

- ✅ Firebase Hosting with static export
- ✅ GitHub Actions auto-deployment on push to main
- ✅ .gitignore excludes .claude folder and implementations_docs
- ✅ Next.js configured for static export
- ✅ Optimized caching for assets

## 📁 What Gets Pushed to GitHub

**Included**:
- app/ (all application code)
- README.md
- DEPLOYMENT.md
- .gitignore

**Excluded** (via .gitignore):
- .claude/ ✅
- implementations_docs/ ✅
- node_modules/
- .next/
- out/
- .env

---

## 🔥 Next Steps

1. **Custom Domain** (optional):
   - Firebase Console → Hosting → Add custom domain
   - Configure DNS records

2. **Environment Variables** (if needed):
   - Add GitHub secrets for API URLs
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_WS_URL`

3. **Future Backend**:
   - Firebase Authentication
   - Firebase Firestore
   - Firebase Functions

---

**Questions?** See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed guide.
