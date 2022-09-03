const yts = require("yt-search");
const bots = require("../lib/perfix");
const lang = bots.getString("scrapers");
let { isUrl } = require("../lib/Function");
const { yta, ytv } = require("../lib/y2Mate");

bots.bot(
  {
    pattern: ["ytmp3", "song", "mp3","music"],
    desc: "you can dowloade audio from youtube",
    usage: "<url>",
    sucReact: "📥",
    category: ["downloade", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, `Example : ${ message.client.prefix + message.client.command} https://youtube.com/watch 128kbps`, message.key, message ); }
    try {
      let quality = message.client.args[1] ? message.client.args[1] : "320kbps";
      let media = await yta(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      let caption = `♻ ᴛɪᴛɪʟᴇ : ${media.title}\n♻ ꜱɪᴢᴇ : ${media.filesizeF}\n♻ ᴜʀʟ : ${message.client.args[0]}\n♻ ᴏᴜᴛᴩᴜᴛ : MP3\n♻ ᴄᴏʟɪᴛy : ${message.client.args[1] || "320kbps"}\n\n${bots.config.exif.cap}`;
      await client.sendMessage( message.from, { image: { url: media.thumb }, caption }, { quoted: message } );
      const aMsg = await client.sendMessage( message.from, { audio: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}.mp3`, }, { quoted: message } );
      await client.sendReact(message.from, "🎧", aMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
    }
  }
);

bots.bot(
  {
    pattern: ["ytmp4", "video", "mp4"],
    desc: "you can dowloade video from youtube",
    usage: "<url>",
    sucReact: "📥",
    category: ["downloade", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, `Example : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=qulity 360p`, message.key, message ); }
    // if (isUrl(message.client.args[0])) { global.catchError = true; return await client.sendErrorMessage( message.from, `Enter url\nExample : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=qulity%27 360p`, message.key, message );}
    try {
      let quality = message.client.args[1] ? message.client.args[1] : "360p";
      let media = await ytv(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      let caption = `♻ ᴛɪᴛɪʟᴇ : ${media.title}\n♻ ꜱɪᴢᴇ : ${media.filesizeF}\n♻ ᴜʀʟ : ${message.client.args[0]}\n♻ ᴏᴜᴛᴩᴜᴛ : MP4\n♻ ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${message.client.args[1] || "360p"}`;
      const vMsg = await client.sendMessage( message.from, { video: { url: media.dl_link }, mimetype: "video/mp4", fileName: `${media.title}.mp4`, caption,}, { quoted: message });
      await client.sendReact(message.from, "🎞", vMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
    }
  }
);

bots.bot(
  {
    pattern: ["ytmp3s", "getmusics", "ytaudios"],
    dontAddCommandList: true,
    sucReact: "📥",
    category: ["downloade", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, `Example : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`, message.key, message ); }
    try {
      await client.sendMessage( message.from, { text: bots.infoMessage('Downloading Audio 📥') }, { quoted: bots.config.quoted.product });
      let quality = message.client.args[1] ? message.client.args[1] : "320kbps";
      let media = await yta(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      const aMsg = await client.sendMessage( message.from, { audio: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}.mp3`, }, { quoted: message } );
      await client.sendReact(message.from, "🎧", aMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
    }
  }
);

bots.bot(
  {
    pattern: ["ytmp4s", "getvideos", "ytvideos"],
    dontAddCommandList: true,
    sucReact: "📥",
    category: ["downloade", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, `Example : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=qᴜʟɪᴛy%27 360p`, message.key, message ); }
    try {
      await client.sendMessage( message.from, { text: bots.infoMessage('Downloading Video 📥') }, { quoted: bots.config.quoted.product });
  let quality = message.client.args[1] ? message.client.args[1] : "360p";
      let media = await ytv(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      let caption = `${bots.config.exif.cap}`;
      const vMsg = await client.sendMessage( message.from, { video: { url: media.dl_link }, mimetype: "video/mp4", fileName: `${media.title}.mp4`, caption,}, { quoted: message });
      await client.sendReact(message.from, "🎞", vMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
    }
  }
);
