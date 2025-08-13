# 🚀 Quick Deploy to Railway (5 minutes)

## Step 1: Prepare Your Code
1. Make sure all your changes are saved
2. Your bot token is already configured: `7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag`

## Step 2: Deploy to Railway
1. **Go to [Railway.app](https://railway.app)**
2. **Sign up with GitHub** (free)
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your TrackDown repository**
6. **Add Environment Variables:**
   ```
   BOT_TOKEN=7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag
   HOST_URL=https://your-app-name.railway.app
   ```
7. **Click "Deploy"**

## Step 3: Test Your Bot
1. Wait for deployment to complete (2-3 minutes)
2. Copy your Railway URL (e.g., `https://trackdown-production.up.railway.app`)
3. Update the `HOST_URL` environment variable with your actual URL
4. Open Telegram and find your bot
5. Send `/start` to test

## ✅ Done!
Your TrackDown bot is now live in the cloud!

## 🔧 If You Need Help
- Check Railway logs for any errors
- Make sure your bot token is correct
- Verify the HOST_URL matches your Railway URL
- Test the web server by visiting your Railway URL

## 📱 Your Bot Commands
- `/start` - Welcome message
- `/create` - Create tracking links
- `/help` - Get help

## 🌐 Your Deployment URL
Once deployed, your app will be available at:
`https://your-app-name.railway.app`

Replace `your-app-name` with the actual name Railway gives you.
