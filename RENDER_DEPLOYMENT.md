# TrackDown Bot - Render Deployment Guide

## 🚀 Deploy to Render

Render is an excellent platform for Node.js applications and supports long-running processes, making it perfect for Telegram bots.

## 📋 Prerequisites

1. ✅ **GitHub Account**: Your code is in a GitHub repository
2. ✅ **Render Account**: Sign up at [render.com](https://render.com)
3. ✅ **Bot Token**: Your Telegram bot token is configured

## 🔧 Deployment Steps

### Step 1: Connect GitHub to Render

1. Go to [render.com](https://render.com) and sign up/login
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account if not already connected
4. Select your repository: `akuprof/akTrack`

### Step 2: Configure the Web Service

Fill in the following details:

- **Name**: `trackdown-bot` (or any name you prefer)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Step 3: Set Environment Variables

Click on **"Environment"** tab and add:

```
BOT_TOKEN = 7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag
NODE_ENV = production
```

**Important**: The `HOST_URL` will be automatically set by Render after deployment.

### Step 4: Deploy

1. Click **"Create Web Service"**
2. Render will automatically build and deploy your application
3. Wait for the deployment to complete (usually 2-3 minutes)

### Step 5: Update Host URL

After deployment:

1. Copy your Render URL (e.g., `https://trackdown-bot.onrender.com`)
2. Go to **Environment** tab
3. Add/Update the `HOST_URL` variable:
   ```
   HOST_URL = https://your-app-name.onrender.com
   ```
4. Click **"Save Changes"** - this will trigger a redeploy

## 🎯 Test Your Bot

Once deployed:

1. **Send `/start`** to your bot on Telegram
2. **Test the bot functionality**:
   - Send `/create`
   - Enter a URL (e.g., `https://google.com`)
   - You should receive tracking links

## 🔍 Troubleshooting

### Bot Not Responding?

1. **Check Render logs**:
   - Go to your Render dashboard
   - Click on your service
   - Go to **"Logs"** tab
   - Look for any errors

2. **Verify environment variables**:
   - Make sure `BOT_TOKEN` is set correctly
   - Ensure `HOST_URL` is updated with your Render URL

3. **Check bot status**:
   - Visit your Render URL (e.g., `https://trackdown-bot.onrender.com`)
   - You should see: `{"status": "TrackDown Bot is running on Render!", "hostURL": "..."}`

### Common Issues

1. **"Bot token is missing"**:
   - Make sure `BOT_TOKEN` is set in Render environment variables

2. **"Failed to connect to bot"**:
   - Verify your bot token is correct
   - Check if the bot is active in Telegram

3. **Links not working**:
   - Ensure `HOST_URL` is set to your Render URL
   - Wait for the redeploy after updating environment variables

## 📱 Bot Commands

- `/start` - Start the bot
- `/create` - Create a new tracking link
- `/help` - Show help information

## 🔗 Important URLs

- **Main App**: `https://your-app-name.onrender.com/`
- **Status Check**: `https://your-app-name.onrender.com/`

## 💡 Advantages of Render

1. **Long-running processes**: Supports polling for Telegram bots
2. **Free tier**: Generous free tier for development
3. **Auto-deploy**: Automatic deployments from GitHub
4. **Easy scaling**: Can upgrade to paid plans when needed
5. **Good performance**: Fast deployments and reliable uptime

## 🎯 Next Steps

1. **Monitor the logs** in Render dashboard
2. **Test all bot features** thoroughly
3. **Set up monitoring** if needed
4. **Consider upgrading** to paid plan for production use

## 📞 Support

If you encounter any issues:
1. Check the Render logs
2. Verify environment variables are set correctly
3. Ensure your bot token is valid
4. Check Render's status page for any platform issues

---

**Your TrackDown bot is now ready to use on Render! 🎉**
