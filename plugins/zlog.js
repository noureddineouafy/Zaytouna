const { styletext, imageToWebp, videoToWebp, writeExifImg, writeExifVid, unixTimestampSeconds, generateMessageTag, processTime, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, rexdl, rexdldown, formatp, jsonformat, logic, bytesToSize, getSizeMedia, toAudio, toPTT, toVideo, inrl, successfullMessage, infoMessage, errorMessage, commands, Commands, categories, config, TelegraPh, UploadFileUgu, webp2mp4File, add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1, ff2, ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, inrlQuita, insult, listall, strikeThrough, wingdings, vaporwave, typewriter, analucia, tildeStrikeThrough, underline, doubleUnderline, slashThrough, sparrow, heartsBetween, arrowBelow, crossAboveBelow, creepify, bubbles, mirror, squares, roundsquares, flip, tiny, createMap, serif_I, manga, ladybug, runes, serif_B, serif_BI, remove, unscreen, sendUrl, tinyUrl, webSs, pdfGen, BufferToFile, AudioMetaData, send_alive, send_menu, sendRepeat, toGroup, getYtV, getYtA, ytmp4, ytmp3, weather, movie, animewifu, animenom, animefox, animesmug, hentaiWifu, hentaiNeko, hentaiTrap, animeawoo, animemegumin, animemehold, animehighfive, animecringe, animedance, animehappy, animeblush, animeglomp, animewave, animepoke, animewink, animebonk, animebully, animeyeet, animeneko, animecuddle, animeslap, animepat, animegood, animehug, animekiss, animewlp, animespank, animecry, animekill, animelick, animebite, dogphoto, lovephoto, cartoonphoto, googleIt, wikiMedia, ringTone, quoted, hentaivideo, send_vote, send_poll, truecaller, stickersearch, sendPhoto, sendVideo, sendVoice, sendGif, sendBassAudio, sendSlowAudio, sendBlownAudio, sendDeepAudio, sendErrapeAudio, sendFastAudio, sendFatAudio, sendNightcoreAudio, sendReverseAudio, sendSquirrelAudio, sendMp4AsMp3 } = require("../lib")
const {
    extensionForMediaMessage,
    extractMessageContent,
    jidNormalizedUser,
    getContentType,
    normalizeMessageContent,
    proto,
    delay,
    areJidsSameUser,
    downloadContentFromMessage,
    getBinaryNodeChild,
    WAMediaUpload,
    generateForwardMessageContent,
    generateLinkPreviewIfRequired,
    generateWAMessageFromContent,
    getBinaryNodeChildren
  } = require("@adiwajshing/baileys");
const util = require("util");
const Config = require("../config")
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const got = require('got');
const cheerio = require('cheerio');

inrl({
                on: "all",
                fromMe :true,
                onlyPm :false,
                onlyGroup :false,
		            pattern: '&eval',
		            desc: 'this send evaled data for your request',
                sucReact: "💥",
                category: ["system", "all"],
                type : "owner",
                usage: "give evaled data for your script"
	   },
	async (message, client, Texts, cmd, store) => {
    let m = message, c = conn = client;
    if(!message.client.body.trim().startsWith('>')) return;
    let match = message.client.body.replace('>','').trim();let text = match;
    try {
      let evaled = await eval(`(async () => { ${match} })()`);
      if (typeof match !== "string") evaled = await util.inspect(evaled);
      await message.reply(evaled);
    } catch (err) {
      await message.reply(util.format(err));
    }
});
