const langData = {
    "en_US": {
        "reply.success": "Username: {username}",
        "reply.error": "𝙴𝚁𝚁𝙾𝚁: 𝙽𝚘 𝚜𝚑𝚊𝚠𝚝𝚢 𝚟𝚒𝚍𝚎𝚘 𝚏𝚘𝚞𝚗𝚍."
    },
    "vi_VN": {
        "reply.success": "Tên người dùng: {username}",
        "reply.error": "LỖI: Không tìm thấy video shawty."
    }
}

async function onCall({ message, getLang, data }) {
    if (message.body == "shoti" && message.senderID != global.botID) {
        try {
            const res = await global.GET('https://betadash-shoti-yazky.vercel.app/shotizxx?apikey=shipazu');
            const { username, shotiurl } = res.data;

            let imgStream = await global.getStream(shotiurl);

            await message.reply({
                body: getLang("reply.success", { username }),
                attachment: imgStream
            });
        } catch (error) {
            message.reply(getLang("reply.error"));
        }
    }
}

export default {
    langData,
    onCall
}
