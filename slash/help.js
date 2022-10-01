const { MessageEmbed, MessageActionRow, MessageSelectMenu, CommandInteraction, MessageButton } = require("discord.js")

module.exports = {
  name: 'help',
  description: 'View all the commands',
  run: async (client,interaction) => {
  await interaction.deferReply({
     ephemeral: true
  });                   
    const embed = new MessageEmbed()
      .setColor('#BLACK')
.setDescription('**Hey I am crisisbot a Multipurpose bot**')
.addField(`**Crisisbot**`,`**•Only slash\n•Total Commands: 14\n•Type /help for more information**`,true)
  .addField(`**Modules**`,`<:Crisis_mod:1020620119644315670>Moderation\n<:info_crisis:1020620281565413436>Info\n<:antom_home:1018360805416251443>Home`,true)
      .setTimestamp()
      .setFooter({
        text: `Requested by ${interaction.user.username} | Made by Elijah#6969`,
        iconURL: interaction.user.displayAvatarURL()
      })

 const moderation = new MessageEmbed()
  .setTitle("Moderation")
  .setColor('BLACK')
  .setDescription("Crisisbot's Moderation cmds")
  .addFields(
  { name: 'Memberscount' , value: `Show server members\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Memberscount\` `, inline: true },
 { name: 'Timeout' , value: `timeout a member\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Timeout\` `, inline: true },
 { name: 'Avatar' , value: `Gives avatar for message author or mentioned user\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Avatar\` `, inline: true },
 { name: 'Ban' , value: `ban a member\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Ban\` `, inline: true },
   { name: 'Kick' , value: `kick a member\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Kick\` `, inline: true },
 { name: 'Stealemoji' , value: `steal emojis\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Stealemoji\` `, inline: true },
 { name: 'Roleinfo' , value: `Get information of a role\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Roleinfo\` `, inline: true },
  { name: 'Listbans' , value: `returns list of bans in a server\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Listbans\` `, inline: true },
  )
  .setTimestamp()
  .setFooter({
    text: `Requested by ${interaction.user.username} | Crisisbot`,
        iconURL: interaction.user.displayAvatarURL()
      })



    const info = new MessageEmbed()
      .setTitle("Information")
      .setColor('BLACK')
  .setDescription("**crisisbot's info Commands**")
  .addFields(
    { name: 'Help'  , value: `Shows all available commands to this bot!\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Help\` `, inline: true },
    { name: 'Invite' , value: `Get the bot's invite link!\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Invite\` `, inline: true },
    { name: 'Ping' , value: `Check the bot's websocket latency!\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Ping\` `, inline: true },
    { name: 'Vote' , value: `vote Crisisbot in top.gg\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`Vote\` `, inline: true },
   { name: 'Stats' , value: `check Crisisbot status\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`stats\` `, inline: true },
     { name: 'About' , value: `about bot\n <a:antom_arrow:1011849329083957402> **OnlySlash:** \`about\` `, inline: true },
  )
  .setTimestamp()
  .setFooter({
    text: `Requested by ${interaction.user.username} | Crisisbot`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
        .setCustomId("help-menu")
        .setPlaceholder("Please Select a Category")
        .setDisabled(state)
        .addOptions([{
                label: `Moderation`,
                value: `moderation`,
                description: `Moderation Commands`,
                emoji: `1020620119644315670`
            },
            {
                label: `Info`,
                value: `info`,
                description: `Informatiom Commands`,
                emoji: `1020620281565413436`
            },
          {
                label: `Home`,
                value: `embed`,
                description: `Home`,
                emoji: `1018360805416251443`
          }
        ])
    ),
];

    const initialMessage = await interaction.editReply({ embeds: [embed], components: components(false) });

    const filter = (interaction) => interaction.user.id === interaction.member.id;

    const collector = interaction.channel.createMessageComponentCollector(
      {
        filter,
        componentType: "SELECT_MENU",
        idle: 300000,
        dispose: true
      });

    collector.on('collect', (interaction) => {
      if (interaction.values[0] === "moderation") {
        interaction.update({ embeds:[moderation], components: components(false) }).catch((e) => { });
      } else if (interaction.values[0] === "info") {
        interaction.update({ embeds: [info], components: components(false) }).catch((e) => { });
      } else if (interaction.values[0] === "embed") {
        interaction.update({ embeds: [embed], components: components(false) }).catch((e) => { });

      }
    });
    collector.on('end', (collected, reason) => {
      if (reason == "time") {
        initialMessage.edit({
          content: "Collector Destroyed, Try Again!",
          components: [],
        });
      }
    })
  }
}

