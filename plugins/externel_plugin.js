const {
    inrl,
    runtime,
    add_plugin,
    dlt_plugin,
    getListOfPlugin,
    getVar,
    withValue
} = require("../lib")
const {
    exec
} = require("child_process");
const Config = require('../config')
const got = require("got");
const fs = require("fs");

inrl({
    pattern: '^restart',
    desc: 'to restart bot',
    sucReact: "😛",
    category: ["system", "all"],
    type: "system",
    fromMe: true
}, async (message, client, match, cmd) => {
    await message.reply('Restarting please await few second°s')
    exec('pm2 restart all')
})
inrl({
    pattern: 'install',
    desc: 'to install externel Plugin ',
    sucReact: "😛",
    category: ["system", "all"],
    type: "system",
    fromMe: true
}, async (message, client, match, cmd) => {
    if (!match || !/\bhttps?:\/\/\S+/gi.test(match)) return await message.send("need gist Url!");
    let GetOrigin, NewUrl
    try {
        GetOrigin = new URL(match)
    } catch (e) {
        return await message.reply("need an Valid Url");
    }
    if (GetOrigin.host === 'gist.github.com') {
        NewUrl = !match?.toString().includes('/raw') ? match.toString() + '/raw' : match.toString()
    } else {
        NewUrl = match.toString()
    }
    await message.reply("wait a minut!")
    let plugin_name, url = NewUrl
    let {
        body,
        statusCode
    } = await got(url).catch((e) => {
        return message.reply('not a valid url!')
    })
    if (statusCode == 200) {
        plugin_name = body.match(/(?<=pattern:) ["'](.*?)["']/);
        plugin_name = plugin_name[0].replace(/["']/g, "").trim().split(" ")[0] + "test";
        fs.writeFileSync(__dirname + "/" + plugin_name + ".js", body);
        try {
            require("./" + plugin_name);
        } catch (e) {
            fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
            return await message.reply(e);
        }
        await message.reply("newly installed plugin are " + plugin_name.split('test')[0])
        await add_plugin(plugin_name.split('test')[0], url)
        fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
    }
});
inrl({
    pattern: 'plugins',
    desc: 'to get all externel Plugin ',
    sucReact: "😛",
    category: ["system", "all"],
    type: "system",
    fromMe: true
}, async (message, client, match, cmd) => {
    let valueie = await withValue();
    let text = "",
        name, urls;
    if (!match) {
        let list = await getListOfPlugin();
        if (list == 'no data') return await message.reply('externel plugins db is empty!')
        for (let i = 0; i < list.length; i++) {
            name = list[i].name.replace(valueie, '');
            urls = list[i].url;
            text += name + "\n" + urls + "\n";
        }
        if (text) {
            return await message.reply(text)
        } else {
            return await message.send('no externel plugins!')
        }
    }
})

inrl({
    pattern: 'remove',
    desc: 'to remove externel Plugin ',
    sucReact: "🐽",
    category: ["system", "all"],
    type: "system",
    fromMe: true
}, async (message, client, match, cmd) => {
    const {
        PREFIX,
        FOOTER
    } = await getVar();
    let prefix = PREFIX == 'false' ? '' : PREFIX;
    let valueie = await withValue();
    if (!match) return;
    match = match.trim();
    let list = await getListOfPlugin(),
        name = "",
        avb = false;
    if (list == 'no data') return message.reply('externel plugins db is empty!')
    for (let i = 0; i < list.length; i++) {
        name = list[i].name.replace(valueie, '');
        if (name == match) {
            await dlt_plugin(match)
            const buttons = [{
                buttonId: prefix + "restart",
                buttonText: {
                    displayText: "RESTART"
                },
                type: 1,
            }]
            const caption = match + " plugin deleted from the database\nbut the plugins work for befor restarting\nthe project, as you want to remove this \nplugin permently from the code at this \nmomment! click the below \nrestart button"
            const templateButtons = {
                text: '```' + caption + '```',
                footer: FOOTER,
                buttons: buttons,
                headerType: 1
            };
            //return await client.sendMessage(message.from,templateButtons, { quoted: message});
            return await message.send("plugin removed successfully!, type restart to remove plugin");
        } else {
            avb = true;
        }
    }
    if (avb) return await message.reply("no such plugin in your PLUGINDB");
})
inrl({
    pattern: 'runtime',
    desc: 'get runtime',
    sucReact: "😛",
    category: ["system", "all"],
    type: "system",
    fromMe: false,
    usage: "get the time of bot in alive"
}, async (message, client, match, cmd) => {
    return await message.reply(await runtime());
})
