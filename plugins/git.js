const bots = require("../lib/perfix");
const lang = bots.getString("github");
const axios = require("axios");

bots.bot(
  {
    pattern: ["git"],
    desc: "git link",
    usage: '<userName>',
    sucReact: "💻",
    category: ["search", "all"],
  },
  async (message, client) => {
    const uName = message.client.text;

    if (!uName) {
      global.catchError = true;
      return await client.sendMessage( message.from, { text: "https://github.com/inrl-official/inrl-bot-md" }, { quoted: message } );
    }

    await axios.get(`${ezio.config.api.github.domain}/users/${uName}`)
      .then(async (response) => {
        const { login, avatar_url, html_url, twitter_username, bio, name, company, public_repos, public_gists, followers, location, following, created_at, blog, type, email, updated_at, } = response.data;

        if (response.data.message) {
          global.catchError = true;
          return await client.sendErrorMessage( message.from, response.data.message, message.key, message );
        }

        const msg =
          `\n⚜ *${lang.NAME}* ${name}` +
          `\n\n` +
          `⚜ *${lang.USERNAME}* ${login}` +
          `\n\n` +
          `⚜ *${lang.TWITTER}* ${twitter_username}` +
          `\n\n` +
          `⚜ *${lang.COMPANY}* ${company}` +
          `\n\n` +
          `⚜ *${lang.BIO}* ${bio}` +
          `\n\n` +
          `⚜ *${lang.BLOG}* ${blog}` +
          `\n\n` +
          `⚜ *${lang.URL}* ${html_url}` +
          `\n\n` +
          `⚜ *${lang.REPO}* ${public_repos}` +
          `\n\n` +
          `⚜ *${lang.GIST}* ${public_gists}` +
          `\n\n` +
          `⚜ *${lang.FOLLOWING}* ${following}` +
          `\n\n` +
          `⚜ *${lang.FOLLOWERS}* ${followers}` +
          `\n\n` +
          `⚜ *${lang.MAIL}* ${email}` +
          `\n\n` +
          `⚜ *${lang.LOCATION}* ${location}` +
          `\n\n` +
          `⚜ *${lang.JOIN}* ${created_at}` +
          `\n\n` +
          `⚜ *${lang.UPDATE}* ${updated_at}\n`;

        await client.sendMessage( message.from, { image: { url: avatar_url }, caption: msg + "\n" + ezio.config.exif.footer,}, { quoted: message, });
        global.catchError = false;
      })
      .catch(async (err) => {
        (global.catchError = true),
          await client.sendErrorMessage( message.from, lang.NOT + "\n\n" + err, message.key, message );
      });
  }
);
