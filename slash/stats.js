const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'stats',
    description: ' check bot status!',
    run: async (client, interaction) => {
    let scount = client.guilds.cache.size;
    let mcount = 0;
    client.guilds.cache.forEach((guild) => {
      mcount += guild.memberCount;
    });
    let invite = new MessageEmbed()
    .setTitle("Status")
    .setDescription(`**Servers:** ${scount}
**Users:** ${mcount}`)
    .setColor('BLACK')
    
    interaction.reply({ embeds: [invite]});
}
} 
