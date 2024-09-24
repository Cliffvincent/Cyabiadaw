const config = {
    name: "shoti",
    aliases: ["shot"],
    credits: "Cliff",
};

async function onCall({ message: yazky, event: e}) {
    try {
        const l = await yazky.reply("Sending shoti, please wait...", e.threadID);

        const res = await global.GET('https://betadash-shoti-yazky.vercel.app/shotizxx?apikey=shipazu');
        const { title, username, nickname, shotiurl } = res.data;

        let imgStream = await global.getStream(shotiurl);

        yazky.unsendMessage(l.messageID);

        await yazky.reply({
            body: `Username: ${username}`,
            attachment: imgStream
        }, e.threadID, e.messageID);
    } catch (error) {
        yazky.reply("𝙴𝚁𝚁𝙾𝚁: 𝙽𝚘 𝚜𝚑𝚊𝚠𝚝𝚢 𝚟𝚒𝚍𝚎𝚘 𝚏𝚘𝚞𝚗𝚍.", e.threadID, e.messageID);
    }
}

export default {
    config,
    onCall
};
