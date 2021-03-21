const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `botlist`,
  description: `Gives you the botlists of the Bot`,
  aliases: [],
  cooldown: 3,
  edesc: "Type this command to view all Bot list Server where the bot is on. Please vote there UwU",
  execute(message, args, client) {
    //react with approve emoji
    message.react("822857547014209536");
    //send the botlist embed
    message.reply(new MessageEmbed().setColor("#c219d8")
    .setTitle("Here is a list for all Bot-Lists this Bot is on!")
    .addField("Matrixbots","Coming Soon...")
    .addField("top.gg", "Coming Soon...")
    .addField("bots.ondiscord","Coming Soon...")
    .addField("discordbotlist","Coming Soon...")
    .addField("Credit","Developed By Tomato and Modded by Hòa#0001")
    );

  }
}
