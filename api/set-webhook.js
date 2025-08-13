const TelegramBot = require('node-telegram-bot-api');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const botToken = process.env.BOT_TOKEN || '7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag';
  
  if (!botToken) {
    return res.status(500).json({ error: 'Bot token not found' });
  }

  const bot = new TelegramBot(botToken, { polling: false });

  try {
    const webhookUrl = 'https://ak-track.vercel.app/api/webhook';
    await bot.setWebhook(webhookUrl);
    
    return res.json({ 
      success: true, 
      webhookUrl,
      message: 'Webhook set successfully!'
    });
  } catch (error) {
    console.error('Set webhook error:', error);
    return res.status(500).json({ error: error.message });
  }
};
