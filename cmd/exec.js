var { exec } = require('child_process');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
        if (!["388973110549807104"].includes(message.author.id)) return message.channel.send(":x: You do not have permission to make this command!");

    exec(`${args.join(' ')}`, (error, stdout) => {
        var response = (error || stdout);
        if (!error) message.channel.send(`\\✅ | The execution ended without problems:`);
        else message.channel.send(`\\❌ | An error occurred during execution:`);
        message.channel.send(`${response}`, {
            code: "js",
            split: "\n"
        }).catch(e => console.log(e));
    });
}

module.exports.cfr = {
    name: "exec"
}