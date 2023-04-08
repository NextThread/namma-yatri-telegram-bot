require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
  ctx.replyWithPhoto(
    {
      url: "https://gumlet.assettype.com/swarajya%2F2023-03%2F640126c6-06aa-4182-a483-7732c4c33aa4%2FScreenshot_2023_03_24_at_11_55_15_AM.png?q=75&auto=format%2Ccompress&w=400&dpr=2.6",
    },
    {
      caption:
        "🛺 Book a cab or auto hassle-free\n💵 100% direct payment to drivers\n😇Zero commission\n🔥Ride with us today!",
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        Markup.button.webApp(
          "Book Cab",
          process.env.APP_LINK
        ),
      ]),
    }
  );
});

bot.launch();
console.log("bot has started");

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
