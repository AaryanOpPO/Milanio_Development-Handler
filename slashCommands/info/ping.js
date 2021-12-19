const config = require("../../botconfig/config.json");
const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "ping",
  description: "Gives you information on how fast the Bot can respond to you",
  cooldown: 5,
  userPermissions: [],
  botPermissions: [],
  ownerOnly: false,
  toggleOff: false,

  run: async (client, interaction, args, ee) => {
    try {
      interaction.reply({embeds:[new MessageEmbed()
          .setColor(ee.color)
          .setDescription(`🤖 **Bot Ping:** \`${Date.now() - interaction.createdTimestamp}ms\`\n\n⌛ **Api Latency:** \`${Math.round(client.ws.ping)}ms\``, true)]}
        )
    } catch (err) {
      console.log(err)
    }
  }
}