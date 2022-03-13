const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});



Client.on("ready", () => {
    console.log("bot connecté");
});

Client.on('guildMemberAdd', member => {
    let welcomeChannel = Client.channels.cache.get('952242070532259890');

    welcomeChannel.send('bienvenue, ' + member.user.tag + ' !');

    member.roles.add('952329378900086795');
});

Client.on('guildMemberRemove', member => {
    let leaveChannel = Client.channels.cache.get('952242119572090960');
    leaveChannel.send('au revoir' + member.user.tag + ' !');
});

const prefix = "+";

//+clear nombre
Client.on("message", message => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");

            if(args[1] == undefined){
                message.reply("veuillez préciser le nombre de message (+clear nombre).");
            }
            else {
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.reply("nombre de méssage mal défini.");
                }
                else {
                    message.channel.bulkDelete(number).then(message => {
                        console.log("supression de" + message.size + "  message réussi!");
                    }).catch(err => {
                        console.log("erreur de clear" + err);
                    });
                }
            }
        }
    }
});











Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //+help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#00FF4D")
            .setTitle("Liste des commandes")
            .setDescription("voici la liste des commandes du bot")
            .setThumbnail("")
            .addField("+help", "affiche la liste des commandes")
            .addField("+ticket", "ouvre un ticket")
            .setTimestamp()
            .setFooter("SS Ultra Gamer#9560");

        message.channel.send({ embeds: [embed]});
    }
});






Client.login("OTQ3OTU3MjQ3OTk5MzY1MTYy.Yh0z_A.MZ0q9uHsonXP4G3SEOGq_pjjXQY")