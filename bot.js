var TelegramBot = require('node-telegram-bot-api');
var token = '1745323024:AAF8NJQfOlMOPL02YHbvXALL5BozJK6WOMw';
var bot = new TelegramBot(token, {polling: true});

bot.on("polling_error", (err) => console.log(err));
bot.on("message",function(msg){
bot.sendMessage(msg.chat.id,rep, {msg.text});
});
