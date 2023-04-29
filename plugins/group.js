const moment = require('moment-timezone')
const {
    inrl,
    getVar,
    isAdmin,
    isBotAdmin,
    errorMessage,
    getString,
    infoMessage,
    quoted,
    setAntiLink,
    removeAntiLink,
    getAntiLink,
    setAntiWord,
    removeAntiWord,
    getListOfWord,
    GetWords,
    removeWord,
    withValue,
    setpdm,
    removePdm,
    getPdm,
    setFakeNum,
    setFake,
    removeFake,
    getListofFake,
    GetFake,
    removeAFake,
    isInAutoDb,
    getAutomutes,
    getAutoUnMutes,
    add_Schedule,
    dlt_Schedule
} = require('../lib');
const axios = require("axios");
const fs = require('fs');
async function isBotAdminV1(m, conn, jid) {
    const groupMetadata = await conn.groupMetadata(jid).catch(e => {}),
        participants = await groupMetadata.participants,
        admins = await participants.filter(v => v.admin !== null).map(v => v.id);
    return admins.includes(conn.user.jid)
};
module.exports = async (msg, conn, m, store) => {
    setInterval(async () => {
        let mute = await getAutomutes();
        if (mute !== 'no data') {
            mute.map(async ({
                jid,
                time
            }) => {
                time2 = moment().tz('Asia/Kolkata').format('HH:mm');
                if (time2 == time) {
                  setTimeout(async()=>{
                    let BotAdmin = await isBotAdminV1(m, conn, jid);
                    if (!BotAdmin) return;
                    return await conn.groupSettingUpdate(jid, "announcement");
                  },12000);
                }
            })
        }
        let unmute = await getAutoUnMutes();
        if (unmute == 'no data') return;
        unmute.map(async ({
            jid,
            time
        }) => {
            time1 = moment().tz('Asia/Kolkata').format('HH:mm');
            if (time1 == time) {
              setTimeout(async()=>{
                let BotAdmin = await isBotAdminV1(m, conn, jid);
                if (!BotAdmin) return;
                return await conn.groupSettingUpdate(jid, "not_announcement");
              },12000);
            }
        })
    }, 1000 * 45);
}
//automaton plugins
inrl({
    pattern: 'amute',
    desc: 'auto mute groups',
    sucReact: "🙃",
    category: ["system", "all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let {
        AUTOMUTE_MSG
    } = await getVar();
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match.match(':')) return message.reply('need time (example :- 23:59)')
    let [hr, mn] = match.split(':');
    if (hr.length == 1) hr = '0' + hr;
    if (mn.length == 1) mn = '0' + mn;
    if (isNaN(hr) || isNaN(mn)) return message.reply('need number; ex:- automute 22:22');
    await add_Schedule(message.from, `${hr}:${mn}`, 'mute')
    let ast = hr > 12 ? `${hr-12}:${mn}PM` : `${hr}:${mn}AM`;
    ast = AUTOMUTE_MSG.replace('@time', ast)
    return message.reply(ast)
});
inrl({
    pattern: 'aunmute',
    desc: 'unmute a group',
    sucReact: "🙂",
    category: ["system", "all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let {
        AUTOUNMUTE_MSG
    } = await getVar();
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match.match(':')) return message.reply('need time (example :- 23:59)')
    let [hr, mn] = match.split(':')
    if (hr.length == 1) hr = '0' + hr;
    if (mn.length == 1) mn = '0' + mn;
    if (isNaN(hr) || isNaN(mn)) return message.reply('need number; ex:- autounmute 22:22');
    await add_Schedule(message.from, `${hr}:${mn}`, 'unmute')
    let ast = hr > 12 ? `${hr-12}:${mn}PM` : `${hr}:${mn}AM`;
    ast = AUTOUNMUTE_MSG.replace('@time', ast)
    return message.reply(ast)
})
inrl({
    pattern: 'pdm',
    desc: ' set pdm, antilink, fake number, badwords',
    sucReact: "🖕",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match) return message.reply('need action! _ex:-_ pdm on/off');
    if (match != 'on' && match != 'off') return message.reply('give me a proper action? _ex:- pdm on');
    if (match == "on") {
        let isPdmInDb = await getPdm(message.from)
        if (isPdmInDb == "true") return message.reply('already activated!');
        await setpdm(message.from)
        return await message.reply('pdm activated!')
    } else if (match == "off") {
        let isPdmInDb = await getPdm(message.from)
        if (isPdmInDb == "false") return message.reply('already deactivated!');
        await removePdm(message.from)
        return await message.reply('pdm deactivated!')
    }
});
inrl({
    pattern: 'antilink',
    desc: ' set pdm, antilink, fake number, badwords',
    sucReact: "🖕",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match) return message.reply('need action! _ex:-_ antilink on/off');
    if (match != 'on' && match != 'off') return message.reply('give me a proper action? _ex:- antilink on');
    if (match == "on") {
        let isInDb = await getAntiLink(message.from);
        if (isInDb == "true") return message.reply('already activated!');
        await setAntiLink(message.from)
        return await message.reply('_successfully set antilink on thi group_')
    } else if (match == "off") {
        let isInDb = await getAntiLink(message.from);
        if (isInDb == "false") return message.reply('already deactivated!');
        await removeAntiLink(message.from)
        return await message.reply('_successfully removed antilink from this group')
    }
});
inrl({
    pattern: 'antiword',
    desc: ' set pdm, antilink, fake number, badwords',
    sucReact: "🖕",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match) return message.reply('need word?!')
    let data = await GetWords(message.from);
    if (data = "no data") {
        await setAntiWord(message.from, match);
        return await message.reply('_if no action when trying on the word restart the bot_');
    } else if (!data.includes(match)) {
        await setAntiWord(message.from, match);
        return await message.reply('_if no action when trying on the word restart the bot_');
    } else {
        return await message.reply('_given word already set as antiword_');
    }
});
inrl({
    pattern: 'antifake',
    desc: ' set pdm, antilink, fake number, badwords',
    sucReact: "🖕",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match) return await message.reply('_give me the starting of fake Number_');
    match = match.replace(/[^0-9]/g, "");
    if (isNaN(match)) return message.reply('*need Number!*');
    let data = await GetFake(message.from);
    await message.reply(data)
    if (data == "no data" || !data) {
        await setFakeNum(message.from, match);
        return await message.reply('*successfully set fake number!*\n_if no action restart the bot using  . restart cmd_');
    } else if (!data.includes(match)) {
        await setFakeNum(message.from, match);
        return await message.reply('*successfully set fake number!*\n_if no action restart the bot using  . restart cmd_');
    } else {
        return await message.reply('_given number already set as antifake_');
    }
});
inrl({
    pattern: 'delfake',
    desc: 'remove fake number',
    sucReact: "🤥",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match) return message.reply('need starting value  of fake number?!')
    if (isNaN(match)) return message.reply('enter a valid data! need Number!');
    let data = await GetFake(message.from);
    if (data == "no data" || !data) return await message.reply('you not set any fake number');
    if (!match.includes(data)) return await message.reply('you not set this number as fake try getfake to get fake number\ngetfake all to get list of fake number');
    await removeAFake(message.from, match)
    return await message.reply('successfully removed fake number from db\ntry restart cmd');
});
inrl({
    pattern: 'delword',
    desc: 'remove word',
    sucReact: "🤥",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match) return message.reply('give me a word?!')
    let data = await GetWords(message.from);
    if (data == "no data") return await message.reply('you not set any word');
    if (!match.includes(data)) return await message.reply('you not set this word as antiword try getword to get list of words\ngetword all to get list of word');
    await removeWord(message.from, match)
    return message.reply('successfully removed\ntry restart cmd');
});
inrl({
    pattern: 'delmute',
    desc: 'remove word',
    sucReact: "🤥",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match) return message.reply('give me a time?!\nex:-delmute 22:15 for 10:15 PM')
    if (!match.includes(':')) return await message.reply('give me a time?!\nex:-delmute 10:15 for 10:15 AM')
    let [hr, mn] = match.replaceAll(' ', '').split(':');
    if (!hr || !mn) return await message.reply('give me a time as hr and minute?!\nex:-delmute 14:15 for 02:15 PM');
    if (hr.length < 2) hr = '0' + hr;
    if (mn.length < 2) hr = '0' + mn;
    if (isNaN(hr) || isNaN(mn)) return await message.reply('need time in number format');
    let data = await getAutomutes();
    if (data == "no data") return await message.reply('you not set any time as amute try *amute* 22:22  for 10:22PM');
    let avb = false
    await data.map(async ({
        jid,
        time
    }) => {
        if (!jid.match(message.from)) return;
        if (!time) return await message.reply('not set any auto mute time in this group try *amute* 22:22  for 10:22PM');
        if (time == `${hr}:${mn}`) {
            avb = true;
            await dlt_Schedule(message.from, `${hr}:${mn}`, 'mute');
            return await message.reply('successfully remove time shedule from this ' + message.from + ' jid')
        }
    });
    if (!avb) return await message.reply('you not set any action for given time')
});
inrl({
    pattern: 'delunmute',
    desc: 'remove word',
    sucReact: "🤥",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (!match) return message.reply('give me a time?!\nex:-delunmute 22:15 for 10:15 PM')
    if (!match.includes(':')) return await message.reply('give me a time?!\nex:-delunmute 10:15 for 10:15 AM')
    let [hr, mn] = match.replaceAll(' ', '').split(':');
    if (!hr || !mn) return await message.reply('give me a time as hr and minute?!\nex:-delunmute 14:15 for 02:15 PM');
    if (hr.length < 2) hr = '0' + hr;
    if (mn.length < 2) hr = '0' + mn;
    if (isNaN(hr) || isNaN(mn)) return await message.reply('need time in number format');
    let data = await getAutoUnMutes();
    if (data == "no data") return await message.reply('you not set any time as aunmute try *aunmute* 22:22  for 10:22PM');
    let avb = false
    await data.map(async ({
        jid,
        time
    }) => {
        if (!jid.match(message.from)) return;
        if (!time) return await message.reply('not set any auto unmute time in this group try *aunmute* 22:22  for 10:22PM');
        if (time == `${hr}:${mn}`) {
            avb = false
            await dlt_Schedule(message.from, `${hr}:${mn}`, 'unmute')
            return await message.reply('successfully remove time shedule from this ' + message.from + ' jid')
        }
    });
    if (!avb) return await message.reply('you not set any action for given time')
});
inrl({
    pattern: "getfake",
    desc: 'get datas of, fake number',
    sucReact: "🥵",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (match && match != "all") return await message.reply("if you need to get all fake number from all group try *getfake all*");
    if (!match || match != "all") {
        let data = await GetFake(message.from)
        if(!data) return await message.reply("no data");
        return await message.reply(data);
    } else if (match == "all") {
        let T_X_T = "result for all group\n";
        let data = await getListofFake();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(async ({
            id,
            data,
            jid
        }) => {
            if (id == withValue()) {
                T_X_T += `id : ${id}\nnumber: ${data} \njid : ${jid}\n\n`
            } else T_X_T += "no data"
        });
        return await message.reply(T_X_T);
    }
});
inrl({
    pattern: "getword",
    desc: 'get datas of, fake number',
    sucReact: "🥵",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (match && match != "all") return await message.reply("if you need to get all words from all group try *getword all*");
    if (!match || match != "all") {
        let data = await GetWords(message.from);
        if(!data) return await message.reply("no data");
        return await message.reply(data);
    } else if (match == "all") {
        let T_X_T = "result for all group\n";
        let data = await getListOfWord();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(async ({
            id,
            data,
            jid
        }) => {
            if (id == withValue()) {
                T_X_T += `id : ${id}\nword: ${data} \njid : ${jid}\n\n`
            } else T_X_T += "no data"
        });
        return await message.reply(T_X_T);
    }
});
inrl({
    pattern: "getmute",
    desc: 'get datas of, fake number',
    sucReact: "🥵",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (match && match != "all") return await message.reply("if you need to get all mute from all group try *getmute all*");
    if (!match || match != "all") {
        let jidd = message.from,
            T_X_T = "result for this group\n";
        let data = await getAutomutes();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(({
            jid,
            time,
            action
        }) => {
            if (jid == jidd) {
                T_X_T += `time : ${time}\naction : ${action} \n\n`
            } else T_X_T += "no data"
        })
        return await message.reply(T_X_T.replace("no data", ""));
    } else if (match == "all") {
        let T_X_T = "result for all group\n";
        let data = await getAutomutes();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(({
            id,
            jid,
            time,
            action
        }) => {
            if (id == withValue()) {
                T_X_T += `time : ${time}\naction: ${action} \njid : ${jid}\n\n`
            } else T_X_T += "no data"
        });
        return await message.reply(T_X_T);
    }
});
inrl({
    pattern: "getunmute",
    desc: 'get datas of',
    sucReact: "🥵",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (match && match != "all") return await message.reply("if you need to get all unmute from all group try *getunmute all*");
    if (!match || match != "all") {
        let jidd = message.from,
            T_X_T = "result for this group\n";
        let data = await getAutoUnMutes();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(({
            jid,
            time,
            action
        }) => {
            if (jid == jidd) {
                T_X_T += `time : ${time}\naction : ${action} \n\n`
            } else T_X_T += "no data"
        })
        return await message.reply(T_X_T);
    } else if (match == "all") {
        let T_X_T = "result for all group\n";
        let data = await getAutoUnMutes();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(async ({
            id,
            jid,
            time,
            action
        }) => {
            if (id == withValue()) {
                T_X_T += `time : ${time}\naction: ${action} \njid : ${jid}\n\n`
            } else T_X_T += "no data"
        });
        return await message.reply(T_X_T);
    }
});
inrl({
    pattern: "tag",
    desc: 'no desc',
    sucReact: "💯",
    category: ["system", "all"],
    type: "whatsapp",
    onlyGroup: true
}, async (m, conn, match) => {
    let admin = await isAdmin(m, conn);
    let BotAdmin = await isBotAdmin(m, conn);
    if (!admin && !m.client.isCreator) return await m.reply('Action only For admin or Owner');
    const groupMetadata = await conn.groupMetadata(m.key.remoteJid).catch((e) => {});
    const participants = await groupMetadata.participants;
    if (m.quoted) {
        match = match || m.quoted.text;
    }
    if (!match) return await m.reply('need text');
    conn.sendMessage(m.key.remoteJid, {
        text: match,
        mentions: participants.map((a) => a.id),
    }, {
        quoted: m,
    });
});
inrl({
    pattern: "promote",
    usage: '<mentions|reply>',
    sucReact: "😎",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    try {
        let admin = await isAdmin(message, client);
        let BotAdmin = await isBotAdmin(message, client);
        if (!BotAdmin) return await message.reply('Bot must Be Admin');
        if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
        if (!message.quoted) return message.reply('reply to a user');
        await client.groupParticipantsUpdate(message.from,
            [message.quoted.sender], "promote");
        client.sendMessage(message.from, {
            text: `@${message.quoted.sender.split('@')[0]} Promoted As admin.`,
            mentions: [message.quoted.sender]
        }, {
            quoted: message,
        });
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "demote",
    usage: '<mentions|reply>',
    sucReact: "🤐",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    try {
        if (!BotAdmin) return await message.reply('Bot must Be Admin');
        if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
        if (!message.quoted) return message.reply('reply to a user');
        await client.groupParticipantsUpdate(message.from,
            [message.quoted.sender], "demote");
        return await client.sendMessage(message.from, {
            text: `@${message.quoted.sender.split('@')[0]} Demoted From admin.`,
            mentions: [message.quoted.sender]
        }, {
            quoted: message,
        });
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "kick",
    usage: '<mentions|reply>',
    sucReact: "😤",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    try {
        if (!match) {
            if (!BotAdmin) return await message.reply('Bot must Be Admin');
            if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
            if (!message.quoted) return message.reply('reply to a user');
            await client.groupParticipantsUpdate(message.from,
                [message.quoted.sender], "remove");
            return await client.sendMessage(message.from, {
                text: `@${message.quoted.sender.split('@')[0]} kicked From The Group.`,
                mentions: [message.quoted.sender]
            }, {
                quoted: message,
            });
        } else if (match.toLowerCase() == 'all') {
            if (!BotAdmin) return await message.reply('Bot must Be Admin');
            if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
            const groupMetadata = await client.groupMetadata(message.from).catch(e => {})
            const participants = await groupMetadata.participants;
            let admins = await participants.filter(v => v.admin !== null).map(v => v.id);
            participants.filter((U) => !U.admin == true).map(({
                id
            }) => id).forEach(async (k) => {
                await client.groupParticipantsUpdate(message.from,
                    [k], "remove");
            });
            return message.reply('all group Participants will been kicked!')
        }
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "add",
    usage: '<num1/numb2&etc>',
    sucReact: "😋",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    const BotAdmin = await isBotAdmin(message, client);
    const admin = await isAdmin(message, client);
    match = match.replaceAll(' ', '');
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    if (match) {
        let users = match.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        let info = await client.onWhatsApp(users);
        ex = info.map((jid) => jid.jid);
        if (!ex.includes(users)) return await message.reply("This number doesn't exists on whatsapp");
        const su = await client.groupParticipantsUpdate(message.from,
            [users], "add");
        if (su[0].status == 403) {
            message.reply(`Couldn't Add Invite Send`);
            return await message.sendGroupInviteMessageRequst(users.replace('@s.whatsapp.net', ''));
        } else if (su[0].status == 408) {
            await client.sendMessage(message.from, {
                text: `Couldn't add @${users.split('@')[0]} because they left the group recently. Try again later.`,
                mentions: [users]
            }, {
                quoted: message,
            });
            const code = await client.groupInviteCode(message.from);
            return await client.sendMessage(users, {
                text: `https://chat.whatsapp.com/${code}`
            }, {
                quoted: message
            })
        } else if (su[0].status == 401) {
            await client.sendMessage(message.from, {
                text: `Couldn't add @${users.split('@')[0]} because they blocked the bot number.`,
                mentions: [users]
            }, {
                quoted: message,
            });
        } else if (su[0].status == 200) {
            return await client.sendMessage(message.from, {
                text: `@${users.split('@')[0]} Added To the group.`,
                mentions: [users]
            }, {
                quoted: message,
            });
        } else if (su[0].status == 409) {
            return await client.sendMessage(message.from, {
                text: `@${users.split('@')[0]} Already in Group.`,
                mentions: [users]
            }, {
                quoted: message,
            });
        } else {
            return await message.reply(JSON.stringify(su));
        }
    } else if (message.quoted) {
        let users = message.quoted.sender;
        const su = await client.groupParticipantsUpdate(message.from,
            [users], "add");
        if (su[0].status == 403) {
            message.reply(`Couldn't Add Invite Send`);
            return await message.sendGroupInviteMessageRequst(users.replace('@s.whatsapp.net', ''));
        } else if (su[0].status == 408) {
            await client.sendMessage(message.from, {
                text: `Couldn't add @${users.split('@')[0]} because they left the group recently. Try again later.`,
                mentions: [users]
            }, {
                quoted: message,
            });
            const code = await client.groupInviteCode(message.from);
            return await client.sendMessage(users, {
                text: `https://chat.whatsapp.com/${code}`
            }, {
                quoted: message
            })
        } else if (su[0].status == 401) {
            await client.sendMessage(message.from, {
                text: `Couldn't add @${users.split('@')[0]} because they blocked the bot number.`,
                mentions: [users]
            }, {
                quoted: message,
            });
        } else if (su[0].status == 200) {
            return await client.sendMessage(message.from, {
                text: `@${users.split('@')[0]} Added To the group.`,
                mentions: [users]
            }, {
                quoted: message,
            });
        } else if (su[0].status == 409) {
            return await client.sendMessage(message.from, {
                text: `@${users.split('@')[0]} Already in Group.`,
                mentions: [users]
            }, {
                quoted: message,
            });
        } else {
            return await message.reply(JSON.stringify(su));
        }
    }
});
inrl({
    pattern: "gpp",
    desc: 'set full size profile picture',
    sucReact: "😁",
    category: ["all", "create"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    try {
        const BotAdmin = await isBotAdmin(message, client);
        const admin = await isAdmin(message, client);
        if (!BotAdmin) return await message.reply('Bot must Be Admin');
        if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
        if (!message.quoted) return await message.reply('reply to an image!');
        if (!message.quoted.imageMessage) return await message.reply('reply to an image!');
        let _message = message.quoted.imageMessage;
        let download = await client.downloadMediaMessage(_message);
        await client.updateProfilePicture(message.from, download);
        return message.reply('group icon updated!');
    } catch (e) {
        message.reply(e)
    }
})
inrl({
    pattern: "fullgpp",
    desc: 'set  profile picture of group with any resolution',
    sucReact: "🔥",
    category: ["all", "create"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    try {
        const BotAdmin = await isBotAdmin(message, client);
        const admin = await isAdmin(message, client);
        if (!BotAdmin) return await message.reply('Bot must Be Admin');
        if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
        if (!message.quoted) return await message.reply('reply to an image!');
        if (!message.quoted.imageMessage) return await message.reply('reply to an image!');
        let download = await message.quoted.download();
        await message.updateProfilePicture(message.from, download);
        return message.reply('group icon updated!');
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "gname",
    usage: '<name>',
    sucReact: "🙃",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    try {
        const BotAdmin = await isBotAdmin(message, client);
        const admin = await isAdmin(message, client);
        if (!BotAdmin) return await message.reply('Bot must Be Admin');
        if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
        if (message.client.text > 75) return await client.sendMessage(message.from, {
            text: errorMessage('Text is too long')
        }, {
            quoted: message
        })
        let txt = message.client.text || " ";
        await client.groupUpdateSubject(message.from, txt);
        return await client.sendMessage(message.from, {
            text: '_group name changed successfully!_'
        }, {
            quoted: message
        })
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "gdesc",
    usage: '<desc>',
    sucReact: "🙂",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    try {
        const BotAdmin = await isBotAdmin(message, client);
        const admin = await isAdmin(message, client);
        if (!BotAdmin) return await message.reply('Bot must Be Admin');
        if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
        if (message.client.text > 400) return await client.sendMessage(message.from, {
            text: 'Text is too long'
        }, {
            quoted: message
        })
        let txt = match || " ";
        await client.groupUpdateDescription(message.from, txt);
        return await client.sendMessage(message.from, {
            text: '_group name changed successfully!_'
        }, {
            quoted: message
        })
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "mute",
    sucReact: "🤙",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    const BotAdmin = await isBotAdmin(message, client);
    const admin = await isAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    try {
        await client.groupSettingUpdate(message.from, "announcement");
        return await client.sendMessage(message.from, {
            text: '_Group Closed_'
        }, {
            quoted: message
        });
    } catch (e) {
        return message.reply(e);
    }
});
inrl({
    pattern: "unmute",
    sucReact: "🤙",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    const BotAdmin = await isBotAdmin(message, client);
    const admin = await isAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    try {
        await client.groupSettingUpdate(message.from, "not_announcement");
        return await client.sendMessage(message.from, {
            text: '_Group Opened!_'
        }, {
            quoted: message
        });
    } catch (e) {
        return message.reply(e);
    }
});
inrl({
    pattern: "lock",
    sucReact: "🤙",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    const BotAdmin = await isBotAdmin(message, client);
    const admin = await isAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    try {
        await client.groupSettingUpdate(message.from, "locked");
        return await client.sendMessage(message.from, {
            text: '_Group Locked!_'
        }, {
            quoted: message
        });
    } catch (e) {
        return message.reply(e);
    }
});
inrl({
    pattern: "unlock",
    sucReact: "🤙",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    const BotAdmin = await isBotAdmin(message, client);
    const admin = await isAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    try {
        await client.groupSettingUpdate(message.from, "unlocked");
        return await client.sendMessage(message.from, {
            text: '_Group Unlocked!_'
        }, {
            quoted: message
        });
    } catch (e) {
        return message.reply(e);
    }
});
inrl({
    pattern: "left",
    sucReact: "👋",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true,
    fromMe: true
}, async (message, client, match) => {
    try {
        await client.groupLeave(message.from)
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "invite",
    sucReact: "💖",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    try {
        const BotAdmin = await isBotAdmin(message, client);
        const admin = await isAdmin(message, client);
        if (!BotAdmin) return await message.reply('Bot must Be Admin');
        if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
        const code = await client.groupInviteCode(message.from);
        return await client.sendMessage(message.from, {
            text: `🔗 Group Link: https://chat.whatsapp.com/${code}`
        }, {
            quoted: message
        });
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "revoke",
    sucReact: "👌",
    category: ["group", "all"],
    type: 'group',
    onlyGroup: true
}, async (message, client, match) => {
    try {
        const BotAdmin = await isBotAdmin(message, client);
        const admin = await isAdmin(message, client);
        if (!BotAdmin) return await message.reply('Bot must Be Admin');
        if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
        await client.groupRevokeInvite(message.from);
        return await client.sendMessage(message.from, {
            text: `Group link revoked.`
        }, {
            quoted: message
        });
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "acpt",
    sucReact: "🆗",
    category: ["group", "all"],
    type: 'owner',
    fromMe: true
}, async (message, client, match) => {
    try {
        if (!match || !match.match(/^https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]/)) return await message.reply('need Url Of Group.');
        let urlArray = (match).trim().split("/");
        if (!urlArray[2] == 'chat.whatsapp.com') return await client.sendMessage(message.from, {
            text: 'Enter valid link'
        }, {
            quoted: message
        });
        const response = await client.groupAcceptInvite(urlArray[3]);
        return await client.sendMessage(message.from, {
            text: `Joined: ${response}`
        }, {
            quoted: message
        });
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "getinfo",
    sucReact: "🆗",
    category: ["group", "all"],
    type: 'group'
}, async (message, client, match) => {
    try {
        if (!match || !match.match(/^https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]/)) return await message.reply('need Url Of Group.');
        let urlArray = (match).trim().split("/")[3];
        const response = await client.groupGetInviteInfo(urlArray)
        return await client.sendMessage(message.from, {
            text: "id: " + response.id + "\nsubject: " + response.subject + "\nowner: " + `${response.owner ? response.owner.split('@')[0] : 'unknown'}` + "\nsize: " + response.size + "\nrestrict: " + response.restrict + "\nannounce: " + response.announce + "\ncreation: " + require('moment-timezone')(response.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') + "\ndesc" + response.desc
        }, {
            quoted: message
        });
    } catch (e) {
        message.reply(e)
    }
}); // this actul not a grp function but 😹
inrl({
    pattern: "pp",
    desc: 'set  profile picture of bot',
    sucReact: "😁",
    category: ["all", "create"],
    type: 'owner',
    fromMe: true
}, async (message, client, match) => {
    try {
        if (!message.quoted) return await message.reply('reply to an image!');
        if (!message.quoted.imageMessage) return await message.reply('reply to an image!');
        let _message = message.quoted.imageMessage;
        let download = await client.downloadMediaMessage(_message);
        await client.updateProfilePicture(message.client.botNumber, download).catch((err) => fs.unlinkSync(download))
        return message.reply('profile picture updated!');
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "fullpp",
    desc: 'set  profile picture of bot with any resolution',
    sucReact: "🔥",
    category: ["all", "create"],
    type: 'owner',
    fromMe: true
}, async (message, client, match) => {
    try {
        if (!message.quoted) return await message.reply('reply to an image!');
        if (!message.quoted.imageMessage) return await message.reply('reply to an image!');
        let download = await message.quoted.download();
        await message.updateProfilePicture(message.client.botNumber, download);
        return message.reply('profile picture updated!');
    } catch (e) {
        message.reply(e)
    }
});
inrl({
    pattern: "bug",
    desc: 'it send an bug msg',
    sucReact: "🔥",
    category: ["all", "create"],
    type: 'owner',
    fromMe: true
}, async (message, client, match) => {
    let To = message.from;
    if (match && (match.endsWith('net') || match.endsWith('us'))) To = match;
    await client.sendMessage(client.user.id, {
        text: "_can't use this cmd '(bug)' repeatedly!may your number Ban due to Spam_"
    });
    return await message.sendBugRequst(To);
    //message.sendBugReqV2(m.from).MOD;
    //message.sendIBugV4Requst(message.from).IOS
});
