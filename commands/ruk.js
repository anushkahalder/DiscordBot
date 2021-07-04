const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'ruk',
    description: 'Tham ja re bande!',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('Voice channel pe ayo rokan lei :slight_smile::slightly_smiling_face:');
        await voiceChannel.leave();
        await message.channel.send('Acha chalta hoon, duwawo me yaad rakhna :smiling_face_with_tear:');
    }
}