const {getVar}=require('../lib');
const got = require('got');

module.exports = async(msg, conn, m, store) => {
  if((m.key.id.startsWith("BAE5") && m.key.id.length == 16)) return;
  const data = await getVar();
  const {PREFIX,AUTO_CHAT_PM,AUTO_CHAT_GRP} = data.data[0];
  const prefix = PREFIX=='false'?'':PREFIX;
  let isFalseOrNot = prefix==''?'i£':prefix;
  if(m.client.body.startsWith(isFalseOrNot)) return;
  if(AUTO_CHAT_PM == "true" && !m.isGroup){
  let {body} = await got(`http://api.brainshop.ai/get?bid=172372&key=nbjE0YAlyw3cpoMl&uid=[${m.sender}]&msg=[${m.client.body}]`)
  let value = JSON.parse(body).cnt;
  return await m.reply(value)
  } else if(!m.client.body.startsWith(isFalseOrNot) && AUTO_CHAT_GRP == "true" && m.isGroup){
  let {body} = await got(`http://api.brainshop.ai/get?bid=172372&key=nbjE0YAlyw3cpoMl&uid=[${m.sender}]&msg=[${m.client.body}]`)
  let value = JSON.parse(body).cnt;
  return await m.reply(value)
  }
}
