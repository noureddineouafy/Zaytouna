const fs = require("fs");

module.exports = async (conn, m) => {
	try {
		let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await conn.groupMetadata(m.id)
		let gParticipants = m.participants
		let WC = `❣️ Welcome to: ${subject}
❣️ ${(participants.length + 1).toString()}th Member.
❣️ Desc: ${desc}
`;
		for (let num of gParticipants) {
			try { ppuser = await conn.profilePictureUrl(num, 'image') } 
			catch { ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
			if (m.action == 'add') {
				conn.sendMessage(m.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `HI: @${num.split("@")[0]}\n\n${WC}`})
			} else if (m.action == 'remove') {
				conn.sendMessage(m.id, { image: { url: ppuser }, caption: `Oh God: @${num.split("@")[0]}\n\n💎 Why this preson left this group🤔😪`})
			} else if (m.action == 'promote') {
				conn.sendMessage(m.id, { text: `HI: @${num.split("@")[0]}\n\n💎 You Are New Group Admin`, contextInfo: { mentionedJid: [num] }})
			} else if (m.action == 'demote') {
				conn.sendMessage(m.id, { text: `HI: @${num.split("@")[0]}\n\n💎 You Are Not Group Admin`, contextInfo: { mentionedJid: [num] }})
			}
		}
	} catch (err) {
		console.log(err)
	}
}
