let lang = "italiano";

let c = require("../config.js");
let e = c.emojis;

// This class is used to store languages strings

module.exports = class {
    constructor() {
		this.language = {

			// Utils
			PREFIX_INFO: (prefix) => `Il prefisso dei comandi è \`${prefix}\``,
			UTILS: {
				YES: "Yes",
				NO: "No",
				USER: "Utente",
				LEVEL: "Livello",
				REP: "Reputazione",
				CREDITS: "Crediti",
				VICTORY: "Vittorie",
				DEFEAT: "Sconfitta",
				PAGE: "Pagine",
				TOTAL_SERVERS: "Server Totali",
				MEMBERS: "Membri",
				STATUS: {
					"dnd": "Non disurbare",
					"idle": "AFK (attesa)",
					"offline": "Disconnetti",
					"online": "Online"
				},
				NO_REASON_PROVIDED: "no reason provided",
				UNDEFINED: "Indefinito",
				PLEASE_WAIT: `${e.loading} |Aspetta...`,
				PREFIX: "Prefisso",
				CUSTOM_COMMANDS: "Comandi personalizzati",
				ANDMORE: "**E altro...**",
				TITLE: "Titolo",
				AUTHOR: "Autore",
				SIGN_OUT: "Esci",
				YOUR_PROFILE: "Profilo",
				UPDATE: "Aggiorna",
				SERVERS: "Servers",
				MANAGE: "Setup",
				STATS: "Statistiche",
				COMMANDS: "Comandi",
				HOME: "Home",
				SANCTIONS: "Sanzioni",
				FRENCH: "Francese",
				ENGLISH: "Inglese",
				NO_CHANNEL: "Nessun canale",
				PROFILE: "Profilo",
				LEADERBOARD: "Ranking",
				GLOBAL_LEADERBOARD: "Rank globali",
				ECONOMY: "Economia",
				KNOW_MORE: "Più informazioni",
				SETTINGS: "Settings",
				SERVERS_SETTINGS: "Servers settings",
				GLOBAL_STATS: "Global",
				COMMANDS_USAGE: "Use of commands",
				WEBSITE: "Website",
				DISCONNECT: "Disconnect me",
				STREAK: "Streak"
			},
			
			/* DBL VOTES */

			VOTE_THANKS: (user) => `:arrow_up: Ciao ${user.toString()}, grazie per aver votato !\nReward : 40 crediti !`,
			VOTE_LOGS: (user) => `:arrow_up: **${user.tag}** (\`${user.id}\`) ha votato per **Tarantelle** e ha vinto **40** crediti, grazie!\nhttps://discordbots.org/bot/557445719892688897/vote`,

			/* DEFAULT MESSAGES */
			NO_DESCRIPTION_PROVIDED: "Nessuna descrizione fornita",
			NO_USAGE_PROVIDED: "Nessun uso fornito",
			NO_EXAMPLE_PROVIDED: "Nessun esempio fornito",

			// ERROR MESSAGES

			ERR_COMMAND_DISABLED: `${e.error} | Questo comando è attualmente disabilitato!`,
			ERR_OWNER_ONLY: `${e.error} | Solo ${c.owner.name} puo usare questi comandi!`,
			ERR_INVALID_CHANNEL: `${e.error} | Menziona un canale valido!`,
			ERR_INVALID_ROLE: `${e.error} | Menziona un ruolo valido!`,
			ERR_INVALID_MEMBER: `${e.error} | Menziona un utente valido!`,
			ERR_INVALID_NUMBER: (nan) => `${e.error} | \`${nan}\` non è un numero valido!`,
			ERR_INVALID_NUMBER_MM: (min, max) => `${e.error} Indica un numero valido tra ${min} e ${max}!`,
			ERR_INVALID_TIME: `${e.error} | Inserisci un orario valido! Unità: \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,
			ERR_INVALID_ID: `${e.error} | Inserisci un ID valido!`,

			ERR_MISSING_BOT_PERMS: (perms) => `${e.error} | Ho bisogno dei seguenti permessi per eseguire il comando: \`${perms}\``,
			ERR_MISSING_MEMBER_PERMS: (perm) => `${e.error} | Non hai i permessi necessari per eseguire questo comando (\`${perm}\`)`,
			ERR_NOT_NSFW: `${e.error} | Devi andare in un canale con il NSFW abilitato per eseguire questo comando!`,
			ERR_GUILDONLY: `${e.error} | Questo comando è disponibile solo su server!`,
			ERR_UNAUTHORIZED_CHANNEL: (channel) => `${e.error} | I comandi sono bloccati in ${channel} !`,
			ERR_BAD_PARAMETERS: (cmd, prefix) => `${e.error} | Controlla i parametri del comando. Guarda un esempio scrivendo: \`${prefix}help ${cmd}\` !`,
			ERR_ROLE_NOT_FOUND: (role) => `${e.error} | No role found with \`${role}\` !`,
			ERR_CHANNEL_NOT_FOUND: (channel) => `${e.error} | Nessun canale trovato con \`${channel}\``,
			ERR_YES_NO: `${e.error} | Devi rispondere "yes" o "no"!`,
			ERR_EVERYONE: `${e.error} | You are not allowed to mention everyone or here in the commands.`,
			ERR_BOT_USER: `${e.error} | Questo utente è un bot!`,
			ERR_GAME_ALREADY_LAUNCHED: `${e.error} | Gioco già in corso sul server!`,
			ERR_A_GAME_ALREADY_LAUNCHED: `${e.error} | Because of the lags and bugs due to the findwords and the number, it is impossible to run two games at the same time, even if they are on two different servers. There is a game currently running on another server, so please wait a few minutes and then try again. We are sorry, but people were abusing this command by spamming it on lots of servers.`,
			ERR_OCCURENCED: `${e.error} | An error has occurred, please try again in a few minutes.`,
			ERR_CMD_COOLDOWN: (seconds) => `${e.error} | You must wait **${seconds}** second(s) to be able to run this command again!`,
			ERR_SANCTION_YOURSELF: `${e.error} | Non puoi selezionare te stesso!`,

			/* PING COMMAND */

			// Utils
			PING_DESCRIPTION: "Displays bot latency",
			PING_USAGE: "ping",
			PING_EXAMPLES: "$ping",
			// Content
			PING: (ms) => `${e.success} | Pong! My latency is \`${ms}\` ms !`,

			/* HELP COMMAND */

			// Utils
			HELP_DESCRIPTION: "Mostra i comandi e le rispettive funzionalità",
			HELP_USAGE: "help (comando)",
			HELP_EXAMPLES: "$help\n$help ping",
			// Errors
			HELP_ERR_NOT_FOUND: (cmd) => `${e.error} | Comando non trovato \`${cmd}\`!`,
			HELP_ERR_CMD_CUSTOMIZED: (cmd) => `${e.error} | \`${cmd}\` non ha help perchè è personalizzato.`,
			// Content
			HELP_EDESCRIPTION: (prefix) => `● Per ricevere aiuto scrivi \`${prefix}help <comando>\`!`,
			HELP_TITLE: `${c.botname} | Comandi`,
			HELP_NO_ALIASES: "Nessun alias.",
			// Headings
			HELP_HEADINGS: [
				"Help :",
				`${e.help} Usage :`,
				`${e.search} Examples :`,
				`${e.folder} Group :`,
				`${e.desc2} Description :`,
				`${e.add} Alias :`,
				`${e.crown} Permissions :`
			],

			/* GITHUB COMMAND */

			// Utils
			GITHUB_DESCRIPTION: `Displays the information from the ${c.botname} github!`,
			GITHUB_USAGE: "github",
			GITHUB_EXAMPLES: "$github",
			// Content
			GITHUB_DESC: `[Click here to access the github of ${c.botname}](https://github.com/Androz2091/TarantelleBot)`,
			// Headings
			GITHUB_HEADERS: [
				"Stars :star:",
				"Forks :tools:",
				"Language :computer:",
				"Founder :crown:"
			],

			/* HASTEBIN COMMAND */

			// Utils
			HASTEBIN_DESCRIPTION: "Upload your text on hastebin !",
			HASTEBIN_USAGE: "hastebin [text]",
			HASTEBIN_EXAMPLES: "$hastebin Hello World!",
			// Errors
			HASTEBIN_ERR_TEXT: `${e.error} | You must enter a text!`,
			// Content
			HASTEBIN_TITLE: `Upload complete!`,

			/* ASCII COMMAND */

			// Utils
			ASCII_DESCRIPTION: "Turn your text into ascii characters!",
			ASCII_USAGE: "ascii [text]",
			ASCII_EXAMPLES: "$ascii Hey !",
			// Errors
			ASCII_ERR_TEXT: `${e.error} | Please enter a valid text (less than 20 characters)!`,

			/* FINDWORDS COMMAND */

			// Utils
			FINDWORDS_DESCRIPTION: "Inizia una partita di indovina la parola!",
			FINDWORDS_USAGE: "findwords",
			FINDWORDS_EXAMPLES: "$findwords",
			// Errors
			FINDWORDS_ERR_INVALID_WORD: (member) => `${e.error} | ${member} parola non valida!`,
			FINDWORDS_ERR_NO_WINNER: `${e.warn} | Nessuno ha indovinato!`,
			FINDWORDS_ERR_NO_WINNER_GAME: `${e.error} | Nessuno ha indovinato!`,
			// Content
			FINDWORDS_TIMER: `${e.warn} | La partita inizia in 5 secondi!`,
			FINDWORDS_QUESTION: (word) => `${e.warn} | 20 secondi per trovare una parola contenente "**${word}**" !`,
			FINDWORDS_CONGRATS: (winner) => `${e.success} | Ben fatto <@${winner}> ! La tua parola è valida e sei stato il più veloce!`,
			FINDWORDS_STATS: (username, games, time, number, members) => `:tada: | ${username} Ha vinto!\n\n**Risultati: **\n__**Time**__: ${time}\n__**Numero di partecipanti**__ : ${number}\n__**Lista**__ : \n${members}`,
			FINDWORDS_MONEY: (member) => `${member} Vince 20 crediti :tada:`,

			/* NUMBER COMMAND */

			// Utils
			NUMBER_DESCRIPTION: "Find the number I chose!",
			NUMBER_USAGE: "number",
			NUMBER_EXAMPLES: "$number",
			// Content
			NUMBER_START: `${e.warn} | Number determined, you can start!`,
			NUMBER_HIGHER: (number, author) => `${author} | The number is more **large** than \`${number}\` !`,
			NUMBER_SMALLER: (number, author) => `${author} | The number is more **small** thane \`${number}\` !`,
			NUMBER_CONGRATS: (member) => `<@${member}> has won 10 credits!`,
			NUMBER_STATS: (user, number, time, nb, members) => `:tada: | ${user} found the number! It was __**${number}**__ !\n\n\n**States of the game: **\n__**Time**__: ${time}\n__** Number of participants**__ : ${nb}\n__**Participants**__ : \n${members}`,
			// Errors
			NUMBER_DEFEAT: (number) => `${e.error} | No one could find the number! It was ${number} !`,

			/* RANDOM COMMAND */

			// Utils
			RANDOM_DESCRIPTION: "Randomly pick one of the choices you give me!",
			RANDOM_USAGE: "random [choice1/choice2/etc...]",
			RANDOM_EXAMPLES: "$random Fire/Wind/Water",
			// Errors
			RANDOM_ERR_CHOICES: `${e.error} | You must enter more than two choices!`,
			RANDOM_ERR_BLANK: `${e.error} | One of your choices seems to be empty.... Please try again!`,
			// Content
			RANDOM_CHOOSED: `${e.success} | Here is my choice:`,
			RANDOM_WAIT: `${e.loading} | Choice in progress...`,

			/* QUOTE COMMAND */

			// Utils
			QUOTE_DESCRIPTION: "Quote a message in the channel!",
			QUOTE_USAGE: "quote [messageID] [channel]",
			QUOTE_EXAMPLES: "$quote 596018101921906698\n$quote 596018101921906698 573508780520898581\n$quote 596018101921906698 #blabla",
			// Errors
			QUOTE_ERR_NOT_FOUND: `${e.error} | No message has this ID.`,
			QUOTE_ERR_NOT_FOUND_CHANNEL: (channel) => `${e.error} | No channel found with ID ${channel} !`,

			/* INVITATIONS COMMAND */

			// Utils
			INVITATIONS_DESCRIPTION: "Displays the number of people you have invited to the server!",
			INVITATIONS_USAGE: "invitations (@member)",
			INVITATIONS_EXAMPLES: "$invitations\n$invitations @User#0000",
			// Errors
			INVITATIONS_ERR_NO_INVITE: (member) => `${e.error} | ${member ? member.user.username : "You"} didn't invite anyone to the server!`,
			// Content
			INVITATIONS_CODE: (invite) => `**${invite.code}** (${invite.uses} uses) | ${invite.channel}`,
			// Headings
			INVITATIONS_TITLE: (member, msg) => `Information on the invitations to ${member} on ${msg.guild.name}`,
			INVITATIONS_FIELDS: (total) => [
				"👥 Invited Persons",
				"🔑 Codes",
				`${total} members`
			],

			/* ACHIEVEMENTS COMMAND */
			
			// Utils
			ACHIEVEMENTS_DESCRIPTION: "Displays the list of all the achievements!",
			ACHIEVEMENTS_USAGE: "achievements",
			ACHIEVEMENTS_EXAMPLES: "$achievements",
			// Content
			ACHIEVEMENTS_DESC: [
				"Scrivi il tuo primo comando!",
				"Riscatta 10 volte il tuo stipendio!",
				"Sposa la tua metà!",
				"Vinci tre volte alle slot!",
				"Mantieni tarantelle vivo con le mance!",
				"Raggiungi 20 punti reputazione!",
				"Invita Tarantelle sul server!"
			],
			ACHIEVEMENTS_TITLE: "🔥 Obiettivi",
			ACHIEVEMENTS_PROGRESS: (progressData) => `Progress: ${progressData.now}/${progressData.total} (${Math.round(100 * (progressData.now/progressData.total))}%)`,
			
			/* TCL COMMAND */

			// Utils
			TCL_DESCRIPTION: "",
			TCL_USAGE: "tcl",
			TCL_EXAMPLES: "$tcl",
			// Content
			TCL_TITLE: "",

			/* SETAFK COMMAND */

			// Utils
			SETAFK_DESCRIPTION: "Vai AFK ",
			SETAFK_USAGE: "setafk [motivo]",
			SETAFK_EXAMPLES: "$setafk Mi sta interrogando informatica!",
			// Errors
			SETAFK_ERR_REASON: `${e.error} | Spiega perchè sei afk!`,
			// Content
			SETAFK_SUCCESS: (reason) => `${e.success} | Sei AFK (motivo: ${motivo})`,
			// Others
			AFK_DELETED: `${e.warn} | Non sei più afk!`,
			AFK_MEMBER: (user, reason) => `${e.warn} | **${user.tag}** è al momento AFK per:\n\`\`\`${reason}\`\`\``,

			/* REMINDME COMMAND */

			// Utils
			REMINDME_DESCRIPTION: "Definisci qualcosa da ricordare!",
			REMINDME_USAGE: "remindme [promemoria]",
			REMINDME_EXAMPLES: "$remindme 24H Ordinare la pizza\n$remindme 5M Scongelare la carne!",
			// Errors
			REMINDME_ERR_MESSAGE: `${e.error} | Devi inserire un messaggio che ti verra inviato alla fine del tempo da te prestabilito!`,
			// Content
			REMINDME_SAVED: `${e.success} | Promemoria salvato, riceverai un messaggio alla fine del tempo prestabilito!`,
			REMINDME_TITLE: `${c.botname} Promemoria`,
			REMINDME_FIELDS: [
				"Creato",
				"Messaggio"
			],

			/* USERINFO COMMAND */

			// Utils
			USERINFO_DESCRIPTION: "Mostra le informazioni utente!",
			USERINFO_USAGE: "userinfo (@user/userID)",
			USERINFO_EXAMPLES: "$userinfo\n$userinfo @MyNameIsBoh#4806\n$userinfo 339745644983877633",
			// Errors
			USERINFO_ERR_ID: (id) => `${e.error} | Nessun utente con \`${id}\` !`,
			// Content
			USERINFO_FIELDS: [
				":man: Pseudo",
				`${e.discriminator} Tag`,
				`${e.bot} Robot`,
				`${e.avatar} Avatar`,
				`${e.calendar} Creazione`,
				`${e.calendar2} Iscrizione`,
				`${e.status.online} Stato`,
				`${e.up} Ruolo`,
				`${e.calendar2} Arrivato`,
				`${e.pencil} Nickname`,
				`${e.roles} Ruoli`,
				`${e.color} Color`,
				`${e.desc} Description`,
				`${e.stats} Stats`,
				`${e.link} Links`
			],
			USERINFO_NO_ROLE: "No role",
			USERINFO_MORE_ROLES: (nb) => ` e ${nb} e altri ruoli`,
			USERINFO_NO_NICKNAME: "",
			USERINFO_LINKS: () => `${discord ? `[Support](https://discord.gg/${discord})\n` : ""}[Invitation](${invite})\n${github ? `[Github](${github})\n` : ""}${website ? `[Website](${website})` : ""}`,
			USERINFO_STATS: () => `**${votes}** votes (Discordbots.org)\n**${servers}** servers\n**${shards.length === 0 ? "No" : shards.length}** shards\nMade with **${lib}**`,

			/* SERVERINFO COMMAND */

			// Utils
			SERVERINFO_DESCRIPTION: "Mostra informazioni riguardanti il server!",
			SERVERINFO_USAGE: "serverinfo [ID/Name]",
			SERVERINFO_EXAMPLES: "$serverinfo Tarantelle\n$serverinfo",
			// Content
			// Headings
			SERVERINFO_HEADINGS:[
				`${e.title} Nome`,
				`${e.calendar} Data creazione`,
				`${e.users} Membri`,
				`${e.channels} Canali`,
				`${e.afk} Canale AFK`,
				`${e.id} ID`,
				`${e.crown} Founder`,
			],
			SERVERINFO_MEMBERCOUNT: (members) => `${members.filter((m) => !m.user.bot).size} membri | ${members.filter((m) => m.user.bot).size} bots`,
			SERVERINFO_NO_AFK: "No AFK channel",
			SERVERINFO_CHANNELS: (channels) => `${channels.filter((ch) => ch.type === "voice").size} vocali | ${channels.filter((ch) => ch.type === "text").size} testuali | ${channels.filter((ch) => ch.type === "category").size} categorie`,

			/* MENTIONROLE COMMAND */

			// Utils
			MENTIONROLE_DESCRIPTION: "Mention a role and then disable the possibility of mentioning",
			MENTIONROLE_USAGE: "mentionrole [name]",
			MENTIONROLE_EXAMPLES: "$mentionrole Members",
			// Errors
			MENTIONROLE_NOT_FOUND: `${e.error} | You must enter a role to mention!`,

			/* UNBAN COMMAND */

			// Utils
			UNBAN_DESCRIPTION: "Unban the user from the server!",
			UNBAN_USAGE: "unban [userID/user#0000]",
			UNBAN_EXAMPLES: "$unban 422820341791064085\n$unban User#0000",
			// Errors
			UNBAN_ERR_ID: (id) => `${e.error} | No user on Discord has the ID \`${id}\` !`,
			UNBAN_ERR_NOT_BANNED: (user) => `${e.error} | **${user.username}** is not banned!`,
			// Content
			UNBAN_SUCCESS: (user, msg) => `${e.success} | **${user.username}** has just been unbanned from **${msg.guild.name}** !`,
			
			/* EVAL COMMAND */

			// Utils
			EVAL_DESCRIPTION: "Executes the code",
			EVAL_USAGE: "eval [code]",
			EVAL_EXAMPLES: "$eval message.channel.send('Hey');",

			/* REPORT COMMAND */
			REPORT_DESCRIPTION: "Send your report to the channel defined for this!",
			REPORT_USAGE: "report [@user] [reason]",
			REPORT_EXAMPLES: "$report @User#0000 Breaking the rules",
			// Errors
			REPORT_ERR_NO_CHANNEL: `${e.error} | No report channel defined!`,
			REPORT_ERR_NO_REP: `${e.error} | Please enter a reason for your report!`,
			REPORT_ERR_NO_USER: `${e.error} | Please mention the user you want report!`,
			REPORT_ERR_USER_YOURSELF: `${e.error} | You can't report yourself`,
			//Headings
			REPORT_HEADINGS: [
				"Author",
				"Date",
				"Content",
				"Reporting"
			],
			// Content
			REPORT_TITLE: (user) => `Report - ${user.tag}`,
			REPORT_SUCCESS: (channel) => `${e.success} | Your report has been sent in ${channel} !`,

			/* GETINVITE COMMAND */

			// Utils
			GETINVITE_DESCRIPTION: "Genera un invito da inviare ai tuoi amici per farli unire al server.",
			GETINVITE_USAGE: "getinvite [ID/Name]",
			GETINVITE_EXAMPLES: "",
			// Errors
			GETINVITE_ERR_NO_GUILD: (search) => `${e.error} | No server found (search: ${search})`,

			/* SUGGEST COMMAND */

			// Utils
			SUGGEST_DESCRIPTION: "Invia un suggerimento!",
			SUGGEST_USAGE: "suggest [idea]",
			SUGGEST_EXAMPLES: "$suggest Un nuovo canale tipo #spam !",
			// Errors
			SUGGEST_ERR_NO_CHANNEL: `${e.error} | Nessun canale per i suggerimenti definito!`,
			SUGGEST_ERR_NO_SUGG: `${e.error} | Inserisci un suggerimento!`,
			// Headings
			SUGGEST_HEADINGS: [
				"Autore",
				"Data",
				"Contentuto"
			],
			// Content
			SUGGEST_TITLE: (user) => `Suggerimento di - ${user.tag}`,
			SUGGEST_SUCCESS: (channel) => `${e.success} | Il tuo suggerimento verrà votato in  ${channel} !`,
			

			/* INVITE COMMAND */

			// Utils
			INVITE_DESCRIPTION: `Mostra i link ${c.botname}!`,
			INVITE_USAGE: "Invita (copia)",
			INVITE_EXAMPLES: "$invite\n$invite copy",
			// Content
			INVITE_TITLE: "Link principali",
			INVITE_DESC: (prefix) => `Digita \`${prefix}invite copy\` per copiare i link!`,
			INVITE_HEADINGS: [
				`${e.add} Invita ${c.botname}`,
				`${e.help} Support`
			],

			/* SHORTURL COMMAND */

			// Utils
			SHORTURL_DESCRIPTION: "Shorten your link!",
			SHORTURL_USAGE: "shorturl [url]",
			SHORTURL_EXAMPLES: "$shorturl https://google.fr",
			// Errors
			SHORTURL_ERR_INVALID_URL: `${e.error} | Please enter a valid URL!`,

			/* MINECRAFT COMMAND */

			// Utils
			MINECRAFT_DESCRIPTION: "Displays information about the Minecraft server!",
			MINECRAFT_USAGE: "minecraft [ip]",
			MINECRAFT_EXAMPLES: "$minecraft mc.hypixel.net",
			// Errors
			MINECRAFT_ERR_IP: `${e.error} | Please enter an IP!`,
			MINECRAFT_ERR_OFFLINE: `${e.error} | This server is offline or blocking access!`,
			// Content
			MINECRAFT_ONLINE: "Online",
			MINECRAFT_OFFLINE: "Offline",
			MINECRAFT_PLAYERS: (nb) => `${nb} player(s)`,
			// Headings
			MINECRAFT_HEADINGS: (ip) => [
				`Informations on ${ip}`,
				`${e.version} Version`,
				`${e.minecraft} Currently connected`,
				`${e.users} Maximum`,
				`${e.status.online} Status`,
				`${e.ip} Full IP`
			],

			/* STAFF COMMAND */

			// Utils
			STAFF_DESCRIPTION: "Displays the list of server staff members!",
			STAFF_USAGE: "staff",
			STAFF_EXAMPLES: "$staff",
			// Content
			STAFF_TITLE: (guildName) => `Staff of ${guildName}`,
			STAFF_HEADINGS: {
				ADMIN: "Administrators",
				MOD: "Moderators"
			},
			STAFF_NO_ADMIN: "No administrator",
			STAFF_NO_MOD: "No moderator",

			/* JOKE COMMAND */

			// Utils
			JOKE_DESCRIPTION: "Displays a joke in French",
			JOKE_USAGE: "joke",
			JOKE_EXAMPLES: "$joke",
			// Content
			JOKE_FOOTER: "blague.xyz | By Skiz#0001",

			/* FML COMMAND */

			// Utils
			FML_DESCRIPTION: "Displays a random FML",
			FML_USAGE: "fml",
			FML_EXAMPLES: "$fml\n$vdm",
			// Content
			FML_TITLE: "FML | fmylife.com",
			FML_URL: "https://www.fmylife.com/random",
			FML_ERROR: `${e.error} | An error occurred during the recovery of the FML`,

			/* 8BALL COMMAND */

			// Utils
			EIGHTBALL_DESCRIPTION: "I'm telling you the truth!",
			EIGHTBALL_USAGE: "8ball [question]",
			EIGHTBALL_EXAMPLES: "$8ball Is Tarantelle the best Discord bot?",
			// Errors
			EIGHTBALL_ERR_QUESTION: `${e.error} | You have to enter a question to ask me!`,
			// Content
			EIGHTBALL_ANSWERS: [
				"I'm sure of it.",
				"it's definitely safe.",
				"undoubtedly...",
				"Yes, I'm sure and certain!",
				"probably...",
				"Yes!",
				"No!",
				"signs make me say yes...",
				"ask again later...",
				"it's better not to tell you now...",
				"I can't predict now...",,
				"don't count on it.",
				"my answer is no.",
				"my sources say no...",
				"oh.... I doubt it!",
				"nel dubbio, u gay",
				"nel dubbio, gerardo gay"
			],

			/* QRCODE */

			// Utils
			QRCODE_DESCRIPTION: "Generates a QR Code with your text!",
			QRCODE_USAGE: "qrcode [text]",
			QRCODE_EXAMPLES: "$qrcode Hey !",
			// Errors
			QRCODE_ERR_TEXT: `${e.error} | You must enter a text!`,

			/* FLIP COMMAND */

			// Utils
			FLIP_DESCRIPTION: "I roll the dice for you!",
			FLIP_USAGE: "flip",
			FLIP_EXAMPLES: "$flip",
			// Content
			FLIP_PILE: ":game_die: | It's **pile** !",
			FLIP_FACE: ":game_die: | It's **face** !",

			/* LMG COMMAND */

			// Utils
			LMG_DESCRIPTION: "Returns a link to lmgtfy.com",
			LMG_USAGE: "lmg [question]",
			LMG_EXAMPLES: "$lmg How to create your Discord bot?",
			// Errors
			LMG_ERR_QUESTION: `${e.error} | You must specify a search!`,

			/* APITOKEN COMMAND */

			// Utils
			APITOKEN_DESCRIPTION: "Send your token back to use the Tarantelle API!",
			APITOKEN_USAGE: "apitoken (regenerate)",
			APITOKEN_EXAMPLES: "$apitoken\n$apitoken regenerate",
			// Content
			APITOKEN_DM_SUCCESS: `:incoming_envelope:: | API key sent by private messages!`,
			APITOKEN_DM_SUCCESS_REGENERATE: `:incoming_envelope: | New API key sent by private messages!`,
			APITOKEN_SUCCESS: (token) => `:key: | Your API key is \`${token}\` !`,
			APITOKEN_SUCCESS_REGENERATE: (token) => `:key: | Regenerated API key! Your API key is now \`${token}\`.`,

			/* LOVECALC COMMAND */

			// Utils
			LOVECALC_DESCRIPTION: "How much love is there between two people? *This is a fun command, not to be taken seriously*",
			LOVECALC_USAGE: "lovecalc [@member1] (@member2)",
			LOVECALC_EXAMPLES: "$lovecalc @User#0000\n$lovecalc @User#0000 @Tarantelle#6770",
			// Errors
			LOVECALC_ERR_MENTIONS: `${e.error} | You must mention two members!`,
			// Content
			LOVECALC_CONTENT: (percent, username1, username2) => `There's **${percent}%** of love between **${username1}** and **${username2}** !`,

			/* BACKUP COMMAND */

			// Utils
			BACKUP_DESCRIPTION: "Manage your server backups in an ergonomic and efficient way!",
			BACKUP_USAGE: "backup [create/load/infos]",
			BACKUP_EXAMPLES: "$backup create\n$backup load 92N1x\n$backup infos 92N1x",
			// Errors
			BACKUP_ERR_STATUS: `${e.error} | You must specify \`create\`, \`load\` or \`infos\`!`,
			BACKUP_ERR_NOT_FOUND: (backupID) => `${e.error} | No backup found for \`${backupID}\``,
			BACKUP_ERR_ID: `${e.error} | Please enter a backup ID!`,
			BACKUP_ERR_TIMEOUT: `${e.error} | Time's up! Cancelled backup loading!`,
			// Content
			BACKUP_CREATE_SUCCESS: `${e.success} | Successfully created backup! The backup ID has been sent to you in private messages!`,
			BACKUP_CREATE_SUCCESS_ID: (backupID) => `${e.success} | Here is the ID of your backup: \`\`\`${backupID}\`\`\``,
			BACKUP_CONFIRMATION: `${e.warn} | :warning: | When the backup is loaded, all the channels, roles, etc. will be replaced! Type \`-confirm\` to confirm!`,
			BACKUP_START_SAVING: `${e.success} | Start loading the backup!`,
			BACKUP_LOAD_SUCCESS: `${e.success} | Backup successfully loaded!`,
			// Headings
			BACKUP_HEADINGS: [
				"Backup Informations",
				"ID",
				"Server ID",
				"Size",
				"Created At"
			],

			/* GETCONF COMMAND */

			// Utils
			GETCONF_DESCRIPTION: "Displays the configuration of a server",
			GETCONF_USAGE: "getconf [server ID]",
			GETCONF_EXAMPLES: "$getconf 565048515357835264",
			// Errors
			GETCONF_ERR_ID: `${e.error} | Please enter a valid ID!`,
			GETCONF_ERR_GUILD_NOT_FOUND: `${e.error} | No server found!`,

			/* PERMISSIONS COMMAND */

			// Utils
			PERMISSIONS_DESCRIPTION: "Mostra i permessi di un utente",
			PERMISSIONS_USAGE: "permissions (@member)",
			PERMISSIONS_EXAMPLES: "$permissions\n$permissions @user#0000",
			// Content
			PERMISSIONS_TITLE: (username, channel) => `Permessi di ${username} in #${channel}`,

			/* PARTNERS COMMAND */

			// Utils
		//	PARTNERS_DESCRIPTION: "Displays Tarantelle partners",
		//	PARTNERS_USAGE: "partners",
		//	PARTNERS_EXAMPLES: "$partners",
		//	// Content
		//	PARTNERS_TITLE: `${c.botname} Partners`,

			/* SERVERSLIST COMMAND */

			SERVERSLIST_DESCRIPTION: "Displays the list of the servers of the bot!",
			SERVERSLIST_USAGE: "servers-list",
			SERVERSLIST_EXAMPLES: "$servers-list",

			/* TWEET COMMAND */

			// Utils
			TWEET_DESCRIPTION: "Generate a tweet of a person of your choice on Twitter!",
			TWEET_USAGE: "tweet [@twitter] [text]",
			TWEET_EXAMPLES: "$tweet EmmanuelMacron Hello France!",
			// Errors
			TWEET_ERR_USERNAME: `${e.error} | You have to enter someone's twitter nickname!`,
			TWEET_ERR_TEXT: `${e.error} | You must enter a message!`,
			// Content
			TWEET_CONTENT: (user) => `New tweet published by ${user}:`,

			/* PLAY COMMAND */

			// Utils
			PLAY_DESCRIPTION: "Play music!",
			PLAY_USAGE: "play [title]",
			PLAY_EXAMPLES: "$play Despacito",
			// Errors
			PLAY_ERR_CANT_JOIN: `${e.error} | I can't go into the voice channel!`,
			PLAY_ERR_NO_SONG: `${e.error} | No more music in the queue!`,
			// Content
			PLAY_ADDED_TO_QUEUE: (title) => `${e.add} | ${title} !`,
			PLAY_SEARCH: ".",
			PLAY_ERR_NO_NAME: `${e.error} | Please enter a video name to search for!`,
			PLAY_ERR_VOICE_CHANNEL: `${e.error} | You must be connected in a voice channel!`,
			PLAY_ERR_PERMS: `${e.error} | An error has occurred. Either I can't connect in your living room or I can't talk in your living room. Check my permissions and try again.`,
			PLAY_ERR_TIMEOUT: `${e.error} | Time's up! Please retype the command!`,
			PLAY_ERR_NOT_FOUND: `${e.error} | No results on Youtube!`,
			PLAY_ERR_NOT_PLAYING: `${e.error} | No music in progress!`,
			// Headings
			PLAY_PLAYING_TITLE: "Playing in progress",
			PLAY_HEADINGS: [
				`${e.title} Title`,
				`${e.singer} Singer`,
				`${e.time} Duration`,
				`${e.search} Search`,
				`${e.calendar} Creation`,
				`${e.desc} Description`,
				`${e.time} Duration`
			],
			PLAY_SUCCESS: (song) => `▶️ In ascolto${song.name}...`,
			PLAY_ADDED_TO_QUEUE: (song) => `🎵 ${song.name} aggiunta alla coda!`,

			/* STOP COMMAND */

			// Utils
			STOP_DESCRIPTION: "Ferma la musica in ascolto!",
			STOP_USAGE: "stop",
			STOP_EXAMPLES: "$stop",
			// Content
			STOP_TITLE: `Ferma la musica`,
			STOP_CONTENT: (voteCount, requiredCount) => `Stop the music\nVote: ${voteCount}/${requiredCount}\nReact with 👍 to stop the music!`,
			STOP_CONTENT_COMPLETE: "Music correctly stopped!",

			/* SKIP COMMAND */

			// Utils
			SKIP_DESCRIPTION: "Play the next song!",
			SKIP_USAGE: "skip",
			SKIP_EXAMPLES: "$skip",
			// Content
			SKIP_TITLE: "Skip to next song",
			SKIP_CONTENT: (title, voteCount, requiredCount) => `Next song: ${title}\nVote: ${voteCount}/${requiredCount}\nReact with 👍 to play the next song!`,
			SKIP_CONTENT_COMPLETE: (title) => `Song passed ! Now: ${title}`,
			SKIP_SUCCESS: `${e.success} | I just changed the song!`,
			// Errors
			SKIP_ERR_NO_SONG: `${e.error} | No next song!`,

			/* NP COMMAND */

			// Utils
			NP_DESCRIPTION: "Informazioni riguardo la canzone in corso!",
			NP_USAGE: "np",
			NP_EXAMPLES: "$np",
			// Errors
			NP_ERR_NO_DESC: "**Nessuna descrizione**",

			/* QUEUE COMMAND */

			// Utils
			QUEUE_DESCRIPTION: "Mostra la coda",
			QUEUE_USAGE: "queue",
			QUEUE_EXAMPLES: "$queue",
			// Content
			QUEUE_TITLE: `${e.playlist} Playlist`,

			/* PAUSE COMMAND */
			
			// Utils
			PAUSE_DESCPRIPTION: "Mette in pausa la musica",
			PAUSE_USAGE: "pause",
			PAUSE_EXAMPLES: "$pause",
			// Content
			PAUSE_SUCCESS: "⏸️ Musica messa in pausa.",

			/* RESUME COMMAND */
			
			// Utils
			RESUME_DESCPRIPTION: "Riprende a suonare",
			RESUME_USAGE: "resume",
			RESUME_EXAMPLES: "$resume",
			// Content
			RESUME_SUCCESS: "▶️ Music rri",

			/* LYRICS COMMAND */

			// Utils
			LYRICS_DESCRIPTION: "Mostra il testo della canzone",
			LYRICS_USAGE: "lyrics [nome canzone]",
			LYRICS_EXAMPLES: "$lyrics Chiavt a mammt",
			// Content
			LYRICS_TITLE: (songName) => `🎤 Testo di ${songName}`,
			LYRICS_NEXT: (link) => `\n**Altro...** (${link})[Clicca per il resto]`,
			// Errors
			LYRICS_ERR_SONG_NAME: `${e.error} | Inserisci il nome di una canzone!`,
			LYRICS_ERR_NO_LYRICS: (songName) => `${e.error} |Nessun testo trovato per \`${songName}\` !`,

			/* CONFIGURATION COMMAND */

			// Utils
			CONFIGURATION_DESCRIPTION: "Configurazione Server",
			CONFIGURATION_USAGE: "configuration",
			CONFIGURATION_EXAMPLES: "$configuration",
			// Headings
			CONFIGURATION_HEADINGS: [
				[ "Channel(s) ignorati", "Nessun canale ignorato" ],
				[ "Autorole", "Autorole disabled" ],
				[ "Welcome", "Welcome messages disabled" ],
				[ "Goodbye", "Goodbye messages disabled" ],
				[ "Slowmode", "No channel with slowmode" ],
				[ "Channels" ],
				[ "Warns" ],
				[ "Automoderation", "Automoderation disabled" ],
				[ "Auto-delete commands", "Auto-deletion of moderation commands disabled" ],
				[ "Edit your configuration", `[Clic here to go on the dashboard!](${c.dashboard.baseURL})`]
			],
			CONFIGURATION_AUTOROLE: (roleID) => `Role : <@&${roleID}>`,
			CONFIGURATION_WELCOME: (withImage, channelID) => `Channel : <#${channelID}>\nImage : ${withImage ? "Yes" : "No"}`,
			CONFIGURATION_GOODBYE: (withImage, channelID) => `Channel : <#${channelID}>\nImage : ${withImage ? "Yes" : "No"}`,
			CONFIGURATION_MODLOGS: (channelID) => `Moderation logs : ${channelID ? `<#${channelID}>` : "Not defined"}`,
			CONFIGURATION_SUGGESTIONS: (channelID) => `Suggestions : ${channelID ? `<#${channelID}>` : "Not defined" }`,
			CONFIGURATION_REPORTS: (channelID) => `Reports : ${channelID ? `<#${channelID}>` : "Not defined" }`,
			CONFIGURATION_FORTNITESHOP: (channelID) => `Fortnite Shop : ${channelID ? `<#${channelID}>` : "Not defined" }`,
			CONFIGURATION_AUTOMOD: (ignoredChannels) => `${ignoredChannels.length > 0 ? `Salon ignorés : ${ignoredChannels.map((ch) => `<#${ch}>`)}` : "Aucun salon ignoré."}`,
			CONFIGURATION_WARNS: (kick, ban) => `${kick ? `**Expulsion**: after **${kick}** warnings.` : "**Expulsion**: Not defined."}\n${ban ? `**Banishment**: after **${ban}** warnings.` : "**Banishment**: Not defined."}`,
			CONFIGURATION_AUTODELETEMOD: "Auto-deletion of moderation commands enabled",

			/* IGNORE COMMAND */

			// Utils
			IGNORE_DESCRIPTION: "Disabilita i comandi nel canale selezionato",
			IGNORE_USAGE: "ignore [#canale]",
			IGNORE_EXAMPLES: "$ignore #general",
			// Content
			IGNORE_SUCCESS_DISABLED: (channel) => `${e.success} |Comandi permessi in ${channel} !`,
			IGNORE_SUCCESS_ENABLED: (channel) => `${e.warn} | Comandi vietati in ${channel} !`,

			/* SETPREFIX COMMAND */

			// Utils
			SETPREFIX_DESCRIPTION: "Changes the server prefix",
			SETPREFIX_USAGE: "setprefix [prefix]",
			SETPREFIX_EXAMPLES: "$setprefix !",
			// Errors
			SETPREFIX_ERR_PREFIX: `${e.error} | Please enter a valid prefix!`,
			SETPREFIX_ERR_CARACT: `${e.error} | The prefix must not exceed 5 characters!`,
			// Content
			SETPREFIX_SUCCESS: (prefix) => `${e.success} | The prefix has been changed! Type in \`${prefix}help\` to see the list of commands!`,

			/* AUTOROLE COMMAND */

			// Utils
			AUTOROLE_DESCRIPTION: "Enable or disable the autorole on the server!",
			AUTOROLE_USAGE: "autorole [on/off] (role)",
			AUTOROLE_EXAMPLES: "$autorole on Members\n$autorole off",
			// Errors
			AUTOROLE_ERR_STATUS: `${e.error} | Please indicate \`on\` or \`off\` and a role name!`,
			// Content
			AUTOROLE_ENABLED: (prefix) => `${e.success} | Autrole correctly activated! To have more information about the configuration of your server type \`${prefix}configuration\` !`,
			AUTOROLE_DISABLED: (prefix) => `${e.warn} | Autrole correctly deactivated! To have more information about the configuration of your server type \`${prefix}configuration\` !`,

			/* WELCOME COMMAND */

			// Utils
			WELCOME_DESCRIPTION: `Send a welcome message to a pre-defined channel!`,
			WELCOME_USAGE: "welcome",
			WELCOME_EXAMPLES: "$welcome",
			// Content
			WELCOME_TEST_SUCCESS: `${e.success} | Test performed!`,
			WELCOME_DISABLED: (prefix) => `${e.success} | Welcome messages have just been disabled! Type \`${prefix}configuration\` to see the current configuration!`,
			WELCOME_FORM_CHANNEL: (author) => `Hello ${author} ! In which channel will the welcome messages be sent? (mention a channel)`,
			WELCOME_FORM_MESSAGE: (channel, msg) => `All right! The messages will therefore be sent in ${channel}. Enter the welcome message below: \n\n\nInfos:\n\n\nMention: {user}\nMembers: {membercount}\nServer: {server}\nFor example, "Welcome {user} to {server} ! Thanks to you, we are {membercount} ! will give "Welcome ${msg.author} to ${msg.guild.name} ! Thanks to you, we are ${msg.guild.memberCount} !".`,
			WELCOME_FORM_IMAGE: `It works! Do you want a great welcome image to be sent at the same time? Answer with "yes" or "no"!`,
			WELCOME_FORM_SUCCESS: (channel, prefix) => `${e.success} | Welcome messages enabled in <#${channel}> ! Type \`${prefix}welcome test\` to test the welcome message!`,
			WELCOME_IMG_MSG: (name) => `Welcome in ${name} !`,
			WELCOME_IMG_NUMBER: (memberCount) => `- ${memberCount}th member !`,
			WELCOME_IMG_TITLE: "Benvenuto",
			WELCOME_DEFAULT_MESSAGE: "Benvenuto {user} a {server} ! Grazie a te, siamo {membercount} scemi !",
			// Errors
			WELCOME_ERR_TIMEOUT: `${e.error} | Time's up! Please retype the command!`,
			WELCOME_ERR_CARACT: `${e.error} | Your message must not exceed 1500 characters!`,

			/* GIVEAWAY COMMAND */

			// Utils
			GIVEAWAY_DESCRIPTION: "Gestisci i tuoi giveaway",
			GIVEAWAY_USAGE: "giveaway [create/reroll/delete/end] (tempo) (numero vincitori) (premio)",
			GIVEAWAY_EXAMPLES: "$giveaway create 10m 2 5e PayPal !\n$giveaway reroll 597812898022031374",
			// Errors
			GIVEAWAY_ERR_STATUS: `${e.error} |Devi specificare \`create\`, \`reroll\` o \`delete\`!`,
			GIVEAWAY_ERR_CREATE: (prefix) => `${e.error} | Devi inserire le informazioni in questo formato: \n\n\`${prefix}giveaway create [tempo] [numero vincitori] [premio]\``,
			GIVEAWAY_ERR_REROLL: `${e.error} | You must enter the ID of the giveaway message a re-rolled!`,
			GIVEAWAY_ERR_DELETE: `${e.error} | You must enter the ID of the giveaway message to be deleted!`,
			GIVEAWAY_ERR_END: `${e.error} | You must enter the ID of the giveaway message to be ended!`,
			GIVEAWAY_ERR_REROLL_MSG_ENDED: (messageID) => `${e.error} | No giveaway **ended** found with message ID \`${messageID}\``,
			GIVEAWAY_ERR_MESSAGE_NOT_FOUND: (messageID) => `${e.error} | No giveaway found with message ID \`${messageID}\``,
			GIVEAWAY_ERR_15_DAYS: `${e.error} | La lunghezza massima di un giveaway è di 15 giorni.`,
			GIVEAWAY_ERR_MAX: `${e.error} | Un massimo di 4 .`,
			// Content
			GIVEAWAY_CREATED: `${e.success} | Giveaway launched!`,
			GIVEAWAY_REROLLED: `${e.success} | New draw done!`,
			GIVEAWAY_DELETED: `${e.success} | Giveaway deleted!`,
			GIVEAWAY_ENDED: `${e.success} | Giveaway in stop mode (-15 seconds)!`,
			// Messages
			GIVEAWAY_CREATE_MESSAGES: {
				giveaway: "🎉🎉 **GIVEAWAY** 🎉🎉",
				giveawayEnded: "🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
				timeRemaining: "Time remaining: **{duration}** !",
				inviteToParticipate: "React with 🎉 to participate!",
				winMessage: "Congratulations, {winners} ! You won **{prize}** !",
				embedFooter: "Giveaways",
				noWinner: "Giveaway cancelled, no valid participation.",
				winners: "winner(s)",
				endedAt: "End at",
				units: { seconds: "seconds", minutes: "minutes", hours: "hours", days: "days" }		
			},
			GIVEAWAY_REROLL_MESSAGES: {
				congrat: ":tada: New winner(s) : {winners}! Congratulations!",
				error: "No valid entries, no winners can be chosen!"
			},

			/* GOODBYE COMMAND */

			// Utils
			GOODBYE_DESCRIPTION: "Send a goodbye message to a pre-defined channel!",
			GOODBYE_USAGE: "goodbye",
			GOODBYE_EXAMPLES: "$goodbye",
			// Content
			GOODBYE_DISABLED: (prefix) => `${e.success} | The goodbye messages have just been deactivated! Type \`${prefix}configuration\` to see the current configuration!`,
			GOODBYE_TEST_SUCCESS: `${e.success} | Test effettuato !`,
			GOODBYE_FORM_CHANNEL: (author) => `Hello ${author} ! In which channel will the goodbye messages be sent? (mention a channel)`,
			GOODBYE_FORM_MESSAGE: (channel, msg) => `All right! The messages will therefore be sent in ${channel}. Enter the goodbye message below: \n\n\nInfos:\\n\n\nMention: {user}\nMembers: {membercount}\nServer: {server}\nFor example, "Goodbye {user} ! It's sad, without you we're only {membercount} on {server} !" will give "Goodbye ${msg.author.username}#${msg.author.discriminator} ! It's sad, without you we're only ${msg.guild.memberCount} on ${msg.guild.name} !".`,
			GOODBYE_FORM_IMAGE: `It works! Do you want a great welcome image to be sent at the same time? Answer with "yes" or "no"!`,
			GOODBYE_FORM_SUCCESS: (channel, prefix) => `${e.success} | Goodbye messages enabled in <#${channel}> ! Type \`${prefix}goodbye test\` to test the goodbye message!`,
			GOODBYE_IMG_MSG: (name) => `Leaving from ${name}`,
			GOODBYE_IMG_NUMBER: (memberCount) => `- ${memberCount}th member !`,
			GOODBYE_IMG_TITLE: "GOODBYE",
			GOODBYE_DEFAULT_MESSAGE: "Arrivederci {user}! Siamo tristi, senza di te siamo solo {membercount} su {server}!",
			// Errors
			GOODBYE_ERR_TIMEOUT: `${e.error} | Time's up! Please retype the command!`,
			GOODBYE_ERR_CARACT: `${e.error} | Your message must not exceed 1500 characters!`,

			/* SLOWMODE COMMAND */

			// Utils
			SLOWMODE_DESCRIPTION: "Define a cooldown in a channel",
			SLOWMODE_USAGE: "slowmode [#channel] (time)",
			SLOWMODE_EXAMPLES: "$slowmode #general 10m\n$slowmode #general",
			// Errors
			SLOWMODE_PLEASE_WAIT: (time, channel) => `${e.error} | The channel ${channel} is in slowmode! Please wait ${time} to be able to post a new message!`,
			// Content
			SLOWMODE_DISABLED: (channel) => `${e.success} | The slowmode has been disabled in the channel <#${channel}> !`,
			SLOWMODE_ENABLED: (channel, time) => `${e.success} | Slowmode enabled in <#${channel}> with a time of ${time} !`,

			/* ADDCOMMAND COMMAND */

			// Utils
			ADDCOMMAND_DESCRIPTION: "Aggiungi un comando!",
			ADDCOMMAND_USAGE: "addcommand [nome] [risposta]",
			ADDCOMMAND_EXAMPLES: "$addcommand hey ciao!",
			// Errors
			ADDCOMMAND_ERR_NAME: `${e.error} | Inserisci un nome e una risposta!`,
			ADDCOMMAND_ERR_EXISTS: (name) => `${e.error} | ${name} già esiste!`,
			ADDCOMMAND_ERR_ANSWER: `${e.error} | Inserisci una risposta a questo comando!`,
			// Content
			ADDCOMMAND_SUCCESS: (cmd) => `${e.success} | Comando ${cmd} Aggiunto al server!`,

			/* DELCOMMAND COMMAND */

			// Utils
			DELCOMMAND_DESCRIPTION: "Rimuovi un comando personalizzato!",
			DELCOMMAND_USAGE: "delcommand [nome-comando]",
			DELCOMMAND_EXAMPLES: "$delcommand hey",
			// Errors
			DELCOMMAND_ERR_NAME: `${e.error} | Inserisci il nome del comando da eliminare!`,
			DELCOMMAND_ERR_EXISTS: (cmd) => `${e.error} |  ${cmd} non esiste!`,
			// Content
			DELCOMMAND_SUCCESS: (cmd) => `${e.success} | The ${cmd} command has been removed from the server!`,

			/* RELOAD COMMAND */

			// Utils
			RELOAD_DESCRIPTION: "Ricarica un comando!",
			RELOAD_USAGE: "reload [nome del comando]",
			RELOAD_EXAMPLES: "$reload ping",
			// Errors
			RELOAD_ERR_CMD: `${e.error} | Inserisci il nome del comando che vuoi ricaricare!`,
			RELOAD_ERR_NOT_FOUND: (cmd) => `${e.error} | Nessun comando trovato con \`${cmd}\` !`,
			// Content
			RELOAD_SUCCESS: (cmd) => `${e.success} |  ${cmd} ricaricato!`,

			/* PROFILE COMMAND */

			// Utils
			PROFILE_DESCRIPTION: "Mostra il profilo dell'utente mensionato (o l'autore del messaggio)",
			PROFILE_USAGE: "profile (@user#0000)",
			PROFILE_EXAMPLES: "$profile\n$profile @MyNameIsBoh#4806",
			// Content
			NO_BIO: "Nessuna Biografia Disponibile",
			DISPLAY_REP: (points) => `**${points}** point(s)`,
			DISPLAY_MONEY: (money) => `**${money}** credit(s)`,
			NO_PARTNER: "Single",
			NO_BIRTHDATE: "Non disponibile.",
			// Headings
			PROFILE_TITLE: (username) => `Profilo di ${username}`,
			PROFILE_HEADINGS:{
				MONEY:"💰 Soldi",
				GLOBAL_MONEY:"🌍 Soldi totali",
				BANK: "💳 Banca",
				REP: "🎩 Reputazione",
				REGISTERED_AT: "📅 Registrato",
				LEVEL:"📊 Livello",
				EXP: "🔮 Esperienza",
				BIRTHDATE: "🎂 Compleanno",
				MARRIED: "❤️ Sposato",
				INVITER: "🤵 Invito",
				PSEUDO: "📝 Pseudo",
				ACHIEVEMENTS: "🔥 Achievements",
				BIO: "🔖 Biografia"
			},
			PROFILE_ACHIEVEMENTS: (prefix) => `Ricevi più informazioni con \`${prefix}achievements\`!`,
			
			/* WORK COMMAND */

			// Utils
			WORK_DESCRIPTION: "Lavora e guadagna!",
			WORK_USAGE: "work",
			WORK_EXAMPLES: "$work",
			// Content
			WORK_CLAIMED_HEADINGS: [
				"Salario",
			],
			WORK_CLAIMED_SALARY: (amount) => `${amount} crediti aggiunti al tuo account!`,
			WORK_AWARD: ":tada: Hai guadanato 200 crediti!",
			WORK_FOOTER: "Scrivi la parola AWARD per avere crediti!",
			// Errors
			WORK_ERR_COOLDOWN: (delay) => `${e.error} | Devi aspettare ${delay} prima di poter lavorare di nuovo!`,

			/* REP COMMAND */

			// Utils
			REP_DESCRIPTION: "Dai punti rispetto ad un utente!",
			REP_USAGE: "rep [@user#0000]",
			REP_EXAMPLES: "$rep @MyNameIsBoh#4806",
			// Errors
			REP_ERR_COOLDOWN: (delay) => `${e.error} | Devi aspettare ${delay} prima di poter dare altri punti rispetto!`,
			REP_ERR_YOURSELF: `${e.error} | Non puoi darti rispetto da solo!`,
			// Content
			REP_SUCCESS: (tag) => `${e.success} | Hai dato punti rispetto a **${tag}** !`,

			/* SETBIO COMMAND */

			// Utils
			SETBIO_DESCRIPTION: "Cambia la biograpia che apparirà sul tuo profilo!",
			SETBIO_USAGE: "setbio [descrizione]",
			SETBIO_EXAMPLES: "$setbio Succhiato i cazzi per 5 anni",
			// Errors
			SETBIO_ERR_NO_BIO : `${e.error} | Inserisci una biografia!`,
			SETBIO_ERR_CARACT: `${e.error} | La tua biografia non deve superare i 100 caratteri!`,
			// Content
			SETBIO_SUCCESS: `${e.success} | Biografia modificata con successo!`,

			/* MONEY COMMAND */

			// Utils
			MONEY_DESCRIPTION: "Mostra crediti disponibili",
			MONEY_USAGE: "money (@member)",
			MONEY_EXAMPLES: "$money\n$money @user#0000",
			// Content
			CREDITS_TITLE: (username) => `Crediti di ${username}`,

			/* LEADERBOARD COMMAND */

			// Utils
			LEADERBOARD_DESCRIPTION: "Mostra gli utenti con più crediti, livelli o reputazione!",
			LEADERBOARD_USAGE: "leaderboard [rep/levels/credits]",
			LEADERBOARD_EXAMPLES: "$leaderboard credits\n$leaderboard levels",
			// Errors
			LEADERBOARD_ERR_TYPE: `${e.error} | Inserisci un tipo di leaderboard! (\`credits\`, \`level\` ou \`rep\`)`,
			LEADERBOARD_WARN_PHONE: `:confused: Fonti all'fbi ci dicono che stai usando un telfono.... La leaderboard potrebbe non vedersi bene. Prova ad entrare in modalità verticale!`,

			/* ROB COMMAND */

			// Utils
			ROB_DESCRIPTION: "Ruba ad un membro!",
			ROB_USAGE: "rob [@membre] [amount]",
			ROB_EXAMPLES: "$rob @User#0000 100",
			// Errors
			ROB_ERR_YOURSELF: `${e.error} | Non puoi rubare a te stesso!`,
			ROB_ERR_AMOUNT: (member) => `${e.error} | Inserisci una quantità da rubare **${member.user.tag}** !`,
			ROB_ERR_AMOUNT_MEMBER: (member, money) => `${e.error} | **${member.user.username}** non ha **${money}** credits !`,
			ROB_ERR_NO_MONEY: (needed) => `${e.error} | Devi avere più di **${needed}** credits per fare questa rapina!`,
			ROB_ERR_CLDWN: (member) => `:spy: **${member.user.username}** è allarmato.... Aspetta un po' e riprova!`,
			// Content
			ROB_WON: (robbed, member) => [
				`:tada: | Gvng! To fast for polizia, non sono stati in grado di fermarti dal rubare **${robbed}** credits da**${member.user.username}** !`,
				`:confused: | **${member.user.username}** ? Brutte notizie. Sei appena stato derubato di **${robbed}** credits!`,
			],
			ROB_LOSE: (lose, member, won) => [
				`:oncoming_police_car: | La polizia ti ha preso nell'atto, impossibile da negare, la tua tassa è di **${lose}** credits. **${won}** verranno dati a  **${member.user.username}**.`,
				`:police_car: | brutte notizie.... **${member.user.username}** ha chiamato la pula in tempo, la tua tassa è di **${lose}** credits e **${won}** verranno dati a  **${member.user.username}**.`
			],

			/* DEPOSIT COMMAND */

			// Utils
			DEPOSIT_DESCRIPTION: "Deposita una somma in banca",
			DEPOSIT_USAGE: "deposit [cifra]",
			DEPOSIT_EXAMPLES: "$deposit 400",
			// Errors
			DEPOSIT_ERR_AMOUNT: `${e.error} | Specifica una somma da depositare!`,
			DEPOSIT_ERR_NO_MONEY: `${e.error} | Non hai crediti!`,
			DEPOSIT_ERR_AMOUNT_TOO_HIGH: (money) => `${e.error} | Non hai \`${money}\` credits!`,
			// Content
			DEPOSIT_SUCCESS: (money) => `${e.success} | **${money}** credits depositati in banca!`,

			/* PAY COMMAND */

			// Utils
			PAY_DESCRIPTION: "Paga un membro con dei crediti!",
			PAY_USAGE: "pay [@user#0000] [somma]",
			PAY_EXAMPLES: "$pay @user#0000 400",
			// Errors
			PAY_ERR_YOURSELF: `${e.error} | Non puoi dare soldi a te stesso!`,
			PAY_ERR_INVALID_AMOUNT: (username) => `${e.error} | Inserisci una cifra valida **${username}** !`,
			PAY_ERR_AMOUNT_TOO_HIGH: (amount, username) => `${e.error} | Non hai abbastanza crediti per ${amount} credits a ${username} !`,
			// Content
			PAY_SUCCESS: (amount, username) => `${e.success} | Hai pagato ${amount} credits a ${username} !`,

			/* WITHDRAW COMMAND */

			// Utils
			WITHDRAW_DESCRIPTION: "Ritira crediti!",
			WITHDRAW_USAGE: "withdraw [somma]",
			WITHDRAW_EXAMPLES: "$withdraw 400",
			// Errors
			WITHDRAW_ERR_AMOUNT: `${e.error} | Specifica cifra da ritirare!`,
			WITHDRAW_ERR_NO_MONEY: `${e.error} | Non hai crediti in banca!`,
			WITHDRAW_ERR_AMOUNT_TOO_HIGH: (money) => `${e.error} | Non hai \`${money}\` credits in banca!`,
			// Content
			WITHDRAW_SUCCESS: (money) => `${e.success} | **${money}** credits ritirati!`,

			/* BIRTHDATE COMMAND */

			// Utils
			BIRTHDATE_DESCRIPTION: "Set your birthday date (which will appear on your profile)",
			BIRTHDATE_USAGE: "birthdate (date)",
			BIRTHDATE_EXAMPLES: "$birthdate 01/12/2000",
			// Errors
			BIRTHDATE_ERR_DATE: `${e.error} | Please enter a valid date! For example,  01/12/2000`,
			BIRTHDATE_ERR_DATE_FORMAT: `${e.error} | You have entered an invalid date. Reminder: the date format must be: Day/Month/Year. For example, 01/12/2000 for December 1, 2000.`,
			BIRTHDATE_ERR_INVALID_DATE_FORMAT: `${e.error} | You have entered an invalid date (or the indicated date does not exist). Reminder: the date format must be: Day/Month/Year. For example, 01/12/2000 for December 1, 2000.`,
			BIRTHDATE_ERR_TOO_HIGH: `${e.error} | You can't not have been born yet!`,
			BIRTHDATE_ERR_TOO_LOW: `${e.error} | More than 80 years old? :eyes:`,
			// Content
			BIRTHDATE_SUCCESS: (date) => `${e.success} | Your birthday has been set on the ${date} !`,
			
			
			/* WEDDING COMMAND */

			// Utils
			WEDDING_DESCRIPTION: "Marry the person of your choice!",
			WEDDING_USAGE: "wedding [@user#0000]",
			WEDDING_EXAMPLES: "$wedding @User#0000",
			// Errors
			WEDDING_ERR_AUTHOR_MARRIED: (prefix) => `${e.error} | You are already married! First use \`${prefix}divorce\` to divorce`,
			WEDDING_ERR_MEMBER_MARRIED: (username) => `${e.error} | The place is taken, companion! **${username}** is already married!`,
			WEDDING_ERR_AUTHOR_PENDING_REQUESTER: (username) => `${e.error} | You already have a current request to **${username}** !`,
			WEDDING_ERR_AUTHOR_PENDING_RECEIVER: (username) => `${e.error} | **${username}** has already sent you a request! Please refuse or accept it (or wait until it expires in a few minutes).`,
			WEDDING_ERR_MEMBER_PENDING_REQUESTER: (username1, username2) => `${e.error} | **${username2}** has already sent a request to **${username1}** !`,
			WEDDING_ERR_MEMBER_PENDING_RECEIVER: (username1, username2) => `${e.error} | **has already sent a request to **${username2}** ! Wait until **${username2}** accepts or refuses the request for **${username1}** or until it expires and try again!`,
			WEDDING_ERR_TIMEOUT: (member) => `${e.error} | ${member} did not answer.... Wait until he/she is connected and then try again!`,
			WEDDING_ERR_DENIED: (author, member) => `${e.error} | ${author}, I have some bad news... ${member} refused your proposal.`,
			WEDDING_ERR_YOURSELF: `${e.error} | You can't marry yourself!`,
			// Content
			WEDDING_REQUEST: (member, author) => `${e.warn} | ${member}, do you agree to marry ${author}? Answer with "yes" or "no"!`,
			WEDDING_SUCCESS: (author, member) => `${e.success} | ${author}, I have some good news... ${member} has accepted your proposal!`,

			/* DIVORCE COMMAND */

			// Utils
			DIVORCE_DESCRIPTION: "Divorzia con la persona con cui sei sposato!",
			DIVORCE_USAGE: "divorce",
			DIVORCE_EXAMPLES: "divorce",
			// Errors
			DIVORCE_ERR_NOT_WEDDED: `${e.error} | Non sei sposato!`,
			// Content
			DIVORCE_SUCCESS: (username) => `${e.success} | Hai divorziato con **${username}** !`,

			/* SLOTS COMMAND */

			// 
			SLOT_VICTORY: "VITTORIA",
			SLOTS_DESCRIPTION: "Casino!",
			SLOTS_USAGE: "slots [cifra]",
			SLOTS_EXAMPLES: "$slots\n$slots 10",
			// Content
			SLOTS_DEFEAT: (amount, username) => `**${username}** ha usato ${amount} crediti e ha perso.`,
			SLOTS_VICTORY: (text, amount, won, username) => `${text}**${username}** ha usato ${amount} crediti e ha vinto ${won} crediti!`,
			// Errors
			SLOTS_ERR_TOO_HIGH: (money) => `${e.error} | Non hai ${money} crediti, sei povero`,

			/* STATS COMMAND */

			// Utils
			STATS_DESCRIPTION: "Mostra lo stato del bot!",
			STATS_USAGE: "stats",
			STATS_EXAMPLES: "$stats",
			// Content
			STATS: (serv, users) => `\`Servers : ${serv}\`\n\`Users : ${users}\``,
			STATS_DESC: `${c.botname} developed by ${c.owner.name}`,
			STATS_ONLINE: (time) => `Da ${time}`,
		//	STATS_VC: (nb) => `Musica in corso su \`${nb}\` servers`,
			
			// Headings
			STATS_HEADINGS:[
				`Stats`,
				`${e.stats} • __Statistiche__`,
				`${e.version} • __Versione__`,
				`${e.ram} • __RAM__`,
				`${e.status.online} • __Online__`,
				`${e.voice} • __Musica__`,
				":heart: • __Acknowledgements & credits__",
				`${e.link} • __Links__`,
			],

			
			/* FIRE COMMAND */

			// Utils
			FIRE_DESCRIPTION: "Generates a \"fire\" image using the Améthyste API",
			FIRE_USAGE: "fire (@member)",
			FIRE_EXAMPLES: "$fire\n$fire @User#0000",

			/* JAIL COMMAND */

			// Utils
			JAIL_DESCRIPTION: "Generates a \"jail\" image using the Améthyste API",
			JAIL_USAGE: "jail (@member)",
			JAIL_EXAMPLES: "$jail\n$jail @User#0000",

			/* MISSION COMMAND */

			// Utils
			MISSION_DESCRIPTION: "Generates a \"mission\" image using the Améthyste API",
			MISSION_USAGE: "mission (@member)",
			MISSION_EXAMPLES: "$mission\n$mission @User#0000",

			/* RIP COMMAND */

			// Utils
			RIP_DESCRIPTION: "Generates a \"rip\" image using the Améthyste API",
			RIP_USAGE: "rip (@member)",
			RIP_EXAMPLES: "$rip\n$rip @User#0000",

			/* SCARY COMMAND */

			// Utils
			SCARY_DESCRIPTION: "Generates a \"scary\" image using the Améthyste API",
			SCARY_USAGE: "scary (@member)",
			SCARY_EXAMPLES: "$scary\n$scary @User#0000",

			/* TOBECONTINUED COMMAND */

			// Utils
			TOBECONTINUED_DESCRIPTION: "Generates a \"tobecontinued\" image using the Améthyste API",
			TOBECONTINUED_USAGE: "tobecontinued (@member)",
			TOBECONTINUED_EXAMPLES: "$tobecontinued\n$tobecontinued @User#0000",

			/* TRIGGERED COMMAND */

			// Utils
			TRIGGERED_DESCRIPTION: "Generates a \"triggered\" image using the Améthyste API",
			TRIGGERED_USAGE: "triggered (@member)",
			TRIGGERED_EXAMPLES: "$triggered\n$triggered @User#0000",

			/* WANTED COMMAND */

			// Utils
			WANTED_DESCRIPTION: "Generates a \"wanted\" image using the Améthyste API",
			WANTED_USAGE: "wanted (@member)",
			WANTED_EXAMPLES: "$wanted\n$wanted @User#0000",

			/* WASTED COMMAND */

			// Utils
			WASTED_DESCRIPTION: "Generates a \"wasted\" image using the Améthyste API",
			WASTED_USAGE: "wasted (@member)",
			WASTED_EXAMPLES: "$wasted\n$wasted @User#0000",

			/* CAPTCHA COMMAND */

			// Utils
			CAPTCHA_DESCRIPTION: "Generates a \"triggered\" image using the Nekobot API",
			CAPTCHA_USAGE: "captcha (@member)",
			CAPTCHA_EXAMPLES: "$captcha\n$captcha @User#0000",

			/* PHCOMMENT COMMAND */

			// Utils
			PHCOMMENT_DESCRIPTION: "Generates a \"phcomment\" image using the Nekobot API",
			PHCOMMENT_USAGE: "phcomment (@member) (text)",
			PHCOMMENT_EXAMPLES: "$phcomment\n$phcomment @User#0000",
			// Errors
			PHCOMMENT_ERR_TEXT: `${e.error} | You must enter the text of the comment!`,

			/* AVATAR COMMAND */

			// Utils
			AVATAR_DESCRIPTION: "Displays the avatar of the mentionned member",
			AVATAR_USAGE: "avatar (@member)",
			AVATAR_EXAMPLES: "$avatar\n$avatar @User#0000",

			/* LOVE COMMAND */

			// Utils
			LOVE_DESCRIPTION: "Generates a \"love\" image using the Nekobot API",
			LOVE_USAGE: "love [@user1] (@user2)",
			LOVE_EXAMPLES: "$love @User#0000\n$love @User#0000 @Clyde#0000",

			/* CLYDE COMMAND */

			// Utils
			CLYDE_DESCRIPTION: "Generates a \"clyde\" image using the Nekobot API",
			CLYDE_USAGE: "clyde [text]",
			CLYDE_EXAMPLES: "$clyde Discord will close on November 11, 2019. Goodbye.",
			// Errors
			CLYDE_ERR_TEXT: `${e.error} | Please enter a text!`,

			/* TRANSLATE COMMAND  */

			// Utils
			TRANSLATE_DESCRIPTION: "I'm translating your text!",
			TRANSLATE_USAGE: "translate [language] [message]",
			TRANSLATE_EXAMPLES: "$translate fr How are you ?",
			// Content
			TRANSLATE_LANGS: `${e.success} | The list of languages has just been sent to you by private messages!`,
			// Errors
			TRANSLATE_ERR_LANG: (prefix) => `${e.error} | Please enter a language! To display the list of languages, type \`${prefix}translate langs-list\` !`,
			TRANSLATE_ERR_NOT_FOUND: (prefix, lang) => `${e.error} | The language \`${lang}\` does not exist! To display the list of languages, type \`${prefix}translate langs-list\` !`,
			TRANSLATE_ERR_MSG: `${e.error} | Please enter a text to be translated!`,

			/* BAN COMMAND */

			// Utils
			BAN_DESCRIPTION: "Banished the mentioned member!",
			BAN_USAGE: "ban [@user] (reason)",
			BAN_EXAMPLES: "$ban @User#0000 Spam",
			// Errors
			BAN_ERR_BANNED: (user) => `${e.error} | **${user.username}** is already banned!`,
			BAN_ERR_PERMISSIONS: `${e.error} | An error has occurred... check that I have the permissions to ban this member and try again!`,
			BAN_SUCCESS_DM: (user, msg, reason) => `${e.error} | Hello <@${user.id}>,\nYou have just been banned from **${msg.guild.name}** by **${msg.author.tag}** for **${reason}** !`,
			BAN_SUCCESS_CHANNEL: (user, msg, reason) => `${e.success} | **${user.username}** has just been banned from **${msg.guild.name}** by **${msg.author.tag}** for **${reason}** !`,
			BAN_TITLE_LOGS: (caseNumber) => `Ban | Case #${caseNumber}`,

			/* KICK COMMAND */

			// Utils
			KICK_DESCRIPTION: "Kick out the mentioned member!",
			KICK_USAGE: "kick [@user] (reason)",
			KICK_EXAMPLES: "$kick @User#0000 Spam",
			// Errors
			KICK_ERR_PERMISSIONS: `${e.error} | An error has occurred... check that I have the permission to kick this member out and try again!`,
			KICK_SUCCESS_DM: (user, msg, reason) => `${e.error} | Hello <@${user.id}>,\nYou have just been kicked out from **${msg.guild.name}** by **${msg.author.tag}** for **${reason}** !`,
			KICK_SUCCESS_CHANNEL: (user, msg, reason) => `${e.success} | **${user.username}** has just been kicked out from **${msg.guild.name}** by **${msg.author.tag}** for **${reason}** !`,
			KICK_TITLE_LOGS: (caseNumber) => `Kick | Case #${caseNumber}`,

			/* CHECKINVITES COMMAND */

			// Utils
			CHECKINVITES_DESCRIPTION: "Check if members do not have an ad for their Discord server in their presence!",
			CHECKINVITES_USAGE: "checkinvites",
			CHECKINVITES_EXAMPLES: "$checkinvites",
			// Content
			CHECKINVITES_NOT_FOUND: `${e.success} | No member advertises in his game!`,

			/* CLEAR COMMAND */

			// Utils
			CLEAR_DESCRIPTION: "Cancella messaggi!",
			CLEAR_USAGE: "clear[numero di messaggi] (@member)",
			CLEAR_EXAMPLES: "$clear 10\n$clear 10 @user#0000",
			// Errors
			CLEAR_ERR_AMOUNT: `${e.error} | Devi specificare un numero di messaggi da cancellare!`,
			CLEAR_ERR_TIMEOUT: `${e.error} | Tempo scaduto, invia di nuovo il comando!`,
			// Content
			CLEAR_CLONE: `${e.warn} | Tutti i messaggi del canale verrano cancellati! \``,
			CLEAR_DELETED: `${e.success} |  Piazza pulita!`,
			CLEAR_SUCCESS: (amount) => `${e.success} | **${amount}** Messaggi cancellati!`,
			CLEAR_SUCCESS_USER: (amount, user) => `${e.success} | **${amount}** messaggi di **${user.tag}** cancellati !`,

			/* MUTE COMMAND */

			// Utils
			MUTE_DESCRIPTION: "Prevents the member from sending messages and connecting by voice for a period of time!",
			MUTE_USAGE: "mute [@member] [time]",
			MUTE_EXAMPLES: "$mute @User#0000 Spam",
			// Content
			MUTE_SUCCESS: (member, time, reason) => `${e.success} | **${member.user.tag}** is now muted for **${time}** for **${reason}** !`,
			MUTE_SUCCESS_DM: (message, time, reason) => `${e.error} | You are muted in **${message.guild.name}** for **${time}** for **${reason}** !`,
			MUTE_TITLE_LOGS: (caseNumber) => `Mute | Case #${caseNumber}`,

			/* UNMUTE COMMAND */

			// Utils
			UNMUTE_DESCRIPTION: "Unmute the mentioned member!",
			UNMUTE_USAGE: "unmute [@member]",
			UNMUTE_EXAMPLES: "$unmute @User#0000",
			// Errors
			UNMUTE_ERR_NOT_MUTED: `${e.error} | This member is not muted to this server!`,
			// Content
			UNMUTE_SUCCESS: (userID, caseNumber) => `<@${userID}> has just been unmuted! (case of mute: #${caseNumber})`,
			UNMUTE_SUCCESS_USER: (user) => `${e.success} | ${user.tag} has just been unmuted!`,

			/* SANCTIONS COMMAND */
			
			// Utils
			SANCTIONS_DESCRIPTION: "Displays the list of infractions committed by a member!",
			SANCTIONS_USAGE: "sanctions [@member]",
			SANCTIONS_EXAMPLES: "$sanctions @User#0000",
			// Errors
			SANCTIONS_ERR_NOTHING: "This member has not committed any infractions.",
			PRINT_SANCTION: (sData) => `Moderator: <@${sData.moderator}>\nReason: ${sData.reason}`,

			/* DELETEMOD COMMAND */

			// Utils
			DELETEMOD_DESCRIPTION: "Enables or disables the auto deletion of moderation commands!",
			DELETEMOD_USAGE: "deletemod [on/off]",
			DELETEMOD_EXAMPLES: "$deletemod on",
			// Errors
			DELETEMOD_ERR_STATUS: `${e.error} | You must specify \`on\` or \`off\` !`,
			// Content
			DELETEMOD_SUCCESS_ENABLED: `${e.success} | Moderation commands will be automatically deleted!`,
			DELETEMOD_SUCCESS_DISABLED: `${e.success} | Moderation commands will no longer be automatically deleted!`,

			/* WARN COMMAND */

			// Utils
			WARN_DESCRIPTION: "Warn a member in private messages",
			WARN_USAGE: "warn [@member] [reason]",
			WARN_EXAMPLES: "$warn @User#0000 Spam",
			// Errors
			WARN_ERR_REASON: `${e.error} | Please enter a reason!`,
			// Content
			WARN_AUTOBAN: (member, number) => `${e.success} | **${member.user.tag}** was automatically banned because it had more than **${number}** warns !`,
			WARN_AUTOKICK: (member, number) => `${e.success} | **${member.user.tag}** was automatically kicked out because he had more than **${number}** warns !`,
			WARN_SUCCESS_DM: (msg, reason) => `${e.warn} | You've just been warned on **${msg.guild.name}** by **${msg.author.tag}** for **${reason}** !`,
			WARN_SUCCESS: (member, reason) => `${e.success} | **${member.user.tag}** has been warned by private messages for **${reason}** !`,
			WARN_TITLE_LOGS: (caseNumber) => `Warn | Case #${caseNumber}`,

			/* CLEARSANCTIONS COMMAND */

			// Utils
			CLEARSANCTIONS_DESCRIPTION: "Deletes all sanctions of a member!",
			CLEARSANCTIONS_USAGE: "clear-sanctions [@member]",
			CLEARSANCTIONS_EXAMPLES: "$clear-sanctions @User#0000",
			// Content
			CLEARSANCTIONS_SUCCESS: `${e.success} | Sanctions deleted!`,

			/* SETWARNS COMMAND */

			// Utils
			SETWARNS_DESCRIPTION: "Define the sanctions that members will get after a certain number of warns!",
			SETWARNS_USAGE: "setwarns [kick/ban] [number/reset]",
			SETWARNS_EXAMPLES: "$setwarns kick 10\n$setwarns ban 10\n$setwarns ban reset",
			// Errors
			SETWARNS_ERR_SANCTION: `${e.error} | Please indicate a valid sanction type! (\`kick\`, \`ban\`)`,
			// Content
			SETWARNS_SUCCESS_KICK: (prefix, number) => `${e.success} | Configuration saved! When a member has reached the ${number} warns, he will be kicked out. Type \`${prefix}configuration\` to see your new configuration!`,
			SETWARNS_SUCCESS_BAN: (prefix, number) => `${e.success} | Configuration saved! When a member has reached the ${number} warns, he will be banned. Type \`${prefix}configuration\` to see your new configuration!`,
			SETWARNS_SUCCESS_RESET_KICK: (prefix) => `${e.success} | Configuration saved! The kick sanction is no longer automatic! Type \`${prefix}configuration\` to see your new configuration!`,
			SETWARNS_SUCCESS_RESET_BAN: (prefix) => `${e.success} | Configuration saved! The ban sanction is no longer automatic! Type \`${prefix}configuration\` to see your new configuration!`,

			/* POLL COMMAND */

			// Utils
			POLL_DESCRIPTION: "Lancia un sondaggio nel canale!",
			POLL_USAGE: "poll [domanda]",
			POLL_EXAMPLES: "$poll Facciamo la pizza?",
			// Errors
			POLL_ERR_QUESTION: `${e.error} | Inserisci una domanda!`,
			POLL_ERR_TIMEOUT: `${e.error} | Tempo scaduto, inserisci di nuovo il comando!`,
			// Content
			POLL_FORM_MENTION: "Vuoi menzione per il tuo annuncio? Risposta \"yes\" or \"no\"!",
			POLL_FORM_MENTION_HE: "Inserisci una delle seguenti menzioni: `every` (per menzionare @ everyone) o `here` (per menzionare @ here)!",
			POLL_HEADING: "📊 Sondaggio:",

			/* ANNOUNCEMENT COMMAND */

			// Utils
			ANNOUNCEMENT_DESCRIPTION: "Manda un annuncio nel canale!",
			ANNOUNCEMENT_USAGE: "announcement [testo]",
			ANNOUNCEMENT_EXAMPLES: "$announcement A new #spam channel!",
			// Errors
			ANNOUNCEMENT_ERR_TEXT: `${e.error} | Inserisci il testo dell'annuncio!`,
			ANNOUNCEMENT_ERR_TEXT_LENGTH: `${e.error} |Inserisci un testo inferiore a 1030 caratteri!`,
			ANNOUNCEMENT_ERR_TIMEOUT: `${e.error} | Tempo scaduto, inserisci di nuovo il comando!`,
			// Content
			ANNOUNCEMENT_FORM_MENTION: "Vuoi aggiungere una menzione al tuo annuncio? Risposta \"yes\" or \"no\"!",
			ANNOUNCEMENT_FORM_MENTION_HE: "Inserisci una delle seguenti menzioni: `every` (per menzionare @ everyone) o `here` (per menzionare @ here)!",
			ANNOUNCEMENT_HEADING: "📢 Annuncio:",

			/* MODOGS EMBEDS */
			MODLOGS_HEADINGS: {
				USER: "Utente",
				MODERATOR: "Moderatore",
				REASON: "Motivo",
				TIME: "Tempo",
				EXPIRATION: "Scadenza"
			},

			/* SETMODLOGS COMMAND */

			// Utils
			SETMODLOGS_DESCRIPTION: "Definisci un log channel!",
			SETMODLOGS_USAGE: "setmodlogs (#canale)",
			SETMODLOGS_EXAMPLES: "$setmodlogs #modlogs\n$setmodlogs",
			// Content
			SETMODLOGS_SUCCESS: (id) => `${e.success} | File log defininite nel canale <#${id}> !`,


			/* SETSUGGESTS COMMAND */

			// Utils
			SETSUGGESTS_DESCRIPTION: "Seleziona canale suggerimenti!",
			SETSUGGESTS_USAGE: "setsuggests (#canale)",
			SETSUGGESTS_EXAMPLES: "$setsuggests #general\n$setsuggests",
			// Content
			SETSUGGESTS_SUCCESS: (channel) => `${e.success} | Il canale dei suggerimenti ora è ${channel} !`,

			/* SETREPORTS COMMAND */
			SETREPORTS_DESCRIPTION: "Define the reports channel!",
			SETREPORTS_USAGE: "setreports (#channel)",
			SETREPORTS_EXAMPLES: "$setreports #general\n$setreports",
			// Content
			SETREPORTS_SUCCESS: (channel) => `${e.success} | The reports channel is now ${channel} !`,
			
			/* ADDEMOTE COMMAND */

			// Utils
			ADDEMOTE_DESCRIPTION: "Add an emoji to the server!",
			ADDEMOTE_USAGE: "addemote [URL] [name]",
			ADDEMOTE_EXAMPLES: "$addemote https://an-image-of.com/butterfly.png butterfly",
			// Errors
			ADDEMOTE_ERR_NAME: `${e.error} | Please indicate the name of the emoji!`,
			ADDEMOTE_ERR_URL: `${e.error} | Please indicate the url of the emoji!`,
			ADDEMOTE_ERROR: `${e.error} | The URL to the image is invalid or you have no more space on your Discord!`,
			// Content
			ADDEMOTE_SUCCESS: (emote) => `${e.success} | Emoji ${emote.name} added to the server! String: \`${emote.toString()}\``,
			
			/* AUTOMOD COMMAND */

			// Utils
			AUTOMOD_DESCRIPTION: "Enables or disables automatic deletion of discord invitations",
			AUTOMOD_USAGE: "automod [on/off] (#channel)",
			AUTOMOD_EXAMPLES: "$automod on\n$automod off #general\n$automod off",
			// Errors
			AUTOMOD_ERR_STATUS: `${e.error} | Please enter a valid status! (\`on\` ou \`off\`) !`,
			// Content
			AUTOMOD_SUCCESS_ENABLED: (prefix) => `${e.success} | Discord invitations will be automatically deleted! If you want to ignore a channel, just type \`${prefix}automod off #channel\` ! This will disable auto moderation in the mentioned channel!`,
			AUTOMOD_SUCCESS_DISABLED_CHANNEL: (channel) => `${e.success} | Automoderation will no longer be performed in the channel ${channel} !`,
			AUTOMOD_SUCCESS_DISABLED: `${e.success} | All right! Auto moderation is no longer effective on this server!`,
			AUTOMOD_MSG: (msg) => `${msg.author} | Il messaggio conteneva un invito Discord, quindi è stato cancellato. Se era intenzionale, puoi modificare il messaggio, ti è stato inviato come messaggio privato!`,

			/* SETLANG COMMAND */

			// Utils
			SETLANG_DESCRIPTION: "Cambia la lingua del server!",
			SETLANG_USAGE: "setlang [Italiano/English]",
			SETLANG_EXAMPLES: "$setlang Italiano\n$setlang English",
			// Errors
			SETLANG_ERR_LANG: `${e.error} | Perfavore inserisci una lingua (\`italiano\` o \`english\`) !`,
			// Content
			SETLANG_LANGS:[
				":flag_fr: | La langue de ce serveur est maintenant le Français !",
				":flag_gb: | The language of this server is now English!"
			],

			/* FORTNITE COMMAND */
			
			// Utils
			FORTNITE_DESCRIPTION: "Displays a player's Fortnite stats!",
			FORTNITE_USAGE: "fortnite [psn/xbl/pc] [pseudo]",
			FORTNITE_EXAMPLES: "$fortnite pc Ninja",
			// Errors
			FORTNITE_ERR_PLATFORM: `${e.error} | Enter a valid platform: \`psn\`, \`pc\` or \`xbl\` !`,
			FORTNITE_ERR_USERNAME: `${e.error} | Enter a valid pseudo epic games!`,
			FORTNITE_ERR_NOT_FOUND: (platform, username) => `${e.error} | Player \`${username}\` not found on the platform \`${platform}\`!`,
			// Content
			FORTNITE_TITLE: (username, link) => `[${username}](${link})'s Fortnite Stats`,
			FORTNITE_STATS_RIGHT: (kd, percent) => `${kd} K/D - ${percent} WIN%`,
			FORTNITE_AVERAGE_KILLS: "KILLS/MATCH",
			FORTNITE_AVERAGE_KILL: "KILL/MATCH",
			FORTNITE_W_PERCENT: "V%",
			FORTNITE_KD: "K/D",
			FORTNITE_WINS : "WINS",
			FORTNITE_WIN : "WIN",
			FORTNITE_KILLS : "KILLS",
			FORTNITE_KILL : "KILL",
			FORTNITE_WINS_PERCENT : "WIN%",
			FORTNITE_MATCHES : "MATCHES",
			FORTNITE_MATCH : "MATCH",

			/* FORTNITESHOP COMMAND */
			
			// Utils
			FORTNITESHOP_DESCRIPTION: "Displays the fortnite items shop!",
			FORTNITESHOP_USAGE: "fortniteshop",
			FORTNITESHOP_EXAMPLES: "$fortniteshop",
			// Content
			FORTNITESHOP_HEADER: "FORTNITE ITEMS SHOP",
			FORTNITESHOP_DAILY: "Giornaliero",
			FORTNITESHOP_FEATURED: "FEATURED",
			FORTNITESHOP_TITLE: (date) => `Show fornite del ${date}`,

			/* SETFORTNITESHOP COMMAND */
			
			// Utils
			SETFORTNITESHOP_DESCRIPTION: "Definisci un canalel!",
			SETFORTNITESHOP_USAGE: "setfortniteshop (#channel)",
			SETFORTNITESHOP_EXAMPLES: "$setfortniteshop #shop\n$setfortniteshop",
			// Content
			SETFORTNITESHOP_DISABLED: `${e.success} | FortniteShop giornaliero attivo!`,
			SETFORTNITESHOP_ENABLED: (id) => `${e.success} | Canale definito su <#${id}> !`,

			/* CALC COMMAND */
			
			// Utils
			CALC_DESCRIPTION: "Calcolatore in grado di eseguire calcoli complessi e convertire unità di misura!",
			CALC_USAGE: "calc [calculation]",
			CALC_EXAMPLES: "$calc 10*5+sin(3)\n$calc 10cm to m",
			// Errors
			CALC_EMPTY: `${e.error} | Inserisci un calcolo!`,
			CALC_ERROR: `${e.error} | Inserisci un calcolo valido!`,
			// Content
			CALC_TITLE: "Calcolatrice",
			CALC_OPERATION: "Operazione",
			CALC_RESULT: "Risultato",
						
			/* PURGE COMMAND */

			// Utils
			PURGE_DESCRIPTION: "Kick out inactive members!",
			PURGE_USAGE: "purge [days]",
			PURGE_EXAMPLES: "$purge 10",
			// Errors
			PURGE_ERR_DAYS: `${e.error} | Specifica un numero di giorni!`,
			PURGE_ERR_TIMEOUT: `${e.error} | Tempo scaduto! Riscrivi il comando!`,
			// Content
			PURGE_CONFIRMATION: (members) => `${e.warn} | ${members} gli utenti verranno espulsi! Per confermare scrivi, confermo \`confermo\`!`,
			PURGE_SUCCESS: (members) => `${e.success} | ${members} utente espulso !`,

			/* DASHBOARD */

			FIRST_LOGIN: (username) => `${username} connesso per la prima volta alla dashboard! :tada:`,
			REGISTERED_FROM: (date) => `Membro dal ${(date ? date : "")}`,
			HELLO: (username) => `Ciao, ${username}`,
			SEARCH_SERVERS: "Ricerca server....",
			SERVERS_LIST: "Lista server",
			SELECTOR: "Selezionatore",
			SERVERS_MANAGEMENT: "SERVER MANAGEMENT",
			ERR_NOT_FOUND: "Oops! Qualcosa è andato storto.",
			ERR_NOT_FOUND_CONTENT: "Non abbiamo trovato la pagina che stai cercando. Nel frattempo, puoi tornare alla dashboard o usare il form di ricerca.",
			ERR_SOMETING_WENT_WRONG: "Oops! Qualcosa è andato storto.",
			ERR_SOMETING_WENT_WRONG_CONTENT: "Stiamo cercando di rimediare. Nel frattempo, puoi tornare alla dashboard o usare il form di ricerca.",
			ERR_NO_SERVER_FOUND: "Nessun server trovato",
			ERR_NO_SERVER_FOUND_CONTENT: "Nessun server da visualizzare. Assicurati di avere effettuato l'accesso e riprova.",
			SERVER_CONF: "Configurazioni",
			CONFIG_HEADINGS: {
				BASIC: "📝 Configurazioni base",
				WELCOME: "👋 Messaggi di bevenuto",
				GOODBYE: "😢 Messaggi di saluto",
				CHANNELS: "🌀 Canali speciali",
				AUTOROLE: "🎖️ Autorole"
			},
			CONFIG_FIELDS: {
				PREFIX: "Prefix",
				LANG: "Language",
				CHANNEL: "Channel",
				MESSAGE: "Message",
				ROLE: "Role",
				WITHIMAGE_WELCOME: "Include a great welcome image",
				WITHIMAGE_GOODBYE: "Include a great goodbye image",
				SUGGESTIONS: "Suggestions",
				MODLOGS: "Moderation logs",
				REPORTS: "Reports",
				FORTNITESHOP: "Fortnite shop"
			},
			ENABLE_MESSAGES: "Abilita messaggi",
			DISABLE_MESSAGES: "Disabilita messaggi",
			ENABLE_AUTOROLE: "Enable autorole",
			DISABLE_AUTOROLE: "Disable autorole",
			SWITCH_LANG: "Passa in inglese",
			FIRST_LEAD_MONEY: "1st of the ranking \"Credits\"",
			FIRST_LEAD_LEVEL: "1st of the ranking \"Level\"",
			FIRST_LEAD_REP: "1st of the ranking \"Reputation\"",
			VIEW_PUB_PROFILE: "Guarda il mio profilo",
			SETTINGS_HEADINGS: [
				"🇬🇧 Language",
				"Logout"
			]

        }
    }

    /**
	 * The method to get language strings
	 * @param {string} term The string or function to look up
	 * @param {...*} args Any arguments to pass to the lookup
	 * @returns {string|Function}
	 */
	get(term, ...args) {
		//if (!this.enabled && this !== this.store.default) return this.store.default.get(term, ...args);
		const value = this.language[term];
		/* eslint-disable new-cap */
		switch (typeof value) {
			case 'function': return value(...args);
			default: return value;
		}
	}

	getLang(){
		return lang;
	}

	printDate(pdate, isLongDate){
        let monthNames = [
            "Gennaio", "Febbraio", "Marzo",
            "Aprile", "Maggio", "Giugno", "Luglio",
            "Agosto", "Settembre", "Ottobre",
            "Novembre", "Dicembre"
          ];
        
        let day = pdate.getDate();
        let monthIndex = pdate.getMonth();
        let year = pdate.getFullYear();
        let hour = pdate.getHours() < 10 ? "0" + pdate.getHours() : pdate.getHours();
        let minute = pdate.getMinutes() < 10 ? "0" + pdate.getMinutes() : pdate.getMinutes();

        let thedate = (isLongDate) ? day + " " + monthNames[monthIndex] + " " + year + " at " + hour + "h" + minute 
        : day + " " + monthNames[monthIndex] + " " + year
        return thedate;
	}
	
	/**
	 * Parse ms and returns a string
	 * @param {number} milliseconds The amount of milliseconds
	 * @returns The parsed milliseconds
	 */
	convertMs(milliseconds){
		let roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
		let days = roundTowardsZero(milliseconds / 86400000),
		hours = roundTowardsZero(milliseconds / 3600000) % 24,
		minutes = roundTowardsZero(milliseconds / 60000) % 60,
		seconds = roundTowardsZero(milliseconds / 1000) % 60;
		if(seconds === 0){
			seconds++;
		}
		let isDays = days > 0,
		isHours = hours > 0,
		isMinutes = minutes > 0;
		let pattern = 
		(!isDays ? "" : (isMinutes || isHours) ? "{days} days, " : "{days} days and ")+
		(!isHours ? "" : (isMinutes) ? "{hours} hours, " : "{hours} hours and ")+
		(!isMinutes ? "" : "{minutes} minutes and ")+
		("{seconds} seconds");
		let sentence = pattern
			.replace("{duration}", pattern)
			.replace("{days}", days)
			.replace("{hours}", hours)
			.replace("{minutes}", minutes)
			.replace("{seconds}", seconds);
		return sentence;
	}

}
