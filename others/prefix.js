const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

const db = require('quick.db');


module.exports = {
  name: `prefix`,
  description: `Sets a server specific Prefix`,
  aliases: ["setprefix"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage: ${PREFIX}prefix <NEW PREFIX>`,
 async execute(message, args, client) {

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = PREFIX;

    //react with approve emoji
    message.react("822857547014209536");

    if(!args[0]) return message.channel.send(new MessageEmbed()
    .setColor("#c219d8")
    .setTitle(`Current Prefix: \`${prefix}\``)
    .setFooter('Please provide a new prefix')
    );
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new MessageEmbed()
    .setColor("#c219d8")
    .setTitle(`<:emoji_35:822858134464102400>  You don\'t have permission for this Command!`)
    );

    if(args[1]) return message.channel.send(new MessageEmbed()
    .setColor("#c219d8")
    .setTitle(`'<:emoji_35:822858134464102400>  The prefix can\'t have two spaces'`));

    db.set(`prefix_${message.guild.id}`, args[0])

    message.channel.send(new MessageEmbed()
    .setColor("#c219d8")
    .setTitle(`<:emoji_19:822857547014209536> Successfully set new prefix to **\`${args[0]}\`**`))
  }
}
