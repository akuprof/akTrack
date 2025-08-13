@echo off
echo 🚀 Deploying TrackDown Bot to Google Cloud Run...

REM Check if gcloud is installed
gcloud --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Google Cloud CLI is not installed. Please install it first:
    echo    https://cloud.google.com/sdk/docs/install
    pause
    exit /b 1
)

REM Check if user is authenticated
gcloud auth list --filter=status:ACTIVE --format="value(account)" | findstr . >nul
if errorlevel 1 (
    echo ❌ Not authenticated with Google Cloud. Please run:
    echo    gcloud auth login
    pause
    exit /b 1
)

REM Get project ID
for /f "tokens=*" %%i in ('gcloud config get-value project 2^>nul') do set PROJECT_ID=%%i
if "%PROJECT_ID%"=="" (
    echo ❌ No project set. Please set a project:
    echo    gcloud config set project YOUR_PROJECT_ID
    pause
    exit /b 1
)

echo 📋 Using project: %PROJECT_ID%

REM Enable required APIs
echo 🔧 Enabling required APIs...
gcloud services enable run.googleapis.com --quiet
gcloud services enable cloudbuild.googleapis.com --quiet

REM Deploy to Cloud Run
echo 🚀 Deploying to Cloud Run...
gcloud run deploy trackdown-bot --source . --platform managed --region us-central1 --allow-unauthenticated --set-env-vars BOT_TOKEN=7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag,NODE_ENV=production --quiet

REM Get the service URL
for /f "tokens=*" %%i in ('gcloud run services describe trackdown-bot --region us-central1 --format="value(status.url)"') do set SERVICE_URL=%%i

echo ✅ Deployment successful!
echo 🌐 Service URL: %SERVICE_URL%

REM Update HOST_URL
echo 🔧 Updating HOST_URL...
gcloud run services update trackdown-bot --region us-central1 --set-env-vars HOST_URL=%SERVICE_URL% --quiet

echo 🎉 TrackDown Bot is now live at: %SERVICE_URL%
echo 📱 Test your bot by sending /start to your Telegram bot!
pause
