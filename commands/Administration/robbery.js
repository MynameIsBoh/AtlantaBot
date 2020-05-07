const Command = require("../../base/Command.js"),
Discord = require("discord.js");


class Work extends Command {

    constructor (client) {
        super(client, {
            name: "robbery",
            description: (language) => language.get("WORK_DESCRIPTION"),
            usage: (language) => language.get("WORK_USAGE"),
            examples: (language) => language.get("WORK_EXAMPLES"),
            dirname: __dirname,
            enabled: true,
            guildOnly: true,
            aliases: [  "hackmoney", ],
            memberPermissions: ["MANAGE_GUILD"],
            botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
            nsfw: false,
            ownerOnly: false,
            cooldown: 3000
        });
    }

    async run (message, args, data) {
        
    

        let embed = new Discord.MessageEmbed()
        
        let award = [
            this.client.config.emojis.letters.a,
            this.client.config.emojis.letters.w,
            this.client.config.emojis.letters.a,
            this.client.config.emojis.letters.r,
            this.client.config.emojis.letters.d
        ];
        let won = 250
        
        data.memberData.workStreak = 1;

        
        if((data.memberData.workStreak || 0) >= 5){
            won+=250;
            embed.addField(message.language.get("WORK_CLAIMED_HEADINGS")[0], message.language.get("WORK_CLAIMED_SALARY", won))
            .addField(message.language.get("WORK_CLAIMED_HEADINGS")[1], message.language.get("WORK_AWARD"));
        } else {
            
            embed.addField(message.language.get("WORK_CLAIMED_HEADINGS")[0], message.language.get("WORK_CLAIMED_SALARY", won))
        }

        data.memberData.money = data.memberData.money + won;
        data.memberData.save();

        let messageOptions = { embed };
        if(!data.userData.achievements.work.achieved){
            data.userData.achievements.work.progress.now += 1;
            if(data.userData.achievements.work.progress.now === data.userData.achievements.work.progress.total){
                messageOptions.files = [
                    {
                        name: "unlocked.png",
                        attachment: "./assets/img/achievements/achievement_unlocked1.png"
                    }
                ];
                data.userData.achievements.work.achieved = true;
            }
            data.userData.markModified("achievements.work");
            data.userData.save();
        }

        // Send the embed in the current channel
        message.channel.send(messageOptions);

    }

}

module.exports = Work;
