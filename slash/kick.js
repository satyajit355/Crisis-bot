const {CommandInteraction, Client, MessageEmbed, Util, Permissions } = require('discord.js')
const run = async (client, interaction) => {
  await interaction.deferReply({
            ephemeral: false
        });
    let user = interaction.options.getMember('user');
    let target = interaction.options.getMember("target");
    let member = interaction.options.getMember("user");
    let reason = interaction.options.getString("reason") || "No reason given";
  if(interaction.member.roles.highest.position <= user.roles.highest.position){
            return interaction.followUp(`<:Crisis_no:1003015437300273172> ${interaction.member}, **You cannot kick a user with the same or higher role than your own.**`)}
  if (!interaction.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.followUp({ content:"<:Crisis_no:1003015437300273172>**I don't have enough permissions to run this command**" })

if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.followUp({ content:"<:Crisis_no:1003015437300273172>**You don't have enough permissions to run this command**" })
    if (!member) return interaction.followUp("<:Crisis_no:1003015437300273172> | Invalid member")
    try {
        await interaction.guild.members.kick(member, reason)
        return interaction.followUp(`<:Crisis_yessss:1003015210723967128> | ${member.user.tag} **has been kicked out for** ${reason}`)
    }
    catch(err){
        if (err){
            console.error(err)
            return interaction.followUp(`<:Crisis_no:1003015437300273172> | **Failed to kick** ${member.user.tag}` )
        }
    }
}

module.exports = {
    name: "kick",
    description: "Kick a member",
    perm: "KICK_MEMBERS",
    userPermissions: "KICK_MEMBERS",
    options: [
        {
            name: "user", 
            description: "The user to kick",
            type: "USER", 
            required: true,
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
