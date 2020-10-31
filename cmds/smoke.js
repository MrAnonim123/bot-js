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
  
const smoke = ["https://images-ext-2.discordapp.net/external/LqnqplRGHJuRIORTYaNf6Iv8RuN1xVe1TT8WkW8Oncs/https/images-ext-2.discordapp.net/external/xcvea5h8P2WkIqd_Z8sf5FyF46SXDgiU72QpcscoBOY/https/78.media.tumblr.com/7746fca41c6782df47d7cd6925adba6f/tumblr_orcpabAWTV1sqhf08o1_500.gif","https://images-ext-1.discordapp.net/external/2g13S4-HJVxW8_bPwup7B5RMXa4p9Rn5GDM9JVI-ZI0/https/i.pinimg.com/originals/10/4b/9e/104b9ea0f2dea93d9374b092b82e1256.gif","https://images-ext-2.discordapp.net/external/fZkhIrJozPMf69hV9esqxdHGrWpvsmLGDNhGdJmu_q8/https/78.media.tumblr.com/6ac2528e3cde0894adb41fbc4e56def0/tumblr_owayv78WNu1vbfbhho1_500.gif?width=443&height=594","https://images-ext-1.discordapp.net/external/v7WXHALxWrlBo-vqKyRKeg0rsJUh_cOv3ctB1hvf2gc/https/78.media.tumblr.com/5bec6027d1c27194e6d3d5863c739d5f/tumblr_ozmfkvy8Pc1urnatuo1_500.gif","https://images-ext-1.discordapp.net/external/5NLK1odP7bF8CTq0MYJ4LhMfmoq_X6aNwoliG9bbDbA/https/thumbs.gfycat.com/SphericalDependentHalibut-small.gif","https://images-ext-2.discordapp.net/external/_6YLD_haMkAKqZJi4WsKgGwB5Dq4Tx0sMx-sWTnWenA/http/s8.favim.com/orig/150926/anime-guy-black-and-white-gif-smoking-Favim.com-3361618.gif","https://images-ext-2.discordapp.net/external/lDAVKIninSLG0L15zWGAUK5BxWV9A8F-L6CuVV0oQvc/https/s3-eu-west-1.amazonaws.com/files.surfory.com/uploads/2015/2/14/54dd05a41f395d0b468b465a/54df5bf31f395daa438b4c8e.gif","https://images-ext-2.discordapp.net/external/VzQi3XqfR0JIDIXP9xm52uq_e0aczCVVdEkCpqiWUDg/http/animeonline.su/uploads/posts/2015-06/1435137244_end.gif","https://images-ext-1.discordapp.net/external/GFn6npaxxjDNJEUgC6l58OeKM_85Dqy-SqFxxZCY45g/http/img0.safereactor.cc/pics/post/anime-gif-Anime-Subete-ga-F-ni-Naru-The-Perfect-Insider-2638766.gif"]
const rn = require('random-number')
let r = rn({
        min: 0,
        max: smoke.length - 1,
        integer: true
    });
let image5 = smoke[r];


let em15 = new Discord.MessageEmbed()
.setAuthor(message.author.username + " " +'курит' + " "  )
.setImage(image5)        
.setColor("#2f3136")
 .setFooter(`${p} коинов`)
    message.channel.send(em15)

};
module.exports.help = {
    name: "smoke"
};
