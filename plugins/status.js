// created by @inrl

const { inrl,getVar }= require('../lib/');
const fs = require('fs');


inrl({ pattern: 'send', desc: "it send wa status",sucReact: "⚒️",  category: ["owner"],type :"whatsapp"}, (async (message, client) => {
  let data = await getVar();
  let {CAPTION}=data.data[0];
  let cap;
if(!message.quoted) return message.reply("reply to image/video!")
if (message.quoted.videoMessage) {
cap = message.quoted?.videoMessage?.caption || CAPTION;
let location = await message.quoted.download();
return await client.sendMessage(message.from, { video: location, caption: cap });
}else if (message.quoted.imageMessage) {
cap = message.quoted?.imageMessage?.caption || CAPTION;
let location = await message.quoted.download()
return await client.sendMessage(message.from, { image: location, caption: cap });
   } else if(message.quoted.audioMessage){
let location = await message.quoted.download()
return await client.sendMessage(message.from, { audio: location, mimetype: "audio/mp4",ptt: false});
}
}));
inrl({pattern: 'status', desc: "to scan", sucReact: "💗", category: ['all'],type :"info"},   async (message, client) => {
  let data = await getVar();
  let {FOOTER}=data.data[0]
        let r_text = new Array ();
        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        r_text[4] = "https://imgur.com/kR4XGKY.mp4";
        r_text[5] = "https://imgur.com/3PHv4Uu.mp4";
        r_text[6] = "https://imgur.com/4O5pLdC.mp4";
        r_text[7] = "https://imgur.com/Q6REjY0.mp4";
        r_text[8] = "https://imgur.com/5m5TDEJ.mp4";
        r_text[9] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[10] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[11] = "https://i.imgur.com/IUb17JQ.mp4";
        r_text[12] = "https://i.imgur.com/SH3tyRo.mp4";
        r_text[13] = "https://i.imgur.com/mSAFD9c.mp4";
        r_text[14] = "https://imgur.com/a/yY48lMK.mp4";
        r_text[15] = "https://imgur.com/64FWq3W.mp4";
        r_text[16] = "https://imgur.com/aZlS1bV.mp4";
        r_text[17] = "https://imgur.com/ed0X9m5.mp4";
        r_text[18] = "https://imgur.com/nDlrBug.mp4";
        r_text[19] = "https://imgur.com/3AczL5y.mp4";
        r_text[20] = "https://imgur.com/CeizCwC.mp4";
        r_text[21] = "https://imgur.com/XQNNBxg.mp4";
        var i = Math.floor(r_text.length * Math.random());

     const buttons = [
        { buttonId: "status", buttonText: { displayText: "ɴᴇxᴛ"}, type: 1, },
      ]
const templateButtons = {
      video: { url: r_text[i]  },
      caption: "status",
      footer: FOOTER,
      buttons,
    };
return await client.sendMessage( message.from, templateButtons, { quoted: message });
 });
