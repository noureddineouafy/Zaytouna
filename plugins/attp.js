const bots = require("../lib/perfix");
const lang = bots.getString("ttp");
const axios = require("axios");

bots.bot( { pattern: ["ttp"], sucReact: "❣️", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, "need a text", message.key, message ); }
    var uri = encodeURI(message.client.text);
    try {
      var resImage = await axios.get( "https://api.xteam.xyz/ttp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) {
      global.catchError = true; 
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    await client.sendMessage( message.from, { image: Buffer.from(resImage.data), caption: bots.config.exif.cap }, { quoted: message } );
    global.catchError = false;
  }
);

bots.bot( { pattern: ["attp"], desc: "to attp cmd", sucReact: "☯", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) {global.catchError = true; return await client.sendErrorMessage(message.from,"need emojis",message.key,message);}
    var uri = encodeURI(message.client.text);
    try {
      var resSticker = await axios.get( "https://api.xteam.xyz/attp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) { 
        global.catchError = true; 
        return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    client.sendMessage( message.from, { sticker: Buffer.from(resSticker.data) }, { quoted: message } );
    global.catchError = false;
  }
);
