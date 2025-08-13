# TrackDown Deployment Guide

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A Telegram bot token from BotFather

## Setup Instructions

### 1. Get Telegram Bot Token
1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Copy the API token provided

### 2. Configure the Application
1. Open `config.js` file
2. Replace `YOUR_TELEGRAM_BOT_TOKEN_HERE` with your actual bot token
3. Update `hostURL` with your deployment URL (e.g., `https://yourdomain.com` or `http://localhost:3000` for local testing)

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Application
```bash
npm start
```

## Deployment Options

### Local Development
- Use `http://localhost:3000` as hostURL in config.js
- Run `npm start` to start the server

### Cloud Deployment (Heroku, Railway, etc.)
1. Update `hostURL` in config.js to your production URL
2. Set environment variables:
   - `BOT_TOKEN`: Your Telegram bot token
3. Deploy using your preferred platform

### Docker Deployment
1. Create a Dockerfile (see below)
2. Build and run the container

## Security Notes
- Keep your bot token secure and never commit it to version control
- This tool is for educational purposes only
- Use responsibly and in compliance with local laws

## Troubleshooting
- Ensure your bot token is correct
- Check that the hostURL is accessible
- Verify all dependencies are installed
- Check console logs for error messages
