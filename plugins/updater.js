const simpleGit = require('simple-git');
const git = simpleGit();
const faz = require('../lib/perfix');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })

faz.bot({pattern: ['update'], dontAddCommandList: true, sucReact: "🥰",category: ["system", "all"]},(async (message, client) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await client.sendMessage(message.from, "update check",  { quoted: message });    
    } else {
        var inrlupdate = "new update";
                commits['all'].map(
                    (commit) => {
                        inrlupdate += '│➩ [' + commit.date.substring(0, 10) + '] ➠  *' + commit.message + '*   ↱ ' + commit.author_name + ' ↲\n';
                    }
                );
        
        await client.sendMessage(message.from, 
            '╭──────────────────────────╮\n│➣ 𝐁𝐨𝐭 𝐔𝐩𝐝𝐚𝐭𝐞  \n│\n```│' + inrlupdate + '│\n│ ☞ 𝚃𝚢𝚙𝚎 .𝐮𝐩𝐝𝐚𝐭𝐞 𝐧𝐨𝐰 𝚝𝚘 𝚄𝚙𝚍𝚊𝚝𝚎 𝚈𝚘𝚞𝚛 𝙱𝚘𝚝\n╰──────────────────────────╯\n◩ 𝐂𝐨𝐝𝐞𝐝 𝐁𝐲 fasweeh\n╭──────────────────────────╮\n➣ 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐎𝐰𝐧𝐞𝐫...\n✆ wa.me/917025099161?text=Hi\n╰──────────────────────────╯', { quoted: message }); 
    }
}));

faz.bot({pattern: ['update now'], dontAddCommandList: true, sucReact: "🥰", category: ["system", "all"]},  (async (message, client) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await client.sendMessage(message.from, "updating now",{ quoted: message }
        );    
    } else {
        var guncelleme = await message.reply("updating now");
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await await client.sendMessage(message.from,"inavild data form heroku", { quoted: message });
                await new Promise(r => setTimeout(r, 1000));
                return await await client.sendMessage(message.from, "w8",{ quoted: message });
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await await client.sendMessage(message.from,"successfully updated", { quoted: message });

            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await await client.sendMessage(message.from,"unknown error found", { quoted: message });
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await await client.sendMessage(message.from,'*❌ undifined error'+ err + '```', { quoted: message });
                }
            }));
            await guncelleme.delete();
        }
    }
}));
