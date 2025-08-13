# 🚀 Deploy TrackDown to Railway NOW!

## Quick Steps (5 minutes)

### Step 1: Fork the Repository
1. Go to https://github.com/Th30neAnd0nly/TrackDown
2. Click the "Fork" button (top right)
3. This creates your own copy of the repository

### Step 2: Deploy to Railway
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub (free)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your forked TrackDown repository
6. Click "Deploy"

### Step 3: Configure Environment Variables
1. In Railway dashboard, go to your project
2. Click "Variables" tab
3. Add these environment variables:
   ```
   BOT_TOKEN=7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag
   HOST_URL=https://your-app-name.railway.app
   ```
4. Replace `your-app-name` with your actual Railway app name

### Step 4: Update HOST_URL
1. After deployment, copy your Railway URL
2. Go back to Variables
3. Update HOST_URL with your actual Railway URL
4. Redeploy if needed

### Step 5: Test Your Bot
1. Open Telegram
2. Search for your bot username
3. Send `/start`
4. Send `/create`
5. Enter a test URL like `https://google.com`

## ✅ Done!
Your TrackDown bot is now live on Railway!

## 🔧 Troubleshooting
- If deployment fails, check Railway logs
- Make sure BOT_TOKEN is correct
- Verify HOST_URL matches your Railway URL
- Check that all files are committed to your fork

## 📱 Your Bot Commands
- `/start` - Welcome message
- `/create` - Create tracking links
- `/help` - Get help

## 🌐 Your Deployment URL
Once deployed, your app will be available at:
`https://your-app-name.railway.app`

## 💡 Pro Tips
- Railway gives you a free tier with 500 hours/month
- Your bot will be online 24/7
- Automatic HTTPS included
- Easy scaling if needed
