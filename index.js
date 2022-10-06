const Discord = require("discord.js");
const client = new Discord.Client({ intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES, 
    Discord.Intents.FLAGS.GUILD_MEMBERS, 
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
}); //if u got some then change it to const client = new Discord.Client({ intents: 7753 });
const fs = require("fs");
const config = require("./config.json");
const mongoose = require("mongoose");
client.config = config;


fs.readdir("./events/discord", (_err, files) => {
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/discord/${file}`);
    let eventName = file.split(".")[0];
    console.log(`[Event]   ✅  Loaded: ${eventName}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/discord/${file}`)];
  });
});

// let interactions be a new collection ( slash commands  )
client.interactions = new Discord.Collection();
// creating an empty array for registering slash commands
client.register_arr = []
/* Load all slash commands */
fs.readdir("./slash/", (_err, files) => {
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./slash/${file}`);
    let commandName = file.split(".")[0];
    client.interactions.set(commandName, {
      name: commandName,
      ...props
    });
    client.register_arr.push(props)
  });
});

mongoose.connect("paste your mongo URL", {
    useNewUrlParser: true,
    autoIndex: false,
    connectTimeoutMS: 10000,
    family: 4,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => {
    console.log("[ DB LOG ] " + 'DATABASE CONNECTED');
});
mongoose.connection.on('err', (err) => {
    console.log("[ DB LOG ] " + `Mongoose connection error: \n ${err.stack}` );
});
mongoose.connection.on('disconnected', () => {
    console.log("[ DB LOG ] " + 'Mongoose disconnected');
});


// Login through the client
client.login("");
