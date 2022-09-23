const discord = require("discord.js");
const { Client, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment, CommandInteraction } = require('discord.js');

module.exports = {
  name: "avatar",
  aliases: ["av", "pfp"],
  description: "Gives avatar for message author or mentioned user.",
  perm: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  options: [
      {
          name: "user", description: "check avatar",
          type: "USER", required: false
      }
    ],

run: async (client, interaction, args, color) => {
  await interaction.deferReply({
            ephemeral: true
        });
 const user = interaction.options.getUser("user");
 let member;
 if(user) member = interaction.guild.members.cache.get(user.id);
 else member = interaction.member;

  let avs = new MessageEmbed()
      .setAuthor(
        `Avatar from: ${member.user.tag}`,
        member.user.displayAvatarURL({ dynamic: true }))
     
      .setColor("BLACK")
      .setURL(
        member.user.displayAvatarURL({
          dynamic: true }))
      .setImage(
        member.user.displayAvatarURL({
          dynamic: true,
          size: 512 }));


      interaction.followUp({embeds : [avs]})
  },
}; 
