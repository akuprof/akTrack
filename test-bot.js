const TelegramBot = require('node-telegram-bot-api');

// Test bot token
const botToken = '7233219216:AAFMv7UmrS8_t1j1h5BMv3lkUPF7sPHE3ag';

console.log('🔍 Testing bot token:', botToken.substring(0, 10) + '...');

const bot = new TelegramBot(botToken, {polling: false});

bot.getMe()
  .then((botInfo) => {
    console.log('✅ Bot token is valid!');
    console.log('📱 Bot username: @' + botInfo.username);
    console.log('🆔 Bot ID: ' + botInfo.id);
    console.log('📝 Bot name: ' + botInfo.first_name);
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Bot token is invalid:', error.message);
    process.exit(1);
  });
