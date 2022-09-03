const  bots = require('../lib/perfix')

bots.bot(
	   {
		pattern: 'ping ?(.*)',
		desc: 'To check ping',
		usage: '<userName>',
                sucReact: "🥱",
                category: ["search", "all"],
	   },
	async (message, client) => {
		const start = new Date().getTime()
		await message.send('```Ping!```')
		const end = new Date().getTime()
		return await message.send(
			'*Pong!*\n ```' + (end - start) + '``` *ms*'
		)
	}
)
