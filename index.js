const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

let config = require('./data.json');
 
let token = config.token;
let prefix = config.prefix;

fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
   jsfiles.forEach((f,i) =>{       
    let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        client.commands.set(props.help.name,props);
    });
});
client.on('ready', () => {
    console.log(`Запустился бот ${client.user.username}`);
    client.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    });
let db = require('quick.db')
client.on('message', async message => {

db.add(`money_${message.author.id}`,1)
db.add(`mes_${message.author.id}`, 1);
db.add(`xp_${message.author.id}`, 1);
  
 
     let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(client,message,args);
    client.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    client.uId = message.author.id;
         
       if(message.channel.type === 'dm') return

    if(message.content.startsWith(prefix + "eval")){
       if (
        message.author.id === "524348995829497859" || message.author.id === "383176214854238210"
      ) {
        const args = message.content.slice(prefix.length).split(" ");
        try {
          var code = args.slice(1).join(" ");
          var evaled = eval(code);
          let hrStart = process.hrtime();
          let hrDiff = process.hrtime(hrStart);
          let type = typeof evaled;
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
  
          message.channel.send(
            `
    \`\`\`fix
    Output type: ${type}
    Execution time: ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ""}${hrDiff[1] /
              1000000}ms
    Output:
    \`\`\`` +
              `
    \`\`\`js
    ${clean(evaled)}\`\`\``
          );
        } catch (err) {
          message.channel.sendMessage(
            `\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``
          );
        }
        
      }
      function clean(text) {
        if (typeof text === "string")
          return text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203));
        else return text;
      }
    }
    
  if (message.content.startsWith(prefix + "marry")) {
     if (db.fetch(`marry_${message.guild.id}_${message.author.id}`))
      return message.channel.send(
        `Вы уже состоите в браке с <@${db.fetch(
          `marry_${message.guild.id}_${message.author.id}`
        )}>`
      );
    if (db.fetch(`nep_${message.guild.id}_${message.author.id}`))
      return message.channel.send(`Вы уже подали запрос на брак!`);
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send(`Вы не указали пользователя для брака!`);
    if (db.fetch(`marry_${message.guild.id}_${user.id}`))
      return message.channel.send(
        `Пользователь уже состоит в браке с <@${db.fetch(
          `marry_${message.guild.id}_${user.id}`
        )}>`
      );
    if (user.id === message.author.id)
      return message.channel.send(
        "Вы не можете подать запрос о браке самому себе!"
      );
    db.set(`nep_${message.guild.id}_${message.author.id}`, user.id);
    db.set(`nep_${message.guild.id}_${user.id}`, message.author.id);

    db.set(`user1_${user.id}`, message.author.id);
    db.set(`user2_${user.id}`, user.id);

     let embed = new Discord.RichEmbed()
       .setDescription(
         `Пользователь **${message.author.tag}** подал заявку на брак на сервере **${message.guild.name}**.Для соглашения/отказа напишите в чате .accept @user либо .deny @user `
       )
       .setAuthor("Заявка за брак");
     user.send(embed);
    message.channel.send(`${user}, ты выйдешь за <@${message.author.id}>?`)
  }
  if (message.content.startsWith(prefix + "accept")) {

    let user = message.mentions.users.first();
    if (!user) return message.channel.send(`Вы не указали пользователя!`);
    if (db.fetch(`marry_${message.guild.id}_${message.author.id}`))
      return message.channel.send(
        `Вы уже состоите в браке с <@${db.fetch(
          `marry_${message.guild.id}_${message.author.id}`
        )}>`
      );
    if (
      db.fetch(`nep_${message.guild.id}_${user.id}`) &&
      db.fetch(`nep_${message.guild.id}_${message.author.id}`)
    ) {
      if (db.fetch(`user1_${user.id}`) === message.author.id)
        if (user.id === message.author.id)
        return message.channel.send(
          "Для принятия запроса нужно одобрение второй половины!"
        );

      db.set(`marry_${message.guild.id}_${message.author.id}`, user.id);
      db.set(`marry_${message.guild.id}_${user.id}`, message.author.id);
      if (!db.fetch(`ring_${user.id}`)) db.set(`ring_${user.id}`, 1);
      if (!db.fetch(`ring_${message.author.id}`))
        db.set(`ring_${message.author.id}`, 1);

      if (db.fetch(`ring_${message.author.id}`) > db.fetch(`ring_${user.id}`)) {
        db.set(`ring_${user.id}`, db.fetch(`ring_${message.author.id}`));
      } else if (
        db.fetch(`ring_${user.id}`) < db.fetch(`ring_${message.author.id}`)
      ) {
        db.set(`ring_${message.author.id}`, db.fetch(`ring_${user.id}`));
      }

      db.delete(`nep_${message.guild.id}_${message.author.id}`);
      db.delete(`nep_${message.guild.id}_${user.id}`);
      message.channel.send("Вы успешно приняли заявку,теперь вы муж и жена!");
      message.member.addRole("770432967352909844")
          message.mentions.members.first().addRole("770432967352909844")
    } else {
      message.channel.send("Вы не подавали заявку на брак!");
    }
  }
     if (message.content.startsWith(prefix + "divorce")) {
       if (db.fetch(`black_${message.author.id}`)) {
         message.channel.send("Вы находитель в чёрном списке!");
        return;
       }
       let user = message.mentions.users.first();
       if (!user)
         if (user.id === message.author.id)
        return message.channel.send(`Вы не указали пользователя для развода!`);
       if (
         db.fetch(`marry_${message.guild.id}_${user.id}`) === message.author.id &&
         db.fetch(`marry_${message.guild.id}_${message.author.id}`)
       ) {
         db.delete(`marry_${message.guild.id}_${message.author.id}`);
         db.delete(`marry_${message.guild.id}_${user.id}`);
         message.channel.send(`Вы успешно развелись с ${user}`);
           message.member.removeRole("770432967352909844")
          message.mentions.members.first().removeRole("770432967352909844")
       }
  }
  if (message.content.startsWith(prefix + "deny")) {
    if (db.fetch(`black_${message.author.id}`)) {
      message.channel.send("Вы находитель в чёрном списке!");
      return;
    }
    let user = message.mentions.users.first();
    if (!user) return message.channel.send(`Вы не указали пользователя!`);
    if (db.fetch(`marry_${message.guild.id}_${message.author.id}`))
      return message.channel.send(
        `Вы уже состоите в браке с <@${db.fetch(
          `marry_${message.guild.id}_${message.author.id}`
        )}>`
      );
    if (user.id === message.author.id)
    if (
      db.fetch(`nep_${message.guild.id}_${user.id}`) &&
      db.fetch(`nep_${message.guild.id}_${message.author.id}`)
    ) {
      if (db.fetch(`user1_${user.id}`) === message.author.id)
        return message.channel.send(
          "Для отклонения запроса нужно одобрение второй половины!"
        );
      db.delete(`nep_${message.guild.id}_${message.author.id}`);
      db.delete(`nep_${message.guild.id}_${user.id}`);

      db.delete(`user1_${user.id}`);
      db.delete(`user2_${user.id}`);

      message.channel.send("Вы успешно отклонили заявку о браке!");
    } else {
      message.channel.send("Вы не подавали заявку на брак!");
    }
  }
 
})
             });

client.login(token);

client.on('ready', () => {
let math = require('mathjs')
 const activities_list = [
`.`,
   `PornHub.com`
];

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setPresence({
          game:{
            name:activities_list[index],
            type:"WATCHING"
          }
        }); 
    }, 10000);
});

let createPrivateRoom = require("./events/createPrivateRoom.js");
client.on("voiceStateUpdate",(oldMember,newMember)=>{
    createPrivateRoom(oldMember,newMember)
})


client.on('message', async message => {
  let db = require('quick.db')
   let user = message.author
  let lvl = `${+parseInt(db.fetch(`xp_${message.author.id}`)/500)}`
  if(db.fetch(`xp_${message.author.id}`)%500 ===0) {   
user.send(`Вы достигли ${lvl} уровень! На сервере ${message.guild.name}`)
} 
})
