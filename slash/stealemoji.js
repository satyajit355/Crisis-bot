const {CommandInteraction, Client, MessageEmbed, Util, Permissions } = require('discord.js')

module.exports = {
    name:'stealemoji',
    description:'Steal Emote from Other Servers',
    options:[
        {
            name:'emote',
            description:'Emote to steal',
            type:'STRING',
            required:true
        },
        {
            name:'name',
            description:'Set a name for the stolen emote',
            type:'STRING',
            required:true
        }
    ],

       /**
   *
   * @param {Client} client
   * @param {CommandInteracion} interaction
   */

    run: async (client, interaction, message) => {
        const emoji = interaction.options.getString('emote')
        const name = interaction.options.getString('name') ? interaction.options.getString('name').replace(/[^a-z0-9]/gi, "") : null;
      
if (!interaction.guild.me.permissions.has(Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS)) return interaction.reply({ content:"<:Crisis_no:1003015437300273172>**I don't have enough permissions to run this command**" })

if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS)) return interaction.reply({ content:"<:Crisis_no:1003015437300273172>**You don't have enough permissions to run this command**" })

        let args = interaction.options.data;

        console.log(args)

        const parsedEmoji = Util.parseEmoji(args[0]?.value)
    
        if(parsedEmoji.id){
            const extension = parsedEmoji.animated ? ".gif" : ".png";
            const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
            console.log(url)
            interaction.guild.emojis.create(url, args[1]?.value)
                .then((emoji) => {
                    const embed = new MessageEmbed()                 .setImage(emoji.url)
                        .setDescription(`<:Crisis_yessss:1003015210723967128>Emoji **${name.toUpperCase()}** was added`)
                        .setTimestamp()
                        .setColor('BLACK')
          
                    interaction.reply({embeds:[embed]})
                })
        }
    


    }
          }