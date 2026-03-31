#!/bin/bash

# Redis Guide - Quick Setup Script
# This script automates the Vite + React + Tailwind setup

set -e  # Exit on error

echo "🚀 Redis Guide - Quick Setup"
echo "=============================="
echo ""

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Get project name
read -p "📁 Enter project name (default: redis-guide): " PROJECT_NAME
PROJECT_NAME=${PROJECT_NAME:-redis-guide}

echo ""
echo "📦 Creating new Vite + React project..."
npm create vite@latest "$PROJECT_NAME" -- --template react

cd "$PROJECT_NAME"

echo ""
echo "📥 Installing dependencies..."
npm install

echo ""
echo "🎨 Setting up Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo ""
echo "💿 Installing Framer Motion..."
npm install framer-motion

echo ""
echo "📝 Setting up project structure..."

# Create src directory if it doesn't exist
mkdir -p src

# Create components directory
mkdir -p src/components

echo ""
echo "✨ Configuration complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Copy the following files to your project:"
echo "      - redis-guide.jsx → src/App.jsx"
echo "      - src-index.css → src/index.css"
echo "      - src-main.jsx → src/main.jsx"
echo "      - tailwind.config.js (replace existing)"
echo "      - vite.config.js (replace existing)"
echo ""
echo "   2. Update src/index.css with Tailwind imports"
echo "   3. Start the development server:"
echo "      npm run dev"
echo ""
echo "🌐 The app will open at http://localhost:5173/"
echo ""
echo "📚 For more details, see SETUP_GUIDE.md"
echo ""
echo "🎉 Ready to go! Happy coding!"
