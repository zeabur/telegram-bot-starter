import { Bot } from "grammy";

const bot = new Bot(
  process.env.TELEGRAM_BOT_TOKEN || "your_telegram_bot_token",
);

bot.on("message:text", async (ctx) => {
  console.log("Message: ", ctx.message.text);
  
  const response = "Hello, I'm a bot!";

  ctx.reply(response);
});

bot.start();
