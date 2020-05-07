const Command = require("../../base/Command.js"),
Discord = require("discord.js");
const { delay, randomRange, verify } = require('../../util/Util');
const words = ['fire', 'draw', 'shoot', 'bang', 'pull', 'boom'];

let currentGame = false;

class Gunfight extends Command {

    constructor (client) {
        super(client, {
            name: "gunfight",
            description: (language) => language.get("SLOTS_DESCRIPTION"),
            usage: (language) => language.get("SLOTS_USAGE"),
            examples: (language) => language.get("SLOTS_EXAMPLES"),
            dirname: __dirname,
            enabled: true,
            guildOnly: true,
            aliases: [ "gunf",],
            memberPermissions: [],
            botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
            nsfw: false,
            ownerOnly: false,
            cooldown: 3000
        });
    }

    async run(message, args, data) {
        
        if(currentGame){
            if(currentGame === message.guild.id){
                return message.channel.send(message.language.get("ERR_GAME_ALREADY_LAUNCHED"));
            } else {
                let embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setDescription(message.language.get("ERR_A_GAME_ALREADY_LAUNCHED"))
                    .setColor("#FF0000")
                    .setFooter(data.config.embed.footer)
                return message.channel.send(embed);
            }
        }
        
        const toAdd = 10;
        
        let member = await this.client.resolveMember(args[0], message.guild);
        if(!member){
            return message.channel.send(message.language.get("ERR_INVALID_MEMBER"));
        }
        if(member.id === message.author.id){
            return message.channel.send(message.language.get("ERR_SANCTION_YOURSELF"));
        }
        
         await message.channel.send(`${member}, Accetti la sfida? yes/no`);
         
        let collector = new Discord.MessageCollector(message.channel, (m) => m.author.id === member.id);
        
        const verification = await verify(message.channel, member);
        if (!verification) {
				return message.say('Looks like they declined...');
			}
        
		    message.channel.send('Tieniti pronto...');
            await delay(randomRange(1000, 10000));
            const word = words[Math.floor(Math.random() * words.length)];
	    	
	    	const answer = word;
	    	
	    	const filter = m => {
	        return words.some(answer => answer.toLowerCase() === m.content.toLowerCase());
            };

            message.channel.send(`TYPE \`${word.toUpperCase()}\` NOW!`).then(() =>
            {
	            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		             .then(collected =>
		                {
		                	message.channel.send(`${collected.first().author} Hai vinto!`);
		                    
		                })
		    
		    .catch(collected =>
		         {
		    	message.channel.send('Looks like nobody got the answer this time.');
		        });
           
            });
        
        message.channel.send(winner);
		
        }
		//this.client.set(message.channel.id, { name: this.name });
		

    
}

module.exports = Gunfight;