const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: 'invite',
    description: 'invite crisisbot in your server',
    run: async (client, interaction, args) => {
const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel(`Invite`)
        .setStyle('LINK')
        .setURL(`https://discord.com/oauth2/authorize?client_id=873810253693714482&permissions=534928293057&scope=bot%20applications.commands`),)
        interaction.reply({
          content: `Invite me`,
          components: [row]
      });
    }
}; 
