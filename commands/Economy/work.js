const Command = require("../../base/Command.js"),
Discord = require("discord.js");


class Work extends Command {

    constructor (client) {
        super(client, {
            name: "work",
            description: (language) => language.get("WORK_DESCRIPTION"),
            usage: (language) => language.get("WORK_USAGE"),
            examples: (language) => language.get("WORK_EXAMPLES"),
            dirname: __dirname,
            enabled: true,
            guildOnly: true,
            aliases: [  "salary", "stipendio", ],
            memberPermissions: [],
            botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
            nsfw: false,
            ownerOnly: false,
            cooldown: 3000
        });
    }

    async run (message, args, data) {

        // if the member is already in the cooldown db
        let isInCooldown = data.memberData.cooldowns.work;
        if(isInCooldown){
            /*if the timestamp recorded in the database indicating 
            when the member will be able to execute the order again 
            is greater than the current date, display an error message */
            if(isInCooldown > Date.now()){
                return message.channel.send(message.language.get("WORK_ERR_COOLDOWN", message.language.convertMs(isInCooldown - Date.now())));
            }
        }

        if(Date.now() > data.memberData.cooldowns.work+(24*3600000)){
            data.memberData.workStreak = 0;
        }
        
        // Records in the database the time when the member will be able to execute the command again (in 12 hours)
        let toWait = Date.now() + 21600000;
        data.memberData.cooldowns.work = toWait;
        data.memberData.markModified("cooldowns");

        data.memberData.workStreak = (data.memberData.workStreak || 0) + 1;
        await data.memberData.save();

        let embed = new Discord.MessageEmbed()
        
        let award = [
            this.client.config.emojis.letters.a,
            this.client.config.emojis.letters.w,
            this.client.config.emojis.letters.a,
            this.client.config.emojis.letters.r,
            this.client.config.emojis.letters.d
        ];
        let won = 250;


        if((data.memberData.workStreak || 0) >= 5){
            won+=250;
            embed.addField(message.language.get("WORK_CLAIMED_HEADINGS")[0], message.language.get("WORK_CLAIMED_SALARY", won))
            .addField(message.language.get("WORK_CLAIMED_HEADINGS")[1], message.language.get("WORK_AWARD"));
            data.memberData.workStreak = 0;
        } else {
            
            embed.addField(message.language.get("WORK_CLAIMED_HEADINGS")[0], message.language.get("WORK_CLAIMED_SALARY", won))
        }

        data.memberData.money = data.memberData.money + won;
        data.memberData.save();

        let messageOptions = { embed };
        if(!data.userData.achievements.work.achieved){
            data.userData.achievements.work.progress.now += 1000;
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
