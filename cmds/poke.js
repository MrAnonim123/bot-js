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
  
 const poke = ["https://images-ext-1.discordapp.net/external/6uOzw3k5BFsoNAzPcO8jwVBxiVncqvpWy0ItNlAFHoA/https/cdn.nekos.life/poke/poke_001.gif","https://images-ext-1.discordapp.net/external/vVUKNukbGn_32LLvQTnFsVzsoyYg_S1l7pI76D9U4Ok/https/cdn.nekos.life/poke/poke_018.gif","https://images-ext-2.discordapp.net/external/yyGA-Cl53t2nDmv4IPX9sn__ZbuCXll9Qs5vQgaYn4g/https/cdn.nekos.life/poke/poke_013.gif","https://images-ext-1.discordapp.net/external/Ll6yoHsg6s3539kPG2U3JQk1BpjRMsCjGKFabXxfib8/https/cdn.nekos.life/poke/poke_016.gif","https://images-ext-1.discordapp.net/external/OSYtWGiltF7kixa5E2nWw7K3Hebngvd_ox1sYA2H36A/https/cdn.nekos.life/poke/poke_007.gif","https://images-ext-2.discordapp.net/external/dYAalI64dgaKin6Z4jmMn4BmV-RKIrmmEsVI6dqStc4/https/cdn.nekos.life/poke/poke_020.gif","https://images-ext-2.discordapp.net/external/fWcYujyFHlz4_qb3AxmoVvLk8BQebwrPwaEInuS1SCE/https/cdn.nekos.life/poke/poke_006.gif","https://images-ext-2.discordapp.net/external/oRz9GmG3ph7ApBKMyzG7RQa_3sFR6Gp-3xnERbEYFCs/https/cdn.nekos.life/poke/poke_017.gif","https://images-ext-2.discordapp.net/external/OCUFbRcakyxPgtZdBdPUuUbDZaoEl22q8AgzIAzl00U/https/cdn.nekos.life/poke/poke_015.gif","https://images-ext-1.discordapp.net/external/NUWKkR_Eh893A7rOG1WEIMSnzbt6aFzxuU_zxxbKu78/https/cdn.nekos.life/poke/poke_005.gif","https://images-ext-2.discordapp.net/external/0M23iKeUHGfniP7sQkmKi8nEHYk399zB-qJXBbqjPmc/https/cdn.nekos.life/poke/poke_022.gif","https://images-ext-2.discordapp.net/external/6RvMOxQMQExId0nuFpY5W7yps084rIRJlyRPiuWa31I/https/cdn.nekos.life/poke/poke_002.gif","https://images-ext-2.discordapp.net/external/_A7LQaJRg0AHFcoQVmmObaZ3H3ElQmNWdLLiykE5oto/https/cdn.nekos.life/poke/poke_011.gif","https://images-ext-1.discordapp.net/external/fcysUOmOI6W0Al_Vf8a8bgcI8NdPhlP-6k_FCGc6wmM/https/cdn.nekos.life/poke/poke_012.gif","https://images-ext-2.discordapp.net/external/9VFZjOBtOv7jUJzOR2U1UuNAsvjxGneurvnUVgHDTCc/https/cdn.nekos.life/poke/poke_008.gif","https://images-ext-2.discordapp.net/external/O9sMx-7mYrClpK9savJD7zD1N4Y6T1g0Bhtfrg6uf5Q/https/cdn.nekos.life/poke/poke_019.gif"]
const rn = require('random-number')
if (!message.mentions.users.first()) return message.channel.send("Вы не указали пользователя");
let r = rn({
        min: 0,
        max: poke.length - 1,
        integer: true
    });
let image5 = poke[r];


let em15 = new Discord.MessageEmbed()
.setAuthor(message.author.username + " " +'ткнул' + " " + message.mentions.users.first().username + " " )
.setImage(image5)  
.setColor("#2f3136")
 .setFooter(`${p} коинов`)
    message.channel.send(em15)

};
module.exports.help = {
    name: "poke"
};
