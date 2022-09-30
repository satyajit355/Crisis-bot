const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'members',
    description: ' check server memberscount',
    run: async (client, interaction) => {
    let members = new MessageEmbed()
    .setTitle("Members")
    .setDescription(`** ${interaction.guild.memberCount}**`)
    .setColor('BLACK')
    .setTimestamp()
    interaction.reply({ embeds: [members]});
}
} 
