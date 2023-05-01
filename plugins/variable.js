const { inrl,getVar,variableDb,UpdateVariable } = require('../lib');
let a = ["true", "false"], type = ["private","public"],response  = ["unavailable","available","composing","recording","paused"], sb = ["SUDO","BLOCK_CHAT"];
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
      let Update = UpdateV(match.trim())
      if(!Update) Update = message.quoted?.text.replace(/[^0-9]/g,'');
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
  if(isNaN(Update)) Update = Update.replace(/[^0-9]/gi,'');
  if(!Update) return message.reply('enter a valid value for variable! need Number!');
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
BOT_INFO: ${BOT_INFO}
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
} else if(value == "BOT_INFO"){
return await message.reply(`BOT_INFO : ${BOT_INFO}`);
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
//plugin oldvar$
function _0x162e(){const _0x580f46=['_BIO:','oldva','patte','O_DAT','inrl~','TYPE:','_MSG:','\x0aPASS','\x0aFOOT','act','on!``','sucRe','ase','trune','\x0aREAD','34255fwqHbu','\x0aLANG','WORD:','K:\x20','categ','```no','9302301zhEziW','\x20sess','_BLOC','r\x20you','865884UIRpOe','all,s','\x0aAUDI','A:\x20','AyOML','\x20varb','E_MSG','\x0aCAPT','s\x20you','ion','yGxhh','\x0aSTIC','_CHAT','ILE_S','T:\x20','FIX:\x20','\x0aBGMB','\x0aWELC','on\x20id','\x20your','ory','\x0aWARN','E_DAT','datab','\x0aALIV','902838sjmikf','ION:\x20','\x0aREAC','\x0aSTAT','\x0aPM_B','K_CHA','OME_M','3101KfpKAX','ALLWA','ere\x20V','SG:\x20','248CTCXhg','\x20OLD\x20','NCE:\x20','MSG:\x20','\x0aINST','\x20for\x20','your\x20','desc','\x0aCALL','_GRP:','\x20\x0aPRE','MUTE_','it\x20re','arble','SESSI','\x0aPMBC','repla','\x0aGIT:','sessi','111870EIrUHH','YS_ON','r\x20old','find','\x20to\x20G','reply','TATUS','\x0aWORK','le\x20fo','LOCK:','trim','_PM:\x20','2761625KjOcbf','UNMUT','then','\x0aPMB_','\x0aSUDO','type','\x0aBLOC','ItJia','4CSREiO','AGRAM','\x0aPROF','EW:\x20','COUND','ER:\x20','fromM','ATA:\x20','\x20data','KER_D','INFO\x20','_need','LINE:','ystem','\x0aBOT_','et\x20th','PRESE','US_VI','\x0aEXIT','\x0aAUTO','OT:\x20'];_0x162e=function(){return _0x580f46;};return _0x162e();}function _0x5b883f(_0x31aa13,_0x2cb792,_0x2c06aa,_0x13420c,_0xbcd2c6){return _0x5b51(_0x31aa13- -0xec,_0x2c06aa);}function _0x5ac088(_0x5d0ebd,_0x28cfb3,_0x1ba339,_0x12c0e3,_0x57c797){return _0x5b51(_0x28cfb3-0x38c,_0x5d0ebd);}(function(_0x3472a8,_0x41a370){function _0x330e26(_0x12ab7b,_0xb950d0,_0x938673,_0x2716d7,_0x4e2fc4){return _0x5b51(_0x4e2fc4- -0x3c0,_0x938673);}function _0x43e101(_0x2bbd9e,_0x320d44,_0x198e0d,_0x398e33,_0x4c5588){return _0x5b51(_0x198e0d-0xcb,_0x2bbd9e);}const _0x19c41d=_0x3472a8();function _0x587610(_0x5e2ebe,_0x3dc040,_0x3bfc59,_0x3a9ebe,_0xbc1ed4){return _0x5b51(_0xbc1ed4- -0x36c,_0x5e2ebe);}function _0x213294(_0x1af7f4,_0x44df37,_0x438a01,_0x518249,_0x3fbcb3){return _0x5b51(_0x438a01-0x47,_0x518249);}function _0x1d9a3f(_0x296f7f,_0xb51af1,_0x2fdea2,_0x412efc,_0x445462){return _0x5b51(_0xb51af1-0x233,_0x412efc);}while(!![]){try{const _0x364302=parseInt(_0x213294(0x13f,0xf9,0x11b,0x126,0x100))/(-0x1*0x144f+-0x1531+0x11*0x271)+-parseInt(_0x213294(0x171,0x13f,0x15c,0x138,0x12c))/(0xa0a+-0xb*-0x12d+-0x16f7)+parseInt(_0x1d9a3f(0x2e2,0x311,0x311,0x319,0x2e5))/(0x4f*0x50+0x1f68+-0x3815)*(-parseInt(_0x213294(0x179,0x150,0x170,0x15b,0x19a))/(0x7ac+-0x986+-0xef*-0x2))+-parseInt(_0x330e26(-0x2ad,-0x289,-0x2c9,-0x2b6,-0x29f))/(-0x221c+0x1dc7+0x45a)+parseInt(_0x43e101(0x1b2,0x1e5,0x1c2,0x19b,0x1c6))/(0x856*-0x2+0x2e1*-0x5+0x1f17)+-parseInt(_0x587610(-0x266,-0x281,-0x264,-0x239,-0x26e))/(0x165c+-0x82*-0x13+0x1*-0x1ffb)*(-parseInt(_0x43e101(0x1fc,0x19b,0x1cd,0x1dd,0x1df))/(-0x2ac*0x7+0x101b+0x2a1))+parseInt(_0x330e26(-0x2d5,-0x2cb,-0x31d,-0x31e,-0x2e6))/(0x1997*-0x1+0x5fb*0x5+-0x447);if(_0x364302===_0x41a370)break;else _0x19c41d['push'](_0x19c41d['shift']());}catch(_0x33373e){_0x19c41d['push'](_0x19c41d['shift']());}}}(_0x162e,-0x4b971*-0x1+-0x1fce*0x4+0xe301));const _0x596112={};function _0x2086ee(_0x4a0497,_0x47245d,_0x87cb98,_0x1479f2,_0x3b9b9a){return _0x5b51(_0x87cb98-0x36d,_0x3b9b9a);}function _0x5b51(_0x55575c,_0x211f08){const _0x33dbdb=_0x162e();return _0x5b51=function(_0x9214d5,_0x50e7f5){_0x9214d5=_0x9214d5-(-0x10a6+-0x1*0x24b2+0x3610);let _0x397394=_0x33dbdb[_0x9214d5];return _0x397394;},_0x5b51(_0x55575c,_0x211f08);}_0x596112[_0x4a7a4d(0x171,0x119,0x186,0x14b,0x17b)+'rn']=_0x5a44b7(0x259,0x266,0x229,0x250,0x224)+'r$',_0x596112[_0x5a44b7(0x288,0x286,0x2b8,0x293,0x2a7)]=_0x4a7a4d(0x1c2,0x186,0x1a3,0x192,0x194)+_0x5b883f(-0x1a,0x3,-0x2e,0x14,-0x4d)+_0x5ac088(0x466,0x472,0x457,0x482,0x49a)+_0x2086ee(0x456,0x473,0x484,0x4a9,0x4b3)+_0x4a7a4d(0x191,0x197,0x12c,0x167,0x13f)+_0x2086ee(0x4af,0x489,0x48a,0x4a7,0x488)+_0x4a7a4d(0x19d,0x156,0x197,0x161,0x18f)+_0x5b883f(0x2b,0x4c,0x1,0x1d,0x4c)+_0x5b883f(-0x11,-0xc,-0x3e,-0x41,-0x19)+_0x2086ee(0x439,0x489,0x454,0x472,0x426);function _0x5a44b7(_0xc454eb,_0x3391b5,_0x14b186,_0x25c81f,_0x522ec7){return _0x5b51(_0x25c81f-0x18a,_0x14b186);}_0x596112[_0x5a44b7(0x25e,0x26d,0x232,0x25a,0x272)+_0x2086ee(0x470,0x436,0x43b,0x44c,0x414)]='😶';function _0x4a7a4d(_0x461445,_0x5ee6fa,_0x528ef9,_0x519252,_0x4e3ace){return _0x5b51(_0x519252-0x84,_0x5ee6fa);}_0x596112[_0x5ac088(0x463,0x464,0x458,0x428,0x428)+_0x5b883f(0x6,0x30,-0xa,-0x20,0x19)]=[_0x5a44b7(0x22e,0x283,0x23d,0x269,0x259)+_0x4a7a4d(0x148,0x177,0x14b,0x141,0x14c)],_0x596112[_0x5a44b7(0x2be,0x28b,0x2e2,0x2b0,0x2eb)]=_0x5ac088(0x49e,0x481,0x49c,0x471,0x494)+_0x5b883f(-0x1b,0x1e,-0x28,-0x4e,-0x26),_0x596112[_0x5ac088(0x4df,0x4bb,0x4ae,0x486,0x4c9)+'e']=!![],inrl(_0x596112,async(_0x39660b,_0x20fe7c,_0x16fde7)=>{const _0xe0385d={};_0xe0385d[_0x5a73b8(0x20d,0x1ce,0x1a6,0x1dc,0x1b9)]=_0x2a8c97(-0x233,-0x211,-0x22f,-0x221,-0x22c)+_0x2a8c97(-0x276,-0x25e,-0x286,-0x231,-0x24d)+_0x521205(-0x198,-0x172,-0x163,-0x18a,-0x18b)+_0x521205(-0x192,-0x1a2,-0x1a2,-0x1ad,-0x18a)+_0x5a73b8(0x23c,0x23e,0x1f2,0x208,0x1ec)+_0x5a73b8(0x1c5,0x19b,0x1c6,0x1c3,0x1da)+'`',_0xe0385d[_0x57eeab(0xb1,0xa0,0xca,0xbc,0xcd)]=_0x57eeab(0x64,0x98,0x9b,0x8d,0x60)+_0x2a8c97(-0x235,-0x20d,-0x22e,-0x1eb,-0x214)+_0x57eeab(0x9e,0xd7,0xc2,0xcd,0xa8)+_0x521205(-0x1b8,-0x14d,-0x163,-0x176,-0x17e)+_0x57eeab(0x7e,0xb3,0x95,0x9a,0x95)+_0x1f1b36(-0x6b,-0x8b,-0x52,-0x6d,-0x3c)+_0x521205(-0x1d2,-0x1c9,-0x207,-0x1a0,-0x1d3)+_0x5a73b8(0x1c9,0x1d0,0x1e8,0x1f4,0x1f6)+_0x2a8c97(-0x223,-0x1cb,-0x1bc,-0x224,-0x1f6)+'s_';function _0x1f1b36(_0x5e3e59,_0x43dfa9,_0x231566,_0xfdc69b,_0x290a4b){return _0x2086ee(_0x5e3e59-0xc5,_0x43dfa9-0x1bc,_0x231566- -0x4d8,_0xfdc69b-0x1a2,_0x290a4b);}_0xe0385d[_0x5a73b8(0x1e6,0x1db,0x20e,0x1d6,0x1ab)]=_0x2a8c97(-0x273,-0x255,-0x262,-0x23c,-0x23c);function _0x5a73b8(_0x35a334,_0x1de449,_0x1d4839,_0x18b50e,_0x474ba4){return _0x5a44b7(_0x35a334-0xbc,_0x1de449-0x1b4,_0x35a334,_0x18b50e- -0x96,_0x474ba4-0x79);}const _0x515cde=_0xe0385d;if(!_0x16fde7)return await _0x39660b[_0x5a73b8(0x218,0x1eb,0x218,0x20e,0x226)](_0x515cde[_0x5a73b8(0x21b,0x248,0x254,0x21c,0x237)]);_0x16fde7=_0x16fde7[_0x521205(-0x14e,-0x17e,-0x164,-0x18b,-0x173)]()[_0x57eeab(0xa4,0xd7,0xac,0xea,0xb7)+'ce'](_0x515cde[_0x1f1b36(-0xc5,-0xa4,-0x89,-0x6d,-0xa5)],'');const _0x4c1eef={};function _0x521205(_0x55b447,_0x737993,_0x41cfb5,_0x2547a5,_0x9a560b){return _0x4a7a4d(_0x55b447-0x1a1,_0x737993,_0x41cfb5-0x107,_0x9a560b- -0x316,_0x9a560b-0x17a);}function _0x2a8c97(_0x1357d1,_0x50cc3c,_0x499ec6,_0x1e563a,_0x54b45f){return _0x4a7a4d(_0x1357d1-0x80,_0x499ec6,_0x499ec6-0xae,_0x54b45f- -0x389,_0x54b45f-0x1bb);}_0x4c1eef[_0x2a8c97(-0x1e6,-0x209,-0x1b9,-0x1d9,-0x1f5)+'ON']=_0x16fde7;function _0x57eeab(_0x2bdb82,_0x167209,_0x4e0fbd,_0x599bbb,_0x484293){return _0x5ac088(_0x599bbb,_0x484293- -0x3e7,_0x4e0fbd-0x9a,_0x599bbb-0x13b,_0x484293-0x7a);}await variableDb[_0x1f1b36(-0x72,-0x5a,-0x53,-0x8d,-0x87)](_0x4c1eef)[_0x2a8c97(-0x219,-0x1d4,-0x1c7,-0x213,-0x1e2)](async _0x58bbfa=>{function _0x224a41(_0x657816,_0x3eff05,_0x53c3cb,_0x4aabf6,_0x1456be){return _0x1f1b36(_0x657816-0x15c,_0x3eff05-0x1a8,_0x657816- -0x8b,_0x4aabf6-0x78,_0x53c3cb);}function _0x41df7d(_0x131dde,_0x47d326,_0x5aab8d,_0x2be086,_0x3ef24d){return _0x521205(_0x131dde-0xe8,_0x131dde,_0x5aab8d-0x86,_0x2be086-0x6b,_0x5aab8d- -0x3b);}function _0x1902ec(_0x13b3f0,_0x35c0b1,_0x3fc29c,_0x1db632,_0x29dd9b){return _0x5a73b8(_0x13b3f0,_0x35c0b1-0x1e4,_0x3fc29c-0x12,_0x29dd9b- -0x2cb,_0x29dd9b-0xf1);}function _0x318cf4(_0xb02107,_0x3277c3,_0x26b8e5,_0x22755e,_0x2648d3){return _0x5a73b8(_0x2648d3,_0x3277c3-0x3d,_0x26b8e5-0x1c9,_0x26b8e5-0x18f,_0x2648d3-0x192);}function _0x30f9a8(_0xc5fe5e,_0x521f58,_0x5354e8,_0xe7d173,_0x534eee){return _0x2a8c97(_0xc5fe5e-0x22,_0x521f58-0x74,_0x521f58,_0xe7d173-0x92,_0xc5fe5e-0x3b);}if(!_0x58bbfa[-0xbf*0x2a+-0x2*0x20+-0x1*-0x1f96])return await _0x39660b[_0x30f9a8(-0x1b0,-0x179,-0x1c0,-0x1d7,-0x1b5)](_0x515cde[_0x318cf4(0x383,0x34d,0x36b,0x349,0x377)]);else{const {MENSION_AUDIO:_0x15a5fe,MENSION_IMG:_0x6333f,FOOTER:_0x223db7,PASSWORD:_0x24957c,REACT:_0xaf6032,WARNCOUND:_0x128d47,ALIVE_DATA:_0x4e4b91,U_STATUS:_0x338aa0,READ_CHAT:_0x73d464,BOT_INFO:_0x3f1ec1,BGMBOT:_0x379490,WORKTYPE:_0x36d95d,PM_BLOCK:_0x205cb5,PREFIX:_0x129ee6,WELCOME_MSG:_0x4ac2e6,EXIT_MSG:_0x290c7a,CALL_BLOCK:_0xeff14d,STATUS_VIEW:_0x131665,MENSION_TEXT:_0x3938c5,LANG:_0x16f56c,OWNER:_0x8b587b,PROFILE_STATUS:_0x48e7e6,BLOCK_CHAT:_0xf9e09e,AUTO_CHAT_PM:_0x312cf7,AUTO_CHAT_GRP:_0x309af9,BOT_PRESENCE:_0x2d7059,AUDIO_DATA:_0x58074f,STICKER_DATA:_0x1ac03e,INSTAGRAM:_0x1f0b0b,GIT:_0x147f37,CAPTION:_0x1ea664,SUDO:_0x5d758f,PMB_MSG:_0x50afc0,PMBC_MSG:_0x14af17,AUTOMUTE_MSG:_0x5172ff,AUTOUNMUTE_MSG:_0x5dc796,ALLWAYS_ONLINE:_0x18c714}=_0x58bbfa[-0xf8b*-0x2+0x2506+-0x441c*0x1];return await _0x39660b[_0x30f9a8(-0x1b0,-0x195,-0x176,-0x19c,-0x1ac)](_0x41df7d(-0x1d0,-0x1cb,-0x1ce,-0x207,-0x1d4)+_0x30f9a8(-0x1b4,-0x195,-0x1d6,-0x18e,-0x1bd)+_0x41df7d(-0x20a,-0x1f8,-0x211,-0x24a,-0x1f5)+'\x20'+_0x18c714+(_0x41df7d(-0x1f2,-0x20a,-0x201,-0x1ef,-0x222)+_0x1902ec(-0xf5,-0x126,-0xd0,-0x11f,-0x101)+'\x20')+_0x24957c+(_0x30f9a8(-0x1d1,-0x1dc,-0x1d7,-0x1d7,-0x1f4)+_0x224a41(-0x10a,-0xf1,-0x13e,-0x123,-0xe5))+_0xaf6032+(_0x30f9a8(-0x1fd,-0x230,-0x20a,-0x1e5,-0x1e7)+_0x41df7d(-0x198,-0x1d1,-0x19f,-0x1af,-0x1d1))+_0x223db7+(_0x30f9a8(-0x1d7,-0x1e4,-0x212,-0x1bf,-0x1e8)+_0x318cf4(0x3df,0x3e2,0x3b0,0x3ae,0x3cf)+':\x20')+_0x128d47+(_0x41df7d(-0x1ba,-0x1ad,-0x1d7,-0x1b6,-0x1cd)+_0x318cf4(0x3a4,0x35c,0x377,0x35e,0x38c)+_0x30f9a8(-0x1e9,-0x1f2,-0x20a,-0x219,-0x1fe))+_0x4e4b91+(_0x224a41(-0x133,-0x134,-0x12b,-0x117,-0x104)+_0x30f9a8(-0x205,-0x222,-0x1f5,-0x209,-0x1ef)+'\x20')+AUTO_BIO+(_0x30f9a8(-0x1f7,-0x1d6,-0x1db,-0x20e,-0x1f4)+_0x30f9a8(-0x1e0,-0x1b9,-0x1e0,-0x1bf,-0x1e3)+':\x20')+_0x73d464+(_0x1902ec(-0xdd,-0xdc,-0xad,-0x11b,-0xe9)+_0x1902ec(-0x139,-0xf2,-0xf6,-0xe7,-0x113))+_0x379490+(_0x41df7d(-0x180,-0x199,-0x1b1,-0x1ce,-0x1e9)+_0x1902ec(-0x11d,-0xf1,-0xdd,-0x11e,-0x10d)+'\x20')+_0x36d95d+(_0x224a41(-0xd2,-0xdb,-0xcc,-0x9c,-0xd5)+_0x41df7d(-0x1c7,-0x1b6,-0x1c8,-0x1b5,-0x1d7))+_0x50afc0+(_0x41df7d(-0x1f7,-0x1a0,-0x1bc,-0x1ae,-0x1a2)+_0x224a41(-0x12b,-0x153,-0x152,-0x13b,-0xf7)+'\x20')+_0x14af17+(_0x30f9a8(-0x207,-0x1e8,-0x1cd,-0x1fa,-0x22c)+_0x41df7d(-0x1af,-0x193,-0x1c0,-0x1b2,-0x1e7)+_0x30f9a8(-0x1c5,-0x19f,-0x1d3,-0x195,-0x18e))+_0x5172ff+(_0x318cf4(0x37c,0x380,0x346,0x33d,0x33f)+_0x41df7d(-0x1b7,-0x18d,-0x1ab,-0x1c9,-0x1ad)+_0x41df7d(-0x1ee,-0x209,-0x1e9,-0x1d9,-0x1e7)+':\x20')+_0x5dc796+(_0x224a41(-0xfb,-0xd2,-0x119,-0xee,-0x132)+_0x318cf4(0x3dd,0x3b2,0x3a1,0x3a3,0x366)+'\x20')+_0x205cb5+(_0x224a41(-0xea,-0x100,-0xdd,-0x114,-0xf0)+_0x41df7d(-0x1a4,-0x1cc,-0x1e0,-0x1ed,-0x209))+_0x129ee6+(_0x318cf4(0x33e,0x35e,0x372,0x39a,0x357)+_0x318cf4(0x35e,0x36a,0x380,0x38f,0x39d)+_0x224a41(-0xf5,-0x120,-0x101,-0x128,-0xc0))+_0x4ac2e6+(_0x318cf4(0x319,0x381,0x345,0x363,0x339)+_0x1902ec(-0x13c,-0x126,-0x13a,-0xfe,-0x10c)+'\x20')+_0x290c7a+(_0x30f9a8(-0x1c0,-0x1c9,-0x1d0,-0x18b,-0x19f)+_0x1902ec(-0xe3,-0xdb,-0xf2,-0xf4,-0xfb)+_0x224a41(-0x11f,-0x13f,-0x12a,-0x100,-0x152))+_0xeff14d+(_0x318cf4(0x396,0x377,0x37d,0x34e,0x39f)+_0x318cf4(0x37d,0x30c,0x344,0x318,0x356)+_0x41df7d(-0x17e,-0x1d8,-0x1a1,-0x1de,-0x1a3))+_0x131665+(_0x30f9a8(-0x1f5,-0x1f1,-0x1c9,-0x1f4,-0x1e5)+':\x20')+_0x16f56c+(_0x41df7d(-0x1b6,-0x16c,-0x1a2,-0x16a,-0x1ae)+_0x318cf4(0x381,0x371,0x36e,0x360,0x368)+_0x1902ec(-0xcb,-0xae,-0xc7,-0xd4,-0xbc)+':\x20')+_0x48e7e6+(_0x30f9a8(-0x1a3,-0x179,-0x1c4,-0x1ac,-0x174)+_0x224a41(-0xfa,-0xff,-0xd4,-0xfa,-0xe3)+_0x1902ec(-0xc7,-0xbd,-0x120,-0xe5,-0xeb))+_0xf9e09e+(_0x30f9a8(-0x207,-0x1ce,-0x230,-0x1da,-0x227)+_0x318cf4(0x3a5,0x372,0x36d,0x396,0x370)+_0x224a41(-0xd6,-0xcc,-0xf0,-0xcb,-0xdc))+_0x312cf7+(_0x224a41(-0x133,-0x117,-0x101,-0x14d,-0x11a)+_0x41df7d(-0x210,-0x1b2,-0x1e3,-0x1ea,-0x1d9)+_0x30f9a8(-0x1bf,-0x1bc,-0x1ee,-0x1ba,-0x1ad)+'\x20')+_0x309af9+(_0x1902ec(-0xe9,-0xe7,-0x13e,-0xf7,-0x119)+_0x41df7d(-0x201,-0x1e5,-0x20d,-0x212,-0x1ed)+_0x1902ec(-0x107,-0x9d,-0x100,-0xcf,-0xd3))+_0x2d7059+(_0x41df7d(-0x1ce,-0x20d,-0x1ed,-0x224,-0x20e)+_0x318cf4(0x37c,0x357,0x34b,0x331,0x30e)+_0x1902ec(-0xda,-0xbd,-0x100,-0xd1,-0xf6))+_0x58074f+(_0x30f9a8(-0x1e1,-0x1fb,-0x1a9,-0x21b,-0x1d6)+_0x1902ec(-0x124,-0x104,-0x107,-0x114,-0x11e)+_0x41df7d(-0x165,-0x161,-0x19d,-0x1b2,-0x1cb))+_0x1ac03e+(_0x30f9a8(-0x1c4,-0x1ae,-0x198,-0x1e2,-0x1be)+_0x30f9a8(-0x1a0,-0x19e,-0x1d8,-0x1cf,-0x1cd)+':\x20')+_0x1f0b0b+(_0x224a41(-0xe3,-0x114,-0xff,-0xff,-0x100)+'\x20')+_0x147f37+(_0x318cf4(0x379,0x34a,0x368,0x370,0x356)+_0x318cf4(0x381,0x343,0x37b,0x378,0x38f))+_0x1ea664+(_0x224a41(-0xd1,-0xa1,-0x9f,-0xaf,-0xce)+':\x20')+_0x5d758f+(_0x41df7d(-0x1f9,-0x1f7,-0x20f,-0x220,-0x20b)+_0x41df7d(-0x245,-0x201,-0x213,-0x244,-0x23f)+':\x20')+_0x3f1ec1);}});});
