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
  
const bite = ["http://2.bp.blogspot.com/-5_2BfkFNf0c/U-nf00RWuaI/AAAAAAAAC7k/j9mq1tAcMRs/s1600/tumblr_minin7tsda1s1gi8qo1_500.gif","https://media0.giphy.com/media/iOGJlAYfB7O00/source.gif","https://pa1.narvii.com/6823/7b83c1b97c254cb8684e524adc638f9d8cfef3d5_hq.gif","https://pa1.narvii.com/5664/a4aa8c75750946dc16ae1ec56a49a65614e3abb5_00.gif","https://data.whicdn.com/images/209438772/original.gif","https://pa1.narvii.com/6393/072ca0ea3d0553b615298d49d513a442cef87cf3_hq.gif","https://pa1.narvii.com/6929/2e543cfd8ddb909e2a48564f5c15db59514c260er1-318-216_hq.gif","https://i.gifer.com/70XO.gif"]
const rn = require('random-number')
if (!message.mentions.users.first()) return message.channel.send("Вы не указали пользователя");
let r = rn({
        min: 0,
        max: bite.length - 1,
        integer: true
    });
let image5 = bite[r];


let em15 = new Discord.MessageEmbed()
.setAuthor(message.author.username + " " +'укусил(а)' + " " + message.mentions.users.first().username + " " )
.setImage(image5)   
.setColor("#2f3136")
 .setFooter(`${p} коинов`)
    message.channel.send(em15)

};
module.exports.help = {
    name: "bite"
};
