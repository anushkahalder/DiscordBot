module.exports = {
    name : 'embed',
    description : 'Embeds',
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0f0f3e')
        .setTitle('Kaisan Ba ???')
        .setURL('https://www.google.com')
        .setImage('https://www.licensingmagazine.com/wp-content/uploads/2020/09/Chacha-Chaudhary.jpg')
        .addFields(
            {name: 'Rule 1', value: 'Guthaibaji nhi karne ka'},
            {name: 'Rule 2', value: 'Memes++'}
        )
        
        message.channel.send(newEmbed);
    }
}