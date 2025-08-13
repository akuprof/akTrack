# TrackDown - Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A Telegram bot token from BotFather

### 1. Get Your Telegram Bot Token
1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Copy the API token provided

### 2. Configure the Application
1. Open `config.js` file
2. Replace `YOUR_TELEGRAM_BOT_TOKEN_HERE` with your actual bot token
3. Update `hostURL` with your deployment URL:
   - For local testing: `http://localhost:3000`
   - For production: `https://yourdomain.com`

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Application

#### Windows
```bash
start.bat
```

#### Linux/Mac
```bash
./start.sh
```

#### Manual Start
```bash
npm start
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)
1. Create a `.env` file with your bot token:
   ```
   BOT_TOKEN=your_telegram_bot_token_here
   ```
2. Run the application:
   ```bash
   docker-compose up -d
   ```

### Using Docker directly
1. Build the image:
   ```bash
   docker build -t trackdown .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 -e BOT_TOKEN=your_token trackdown
   ```

## ☁️ Cloud Deployment

### Heroku
1. Create a Heroku app
2. Set environment variables:
   ```bash
   heroku config:set BOT_TOKEN=your_telegram_bot_token_here
   ```
3. Deploy:
   ```bash
   git push heroku main
   ```

### Railway
1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically

### Vercel
1. Import your repository
2. Set environment variables
3. Deploy

## 🔧 Configuration Options

### config.js
```javascript
module.exports = {
    botToken: 'YOUR_TELEGRAM_BOT_TOKEN_HERE',
    hostURL: 'http://localhost:3000',
    use1pt: false
};
```

### Environment Variables
- `BOT_TOKEN`: Your Telegram bot token
- `NODE_ENV`: Set to 'production' for production deployment

## 📱 Using the Bot

1. Start a chat with your bot on Telegram
2. Send `/start` to begin
3. Use `/create` to create tracking links
4. Follow the bot's instructions to set up tracking

## 🔒 Security Notes

⚠️ **IMPORTANT DISCLAIMER**
- This tool is for **EDUCATIONAL PURPOSES ONLY**
- Use responsibly and in compliance with local laws
- Keep your bot token secure
- Never commit sensitive information to version control

## 🛠️ Troubleshooting

### Common Issues

1. **Bot not responding**
   - Check if bot token is correct
   - Ensure the application is running
   - Verify internet connection

2. **Links not working**
   - Check if hostURL is correctly configured
   - Ensure the server is accessible from the internet
   - Verify port forwarding if running locally

3. **Dependencies issues**
   - Delete `node_modules` and run `npm install` again
   - Check Node.js version compatibility

### Logs
Check the console output for error messages and debugging information.

## 📁 Project Structure

```
TrackDown/
├── index.js          # Main application file
├── config.js         # Configuration file
├── package.json      # Dependencies
├── views/            # EJS templates
│   ├── cloudflare.ejs
│   └── webview.ejs
├── Dockerfile        # Docker configuration
├── docker-compose.yml # Docker Compose setup
├── start.bat         # Windows startup script
├── start.sh          # Linux/Mac startup script
└── README_DEPLOYMENT.md # This file
```

## 🤝 Support

For issues and questions:
- Check the original repository: https://github.com/Th30neAnd0nly/TrackDown
- Review the deployment documentation
- Check console logs for error messages

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
