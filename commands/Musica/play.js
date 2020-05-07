const Command = require("../../base/Command.js"),
Discord = require("discord.js");
//const ytdl = require('ytdl-core');

class Play extends Command {

    constructor (client) {
        super(client, {
            name: "play",
            description: (language) => language.get("PLAY_DESCRIPTION"),
            usage: (language) => language.get("PLAY_USAGE"),
            examples: (language) => language.get("PLAY_EXAMPLES"),
            dirname: __dirname,
            enabled: true,
            guildOnly: true,
            aliases: [ "joue" ],
            memberPermissions: [],
            botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
            nsfw: false,
            ownerOnly: false,
            cooldown: 5000
        });
    }

async run(message, args, data) {
  
    const youtube = this.client.player.SYA;
    let query = args[0]; //query = url inserito
    
    if(!query){return message.channel.send(message.language.get("PLAY_ERR_NO_NAME"));}//controllo se query è vuoto
    
    let voice = message.member.voice.channel;//voice = voice channel attuale
    if (!voice){return message.channel.send(message.language.get("PLAY_ERR_VOICE_CHANNEL"));} //controllo se voice è vuoto
    
    const isPlaying = this.client.player.isPlaying(message.guild.id); //variabile true/false se è on la musica
    
    var boolPlaylist=false; var boolVideo=false;
    boolPlaylist = query.includes("watch?v="&&"&list=",12);
    if(!boolPlaylist) boolVideo = query.includes("watch?v=");
    if((!boolPlaylist) && (!boolVideo)){return message.channel.send("Non è un video/playlist");}
    //-------------------------------------------------entra qua se è una playlist-------------------------------------------------------------------------
    if (boolPlaylist){ 
    
      const playlist = await youtube.getPlaylist(query);
      if(!playlist){return message.channel.send("Error Playlist")}
      
      const videosObj = await playlist.getVideos();
      if(!videosObj){return message.channel.send("Error VideosPlaylist")}
      
      const videoTesta = await videosObj[0].fetch();
      if(!videoTesta){return message.channel.send("Error FirstVideoPL")}
      
      //controllo player 
      if (!isPlaying){//se nessuna canzone era on
        let song = await this.client.player.play(voice, videoTesta);
        message.channel.send(":arrow_forward: In ascolto: "+videoTesta.title);
        song.queue.on("end", () => {message.channel.send(message.language.get("PLAY_ERR_NO_SONG"));})
        .on("songChanged", (oldSong, newSong) => {message.channel.send(message.language.get("PLAY_SUCCESS", newSong));});

        for (let i = 1; i < videosObj.length; i++) {let video = await videosObj[i].fetch(); let song = await this.client.player.addToQueue(message.guild.id, video);}
        return message.channel.send(":arrow_forward: In coda: "+playlist.title);
        
      }else{//se cera gia una canzone
        let song = await this.client.player.addToQueue(message.guild.id, videoTesta);
        for (let i = 1; i < videosObj.length; i++) { let video = await videosObj[i].fetch(); let song = await this.client.player.addToQueue(message.guild.id, video);}
        return message.channel.send(":arrow_forward: In coda: "+playlist.title);
      }
  //-------------------------------------------------entra qua se è un video-------------------------------------------------------------------------
    }else{
      let video = null;
      video = await youtube.getVideo(query);
      
      //controllo player 
      if (isPlaying) {
        let song = await this.client.player.addToQueue(message.guild.id, video);
        return message.channel.send(":arrow_forward: In coda: "+video.title);
      }else{
        let song = await this.client.player.play(voice, video);
        message.channel.send(":arrow_forward: In ascolto: "+ video.title);
        song.queue.on("end", () => {message.channel.send(message.language.get("PLAY_ERR_NO_SONG"));})
        .on("songChanged", (oldSong, newSong) => {message.channel.send(message.language.get("PLAY_SUCCESS", newSong));});
      }
    }
  }
}

module.exports = Play; 