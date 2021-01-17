const Discord = require("discord.js");
const config = require('../config.json')
module.exports.run = (client, message, args) => {
    var help = new Discord.MessageEmbed()
    .setAuthor('Help :')
    .setDescription(`Prefix : ${config.prefix}\nList of commands :`)
    .addField('NSFW  :underage: :', '`4k`, `anal`, `ass`, `hentai`, `hkitsune`, `hneko`, `holo`, `kemonomimi`, `neko`, `pussy`')
    .addField('Other :', '`help`, `stats`')
    message.channel.send(help)
}
