const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
  try{
    
 const user = message.mentions.users.first()
  if(!args.slice(1).join(" ")) return message.channel.send("Вы не указали причину")
  
   client.channels.get("771817845230272534").send(`<@&768381188544659458>, <@&768471625715810374>`)
  
   const embed = new Discord.RichEmbed()
       .setDescription(
         `Пользователь: **${user.tag}**.\n Причина: **${args.slice(1).join(" ")}**`
       )
       .setAuthor("Была подана новая заявка на бан!")
  .setFooter(`У вас есть 2 часа, чтобы принять/отказать в бане.`)
   client.channels.get("771817845230272534").send(embed).then(msg => {
        msg.react(`✅`)
          .then(() => {
              msg.react(`❌`)
    message.channel.send(`Запрос на бан рассматривается администраторами!`)
 
          
                            const filter = (reaction, user1) =>
                    reaction.emoji.name === `✅` && !user1.bot && msg.guild.members.get(user1.id).hasPermission(["ADMINISTRATOR"]);
                            const filter2 = (reaction, user1) =>
                    reaction.emoji.name === `❌` && !user1.bot && msg.guild.members.get(user1.id).hasPermission(["ADMINISTRATOR"]);
                        const ffilter = msg.createReactionCollector(filter, {
                    time: 120000
                  });
                  const ffilter2 = msg.createReactionCollector(filter2, {
                    time: 140000
                  });
          ffilter.on('collect',()=>{
            msg.delete()
           let embed1 = new Discord.RichEmbed()
           .setAuthor("Бан")
           .setColor("#1be600")
           .setDescription(`Пользователь **${user.tag}** был забанен Администратором **${message.author.tag}** по причине: **${args.slice(1).join(" ")}**`)
             message.guild.members.ban(user.id, args.slice(1).join(" "));
             return msg.channel.send(embed1)
            })
          ffilter2.on('collect',()=>{
            msg.delete()
            let embed2 = new Discord.RichEmbed()
           .setAuthor("Заявка на бан отклонена")
           .setColor("#ff0000")
           .setDescription(`Заявка на бан участника **${user.tag}** была отклонена Администратором **${message.author.tag}**`)
            return msg.channel.send(embed2)
          })
              msg.delete(7200000).then(() => {
                  return message.channel.send('Вы не успели рассмотреть заявку на бан, она была автоматически отклонена')})
        })
        })   
  
}catch(err){
client.channels.get("764540062197088306").send(err)
}
  
  
};
module.exports.help = {
    name: "ban"
};
