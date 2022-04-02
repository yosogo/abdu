var TelegramBot = require('node-telegram-bot-api');
var token = '1745323024:AAF8NJQfOlMOPL02YHbvXALL5BozJK6WOMw';
var bot = new TelegramBot(token, {polling: true});

bot.on("polling_error", (err) => console.log(err));
bot.on("message",function(msg){
  txt = msg.text;
  txt=txt.substring(0,txt.length-254);
  
bot.sendMessage(msg.chat.id, txt);
});
