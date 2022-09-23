const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: 'vote',
    description: 'vote crisisbot in top.gg',
    run: async (client, interaction, args) => {
const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel(`Vote in top.gg`)
        .setStyle('LINK')
        .setURL(`https://top.gg/bot/873810253693714482/vote`),)
        interaction.reply({
          content: `Vote me`,
          components: [row]
        });
    }
};
