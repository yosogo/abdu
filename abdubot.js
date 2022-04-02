var TelegramBot = require('node-telegram-bot-api');
var tkn = '1745323024:AAF8NJQfOlMOPL02YHbvXALL5BozJK6WOMw';
var btn = new TelegramBot(tkn, {polling: true});

btn.on("polling_error", (err) => console.log(err));
btn.on("message",function(msg){
btn.sendMessage(msg.chat.id,rep, {msg.text});
});
