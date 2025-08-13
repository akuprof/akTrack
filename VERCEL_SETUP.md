# TrackDown Bot - Vercel Deployment Guide

## 🚀 Quick Setup for Vercel

Your TrackDown bot is now deployed on Vercel at: `https://ak-track.vercel.app/`

## 📋 Prerequisites

1. ✅ **Bot Token**: Your Telegram bot token is already configured
2. ✅ **Vercel Account**: You have a Vercel account
3. ✅ **GitHub Repository**: Your code is in a GitHub repository

## 🔧 Setup Steps

### Step 1: Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project (`ak-track`)
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

```
BOT_TOKEN = 7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag
HOST_URL = https://ak-track.vercel.app
```

### Step 2: Set Up Webhook

After deployment, you need to set up the webhook for your bot:

1. **Visit the webhook setup URL**:
   ```
   https://ak-track.vercel.app/set-webhook
   ```

2. **You should see a response like**:
   ```json
   {
     "success": true,
     "webhookUrl": "https://ak-track.vercel.app/webhook"
   }
   ```

### Step 3: Test Your Bot

1. **Send `/start` to your bot** on Telegram
2. **Test the bot functionality**:
   - Send `/create`
   - Enter a URL (e.g., `https://google.com`)
   - You should receive tracking links

## 🔍 Troubleshooting

### Bot Not Responding?

1. **Check webhook status**:
   ```
   https://ak-track.vercel.app/
   ```
   You should see: `{"status": "TrackDown Bot is running on Vercel!", "webhook": "..."}`

2. **Remove and re-set webhook**:
   ```
   https://ak-track.vercel.app/remove-webhook
   https://ak-track.vercel.app/set-webhook
   ```

3. **Check Vercel logs**:
   - Go to your Vercel dashboard
   - Click on your project
   - Go to **Functions** tab
   - Check for any errors

### Common Issues

1. **"Bot token is missing"**:
   - Make sure `BOT_TOKEN` is set in Vercel environment variables

2. **"Failed to connect to bot"**:
   - Verify your bot token is correct
   - Check if the bot is active in Telegram

3. **Webhook not working**:
   - Ensure your Vercel URL is accessible
   - Check if the webhook URL is properly set

## 📱 Bot Commands

- `/start` - Start the bot
- `/create` - Create a new tracking link
- `/help` - Show help information

## 🔗 Important URLs

- **Main App**: `https://ak-track.vercel.app/`
- **Set Webhook**: `https://ak-track.vercel.app/set-webhook`
- **Remove Webhook**: `https://ak-track.vercel.app/remove-webhook`
- **Webhook Endpoint**: `https://ak-track.vercel.app/webhook`

## 🎯 Next Steps

1. **Test the bot** by sending `/start` on Telegram
2. **Create a tracking link** using `/create`
3. **Monitor the logs** in Vercel dashboard
4. **Customize the bot** if needed

## 📞 Support

If you encounter any issues:
1. Check the Vercel function logs
2. Verify environment variables are set correctly
3. Ensure the webhook is properly configured

---

**Your TrackDown bot is now ready to use on Vercel! 🎉**
