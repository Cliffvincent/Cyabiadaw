const config = {
    name: "shoti",
    aliases: ['shawty','eabab'],
    version: "1.0.3",
    description: "random-shoti",
    usage: '<shoti>',
    cooldown: 5,
    credits: "XaviaTeam",
};

async function onCall({ message: yazky}) {
    try {       
        const res = await global.GET('https://betadash-shoti-yazky.vercel.app/shotizxx?apikey=shipazu');
        const { title, username, nickname, shotiurl } = res.data;

        let imgStream = await global.getStream(shotiurl);

        await yazky.reply({
            body: `Username: ${username}`,
            attachment: imgStream
         });
    } catch (error) {
        yazky.reply("𝙴𝚁𝚁𝙾𝚁: 𝙽𝚘 𝚜𝚑𝚊𝚠𝚝𝚢 𝚟𝚒𝚍𝚎𝚘 𝚏𝚘𝚞𝚗𝚍.");
    }
}

export default {
    config,
    onCall
};
