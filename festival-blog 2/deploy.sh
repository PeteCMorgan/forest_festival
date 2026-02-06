#!/bin/bash

echo "🌿 Common Grounds Festival Blog - Quick Deploy Script"
echo "====================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔨 Building the site..."
npm run build

echo ""
echo "✅ Build complete!"
echo ""
echo "🚀 Ready to deploy! Choose your method:"
echo ""
echo "Option 1 - Deploy with Vercel CLI:"
echo "  npm install -g vercel"
echo "  vercel --prod"
echo ""
echo "Option 2 - Push to GitHub then deploy:"
echo "  git init"
echo "  git add ."
echo "  git commit -m 'Initial commit'"
echo "  git remote add origin YOUR-REPO-URL"
echo "  git push -u origin main"
echo "  Then go to vercel.com and import your repo"
echo ""
echo "Option 3 - Test locally first:"
echo "  npm run dev"
echo "  Open http://localhost:3000"
echo ""
