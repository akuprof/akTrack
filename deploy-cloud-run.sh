#!/bin/bash

# TrackDown Bot - Google Cloud Run Deployment Script

echo "🚀 Deploying TrackDown Bot to Google Cloud Run..."

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud CLI is not installed. Please install it first:"
    echo "   https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "❌ Not authenticated with Google Cloud. Please run:"
    echo "   gcloud auth login"
    exit 1
fi

# Get project ID
PROJECT_ID=$(gcloud config get-value project 2>/dev/null)
if [ -z "$PROJECT_ID" ]; then
    echo "❌ No project set. Please set a project:"
    echo "   gcloud config set project YOUR_PROJECT_ID"
    exit 1
fi

echo "📋 Using project: $PROJECT_ID"

# Enable required APIs
echo "🔧 Enabling required APIs..."
gcloud services enable run.googleapis.com --quiet
gcloud services enable cloudbuild.googleapis.com --quiet

# Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy trackdown-bot \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars BOT_TOKEN=7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag,NODE_ENV=production \
  --quiet

# Get the service URL
SERVICE_URL=$(gcloud run services describe trackdown-bot --region us-central1 --format="value(status.url)")

echo "✅ Deployment successful!"
echo "🌐 Service URL: $SERVICE_URL"

# Update HOST_URL
echo "🔧 Updating HOST_URL..."
gcloud run services update trackdown-bot \
  --region us-central1 \
  --set-env-vars HOST_URL=$SERVICE_URL \
  --quiet

echo "🎉 TrackDown Bot is now live at: $SERVICE_URL"
echo "📱 Test your bot by sending /start to your Telegram bot!"
