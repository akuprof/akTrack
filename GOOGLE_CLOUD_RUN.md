# TrackDown Bot - Google Cloud Run Deployment Guide

## 🚀 Deploy to Google Cloud Run

Google Cloud Run is a fully managed serverless platform that automatically scales your applications. It's perfect for Telegram bots and offers excellent performance and reliability.

## 📋 Prerequisites

1. ✅ **Google Cloud Account**: Sign up at [cloud.google.com](https://cloud.google.com)
2. ✅ **Google Cloud CLI**: Install from [cloud.google.com/sdk](https://cloud.google.com/sdk)
3. ✅ **Docker**: Install from [docker.com](https://docker.com)
4. ✅ **GitHub Repository**: Your code is in `akuprof/akTrack`

## 🔧 Deployment Steps

### Step 1: Install and Setup Google Cloud CLI

1. **Install Google Cloud CLI**:
   ```bash
   # Windows (using PowerShell)
   (New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
   & $env:Temp\GoogleCloudSDKInstaller.exe
   ```

2. **Initialize Google Cloud CLI**:
   ```bash
   gcloud init
   ```

3. **Enable required APIs**:
   ```bash
   gcloud services enable run.googleapis.com
   gcloud services enable cloudbuild.googleapis.com
   ```

### Step 2: Create a New Project (Optional)

If you don't have a project:
```bash
gcloud projects create trackdown-bot-[YOUR-UNIQUE-ID]
gcloud config set project trackdown-bot-[YOUR-UNIQUE-ID]
```

### Step 3: Build and Deploy

1. **Build and deploy in one command**:
   ```bash
   gcloud run deploy trackdown-bot \
     --source . \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --set-env-vars BOT_TOKEN=7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag,NODE_ENV=production
   ```

2. **Or build and deploy separately**:
   ```bash
   # Build the container
   gcloud builds submit --tag gcr.io/[PROJECT-ID]/trackdown-bot
   
   # Deploy to Cloud Run
   gcloud run deploy trackdown-bot \
     --image gcr.io/[PROJECT-ID]/trackdown-bot \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --set-env-vars BOT_TOKEN=7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag,NODE_ENV=production
   ```

### Step 4: Update Host URL

After deployment, you'll get a URL like `https://trackdown-bot-xxxxx-uc.a.run.app`. Update the HOST_URL:

```bash
gcloud run services update trackdown-bot \
  --region us-central1 \
  --set-env-vars HOST_URL=https://trackdown-bot-xxxxx-uc.a.run.app
```

## 🎯 Test Your Bot

Once deployed:

1. **Send `/start`** to your bot on Telegram
2. **Test the bot functionality**:
   - Send `/create`
   - Enter a URL (e.g., `https://google.com`)
   - You should receive tracking links

## 🔍 Troubleshooting

### Bot Not Responding?

1. **Check Cloud Run logs**:
   ```bash
   gcloud logs read --service=trackdown-bot --limit=50
   ```

2. **Check service status**:
   ```bash
   gcloud run services describe trackdown-bot --region us-central1
   ```

3. **Verify environment variables**:
   ```bash
   gcloud run services describe trackdown-bot --region us-central1 --format="value(spec.template.spec.containers[0].env)"
   ```

### Common Issues

1. **"Bot token is missing"**:
   - Make sure `BOT_TOKEN` is set in environment variables

2. **"Failed to connect to bot"**:
   - Verify your bot token is correct
   - Check if the bot is active in Telegram

3. **"Multiple bot instances"**:
   - Stop any local bot instances
   - Remove webhooks from other platforms

## 📱 Bot Commands

- `/start` - Start the bot
- `/create` - Create a new tracking link
- `/help` - Show help information

## 🔗 Important URLs

- **Main App**: `https://trackdown-bot-xxxxx-uc.a.run.app/`
- **Status Check**: `https://trackdown-bot-xxxxx-uc.a.run.app/`

## 💡 Advantages of Google Cloud Run

1. **Fully managed**: No server management required
2. **Auto-scaling**: Scales to zero when not in use
3. **Pay per use**: Only pay for actual usage
4. **Global CDN**: Fast worldwide access
5. **Security**: Built-in security features
6. **Free tier**: Generous free tier (2 million requests/month)

## 🎯 Next Steps

1. **Monitor usage** in Google Cloud Console
2. **Set up monitoring** and alerts
3. **Configure custom domain** (optional)
4. **Set up CI/CD** with GitHub Actions

## 📞 Support

If you encounter any issues:
1. Check the Cloud Run logs
2. Verify environment variables are set correctly
3. Ensure your bot token is valid
4. Check Google Cloud status page

## 🔧 Advanced Configuration

### Custom Domain Setup

1. **Map custom domain**:
   ```bash
   gcloud run domain-mappings create \
     --service trackdown-bot \
     --domain your-domain.com \
     --region us-central1
   ```

2. **Update DNS records** as instructed

### CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Cloud Run

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to Cloud Run
      uses: google-github-actions/deploy-cloudrun@v1
      with:
        service: trackdown-bot
        region: us-central1
        env_vars: BOT_TOKEN=${{ secrets.BOT_TOKEN }},NODE_ENV=production
```

---

**Your TrackDown bot is now ready to use on Google Cloud Run! 🎉**
