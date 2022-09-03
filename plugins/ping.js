const  bots = require('../lib/perfix')

bots.bot(
	   {
		pattern: ['ping'],
		desc: 'To check ping',
                sucReact: "🥱"
	   },
	async (message, client) => {
		const start = new Date().getTime()
		await client.sendMessage( message.from, 'Ping!', { quoted: message })
		const end = new Date().getTime()
		return await client.sendMessage( message.from,'Pong!\n' + (end - start) + 'ms', { quoted: message })
	}
)
