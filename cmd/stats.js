const Discord = require("discord.js"),
os = require('os');
exports.run = (client, message) => {
    
    let embed = new Discord.MessageEmbed()
        .setTimestamp()
        .addField(`:map: Number Of Servers`, `${client.guilds.cache.size}`, true)
        .addField(`:bust_in_silhouette: Number Of Users`, `${client.users.cache.size}`, true)  
        .addField(`:speech_balloon:  Number Of Channel(s)`, `${client.channels.cache.size}`, true)
        .addField(`:desktop: System`, `${os.platform()}`, true)
        .addField(`:gear: Architecture`, `${os.arch()}`, true)
        .addField(`:rocket:  Processor`, `${os.cpus().map(i => `${i.model}`)[0]}`, true)
        .addField(`:pager: RAM`, `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, true)
        .addField(`:dividers: Lib`, `Discord.js ${Discord.version}`, true)
        .addField(`:alarm_clock: Connected since`, ""+(Math.round(client.uptime / (1000 * 60 * 60))) + " Hours(s), " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minute(s) et " + (Math.round(client.uptime / 1000) % 60) + " second(s)"+"")

    message.channel.send(embed);
};

module.exports.cfr = {
    name: 'stats',
    description: '',
    usage: 'stats',
    type: 'bot'
};
