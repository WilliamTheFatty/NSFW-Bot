var Discord = require('discord.js');

exports.run = async (client, message, args, utils, locale) => {
    if (!["388973110549807104"].includes(message.author.id)) return;

    try {
        var code = args.join(" ");
        let evaled = await eval(code);
        evaled = await clean(evaled);
        if (typeof evaled !== "string") {
            evaled = require("util").inspect(evaled);
        }
        message.channel.send(`\\✅ | The eval ended without problems:`).then(() => {
            message.channel.send(evaled, {
                code: "js",
                split: "\n"
            });
        })
    } catch (err) {
        message.channel.send(`\\❌ | An error occurred during execution:\`\`\`js\n${err.stack}\n\`\`\``);
    }

}


module.exports.cfr = {
    name: "eval"
};