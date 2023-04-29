//created by @inrl
//more featurs comming soon
const { getVar,inrl, isUrl, googleIt, wikiMedia, ringTone,getYtV, getYtA, weather, movie, getFilm, Insta, mediafire, twitter, FaceBook } = require('../lib');
const Config = require('../config');
const util = require('util');

inrl(
	   {
		pattern: 'google',
		desc: 'do get goole serch result',
                sucReact: "🙃",
                category: ["system", "all"],
                type : "search"
	   },
	async (message, client) => {
try{
        if(!message.client.text) return message.send("need a text to serch");
        let teks = await googleIt(message.client.text);
        return await client.sendMessage( message.from, { text: "\n"+teks }, { quoted: message })
 }catch(e){
    message.send("error"+e)
         }
    }
);
inrl(
	   {
		pattern: 'wikimedia',
		desc: 'do get data from wikimedia',
                sucReact: "🙃",
                category: ["system", "all"],
                type : "search"
	   },
	async (message, client) => {
try {
        if(!message.client.text) return message.send("need a text to serch");
        let result = await wikiMedia(message.client.text);
        let data = await getVar();
        let {FOOTER} = data.data[0];
let buttons = [
                 {buttonId: `wikimedia ${message.client.text}`, buttonText: {displayText: 'next result'}, type: 1}
              ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `Title : ${result.title}\n Source : ${result.source}\n Media Url : ${result.image}`,
                    footer: FOOTER,
                    buttons: buttons,
                    headerType: 4
                }
        return await client.sendMessage( message.from, buttonMessage, { quoted: message })
 }catch(e){
    message.send(e)
         }
    }
);
inrl(
	   {
		pattern: 'ringtone',
		desc: 'do get random ringtons ',
                sucReact: "🙃",
                category: ["system", "all"],
                type : "search"
	   },
	async (message, client) => {
try{
        if(!message.client.text) return message.send("need a text to serch");
        let result = await ringTone(message.client.text);
        return await client.sendMessage( message.from, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: message })
 }catch(e){
    message.send(e)
         }
    }
);

inrl(
	   {
		pattern: 'video',
		desc: 'To get yt video',
                sucReact: "💯",
                category: ["system", "all", "downloade"],
                type : "download"
	   },
	async (message, client,match) => {
await getYtV(message, client);
    }
);
inrl(
	   {
		pattern: 'song',
		desc: 'get yt video as mp3 output',
                sucReact: "🤙",
                category: ["system", "all", "downloade"],
                type : "download"
	   },
	async (message, client,match) => {
await getYtA(message, client)
  }
);
inrl(
	   {
		pattern: 'movie',
		desc: 'To get detiles of movie',
                sucReact: "💥",
                category: ["system", "all", "downloade"],
                type : "search"
	   },
	async (message, client,match) => {
if(!match) return message.send("enter name of movie");
try {
await movie(message,client);
}catch(e){
message.send(e);
    }
  }
);

inrl(
	   {
		pattern: 'weather',
		desc: 'To get detiles of you place',
                sucReact: "🔥",
                category: ["system", "all"],
                type : "search"
	   },
	async (message, client,match) => {
try {
return await wather(message,client);
}catch(e){
return message.send(e);
    }
  }
);
inrl(
	   {
		pattern: 'insta',
		desc: 'do get instgram videos',
                sucReact: "🙃",
                category: ["system", "all"],
                type : "download"
	   },
	async (message, client, match) => {
        if(message.quoted){
        match = match || message.quoted.text;
        }
        if(!match.startsWith("http")) return;
        return await Insta(message, client, match);
         }
);
inrl(
	   {
		pattern: 'mediafire',
		desc: 'it send mediafire app',
                sucReact: "🙃",
                category: ["system", "all", "downloade"],
                type : "download"
	   },
	async (message, client, match) => {
        if(!match) return message.send('need url after the cmd');
        const response = await mediafire(match.trim())
	await message.reply('name : ' + response[0].nama + '\nsize : ' + response[0].size + '\nlink : ' + response[0].link + '\n\nDownloading..')
	return await client.sendMessage(message.from, {
			document: {
	                url: response[0].link
			},
			mimetype: response[0].mime,
			fileName: response[0].name
		        }, {
			quoted: message
		        })
		.catch((e) => message.reply('_fileLength is too high_'))
})
inrl(
	   {
		pattern: 'getfilm',
		desc: 'it send result of film',
                sucReact: "🙃",
                category: ["system", "all", "downloade"],
                type : "download"
	   },
	async (message, client, match) => {
    return await getFilm(message, client, match)
  });
     inrl(
	   {
	    pattern: 'twitter',
	    desc: 'To get twitter video',
        sucReact: "💯",
        category: ["system", "all"],
        type :'download'
	   },
	async (message, client, match) => {
	return await twitter(match, message, client)
	});
      inrl(
	   {
	    pattern: 'fb',
	    desc: 'To get fb video',
        sucReact: "💯",
        category: ["system", "all"],
        type :'download'
	   },
	async (message, client, match) => {
	return await FaceBook(match, message, client)
	});
