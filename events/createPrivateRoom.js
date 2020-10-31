var servers = {};

module.exports = function(oM,nM){
    if(nM.voiceChannel){
        if(!nM.voiceChannel.guild.channels.find(channel=>channel.name == "создать приват")){
            nM.voiceChannel.guild.createChannel("создать приват",{type:'VOICE',
            permissionOverwrites: [{
                id:nM.guild.id,
                deny: ['ADMINISTRATOR','SPEAK'],
                allow: ['CONNECT']
            }]},{reason:"Создан канал для приватных комнат"}).then(()=>{
                nM.voiceChannel.guild.channels.find(channel=>channel.name == "создать приват").setUserLimit(1,"Канал для создания приватных комнат")   
            })
        }
        if(nM.voiceChannel.name == "создать приват"){
            nM.voiceChannel.guild.createChannel("Приват",{type:'VOICE',
            permissionOverwrites: [{
                id:nM.guild.id,
                deny: ['ADMINISTRATOR'],
                allow: ['CONNECT','SPEAK','VIEW_CHANNEL']
            }]}).then((room)=>{
                nM.setVoiceChannel(room.id);
                nM.voiceChannel.guild.channels.find(channel=>channel.id==room.id).overwritePermissions(nM, {
                    KICK_MEMBERS:true,
                    MANAGE_CHANNELS:true   
                  });
                if(!servers[nM.guild.id])servers[nM.guild.id] = {};
                if(!servers[nM.guild.id].voiceMember)servers[nM.guild.id].voiceMember = {};
                if(!servers[nM.guild.id].voiceMember[nM.id])servers[nM.guild.id].voiceMember[nM.id] = {};
                if(!servers[nM.guild.id].voiceMember[nM.id].room)servers[nM.guild.id].voiceMember[nM.id].room = room.id;
                servers[nM.guild.id].voiceMember[nM.id].room = room.id;
                if(!servers[nM.guild.id].voiceMember[nM.id].interval)servers[nM.guild.id].voiceMember[nM.id].interval = {};
                servers[nM.guild.id].voiceMember[nM.id].interval = setInterval(()=>{
                    if(nM.voiceChannel){
                        if(servers[nM.guild.id].voiceMember[nM.id].room != nM.voiceChannel.id){
                            nM.voiceChannel.guild.channels.find(channel=>channel.id == servers[nM.guild.id].voiceMember[nM.id].room).delete();
                            clearInterval(servers[nM.guild.id].voiceMember[nM.id].interval);
                        }
                    }else if(!nM.voiceChannel){
                        clearInterval(servers[nM.guild.id].voiceMember[nM.id].interval);
                    }
                },3000)
            })
        } 
    }
    if(!nM.voiceChannel){
        if(!servers[nM.guild.id])servers[nM.guild.id] = {};
        if(!servers[nM.guild.id].voiceMember)servers[nM.guild.id].voiceMember = {};
        if(!servers[nM.guild.id].voiceMember[nM.id])servers[nM.guild.id].voiceMember[nM.id] = {};
        if(!servers[nM.guild.id].voiceMember[nM.id].room)servers[nM.guild.id].voiceMember[nM.id].room = 0;
        if(!oM.voiceChannel) return;
        if(servers[nM.guild.id].voiceMember[nM.id].room == oM.voiceChannel.id){
            oM.voiceChannel.guild.channels.find(channel=>channel.id == servers[nM.guild.id].voiceMember[nM.id].room).delete();
        }
    }
}
