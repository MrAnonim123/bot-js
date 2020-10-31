const Discord = module.require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return;
  const ms = require("ms");
  let amount = 40;
  let timeout = 86400000 / 2;
  let time = Date.now() - db.fetch(`daily_${message.author.id}`);
  let time1 = moment(time).format("hh:mm:ss");
  let time2 = parseInt(time1.slice(0, -6));
  let hour = time2 - 1;
  let minutes = 60 - parseInt(time1.slice(3, -3));
  let seconds = 60 - parseInt(time1.slice(6));
  let time3 = time2 + time1.slice(2);

  let daily = db.fetch(`daily_${message.author.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));

    message.channel.send(
      `Вы уже получили свои ежедневные коиинов, подождите  **${hour}ч ${minutes}м ${seconds}с**!`
    );
  } else {
    let embed = new Discord.RichEmbed()
      .setDescription(
        `Ежедневные коинов`
      )
      .setColor("RANDOM")
      .addField(
        `**Вы получили 40 ежедневных коинов!**`,
        `*Зарабатывайте коинов за активность!*`
      );

    message.channel.send(embed);
    db.add(`money_${message.author.id}`, amount);
    db.set(`daily_${message.author.id}`, Date.now());
  }
};
module.exports.help = {
  name: "daily"
};
