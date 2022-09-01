const { delay } = require("@adiwajshing/baileys");
const bots = require("../lib/perfix");
const { isUrl } = require("../lib/Function");
const lang = bots.getString("whats_bot");
const fs = require("fs");
const path = require("path");

bots.bot(
  {
    pattern: ["s", "sticker"," striker", "sticer"],
    desc: "It convert image to sticker",
    sucReact: "🔁",
    category: ["all", "create"],
  },
  async (message, client) => {
    try {
      // if (!message.quoted) { global.catchError = true; return await client.sendErrorMessage( message.from, 'Reply to Supported media With Caption', message.key, message ); }
      if (/image|video|sticker/.test(message.client.mime)) {
        let download = await message.quoted.download();
        client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: bots.config.exif.author,
          packname: bots.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else if (/image|video|sticker/.test(message.client.mime)) {
        let download = await message.download();
        client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: bots.config.exif.author,
          packname: bots.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else if (message.quoted && message.quoted.mentions[0]) {
        let url = await client.profilePictureUrl(
          message.quoted.mentions[0],
          "image"
        );
        client.sendFile(message.from, url, "", message, {
          asSticker: true,
          author: bots.config.exif.author,
          packname: bots.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else if (isUrl(message.client.text)) {
        if (isUrl(message.client.text))
          client.sendFile(
            message.from,
            isUrl(message.client.text)[0],
            "",
            message,
            {
              asSticker: true,
              author: bots.config.exif.author,
              packname: bots.config.exif.packname,
              categories: ["😄", "😊"],
            }
          );
        else {
          global.catchError = true;
          return await client.sendErrorMessage(
            message.from,
            "No Url Match",
            message.key,
            message
          );
        }
      } else if (message.client.text) {
        let fetch = await fetchUrl(
          global.api(
            "zenz",
            "/searching/stickersearch",
            { query: message.client.text },
            "apikey"
          )
        );
        for (let url of fetch.result) {
          await delay(1000);
          client.sendFile(message.from, url, "", message, {
            asSticker: true,
            author: bots.config.exif.author,
            packname: bots.config.exif.packname,
            categories: ["😄", "😊"],
          });
        }
      } else if (message.quoted && message.quoted.type == "templateMessage") {
        let _message =
          message.quoted.imageMessage || message.quoted.videoMessage;
        let download = await client.downloadMediaMessage(_message);
        client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: config.exif.author,
          packname: bots.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else if (message.quoted && message.quoted.type == "buttonsMessage") {
        let _message =
          message.quoted.imageMessage || message.quoted.videoMessage;
        let download = await client.downloadMediaMessage(_message);
        client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: bots.config.exif.author,
          packname: bots.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else {
        global.catchError = true;
        return await client.sendErrorMessage(
          message.from,
          "Reply to Supported media With Caption",
          message.key,
          message
        );
      }
      global.catchError = false;
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage(
        message.from,
        error,
        message.key,
        message
      );
    }
  }
);
