# Commands  
Here's the list of Atlanta commands. This one contains more than **90 commands** in **8 categories**!  

#### Contents of the table  
**Name**: The name of the command  
**Description**: A brief explanation of the purpose of the command  
**Usage**: The arguments/options that the command takes in parameters  
**Cooldown**: The time that must elapse between each command so that it can be executed again by the user

### Administration (20 commands)

| Name                | Description                                                   | Usage                        | Cooldown   |
| ------------------- | ------------------------------------------------------------- | ---------------------------- | ---------- |
| **addcommand**      | Aggiungi un comando!                                          | addcommand [nome] [risposta] | 3 seconds  |
| **addemote**        | Add an emoji to the server!                                   | addemote [URL] [name]        | 5 seconds  |
| **automod**         | Enables or disables automatic deletion of discord invitations | automod [on/off] (#channel)  | 5 seconds  |
| **autorole**        | Enable or disable the autorole on the server!                 | autorole [on/off] (role)     | 5 seconds  |
| **backup**          | Manage your server backups in an ergonomic and efficient way! | backup [create/load/infos]   | 30 seconds |
| **configuration**   | Configurazione Server                                         | configuration                | 3 seconds  |
| **delcommand**      | Rimuovi un comando personalizzato!                            | delcommand [nome-comando]    | 3 seconds  |
| **deletemod**       | Enables or disables the auto deletion of moderation commands! | deletemod [on/off]           | 3 seconds  |
| **fortniteshop**    | Displays the fortnite items shop!                             | fortniteshop                 | 1 seconds  |
| **goodbye**         | Send a goodbye message to a pre-defined channel!              | goodbye                      | 3 seconds  |
| **ignore**          | Disabilita i comandi nel canale selezionato                   | ignore [#canale]             | 3 seconds  |
| **purge**           | Kick out inactive members!                                    | purge [days]                 | 5 seconds  |
| **robbery**         | Lavora e guadagna!                                            | work                         | 3 seconds  |
| **setfortniteshop** | Definisci un canalel!                                         | setfortniteshop (#channel)   | 5 seconds  |
| **setlang**         | Cambia la lingua del server!                                  | setlang [Italiano/English]   | 3 seconds  |
| **setprefix**       | Changes the server prefix                                     | setprefix [prefix]           | 3 seconds  |
| **setsuggests**     | Seleziona canale suggerimenti!                                | setsuggests (#canale)        | 3 seconds  |
| **slowmode**        | Define a cooldown in a channel                                | slowmode [#channel] (time)   | 3 seconds  |
| **stats**           | Mostra lo stato del bot!                                      | stats                        | 3 seconds  |
| **welcome**         | Send a welcome message to a pre-defined channel!              | welcome                      | 3 seconds  |

### Images (16 commands)

| Name              | Description                                               | Usage                      | Cooldown  |
| ----------------- | --------------------------------------------------------- | -------------------------- | --------- |
| **avatar**        | Displays the avatar of the mentionned member              | avatar (@member)           | 5 seconds |
| **captcha**       | Generates a "triggered" image using the Nekobot API       | captcha (@member)          | 5 seconds |
| **clyde**         | Generates a "clyde" image using the Nekobot API           | clyde [text]               | 5 seconds |
| **facepalm**      |                                                           |                            | 5 seconds |
| **fire**          | Generates a "fire" image using the Améthyste API          | fire (@member)             | 5 seconds |
| **jail**          | Generates a "jail" image using the Améthyste API          | jail (@member)             | 5 seconds |
| **love**          | Generates a "love" image using the Nekobot API            | love [@user1] (@user2)     | 5 seconds |
| **phcomment**     | Generates a "phcomment" image using the Nekobot API       | phcomment (@member) (text) | 5 seconds |
| **qrcode**        | Generates a QR Code with your text!                       | qrcode [text]              | 3 seconds |
| **rip**           | Generates a "rip" image using the Améthyste API           | rip (@member)              | 5 seconds |
| **scary**         | Generates a "scary" image using the Améthyste API         | scary (@member)            | 5 seconds |
| **tobecontinued** | Generates a "tobecontinued" image using the Améthyste API | tobecontinued (@member)    | 5 seconds |
| **triggered**     | Generates a "triggered" image using the Améthyste API     | triggered (@member)        | 5 seconds |
| **tweet**         | Generate a tweet of a person of your choice on Twitter!   | tweet [@twitter] [text]    | 5 seconds |
| **wanted**        | Generates a "wanted" image using the Améthyste API        | wanted (@member)           | 5 seconds |
| **wasted**        | Generates a "wasted" image using the Améthyste API        | wasted (@member)           | 5 seconds |

### Moderation (14 commands)

| Name                | Description                                                                             | Usage                                                                   | Cooldown  |
| ------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------- |
| **announcement**    | Manda un annuncio nel canale!                                                           | announcement [testo]                                                    | 3 seconds |
| **ban**             | Banished the mentioned member!                                                          | ban [@user] (reason)                                                    | 3 seconds |
| **checkinvites**    | Check if members do not have an ad for their Discord server in their presence!          | checkinvites                                                            | 3 seconds |
| **clear-sanctions** | Deletes all sanctions of a member!                                                      | clear-sanctions [@member]                                               | 3 seconds |
| **cls**             | Cancella messaggi!                                                                      | clear[numero di messaggi] (@member)                                     | 3 seconds |
| **giveaway**        | Gestisci i tuoi giveaway                                                                | giveaway [create/reroll/delete/end] (tempo) (numero vincitori) (premio) | 5 seconds |
| **kick**            | Kick out the mentioned member!                                                          | kick [@user] (reason)                                                   | 3 seconds |
| **mention-role**    | Mention a role and then disable the possibility of mentioning                           | mentionrole [name]                                                      | 3 seconds |
| **mute**            | Prevents the member from sending messages and connecting by voice for a period of time! | mute [@member] [time]                                                   | 3 seconds |
| **sanctions**       | Displays the list of infractions committed by a member!                                 | sanctions [@member]                                                     | 3 seconds |
| **setwarns**        | Define the sanctions that members will get after a certain number of warns!             | setwarns [kick/ban] [number/reset]                                      | 3 seconds |
| **unban**           | Unban the user from the server!                                                         | unban [userID/user#0000]                                                | 3 seconds |
| **unmute**          | Unmute the mentioned member!                                                            | unmute [@member]                                                        | 3 seconds |
| **warn**            | Warn a member in private messages                                                       | warn [@member] [reason]                                                 | 3 seconds |

### Economy (14 commands)

| Name             | Description                                                         | Usage                            | Cooldown   |
| ---------------- | ------------------------------------------------------------------- | -------------------------------- | ---------- |
| **achievements** | Displays the list of all the achievements!                          | achievements                     | 1 seconds  |
| **birthdate**    | Set your birthday date (which will appear on your profile)          | birthdate (date)                 | 1 seconds  |
| **deposit**      | Deposita una somma in banca                                         | deposit [cifra]                  | 1 seconds  |
| **divorce**      | Divorzia con la persona con cui sei sposato!                        | divorce                          | 3 seconds  |
| **leaderboard**  | Mostra gli utenti con più crediti, livelli o reputazione!           | leaderboard [rep/levels/credits] | 5 seconds  |
| **money**        | Mostra crediti disponibili                                          | money (@member)                  | 1 seconds  |
| **pay**          | Paga un membro con dei crediti!                                     | pay [@user#0000] [somma]         | 10 seconds |
| **profile**      | Mostra il profilo dell'utente mensionato (o l'autore del messaggio) | profile (@user#0000)             | 3 seconds  |
| **rep**          | Dai punti rispetto ad un utente!                                    | rep [@user#0000]                 | 3 seconds  |
| **rob**          | Ruba ad un membro!                                                  | rob [@membre] [amount]           | 1 seconds  |
| **setbio**       |                                                                     |                                  | 5 seconds  |
| **wedding**      | Marry the person of your choice!                                    | wedding [@user#0000]             | 10 seconds |
| **withdraw**     | Ritira crediti!                                                     | withdraw [somma]                 | 1 seconds  |
| **work**         | Lavora e guadagna!                                                  | work                             | 3 seconds  |

### General (12 commands)

| Name            | Description                                                                      | Usage                          | Cooldown  |
| --------------- | -------------------------------------------------------------------------------- | ------------------------------ | --------- |
| **calc**        | Calcolatore in grado di eseguire calcoli complessi e convertire unità di misura! | calc [calculation]             | 1 seconds |
| **hastebin**    | Upload your text on hastebin !                                                   | hastebin [text]                | 5 seconds |
| **help**        | Mostra i comandi e le rispettive funzionalità                                    | help (comando)                 | 5 seconds |
| **permissions** | Mostra i permessi di un utente                                                   | permissions (@member)          | 1 seconds |
| **ping**        | Displays bot latency                                                             | ping                           | 1 seconds |
| **remindme**    | Definisci qualcosa da ricordare!                                                 | remindme [promemoria]          | 3 seconds |
| **serverinfo**  | Mostra informazioni riguardanti il server!                                       | serverinfo [ID/Name]           | 3 seconds |
| **setafk**      | Vai AFK                                                                          | setafk [motivo]                | 3 seconds |
| **shorturl**    | Shorten your link!                                                               | shorturl [url]                 | 5 seconds |
| **suggest**     | Invia un suggerimento!                                                           | suggest [idea]                 | 5 seconds |
| **translate**   | I'm translating your text!                                                       | translate [language] [message] | 8 seconds |
| **userinfo**    | Mostra le informazioni utente!                                                   | userinfo (@user/userID)        | 5 seconds |

### Fun (11 commands)

| Name          | Description                                                                                   | Usage                           | Cooldown  |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------- | --------- |
| **8ball**     | I'm telling you the truth!                                                                    | 8ball [question]                | 3 seconds |
| **ascii**     | Turn your text into ascii characters!                                                         | ascii [text]                    | 5 seconds |
| **findwords** | Inizia una partita di indovina la parola!                                                     | findwords                       | 5 seconds |
| **flip**      | I roll the dice for you!                                                                      | flip                            | 1 seconds |
| **gunfight**  | Casino!                                                                                       | slots [cifra]                   | 3 seconds |
| **joke**      | Displays a joke in French                                                                     | joke                            | 3 seconds |
| **lmg**       | Returns a link to lmgtfy.com                                                                  | lmg [question]                  | 1 seconds |
| **lovecalc**  | How much love is there between two people? *This is a fun command, not to be taken seriously* | lovecalc [@member1] (@member2)  | 1 seconds |
| **number**    | Find the number I chose!                                                                      | number                          | 5 seconds |
| **random**    | Randomly pick one of the choices you give me!                                                 | random [choice1/choice2/etc...] | 5 seconds |
| **slots**     | Casino!                                                                                       | slots [cifra]                   | 3 seconds |

### Owner (5 commands)

| Name             | Description                                                          | Usage                     | Cooldown  |
| ---------------- | -------------------------------------------------------------------- | ------------------------- | --------- |
| **eval**         | Executes the code                                                    | eval [code]               | 3 seconds |
| **getconf**      | Displays the configuration of a server                               | getconf [server ID]       | 3 seconds |
| **getinvite**    | Genera un invito da inviare ai tuoi amici per farli unire al server. | getinvite [ID/Name]       | 3 seconds |
| **reload**       | Ricarica un comando!                                                 | reload [nome del comando] | 1 seconds |
| **servers-list** | Displays the list of the servers of the bot!                         | servers-list              | 5 seconds |

### Musica (4 commands)

| Name      | Description                 | Usage        | Cooldown  |
| --------- | --------------------------- | ------------ | --------- |
| **play**  | Play music!                 | play [title] | 5 seconds |
| **queue** | Mostra la coda              | queue        | 5 seconds |
| **skip**  | Play the next song!         | skip         | 5 seconds |
| **stop**  | Ferma la musica in ascolto! | stop         | 5 seconds |

