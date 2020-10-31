const Discord = module.require("discord.js");
const fs = require("fs");
 const superagent = require("superagent");
const prompter = require("discordjs-prompter");
   const db = require('quick.db')
module.exports.run = async (client,message,args) => {
   if(!20) return
  if(isNaN(20)) return 
  if(message.content.includes('-')) return 
  let money = db.fetch(`money_${message.author.id}`)
  if(money < 20) return message.channel.send('У вас не хватает рубинов!')
  db.add(`money_${message.author.id}`,-20)
  let p = -20; 
  
    let error = new Discord.RichEmbed().setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`).setColor(0x600786)
        .setDescription(`Пользователь не найден !`).setThumbnail("http://www.inetkomp.ru/images/stories/error-and-problems.png");
    let ssex = new Discord.RichEmbed()
        .setDescription(`<@${message.author.id}>, самолюбие - не лучшая ваша черта ;)`).setColor(0x600786);
    let user = message.mentions.members.first() || message.guild.member(message.author);
    if (user) {
        if (user.id == message.author.id) { return message.channel.send(ssex) }
        let botsex = new Discord.RichEmbed()
            .setColor(0x600786)
            .setDescription(`${message.author} Бот тебе не секс игрушка ! 🤬`);
        if (user.user.bot) return message.channel.send(botsex);
        const error1 = new Discord.RichEmbed()
            .setAuthor("Error")
            .setDescription("Внимание данная команда временно не доступна !")
            .setColor(0xFF0101);
        try {
            let { body } = await superagent
                .get("https://nekos.life/api/v2/img/kiss");
            let ysex1 = new Discord.RichEmbed()
                .setImage(body.url)
                .setDescription(`<@${message.author.id}> и ${user} поцеловались`)
                .setFooter(`${p} коинов`)
            let nnsex = new Discord.RichEmbed()
                .setColor(0x600786)
                .setAuthor("Реакции: поцелуй - отказ")
                .setDescription(`<@${message.author.id}>,${user} отказался(-ас) от поцелуя с вами.`);
            let sexxx = new Discord.RichEmbed()
                .setColor(0x600786)
                .setAuthor("Реакции: поцелуй")
                .setDescription(`<@${message.author.id}> предложил ${user} поцеловаться`);
            let nsex = new Discord.RichEmbed()
                .setColor(0x600786)
                .setAuthor("Реакции: поцелуй - игнор")
                .setDescription(`<@${message.author.id}>,${user} проигнорировал(-а) ваше предложение.`);
            prompter.reaction(message.channel, {
                question: sexxx,
                userId: user.id,
            })
                .then(response => {
                    if (!response) return message.channel.send(nsex)
                    if (response === 'yes') {

                            message.channel.send(ysex1)
                        }
              
                    if (response === 'no') return message.channel.send(nnsex).then(msg => { setTimeout(function () { msg.delete(); }, 10000); });
                });
        } catch (err) { message.channel.send(error1) }
    } else { message.channel.send(error) }
  
  
};
module.exports.help = {
    name: "kiss"
};
