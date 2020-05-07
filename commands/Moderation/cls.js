const Command = require("../../base/Command.js"),
Discord = require("discord.js");

class Cls extends Command {
    
constructor(client) {
    super(client, {
      name: "cls",
            description: (language) => language.get("CLEAR_DESCRIPTION"),
            usage: (language) => language.get("CLEAR_USAGE"),
            examples: (language) => language.get("CLEAR_EXAMPLES"),
            dirname: __dirname,
            enabled: true,
            guildOnly: true,
            aliases: [ "cls", ],
            memberPermissions: [ "MANAGE_MESSAGES" ],
            botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES" ],
            nsfw: false,
            ownerOnly: false,
            cooldown: 3000
        });
    }

async run (message, args, data) {
    
     message.channel.send(message.language.get("CLEAR_CLONE"));
     await message.channel.awaitMessages((m) => (m.author.id === message.author.id) && (m.content === "-confirm"), {
                max: 1,
                time: 2000,
                errors: ["time"]
     }).catch((err) => {
                // if the author of the commands does not confirm the backup loading
                return message.channel.send(message.language.get("CLEAR_ERR_TIMEOUT"));
     });
            let position = message.channel.position;
            let newChannel = await message.channel.clone();
            await message.channel.delete();
            newChannel.setPosition(position);
            return newChannel.send(message.language.get("CLEAR_DELETED"));
        }
    };
    
module.exports = Cls;