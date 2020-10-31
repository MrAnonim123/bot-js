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
  
const nom = ["https://cdn.weeb.sh/images/HyrRCAdwW.gif","https://cdn.weeb.sh/images/SJPgk1Ywb.gif","https://cdn.weeb.sh/images/BJSf1JFDZ.gif","https://cdn.weeb.sh/images/Bk-k1JKDW.jpeg","https://cdn.weeb.sh/images/SJS-K64R-.gif","https://cdn.weeb.sh/images/Hy_fykFvZ.gif","https://cdn.weeb.sh/images/ryDX1JKwW.gif","https://cdn.weeb.sh/images/SkK0AAdDW.gif","https://cdn.weeb.sh/images/BJ8Wy1Fv-.gif","https://cdn.weeb.sh/images/rk7f1yFDW.gif","https://cdn.weeb.sh/images/SklByktD-.gif",""]
const rn = require('random-number')
if (!message.mentions.users.first()) return message.channel.send("Вы не указали пользователя");
let r = rn({
        min: 0,
        max: nom.length - 1,
        integer: true
    });
let image5 = nom[r];


let em15 = new Discord.MessageEmbed()
.setAuthor(message.author.username + " " +'покормил(а)' + " " + message.mentions.users.first().username + " " )
.setImage(image5)      
.setColor("#2f3136")
 .setFooter(`${p} коинов`)
    message.channel.send(em15)

};
module.exports.help = {
    name: "nom"
};
