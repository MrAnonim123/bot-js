const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
  
    const db = require('quick.db')
  if(!20) return
 if(isNaN(20)) return 
 if(message.content.includes('-')) return 
 let money = db.fetch(`money_${message.author.id}`)
 if(money < 20) return message.channel.send('У вас не хватает рубинов!')
 db.add(`money_${message.author.id}`,-20)
 let p = -20; 
  
const punch = ["https://images-ext-2.discordapp.net/external/WZ_WXuCOWYHYxhEfpEMikL_To1YJA6Pc3E5aZ2cs7Wg/https/cdn.nekos.life/slap/slap_013.gif","https://images-ext-1.discordapp.net/external/l9pqhWHmLO9-AWoias_4wloB-nE3sueNmLFl6Yp_y38/https/cdn.nekos.life/slap/slap_016.gif","https://images-ext-2.discordapp.net/external/E26WMHWUSfNoCH3Wss0qjXYKfSlPprH0VNtm16G9IMI/https/cdn.nekos.life/slap/slap_011.gif?width=1056&height=594","https://images-ext-1.discordapp.net/external/pi2hFvfUJVOIxu-kiPVgvYNRKavX9xs6802SG_X2Qj8/https/cdn.nekos.life/slap/slap_010.gif","https://images-ext-1.discordapp.net/external/5aE2mhaVhhFJBFFrw5CMfkgra3G61riy1WSDSFnhrt4/https/cdn.nekos.life/slap/slap_001.gif","https://images-ext-1.discordapp.net/external/xMnLVXPNL-w5QAAwnY-iatRZDI7i-TKe3ZYKFNr9Pnc/https/cdn.nekos.life/slap/slap_007.gif","https://images-ext-1.discordapp.net/external/gANIviCAN5XSPPVNnmGsyGK4EtEU8zIqyw8lkpcSeqI/https/cdn.nekos.life/slap/slap_005.gif","https://images-ext-2.discordapp.net/external/4xBLImdBuFsDj4owISC50oT8sq61TJNCp6V9Ydj2Ay0/https/cdn.nekos.life/slap/slap_008.gif","https://images-ext-2.discordapp.net/external/WDMVVCdf7QHulFs3mvazzhDaeRECkJGEUAK-cmz-Eo8/https/cdn.nekos.life/slap/slap_004.gif","https://images-ext-1.discordapp.net/external/_aBAB588RRc5TUXtDaWBFlIOJmZUkaB_dKo88YeJApg/https/cdn.nekos.life/slap/slap_014.gif","https://images-ext-1.discordapp.net/external/ThIdHIn7SzjPNRaQLzRbwFlOIU8Z2VLIJEhAY9geYCQ/https/cdn.nekos.life/slap/slap_003.gif","https://images-ext-2.discordapp.net/external/Z-Hrwci9tjy_uFb2cxN7Fm2BWF-FskDN4FAL0QYJKR4/https/cdn.nekos.life/slap/slap_002.gif","https://images-ext-2.discordapp.net/external/Tk72--f3K_RMI-8yhscQLTjmqCTR1T54W7z5dcdyGIQ/https/cdn.nekos.life/slap/slap_015.gif","https://images-ext-1.discordapp.net/external/cTYJANMdXXtSEwBeioMDC4SG3QUsA8hRLMV2GNc22oE/https/cdn.nekos.life/slap/slap_009.gif","https://images-ext-2.discordapp.net/external/Rye7iTyb7xBDhjVER8M8snJ-AG_NF6XF1fMsETrEP4w/https/cdn.nekos.life/slap/slap_006.gif","https://media.giphy.com/media/83bGzE1mKEpXO/giphy.gif","https://i.gifer.com/JJ1a.gif","http://nibler.ru/uploads/users/2012-04-22/serialov38-kinofilmov-gifki-gifki-smeshnye-gifki-gifki-kote_74764163.gif","https://i.gifer.com/294z.gif"]
const rn = require('random-number')
if (!message.mentions.users.first()) return message.channel.send("Вы не указали пользователя");
let r = rn({
        min: 0,
        max: punch.length - 1,
        integer: true
    });
let image5 = punch[r];


let em15 = new Discord.MessageEmbed()
.setAuthor(message.author.username + " " +'ударил(а)' + " " + message.mentions.users.first().username + " " )
.setImage(image5)       
.setColor("#2f3136")
 .setFooter(`${p} коинов`)
    message.channel.send(em15)

};
module.exports.help = {
    name: "punch"
};
