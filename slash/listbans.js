const { CommandInteraction, Client, MessageEmbed, Permissions } = require("discord.js");

module.exports = {
  name: "listbans",
  description: "Returns List of Bans in a Server",
  permission: "BAN_MEMBERS",

  run: async (client, interaction) => {
      await interaction.deferReply({
            ephemeral: false
        });

      if (!interaction.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return interaction.followUp({ content:"<:Crisis_no:1003015437300273172>**I don't have enough permissions to run this command**" })

if (!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return interaction.followUp({ content:"<:Crisis_no:1003015437300273172>**You don't have enough permissions to run this command**" })
    
    const fetchBans = interaction.guild.bans.fetch();
    var amount = 1;
    const bannedMembers = (await fetchBans)
      .map(
        (member) =>
          `${amount++} **${member.user.username}** | (*${member.user.id}*)`
      )
      .join("\n");

    const list = new MessageEmbed()
      .setTitle(`Bans in ${interaction.guild.name}`)
      .setDescription(`${bannedMembers}`)
      .setFooter({text:`Amount: ${amount - 1}`})
      .setTimestamp()
      .setColor("BLACK  ");
    return interaction.followUp({ embeds: [list] });
  },
};