//Importing discord.js
const Discord = require("discord.js")

//Requiring .env Configuration to Hide Token
require("dotenv").config()

//Bot Token from discord.com/developers/applications
//const TOKEN = "OTQ1NTM0MjY2MjAzMzA4MDcy.YhRjaA.Ga0Gxaay5yXcTnLDue0Rkkwqze4"

//Where the bot is listening
const client = new Discord.Client({
    //discord.com/developers/docs/topics/gateway#list-of-intents
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"/*,
        "GUILD_MEMBERS"*/
    ]
})

//Anonymous Function
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//Event Listener to Messages
client.on("messageCreate", (message) => {
    //Responding to "Hi"
    if(message.content.toLowerCase() == "hi") {
        message.reply(`Hello`/*<@${member.id}>*/)
    }
})

const welcomeChannelID = "936879578608181258"

//Event Listener to Users Joining Server
client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get((welcomeChannelID).send(`<@${member.id}> Welcome to the Server!`))
})

//client.login(TOKEN)
client.login(process.env.TOKEN)