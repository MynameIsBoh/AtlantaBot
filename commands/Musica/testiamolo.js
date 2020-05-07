

var obj = {songs: []};
/*
for{get video} => then {video snippet }
*/
obj.songs.push({url: "https://www.youtube.com/watch?v=4-xxxxxxxxx", singer:"xxxxx", title: "xxxx"});
obj.songs.push({url: "https://www.youtube.com/watch?v=4-jBiumYmXk", singer:"adele", title: "hello"});
obj.songs.push({url: "https://www.youtube.com/watch?v=4-yyyyyyyyy", singer:"yyyyy", title: "yyyy"});

//videosObj[i].url videosObj[i].author videosObj[i].title

var filejson = JSON.stringify(obj);
const fs = require('fs');
fs.writeFile('musictriiva.json', filejson, 'utf8',function (err) {if (err) throw err;});