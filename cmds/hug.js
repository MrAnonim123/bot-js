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
 
   if(message.author.bot) return
  function errmes(mes){
let errembed = new Discord.RichEmbed()
.setAuthor('Ошибка!',message.author.avatarURL)
.setDescription(mes)
.setColor('ff0000')
 message.channel.send(errembed)
}
 if (!message.mentions.users.first())  return errmes(`Вы не указали пользователя 
Использовать: \`\`\.hug user\`\``)
let request = require('request')
request('https://nekos.life/api/v2/img/hug',(err,res,body) =>{
let arr = JSON.parse((body))
let em11 = new Discord.RichEmbed()
.setAuthor(message.author.username + " " +'обнимает' + " " + message.mentions.users.first().username + " " + '🤗')
.setImage(arr.url)
.setColor("#2f3136")
 .setFooter(`${p} коинов`)
    message.channel.send(em11)     
})
};
module.exports.help = {
    name: "hug"
};
