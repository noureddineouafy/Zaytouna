const bots = require('../lib/perfix'); 
const Config = require('../config');

const Lang = "apks mods";

if(Config.WORKTYPE == 'private') {

   bots.bot({pattern: ['apkmod','apk'], sucReact: "🌇",  category: ["all", "create"], fromMe: true, desc: "mode apk link" }, (async (message, client) => {
      await client.sendMessage(message.from, '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMMANDS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *ᴍᴀᴅᴇ ʙʏ ɪɴʀʟ \n\n ᴛʜᴀɴᴋꜱ ᴛᴏ ɴaᴢiᴍ ʙʀᴏ* 😉\n┗━━━━━━━━━━━━━━━━━━━\n',{ quoted: message });
   }));

   bots.bot({pattern: ['nova'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *NOVA LAUNCHER* 😹\npremium unlocked .\n📌 bit.ly/drknova',{ quoted: message });
   }));

   bots.bot({pattern: ['cml'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *CM LAUNCHER* 😹\npremium unlocked.\n😞 No disponible en este momento.', { quoted: message });
   }));

   bots.bot({pattern: ['apex'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *APEX LAUNCHER* 😹\npremium unlocked.\n📌 bit.ly/drkapex', { quoted: message });
   }));

   bots.bot({pattern: ['kinemaster'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *KINEMASTER MOD* 😹\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456', { quoted: message });
   }));

   bots.bot({pattern: ['inshot'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *INSHOT MOD* 😹\npremium unlocked.\n👉https://bit.ly/3zyNjlZ', { quoted: message });
   }));

   bots.bot({pattern: ['alight'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *ALIGHT MOTION MOD* 😹\npremium unlocked.\n👉https://bit.ly/3cHUBdg\n pass: 3456', { quoted: message });
   }));

   bots.bot({pattern: ['capcut'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *CAP CUT MOD* 😹\npremium unlocked.\n👉https://bit.ly/3pSSlFu', { quoted: message });
   }));
   bots.bot({pattern: ['picsart'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *PICSART GOLD* 😹\npremium unlocked.\n📌 bit.ly/drkpicsart', { quoted: message });
   }));

   bots.bot({pattern: ['canva'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *CANVA PRO* 😹\npremium unlocked.\n📌 bit.ly/canvapro', { quoted: message });
   }));

   bots.bot({pattern: ['lightr'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *LIGTHROM* 😹\npremium unlocked.\n📌 bit.ly/drklightr', { quoted: message });
   }));

   bots.bot({pattern: ['pshop'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *PHOTOSHOP EXPRESS* 😹\npremium unlocked.\n📌 bit.ly/drkphotoshop', { quoted: message });
   }));

   bots.bot({pattern: ['snaps'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *SNAPSEED* 😹\npremium unlocked.\n📌 bit.ly/drksnaps', { quoted: message });
   }));

   bots.bot({pattern: ['retouch'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *RETOUCH* 😹\npremium unlocked.\n📌 bit.ly/drkretouch', { quoted: message });
   }));

   bots.bot({pattern: ['vanced'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *VANCED MANAGER* 😹\nyoutube vanced.\n📌 bit.ly/drkytubev', { quoted: message });
   }));

   bots.bot({pattern: ['freez'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *FREEZER MOD* 😹\nPremium Unlocked.\n📌 bit.ly/drkfreezer', { quoted: message });
   }));

   bots.bot({pattern: ['deezer'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *DEEZER MOD* 😹\npremium unlocked.\n📌 bit.ly/drkdeezer', { quoted: message });
   }));

   bots.bot({pattern: ['rbox'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *RADIO BOX* 😹\npremium unlocked.\n📌 bit.ly/drkradiobox', { quoted: message });
   }));

   bots.bot({pattern: ['mxpro'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *MX PLAYER PRO* 😹\npremium unlocked.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer', { quoted: message });
   }));

   bots.bot({pattern: ['amp'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *POWERAMP* 😹\npremium unlocked.\n📌 bit.ly/drkampplayer', { quoted: message });
   }));

   bots.bot({pattern: ['jetau'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *JetAudio* 😹\npremium unlocked.\n📌 bit.ly/drkjetau', { quoted: message });
   }));

   bots.bot({pattern: ['xpress'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *EXPRESS VPN* 😹\npremium unlocked.\n📌 bit.ly/drkXpress', { quoted: message });
   }));

   bots.bot({pattern: ['hshield'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *HOSPOT SHIELD VPN* 😹\npremium unlocked.\n📌 bit.ly/drkHShield', { quoted: message });
   }));

   bots.bot({pattern: ['avguard'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *TURBO VPN* 😹\npremium unlocked.\n📌 bit.ly/drkguard', { quoted: message });
   }));

   bots.bot({pattern: ['flmanager'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *FILE MANAGER* 😹\npremium unlocked.\n📌 bit.ly/drkesfile', { quoted: message });
   }));

   bots.bot({pattern: ['callr'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *CALL RECORDER* 😹\npremium unlocked.\n📌 bit.ly/drkcallr', { quoted: message });
   }));

   bots.bot({pattern: ['fing'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *FING SCANNER* 😹\npremium unlocked.\n📌 bit.ly/drkfing', { quoted: message });
   }));

   bots.bot({pattern: ['shazam'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *SHAZAM ENCORE* 😹\npremium unlocked.\n📌 bit.ly/drkshaz', { quoted: message });
   }));

   bots.bot({pattern: ['qrcode'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *QR CODE SCANER* 😹\npremium unlocked.\n📌 bit.ly/drkqrscanner', { quoted: message });
   }));

   bots.bot({pattern: ['srecorder'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *SCREEN RECORDER* 😹\npremium unlocked.\n📌 bit.ly/drkgrabr', { quoted: message });
   }));

   bots.bot({pattern: ['tiktok'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *TIKTOK MOD* 😹\npremium unlocked.\n📌 bit.ly/drktiktok', { quoted: message });
   }));

   bots.bot({pattern: ['pmath'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *PHOTOMATH* 😹\npremium unlocked.\n📌 bit.ly/drkphotomath', { quoted: message });
   }));

   bots.bot({pattern: ['waplus'], fromMe: true, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *WHATSAPP PLUS* 😹\nwhattsapp mod.\n📌 bit.ly/drkWaPlus', { quoted: message });
   }));
}

else if (Config.WORKTYPE == 'public') {

   bots.bot({pattern: ['apkmod'], fromMe: false}, (async (message, client) => {
      await client.sendMessage(message.from, '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMANDOS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *ᴍᴀᴅᴇ ʙʏ ɪɴʀʟ\n\n ᴡɪᴛʜ ᴛʜᴇ ʜᴇʟᴩ ᴏꜰ\n ɴaᴢiᴍ ʙʀᴏ* 😉\n┗━━━━━━━━━━━━━━━━━━━\n', { quoted: message });
   }));
    
   bots.bot({pattern: ['nova'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *NOVA LAUNCHER* 😹\npremium unlocked.\n📌 bit.ly/drknova', { quoted: message });
   }));

   bots.bot({pattern: ['cml'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *CM LAUNCHER* 😹\npremium unlocked.\n😞 No disponible en este momento.',{ quoted: message });
   }));

   bots.bot({pattern: ['apex'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *APEX LAUNCHER* 😹\npremium unlocked.\n📌 bit.ly/drkapex', { quoted: message });
   }));

   bots.bot({pattern: ['kinemaster'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *KINEMASTER MOD* 😹\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\npass: 3456', { quoted: message });
   }));

bots.bot({pattern: ['inshot'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *INSHOT MOD* 😹\npremium unlocked.\n👉https://bit.ly/3zyNjlZ', { quoted: message });
   }));

bots.bot({pattern: ['alight'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *ALIGHT MOTION MOD* 😹\npremium unlocked.\n👉https://bit.ly/3cHUBdg\n pass 3456', { quoted: message });
   }));

bots.bot({pattern: ['capcut'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *CAP CUT MOD* 😹\npremium unlocked.\n👉https://bit.ly/3pSSlFu\npass 3456', { quoted: message });
   }));
   bots.bot({pattern: ['picsart'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *PICSART GOLD* 😹\npremium unlocked.\n📌 bit.ly/drkpicsart', { quoted: message });
   }));

   bots.bot({pattern: ['canva'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *CANVA PRO* 😹\npremium unlocked.\n📌 bit.ly/canvapro', { quoted: message });
   }));

   bots.bot({pattern: ['lightr'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *LIGTHROM* 😹\npremium unlocked.\n📌 bit.ly/drklightr', { quoted: message });
   }));

   bots.bot({pattern: ['pshop'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *PHOTOSHOP EXPRESS* 😹\npremium unlocked.\n📌 bit.ly/drkphotoshop', { quoted: message });
   }));

   bots.bot({pattern: ['snaps'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *SNAPSEED* 😹\npremium unlocked.\n📌 bit.ly/drksnaps', { quoted: message });
   }));

   bots.bot({pattern: ['retouch'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *RETOUCH* 😹\npremium unlocked.\n📌 bit.ly/drkretouch', { quoted: message });
   }));

   bots.bot({pattern: ['vanced'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *VANCED MANAGER* 😹\nYouTube Premium  YouTube Music.\n📌 bit.ly/drkytubev', { quoted: message });
   }));

   bots.bot({pattern: ['freez'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *FREEZER MOD* 😹\npremium unlocked - spotify\n📌 bit.ly/drkfreezer', { quoted: message });
   }));

   bots.bot({pattern: ['deezer'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *DEEZER MOD* 😹\npremium unlocked.\n📌 bit.ly/drkdeezer', { quoted: message });
   }));

   bots.bot({pattern: ['rbox'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *RADIO BOX* 😹\npremium unlocked.\n📌 bit.ly/drkradiobox', { quoted: message });
   }));

   bots.bot({pattern: ['mxpro'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *MX PLAYER PRO* 😹\npremium unlocked.\n📌 bit.ly/drkmxplayer', { quoted: message });
   }));

   bots.bot({pattern: ['amp'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *POWERAMP* 😹\npremium unlocked.\n📌 bit.ly/drkampplayer', { quoted: message });
   }));


   bots.bot({pattern: ['xpress'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *EXPRESS VPN* 😹\npremium unlocked.\n📌 bit.ly/drkXpress', { quoted: message });
   }));

   bots.bot({pattern: ['hshield'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *HOSPOT SHIELD VPN* 😹\npremium unlocked.\n📌 bit.ly/drkHShield', { quoted: message });
   }));

   bots.bot({pattern: ['avguard'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *TURBO VPN* 😹\npremium unlocked.\n📌 bit.ly/drkguard',{ quoted: message });
   }));

   bots.bot({pattern: ['flmanager'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *FILE MANAGER* 😹\npremium unlocked.\n📌 bit.ly/drkesfile', { quoted: message });
   }));

   bots.bot({pattern: ['callr'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *CALL RECORDER* 😹\npremium unlocked.\n📌 bit.ly/drkcallr',{ quoted: message });
   }));

   bots.bot({pattern: ['fing'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *FING SCANNER* 😹\npremium unlocked.\n📌 bit.ly/drkfing', { quoted: message });
   }));

   bots.bot({pattern: ['shazam'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *SHAZAM ENCORE* 😹\npremium unlocked.\n📌 bit.ly/drkshaz', { quoted: message });
   }));

   bots.bot({pattern: ['qrcode'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *QR CODE SCANER* 😹\npremium unlocked.\n📌 bit.ly/drkqrscanner', { quoted: message });
   }));

   bots.bot({pattern: ['screen recorder'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *SCREEN RECORDER* 😹\npremium unlocked.\n📌 bit.ly/drkgrabr', { quoted: message });
   }));

   bots.bot({pattern: ['tiktok'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *TIKTOK MOD* 😹\npremium unlocked.\n📌 bit.ly/drktiktok', { quoted: message });
   }));

   bots.bot({pattern: ['pmath'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *PHOTOMATH* 😹\npremium unlocked.\n📌 bit.ly/drkphotomath', { quoted: message });
   }));

   bots.bot({pattern: ['waplus'], fromMe: false, dontAddCommandList: true}, (async (message, client) => {
      await client.sendMessage(message.from, '😹 *WHATSAPP PLUS* 😹\nmhatsapp mod.\n📌 bit.ly/drkWaPlus', { quoted: message });
   }));
}
