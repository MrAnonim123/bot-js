const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
  const db = require("quick.db");
  const user = message.mentions.users.first() || message.author;
  
let marry = db.fetch(`marry_${message.guild.id}_${user.id}`);
if(marry === null) var marry_user = "Нет" 
else var marry_user = client.users.get(marry)?client.users.get(marry):await client.fetchUser(marry)
if(marry_user === null) var marry_user = "Нет" 
let embed = new Discord.RichEmbed()
.setAuthor(`Profile • ${user.tag}`, user.displayAvatarURL)
.setColor("#2f3136")
.setDescription(` \`\`\`Баланс: ${db.fetch(`money_${user.id}`) || "0"}\`\`\` 
\`\`\`Уровень: ${+parseInt(db.fetch(`xp_${user.id}`)/500)}\`\`\` 
\`\`\`Опыт: ${+db.fetch(`xp_${user.id}`) || 1}\`\`\` 
\`\`\`Чат актив: ${db.fetch(`mes_${user.id}`) +db.fetch(`msg_${user.id}`) || 1}\`\`\` 
\`\`\`Войс актив: 0\`\`\` 
\`\`\`Брак - ${marry_user.tag}\`\`\`
`)
.setTimestamp();
message.channel.send(embed)
};
module.exports.help = {
    name: "p"
};
