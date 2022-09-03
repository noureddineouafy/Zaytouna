const os = require("os");
const bots = require("../lib/perfix");
const { runtime } = require("../lib/Function");
const lang = bots.getString("system_stats");
const speed = require("performance-now");

var ov_time = new Date().toLocaleString("EN", { timeZone: "Asia/Kolkata" }); // .split(' ')[1]

bots.bot(
  {
    pattern: ["alive", "bot", "system_status"],
    desc: "to know this bot is alive",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
    try {
      let timestampe = speed();
      let Wspeed = speed() - timestampe;
      const Footer = bots.config.exif.footer;
      const Content = `┌─❖
│「 𝚑𝚒 𝚋𝚛𝚘/𝚜𝚒𝚜 」
└┬❖ 「 ${message.client.pushName} 」
┌┤✑  ɪᴀᴍ ᴀʟɪᴠᴇ ʙʀᴏ
│└───────────────┈ ⳹
│ 「 BOT INFO 」
│ ✪ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│ ✫ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ɪɴʀʟ-ᴍᴅ
│ ✯ 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ɪɴʀʟ
│ ★ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${bots.config.exif.owner[0]}
│ ߷ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│  𖦹 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│ 𖧷 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${global.mydb.users.length}
│ 𖣘 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁𝘀 : ${global.mydb.hits}
└┬──────────────┈ ⳹
 │✑  D & T : ${ov_time}
 │✑  ɪɴʀʟ-ʙᴏᴛ
 └───────────────┈ ⳹`;

      const buttons = [
        { buttonId: ".urls", buttonText: { displayText: "ᴜʀʟꜱ" }, type: 1, },
        { buttonId: ".creater", buttonText: { displayText: "ᴄʀᴇᴀᴛᴇʀ" }, type: 1, },
        { buttonId: ".menu", buttonText: { displayText: "ᴍᴇɴᴜ" }, type: 1, },
      ]


    const templateButtons = {
      image: { url: bots.config.image.url.D_E_TMB },
      caption: Content,
      footer: bots.config.exif.footer,
      buttons,
    };

    await client.sendMessage( message.from, templateButtons, { quoted: message })
    global.catchError = false;
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
  }
);
