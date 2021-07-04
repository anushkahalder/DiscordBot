module.exports = {
    name: 'ping',
    description: 'This is a ping command!',
    execute(message, args){

        if(message.member.roles.cache.has('823857828137009162')){
            message.channel.send('Ra o betaji, Welcome!');
        }
        else{
            message.channel.send('I see you are not a Bigmaan, let me take care of it :v:')
            message.member.roles.add('823857828137009162').catch(console.error);
        }
    }
}