const got = require("got");
const bots = require("../lib/perfix");
const lang = bots.getString("webss");

bots.bot(
  {
    pattern: ["ss"],
    desc: "to taking screenshot",
    usage: '<url>',
    sucReact: "🥵",
    category: ["all", "create"],
  },
  async (message, client) => {
    if (!message.client.args[0]) {
      global.catchError = true;
      return await client.sendMessage(message.from,{ text: bots.errorMessage("need a link to take ss") },{ quoted: message });
    }
    try {
      const torken = process.env.SS || '';
      const uri = encodeURI(message.client.args[0]);
      const url = `https://shot.screenshotapi.net/screenshot?token=${torken}&url=${uri}&file_type=jpeg&full_page=true`;
      const response = await got(url);
      const json = JSON.parse(response.body);
      await client.sendMessage( message.from, { image: { url: json.screenshot }, caption: bots.config.exif.cap }, { quoted: message });
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    global.catchError = false;
  }
);
