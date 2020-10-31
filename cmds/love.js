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
  
const love = ["https://media1.tenor.com/images/06f88667b86a701b1613bbf5fb9205e9/tenor.gif?itemid=13417199","https://media1.tenor.com/images/fdafbad47d6a69cb5d3a90a8b9dff86f/tenor.gif?itemid=4936338","https://media.tenor.com/images/cdf92f97e7386e756f9f183e252650d4/tenor.gif","https://media1.tenor.com/images/906684cf8e854f314252c398c99b3439/tenor.gif?itemid=3532074","https://media1.tenor.com/images/4490d35d5950b90df2b7bccaf4f79922/tenor.gif?itemid=3482786","https://media.tenor.com/images/8dcb92c129d419af60ae0a819c2b2624/tenor.gif","https://cdn.discordapp.com/attachments/554380800565706752/556802030950154261/5a384d4698781b3b.gif","https://cdn.discordapp.com/attachments/554380800565706752/556802138085392385/1ba5334eb0b2315a.gif","https://cdn.discordapp.com/attachments/554380800565706752/556802189176340510/1500be4e37b2ff85.gif","https://cdn.discordapp.com/attachments/554380800565706752/556802245002395657/8e228b65f82c404d.gif","https://cdn.discordapp.com/attachments/554380800565706752/556802715657830400/d2fdc715337689b5.gif","https://cdn.discordapp.com/attachments/554380800565706752/556802807915872288/6639d3a6abd92c62.gif","https://cdn.discordapp.com/attachments/554380800565706752/559011260461482013/b7d35d416e24fbcc.gif","https://cdn.discordapp.com/attachments/554380800565706752/559011009713405963/38ee38b93a5d0ab6.gif","https://cdn.discordapp.com/attachments/554380800565706752/559011009713405963/38ee38b93a5d0ab6.gif","https://cdn.discordapp.com/attachments/554380800565706752/559010673883873304/443a21f91d42c585.gif","https://cdn.discordapp.com/attachments/554380800565706752/559010673883873304/443a21f91d42c585.gif"]
const rn = require('random-number')
if (!message.mentions.users.first()) return message.channel.send("Вы не указали пользователя");
let r = rn({
        min: 0,
        max: love.length - 1,
        integer: true
    });
let image5 = love[r];


let em15 = new Discord.MessageEmbed()
.setAuthor(message.author.username + " " +'любит' + " " + message.mentions.users.first().username + " "+ '❤ \n')
.setImage(image5)      
.setColor("#2f3136")
 .setFooter(`${p} коинов`)
    message.channel.send(em15)

};
module.exports.help = {
    name: "love"
};
