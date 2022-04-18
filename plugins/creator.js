const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Wan (Owner);;;'
                    + 'FN:Wan (Owner)\n' // full name
                    + 'ORG:Wan (Owner);\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=60164492583:+60 16-449 2583\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Wan (Owner)', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
