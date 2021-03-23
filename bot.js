const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var fs = require('fs');
client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Grand Theft Auto VI" } })
})

client.on("message", message => {
  if (message.content.toLowerCase() === "pingDaddyCoolNL") {
    message.channel.send("De bot staat aan!")
  }

  var content = message.content.toLowerCase()
  const args = message.content.split(' ')

  if (message.content.toLowerCase() === "dwhdgwy29e1223891g123dia") {
    message.delete()
    let embed = new Discord.MessageEmbed()
      .setTitle("Waarschuwing!")
      .setDescription("Deze gebruiker is zojuist de server gejoined met een nieuw discord account, dit kan een alt account zijn!")
      .setColor("RED")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!regel 1") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regel 1:")
      .setDescription("**Niet schelden!**")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!regel 2") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regel 2:")
      .setDescription("**Geen zelfpromo/delen van links, ook niet in DM!**")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!regel 3") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regel 3:")
      .setDescription("**DaddyCoolNL tag is niet toegestaan**")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!regel 4") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regel 4:")
      .setDescription("**Plaats je bericht in het daarvoor bestemde kanaal zodat de server netjes en overzichtelijk blijft voor iedereen**")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!regel 5") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regel 5:")
      .setDescription("**“Traden” kennen we hier niet. Dit gaf in het verleden veel problemen, en is daarom niet toegestaan.**")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!regel 6") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regel 6:")
      .setAuthor('DaddyCoolNL Official Discord Server')
      .setDescription("**Als je vragen hebt, stel deze dan in #❓discord-vragen⛔geen-gta⛔. Gelieve ons niet via DM benaderen!**")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!regel 7") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regel 7:")
      .setDescription("**Profielfoto en/of naam van DaddyCoolNL dragen resulteert in een permanente ban!!**")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!regel 8") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regel 8:")
      .setDescription("**NSFW profielfoto's niet toegestaan. Ook beledigende/belastende/vulgaire/racistische namen niet toegestaan. Graag hier zelf zorg voor dragen.**")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!regel 9") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regel 9:")
      .setDescription("**Neem gezelligheid en bier mee**")
      .setColor("ORANGE")
    message.channel.send(embed)
  }

  if (message.content.toLowerCase() === "!regels") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Regels:")
      .setDescription("Elke regel staat duidelijk in #📌regels, Voor een specifieke regel kun je altijd !regel (nummer) gebruiken")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!invite") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Discord Invite Link:")
      .setDescription("https://discord.gg/jYSkRZHR2D")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!youtube") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Youtube link:")
      .setDescription("https://www.youtube.com/channel/UCqT5-DmDgR1ld6dulxKkGCg")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  process.setMaxListeners(20)
  if (message.content.toLowerCase() === "!help") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Alle Commands:")
      .setAuthor('DaddyCoolNL Official Discord Server')
      .setDescription("Official DaddyCoolNL Discord Bot. Gebruik altijd een ! voordat je het command uitvoert `(!<command>)`")
      .addFields(
        { name: ':hand_splayed: Commands:', value: '`regel 1 t/m 9`, `regels`, `invite`, `youtube`, `prefix`, `werkende glitches`, `verkoopregels`, `beste auto`, `job teleport`, `socials`, `doneer`' },
      )
      .setColor("ORANGE")
    message.channel.send(embed)
  }

  if (message.content.toLowerCase() === "!doneer") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Paypal:")
      .setDescription("https://streamlabs.com/daddycoolnl")
      .setColor("ORANGE")
    message.channel.send(embed)
    let embedd = new Discord.MessageEmbed()
      .setTitle("Ideal:")
      .setDescription("http://tiny.cc/ytktmz")
      .setColor("ORANGE")
    message.channel.send(embedd)
  }
  if (message.content.toLowerCase() === "!socials") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Socials:")
      .setDescription("https://linktr.ee/DaddyCoolNL")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!job teleport") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Job teleport:")
      .setDescription("http://tiny.cc/h08gmz")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!beste auto") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Beste auto:")
      .setDescription("http://tiny.cc/ty8gmz")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase9 === "!verkoopregels") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Verkoopregels:")
      .setDescription("Maximaal 8 auto's per 30 uur verkopen, maar niet meer dan 2 stuks in 2 uur tijd!")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  if (message.content.toLowerCase() === "!werkende glitches") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Alle werkende glitches:")
      .setDescription("http://tiny.cc/9p8gmz")
      .setColor("ORANGE")
    message.channel.send(embed)
  }
  client.on("message", message => {
    if (message.content.toLowerCase() === "!koffie") {
      message.channel.send(":coffee::coffee::coffee::coffee:")
    }

    if (message.content.toLowerCase() === "!bier") {
      message.channel.send(":beers::beers::beers::beers:")
    }
    if (message.channel.id === "734756847638020116") {
      // HIERBOVEN MOET HET ID VAN DE FOTO KANALEN.
      if (message.attachments.size <= 0) {
        message.delete();
      }
    }
    if (message.channel.id === "728928815249883146") {
      // HIERBOVEN MOET HET ID VAN DE FOTO KANALEN.
      if (message.attachments.size <= 0) {
        message.delete();
      }
    }
    if (message.channel.id === "796453832354824221") {
      // HIERBOVEN MOET HET ID VAN DE FOTO KANALEN.
      if (message.attachments.size <= 0) {
        message.delete();
      }
    }
    if (message.channel.id === "796453832354824221") {
      message.react('😂');
      message.react('👍');
      message.react('👎');
    }
    let prefix = ("!")
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.lenght).split(" ");
    let args = cont.slice(1);

    if (msg.startsWith('!VERWIJDER')) {
      async function purge() {
        message.delete();

        if (!message.member.hasPermission("DELETE_MESSAGES")) {
          message.channel.send('Je hebt geen permissie hiervoor');
          return;
        }

        if (isNaN(args[0])) {
          message.channel.send("Je moet een getal toevoegen. \n!purge <getal>");
          return;
        }
        const fetched = await message.channel.messages.fetch({ limit: args[0] });
        console.log(fetched.size + ' messages found, deleting...');

        message.channel.bulkDelete(fetched)
          .catch(error => message.channel.send(`Error: ${error}`));
      }
      purge();

      let embed = new Discord.MessageEmbed()
        .setTitle("Ik heb de berichten verwijderd")
        .setColor("ORANGE")
      message.channel.send(embed)
        .then(msg => {
          msg.delete({ timeout: 4000 /*time unitl delete in milliseconds*/ });
        })
        .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);

    }
  })
})


const serverStats = {
  guildID: '723937891939778621',
  totalUsersID: '724002415774400533',
  memberCountID: '724002414058799417',
  botCountID: '724002412519620648',
};

client.on('guildMemberAdd', member => {
  if (member.guild.id !== serverStats.guildID) return;
  client.channels.cache.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  client.channels.cache.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.cache.filter(m => m.user.bot).size}`);
});

client.on('guildMemberRemove', member => {
  if (member.guild.id !== serverStats.guildID) return;
  client.channels.cache.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  client.channels.cache.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.cache.filter(m => m.user.bot).size}`);

});



client.login(process.env.BOT_TOKEN);
