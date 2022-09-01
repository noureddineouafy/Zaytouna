const bots = require("../lib/perfix");
const axios = require("axios");
// const lang = bots.getString("github");

bots.config.api.waifu.sfw.map(category => {
    bots.bot( { pattern: [`anime-${category}`, `anime-${category}-gif`], sucReact: "🤹‍♀️", category: ["create",], }, async (message, client) => {
        await axios.get(`${bots.config.api.waifu.domain}/sfw/${category}`)
        .then(async (res) => {
            message.client.command == `anime-${category}`
            ? await client.sendFile(message.from, res.data.url, "", message, { asSticker: true, author: bots.config.exif.author, packname: bots.config.exif.packname, categories: ["😄", "😊"]})
            : await client.sendMessage( message.from, { video: { url: res.data.url }, caption: bots.config.exif.footer, gifPlayback: true }, { quoted: message } );
            global.catchError = false;
        }).catch(async (err) => { global.catchError = true; await client.sendErrorMessage(message.from,bots.errorMessage(err),message.key,message); });
    });
});

bots.config.api.waifu.nsfw.map(category => {
    bots.bot( { pattern: [`xanime-${category}`, `xanime-${category}-gif`], sucReact: "🔞", category: ["18+",], }, async (message, client) => {
        if (message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.private) }, { quoted: message } ); };
        if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.owner) }, { quoted: message } ); };
        await axios.get(`${bots.config.api.waifu.domain}/nsfw/${category}`)
        .then(async (res) => {
            message.client.command == `xanime-${category}`
            ? await client.sendFile(message.from, res.data.url, "", message, { asSticker: true, author: bots.config.exif.author, packname: bots.config.exif.packname, categories: ["😄", "😊"]})
            : await client.sendMessage( message.from, { video: { url: res.data.url }, caption: bots.config.exif.footer, gifPlayback: true }, { quoted: message } );
            global.catchError = false;
        }).catch(async (err) => { global.catchError = true; await client.sendErrorMessage(message.from,bots.errorMessage(err),message.key,message); });
    });
});
