const {CommandInteraction, Client, MessageEmbed, Util, Permissions } = require('discord.js')
const run = async (client,  interaction) => {
    let user = interaction.options.getMember('user');
    let member = interaction.options.getMember("user")
    let reason = interaction.options.getString("reason") || "No reason given"
   if(interaction.member.roles.highest.position <= user.roles.highest.position){
            return interaction.reply(`<:Crisis_no:1003015437300273172> ${interaction.member}, **You cannot ban a user with the same or higher role than your own.**`)}
    if (!interaction.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return interaction.reply({ content:"<:Crisis_no:1003015437300273172>**I don't have enough permissions to run this command**" })

if (!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return interaction.reply({ content:"<:Crisis_no:1003015437300273172>**You don't have enough permissions to run this command**" })
    if (!member) return interaction.reply("<:Crisis_no:1003015437300273172> | Invalid member")
    try {
        await interaction.guild.bans.create(member, {
            reason
          })
        return interaction.reply(`<:Crisis_yessss:1003015210723967128> | ${member.user.tag} **has been banned for** ${reason}`)
    } 
    catch(err){
        if (err){
            console.error(err)
            return interaction.reply(`<:Crisis_no:1003015437300273172> | Failed to ban ${member.user.tag}`)
        }
    }
}

module.exports = {
    name: "ban",
    description: "Bans a member",
    permission: ['BAN_MEMBERS'],
    userPermissions: ['ADMINISTRATION'],
    options: [
        {
            name: "user", description: "The user to ban",
            type: "USER", 
            required: true
        },
        {
            name: "reason",
            description: "reason for punishment",
            type: "STRING",
            required: false
        }
    ],
    run
          }