const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
  message.delete()
    let msgping1 = new Date();
    let botping = new Date() - message.createdAt;
    let msgping2 = new Date() - msgping1;
    message.channel.send({
        embed:{
            author:{
                icon_url: '',
                name: 'Loading...'
            },
            color: 0x511ba3
        }
    }).then(
        (msg) => {
            setTimeout(() => {
                msg.edit({
                    embed:{
                        description: `API: \`${Math.floor(client.ping)}\` ms!\nBOT: \`${Math.floor(botping)}\` ms!`,
                        color: 0x511ba3
                    }
                })
            }, 3 * 1000)
           
        })
};
module.exports.help = {
    name: "ping"
};
