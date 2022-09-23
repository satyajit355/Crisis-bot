const {CommandInteraction, Client, MessageEmbed, Util, Permissions } = require('discord.js')
const ms = require('ms')
const durations = [
	{ name: "60 seconds", value: 60 * 1000 },
	{ name: "5 minutes", value: 5 * 60 * 1000 },
	{ name: "10 minutes", value: 10 * 60 * 1000 },
	{ name: "30 minutes", value: 30 * 60 * 1000 },
	{ name: "1 hour", value: 60 * 60 * 1000 },
	{ name: "1 day", value: 24 * 60 * 60 * 1000 },
	{ name: "1 week", value: 7 * 24 * 60 * 60 * 1000 },
];

const run = async (client, interaction) => {
    let user = interaction.options.getMember('user');
    let member = interaction.options.getMember("user")
    let duration = interaction.options.getNumber("duration")
    let reason = interaction.options.getString("reason") || "No reason given";
      if(interaction.member.roles.highest.position <= user.roles.highest.position){
            return interaction.reply(`<:Crisis_no:1003015437300273172> ${interaction.member}, **You cannot timeout a user with the same or higher role than your own.**`)}

  if (!interaction.guild.me.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) return interaction.reply({ content:"<:Crisis_no:1003015437300273172>**I don't have enough permissions to run this command**" })

if (!interaction.member.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) return interaction.reply({ content:"<:Crisis_no:1003015437300273172>**You don't have enough permissions to run this command**" })
    if (!member) return interaction.reply("<:Crisis_no:1003015437300273172> | Invalid member")

    try {
        await member.timeout(duration, reason)
        return interaction.reply(` <:Crisis_yessss:1003015210723967128> | ${member.user.tag} **has been timed out for** ${durations.find(d=> duration === d.value)?.name} with a reason of ${reason}`)
    }
    catch(err){
        if (err){
            console.error(err)
            return interaction.reply(` <:Crisis_no:1003015437300273172> | **Failed to timeout** ${member.user.tag}`)
        }
    }
}

module.exports = {
    name: "timeout",
    description: "Timeout a member",
    perm: "MODERATE_MEMBERS",
    userPermissions: ['ADMINISTRATION'],
    options: [
        {
            name: "user", description: "The user to timeout",
            type: "USER", required: true
        },
        {
            name: "duration",
            description: "The duration of the timeout",
            type: "NUMBER",
            require: true,
            choices: durations
          
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
