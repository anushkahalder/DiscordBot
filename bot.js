const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// Loops through all files in the folder and finds the right file
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

// Shows in terminal that bot is online
client.once('ready', () => {
    console.log('Chicha in the house!');
});

client.on('message', message =>{
    // It will return if provided command is without '!' or bot is the author
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Ping Command
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    // Embed Command
    if(command === 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
    }

    // Play Command
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    else if(command === 'bajao'){
        client.commands.get('bajao').execute(message, args);
    }
    else if(command === 'ruk'){
        client.commands.get('ruk').execute(message, args);
    }
});

// client.login('ODIzNDI1NDYxMzM4MTEyMDAw.YFgouA.-gg-HV6pPUyBI_Gs8BUFvuLW_Jo');

//mera
client.login('ODIzNDI2MjUwNzMwMzczMTQw.YFgpdA.z7oy5i8ApcFC0GYNlvs_viY_kyA');

 
// client.login('ODIzNDI2MjUwNzMwMzczMTQw.YFgpdA.z7oy5i8ApcFC0GYNlvs_viY_kyA');




 