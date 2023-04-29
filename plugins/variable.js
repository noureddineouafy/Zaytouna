const { WELCOME_MSG } = require('../config');
const { inrl,getVar,UpdateVariable } = require('../lib');
let a = ["true", "false"], type = ["private","public"],response  = ["unavailable","available","composing","recording","paused"], sb = ["SUDO","BLOCK_CHAT","OWNER"];
//const {exec} = require('chile

function isTrue(a, obj) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
};

let arrayy = ["PASSWORD","REACT","WARNCOUND","ALIVE_DATA","AUTO_BIO","READ_CHAT","BOT_INFO","BGMBOT","WORKTYPE","PM_BLOCK","PREFIX","WELCOME_MSG","EXIT_MSG","CALL_BLOCK","STATUS_VIEW","LANG","PROFILE_STATUS","BLOCK_CHAT","AUTO_CHAT_PM","AUTO_CHAT_GRP","BOT_PRESENCE","AUDIO_DATA","STICKER_DATA","INSTAGRAM","GIT","CAPTION","SUDO", "FOOTER","ALLWAYS_ONLINE","PMB_MSG","PMBC_MSG","AUTOMUTE_MSG","AUTOUNMUTE_MSG"];

function UpdateV(obj) {
 let bcU =obj.split('=')[0].toUpperCase().trim();
  obj = obj.replace(obj.split('=')[0],"").trim()
    for (let i = 0; i < arrayy.length; i++) {
        if(bcU.includes(arrayy[i])) {
            return obj.replace('=','').trim();
        }
    }
    return false;
};

inrl(
	{
       pattern: 'setvar$',
       desc: 'to change variables of bot',
       sucReact: "✨",
       category: ["all,system"],
       type : "database",
       fromMe : true
    },
	  async (message, client,match) => {
      if(!match) return message.reply('need id & value,example: setvar react = true');
      if(!match.match("=")) return message.reply('need id & value,example: setvar react = true');
      let keyID = match.split('=')[0].toUpperCase().trim() || match.toUpperCase().trim();
      let Update;
      if(isTrue(sb, keyID)){
      Update = message.quoted?message.quoted.sender.split('@')[0].trim() : UpdateV(match.trim());
      } else Update = UpdateV(match.trim());
      console.log(Update)
      if(!Update) return message.reply('need id & value,example: setvar react:true');
      let {SUDO,BLOCK_CHAT} = await getVar();
  if(keyID == "PASSWORD"){
  await UpdateVariable("PASSWORD",Update);
  return await message.reply('successfull');
} else if(keyID == "REACT"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("REACT",Update.toLowerCase());
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "ALLWAYS_ONLINE"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("ALLWAYS_ONLINE",Update.toLowerCase());
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "WARNCOUND"){
  if(isNaN(Update)) return message.reply('enter a valid value for variable! need Number!');
  await UpdateVariable("WARNCOUND",Update);
  return await message.reply('successfull');
} else if(keyID == "ALIVE_DATA"){
  await UpdateVariable("ALIVE_DATA",Update);
  return await message.reply('successfull');
} else if(keyID == "PMB_MSG"){
  await UpdateVariable("PMB_MSG",Update);
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "PMBC_MSG"){
  await UpdateVariable("PMBC_MSG",Update);
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "AUTOMUTE_MSG"){
  await UpdateVariable("AUTOMUTE_MSG",Update);
  return await message.reply('successfull');
} else if(keyID == "AUTOUNMUTE_MSG"){
  await UpdateVariable("AUTOUNMUTE_MSG",Update);
  return await message.reply('successfull');
} else if(keyID == "FOOTER"){
  await UpdateVariable("FOOTER",Update);
  return await message.reply('successfull');
} else if(keyID == "AUTO_BIO"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false');
  await UpdateVariable("AUTO_BIO",Update.toLowerCase());
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "READ_CHAT"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("READ_CHAT",Update.toLowerCase());
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "BOT_INFO"){
  if(!Update.includes(';')) return await message.reply('enter a valid format! example :- inrl;903938373635;inrl;https:example.png');
  let test = Update.split(';');
  if(test.length < 4) return await message.reply('enter a valid format! example :- inrl;903938373635;inrl;https:example.png');
  await UpdateVariable("BOT_INFO",Update);
  return await message.reply('successfull');
} else if(keyID == "BGMBOT"){
  if(!isTrue(a, Update.toLowerCase())) return await message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("BGMBOT",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "WORKTYPE"){
  if(!isTrue(type, Update.toLowerCase())) return await maessage.reply('need a valid variable for Update! public or privet')
  await UpdateVariable("WORKTYPE",Update.toLowerCase());
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "PM_BLOCK"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("PM_BLOCK",Update.toLowerCase());
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "PREFIX"){
  await UpdateVariable("PREFIX",Update);
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "WELCOME_MSG"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("WELCOME_MSG",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "EXIT_MSG"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("EXIT_MSG",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "CALL_BLOCK"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("CALL_BLOCK",Update.toLowerCase());
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "STATUS_VIEW"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("STATUS_VIEW",Update.toLowerCase());
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "LANG"){
  await UpdateVariable("LANG",Update);
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "PROFILE_STATUS"){
  await UpdateVariable("PROFILE_STATUS",Update);
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "BLOCK_CHAT"){
  if(!Update.endsWith('net')&&!Update.endsWith('us')) Update = Update.trim().replace(/[^a-zA-Z0-9]/g,'')+"@s.whatsapp.net";
  if(BLOCK_CHAT.includes(Update)) return message.reply('this User already existing in your Block_chatDB!');
  Update = BLOCK_CHAT+','+Update;
  await UpdateVariable("BLOCK_CHAT",Update);
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "AUTO_CHAT_PM"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("AUTO_CHAT_PM",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "AUTO_CHAT_GRP"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("AUTO_CHAT_GRP",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "BOT_PRESENCE"){
  if(!isTrue(response, Update.toLowerCase())) return message.reply('need a valid variable for Update! example : - unavailable,available,composing,recording,paused')
  await UpdateVariable("BOT_PRESENCE",Update.toLowerCase());
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else if(keyID == "AUDIO_DATA"){
  if(!Update.includes(';')) return message.reply('enter a valid format! example :- inrl;inrl;https:example.png');
  let test = Update.split(';');
  if(test.length < 3) return message.reply('enter a valid format! example :- inrl;inrl;https:example.png');
  await UpdateVariable("AUDIO_DATA",Update);
  return await message.reply('successfull');
} else if(keyID == "STICKER_DATA"){
  if(!Update.includes(';')) return message.reply('enter a valid format! example :- inrl;inrl');
  let test = Update.split(';');
  if(test.length < 2) return message.reply('enter a valid format! example :- inrl;inrl');
  await UpdateVariable("STICKER_DATA",Update);
  return await message.reply('successfull');
} else if(keyID == "INSTAGRAM"){
  if(!Update.startsWith('http')) return message.reply('enter a valid value for variable! example :- https://insta.com');
  await UpdateVariable("INSTAGRAM",Update);
  return await message.reply('successfull');
} else if(keyID == "GIT"){
  if(!Update.startsWith('http')) return message.reply('enter a valid value for variable! example :- https://github.com');
  await UpdateVariable("GIT",Update);
  return await message.reply('successfull');
} else if(keyID == "CAPTION"){
  await UpdateVariable("CAPTION",Update);
  return await message.reply('successfull');
} else if(keyID == "SUDO"){
  if(isNaN(Update)) return message.reply('enter a valid value for variable! need Number!');
  if(SUDO.includes(Update)) return message.reply('this User already existing in your SudoDB!');
  Update = SUDO+','+Update;
  await UpdateVariable("SUDO",Update);
  return await message.reply('successfull!\ntry .restart to restart the bot');
} else return message.reply('no such variable in yourDB,!if you need all variable;try : getvar');
})
// to get variables for changing
inrl(
	{
       pattern: 'getvar$',
       desc: 'to change variables of bot',
       sucReact: "👀",
       category: ["all,system"],
       type : "database",
       fromMe : true
    },
	   async (message, client, match) => {
      let {PASSWORD,REACT,WARNCOUND,ALIVE_DATA,AUTO_BIO,READ_CHAT,BOT_INFO,BGMBOT,WORKTYPE,PM_BLOCK,PREFIX,WELCOME_MSG,EXIT_MSG,CALL_BLOCK,STATUS_VIEW,LANG,PROFILE_STATUS,BLOCK_CHAT,AUTO_CHAT_PM,AUTO_CHAT_GRP,BOT_PRESENCE,AUDIO_DATA,STICKER_DATA,INSTAGRAM,GIT,CAPTION,SUDO,PMB_MSG,PMBC_MSG,AUTOMUTE_MSG,AUTOUNMUTE_MSG,data} = await getVar();
      let {FOOTER,ALLWAYS_ONLINE} = data[0];
      value = match.toUpperCase().trim();
      if(!match){
   let content = `
ALLWAYS_ONLINE: ${ALLWAYS_ONLINE}
PASSWORD: ${PASSWORD}
REACT: ${REACT}
FOOTER: ${FOOTER}
WARNCOUND: ${WARNCOUND}
ALIVE_DATA: ${ALIVE_DATA}
AUTO_BIO: ${AUTO_BIO}
READ_CHAT: ${READ_CHAT}
BGMBOT: ${BGMBOT}
WORKTYPE: ${WORKTYPE}
PMB_MSG: ${PMB_MSG}
PMBC_MSG: ${PMBC_MSG}
AUTOMUTE_MSG: ${AUTOMUTE_MSG}
AUTOUNMUTE_MSG: ${AUTOUNMUTE_MSG}
PM_BLOCK: ${PM_BLOCK} 
PREFIX: ${PREFIX}
WELCOME_MSG: ${WELCOME_MSG}
EXIT_MSG: ${EXIT_MSG}
CALL_BLOCK: ${CALL_BLOCK}
STATUS_VIEW: ${STATUS_VIEW}
LANG: ${LANG}
OWNER: ${OWNER}
PROFILE_STATUS: ${PROFILE_STATUS}
BLOCK_CHAT: ${BLOCK_CHAT}
AUTO_CHAT_PM: ${AUTO_CHAT_PM}
AUTO_CHAT_GRP: ${AUTO_CHAT_GRP}
BOT_PRESENCE: ${BOT_PRESENCE}
AUDIO_DATA: ${AUDIO_DATA}
STICKER_DATA: ${STICKER_DATA}
INSTAGRAM: ${INSTAGRAM}
GIT: ${GIT}
CAPTION: ${CAPTION}
SUDO: ${SUDO}`
return await message.reply(content);
} else if(value == "PASSWORD"){
return await message.reply(`PASSWORD : ${PASSWORD}`);
} else if(value == "REACT"){
return await message.reply(`REACT : ${REACT}`);
} else if(value == "WARNCOUND"){
return await message.reply(`WARNCOUND : ${WARNCOUND}`);
} else if(value == "ALIVE_DATA"){
return await message.reply(`ALIVE_DATA : ${ALIVE_DATA}`);
} else if(value == "ALLWAYS_ONLINE"){
return await message.reply(`ALLWAYS_ONLINE : ${ALLWAYS_ONLINE}`);
} else if(value == "AUTO_BIO"){
return await message.reply(`AUTO_BIO : ${AUTO_BIO}`);
} else if(value == "READ_CHAT"){
return await message.reply(`READ_CHAT : ${READ_CHAT}`);
} else if(value == "BGMBOT"){
return await message.reply(`BGMBOT : ${BGMBOT}`);
} else if(value == "WORKTYPE"){
return await message.reply(`WORKTYPE : ${WORKTYPE}`);
} else if(value == "PM_BLOCK"){
return await message.reply(`PM_BLOCK : ${PM_BLOCK}`);
} else if(value == "PREFIX"){
return await message.reply(`PREFIX : ${PREFIX}`);
} else if(value == "WELCOME_MSG"){
return await message.reply(`WELCOME_MSG : ${WELCOME_MSG}`);
} else if(value == "EXIT_MSG"){
return await message.reply(`EXIT_MSG : ${EXIT_MSG}`);
} else if(value == "CALL_BLOCK"){
return await message.reply(`CALL_BLOCK : ${CALL_BLOCK}`);
} else if(value == "STATUS_VIEW"){
return await message.reply(`STATUS_VIEW : ${STATUS_VIEW}`);
} else if(value == "LANG"){
return await message.reply(`LANG : ${LANG}`);
} else if(value == "OWNER"){
return await message.reply(`OWNER : ${OWNER}`);
} else if(value == "PROFILE_STATUS"){
return await message.reply(`PROFILE_STATUS : ${PROFILE_STATUS}`);
} else if(value == "BLOCK_CHAT"){
return message.reply(`BLOCK_CHAT : ${BLOCK_CHAT}`);
} else if(value == "AUTO_CHAT_PM"){
return await message.reply(`AUTO_CHAT_PM : ${AUTO_CHAT_PM}`);
} else if(value == "AUTO_CHAT_GRP"){
return await message.reply(`AUTO_CHAT_GRP : ${AUTO_CHAT_GRP}`);
} else if(value == "BOT_PRESENCE"){
return await message.reply(`BOT_PRESENCE : ${BOT_PRESENCE}`);
} else if(value == "AUDIO_DATA"){
return await message.reply(`AUDIO_DATA : ${AUDIO_DATA}`);
} else if(value == "STICKER_DATA"){
return await message.reply(`STICKER_DATA : ${STICKER_DATA}`);
} else if(value == "INSTAGRAM"){
return await message.reply(`INSTAGRAM : ${INSTAGRAM}`);
} else if(value == "GIT"){
return await message.reply(`GIT : ${GIT}`);
} else if(value == "CAPTION"){
return await message.reply(`CAPTION : ${CAPTION}`);
}else if(value == "PMB_MSG"){
return await message.reply(`PMB_MSG : ${PMB_MSG}`);
}else if(value == "PMBC_MSG"){
return await message.reply(`PMBC_MSG : ${PMBC_MSG}`);
}else if(value == "AUTOMUTE_MSG"){
return message.reply(`AUTOMUTE_MSG : ${AUTOMUTE_MSG}`);
}else if(value == "AUTOUNMUTE_MSG"){
return await message.reply(`AUTOUNMUTE_MSG : ${AUTOUNMUTE_MSG}`);
} else if(value == "SUDO"){
return await message.reply(`SUDO : ${SUDO}`);
} else if(value == "FOOTER"){
return await message.reply(`FOOTER : ${FOOTER}`);
} else return await message.reply('no such variable in yourDB. !if you need all variable;try : getvar');
})
// to del variables as sudo  &&chat_block
inrl(
	{
       pattern: 'delvar$',
       desc: 'to change variables of bot',
       sucReact: "😶",
       category: ["all,system"],
       type : "database",
       fromMe : true
    },
	   async (message, client, match) => {
	   if(!message.client.isCreator) return message.reply('only for owner!!');
	   if(!match) return message.reply('need variable! values:- sudo,block_chat');
	   let KeyID = match.split(':')[0].toUpperCase().trim() || match.trim();
	   let value;
	   if(message.quoted){
	   value = message.quoted.sender.split('@')[0];
	   } else value = match.split(':')[1];
	   if(value ===undefined) return message.reply('need id & value,example: setvar sudo:91404044404044');
       let {SUDO,BLOCK_CHAT} = await getVar();
       if(KeyID == "SUDO"){
       if(isNaN(value)) return message.reply('enter a valid data! need Number!');
       if(!SUDO.includes(value)) return message.reply('this User not existing in your SudoDB!');
       value = SUDO.replaceAll(','+value,"")||SUDO.replaceAll(value+',',"")||SUDO.replaceAll(value,"");
       message.reply(value)
       await UpdateVariable("SUDO",value);
       return await message.reply('successfull');
       } else if(KeyID == "BLOCK_CHAT"){
       if(!value.endsWith('net')&&!value.endsWith('us')) return message.reply('enter a valid value for variable! need Number!');
       if(!BLOCK_CHAT.includes(value)) return message.reply('this User not existing in your SudoDB!');
       value = BLOCK_CHAT.replace(value);
       await UpdateVariable("BLOCK_CHAT",value);
       return await message.reply('successfull');
      }
});
inrl(
	{
       pattern: 'oldvar$',
       desc: 'it retrunes your old varble for your old session',
       sucReact: "😶",
       category: ["all,system"],
       type : "database",
       fromMe : true
    },
    async (message, client, match) => {
      return 0;
  })