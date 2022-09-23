const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'about',
    description: 'about Crisisbot',
    run: async (client, interaction) => {
    
    let invite = new MessageEmbed()
    .setTitle("Wanna Know About Crisis-Bot")
    .setDescription(`**Crisis-Bot** Is A Multifunctional Discord Bot, Which Had Builded An Trust Over 100 Server Being Verified, It Is Developed By Rtxeon And Varma`)
    .addFields(
      { name: `Developer's`, value: `Elijah.#6969 And Rtxeon#1337`, inline: true },
      { name: `Supporter`, value: `Shahid🖤#8729`, inline: true  },
      { name: `Funfact`, value: `Rtxeon Owns 4 Verified Bot`, inline: true  }
    )
    .setColor('BLACK')
    
    interaction.reply({ embeds: [invite]});
}
} 