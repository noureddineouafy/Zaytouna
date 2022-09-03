const bots = require("../lib/perfix");

bots.bot(
  {
    pattern: ["urls"],
    dontAddCommandList: true,
    sucReact: "🎟",
  },
  async (message, client) => {
    const caption = `------- ꜱᴜᴩᴩᴏʀᴛ ɢʀᴏᴜᴩ -------

⚜ Work Group :- https://chat.whatsapp.com/GuoCHF6Wjci8rKPe6CKHsi

--------------------------------`;
    const buttons = [
        { buttonId: ".git", buttonText: { displayText: "ɢɪᴛʜᴜʙ" }, type: 1, },
    ];
    const templateButtons = {
      image: { url: bots.config.image.url.D_E_TMB },
      caption,
      footer: bots.config.exif.footer,
      buttons,
    };
    await client.sendMessage( message.from, templateButtons, { quoted: message })
    global.catchError = false;
  }
);

bots.bot(
  {
    pattern: ["group-qr-work", "groupqr"],
    dontAddCommandList: true,
    sucReact: "🔗",
  },
  async (message, client) => {
    const caption = "🎟 : *You can scan it with their whatsApp camera to jᴏɪɴg this group.*\n\n" + bots.config.exif.cap;
    const wImageUrl = "https://i.imgur.com/DyLAuEh.jpg";
    const tImageUrl = ''https://imgur.com/AelfUJg.jpg";
    const wImage = { image: { url: wImageUrl }, caption, };
    const tImage = { image: { url: tImageUrl }, caption, };
    if (message.client.command == 'group-qr-work') await client.sendMessage( message.from, wImage, { quoted: message })
    if (message.client.command == 'groupqr') await client.sendMessage( message.from, tImage, { quoted: message })
    global.catchError = false;
  }
);
