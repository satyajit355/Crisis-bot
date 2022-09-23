const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'members',
    description: ' check server memberscount',
    run: async (client, interaction) => {
    let invite = new MessageEmbed()
    .setTitle("Members")
    .setDescription(`** ${interaction.guild.memberCount}**`)
    .setColor('BLACK')
    .setTimestamp()
    interaction.reply({ embeds: [invite]});
}
} 
