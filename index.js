//Importing discord.js
const Discord = require("discord.js")

//Requiring .env Configuration to Hide Token
require("dotenv").config()

//Where the bot is listening
const client = new Discord.Client({
    //discord.com/developers/docs/topics/gateway#list-of-intents
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

//Reaching to Folders
let bot = {
    client,
    prefix: "n.",
    owners: ["Jackson Webster#2638"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot,reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/events")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

//client.login(TOKEN)
client.login(process.env.TOKEN)
