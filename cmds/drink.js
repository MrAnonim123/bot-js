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
  
const drink = ["https://images-ext-2.discordapp.net/external/f-Ww4im1ffb64m30wjbvd0rNgWymd0eZqs0R56XGEo4/https/media.giphy.com/media/NSqNZRkKShyKtedi0c/giphy.gif","https://images-ext-2.discordapp.net/external/RMv__8Ibsi3R0Wav7SMX-28-qzV7AoWcs1MQG7WMz2c/https/images-ext-2.discordapp.net/external/706SsJVpEv-CFlyVgWPFYxaNslniqrgjbe-U4oTbbE8/https/media.giphy.com/media/1xlqPePKvCM3xVkWet/giphy.gif","https://images-ext-2.discordapp.net/external/up3oNZpGHWUWKhT2VxEkVMHz-Q2fWZGk05Ga0lEdF6c/https/images-ext-2.discordapp.net/external/_krNiYU3nnx5Hvd6q88Rr2L-RqAHLbx-6oCFYTQOsEs/https/media.giphy.com/media/9rlYebzurMAXNaBGUO/giphy.gif","https://images-ext-2.discordapp.net/external/qZFQddrwwIBoJmTJT5FcxVfWhQ5Hh49t684iL56y1KE/https/media.giphy.com/media/55ma8eHi4YPCz6IZZO/giphy.gif","https://images-ext-2.discordapp.net/external/SAtXYWD6IStUWGh2PeokXs9dkRZ92s9DsjUpo-0h4vY/https/images-ext-1.discordapp.net/external/3KMHdggANQZRcfXBuu30ewCmHSJjQ9KxRfTHJhkrZmg/https/media.giphy.com/media/eeLJdyAGPjnChKSlhu/giphy.gif","https://images-ext-1.discordapp.net/external/pqOAMnz_uVkNXoVBBluVdc-_zt9gb_Jp8d5DvfNl9_A/https/media.giphy.com/media/1zlE7BBo7BuwpKfA4Z/giphy.gif","https://images-ext-2.discordapp.net/external/UZzYkgT15hTuvpwNFZjBCZ2RIwmIzVOmZ3s5D72oz7s/https/media.giphy.com/media/1BfhcYJtmPsM81JaRR/giphy.gif","https://gifki.info/uploads/posts/2017-04/1491154258_2199-pyanica.gif","https://imagecdn3.luxnet.ua/tv24/resources/photos/news/201706/828275_1731767.gif?201706172505","https://thumbs.gfycat.com/HarmfulChubbyArcticfox-size_restricted.gif","https://i.gifer.com/9xR.gif","https://mtdata.ru/u23/photoC7C1/20622337315-0/original.gif","https://ph0.qna.center/storage/photos/79515473633/679118.gif","https://avatars.mds.yandex.net/get-pdb/911433/f32fbdad-4bab-4f17-9fa2-c4762f6a54dc/orig","https://ne-kurim.ru/forum/attachments/2018-06-12-12-04-57-gif.640323/","https://i.gifer.com/2Xe3.gif","http://myfeelings.ru/wp-content/uploads/2019/01/7567565.gif.pagespeed.ce.0h1a25BIg_.gif","https://animashki.info/uploads/posts/2017-03/1489593337_2527-devushka-pet-vodku.gif","https://otvet.imgsmail.ru/download/225988936_ae7c0b7ebf3c41d4379a365c9b0982a6_800.gif","https://69.media.tumblr.com/00e4e6b3f2b96836afcc0949cf752b2f/tumblr_o4cmw4xKnz1sjtac3o1_500.gif"]
const rn = require('random-number')
let r = rn({
        min: 0,
        max: drink.length - 1,
        integer: true
    });
let image5 = drink[r];


let em15 = new Discord.MessageEmbed()
.setAuthor(message.author.username + " " +'ушёл(а) в запой' + " "  )
.setImage(image5)       
.setColor("#2f3136")
 .setFooter(`${p} коинов`)
    message.channel.send(em15)

};
module.exports.help = {
    name: "drink"
};
