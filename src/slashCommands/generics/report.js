module.exports = {
    name: "report",
    description: "Signale un utilisateur.",
    owner: false,
    "options": [
        {
            "type": 6,
            "name": "membre",
            "description": "Le membre du serveur",
            "required": true
        },
        {
            "type": 3,
            "name": "reason",
            "description": "La raison du report",
            "required": true,
            maxLength: 300
        }
    ],

    run: async (client, interaction) => {
        await interaction.guild.channels.cache.get("999012459325169836").send({
            embeds: [
                {
                    title: "Report",
                    color: 0xFF0000,
                    timestamp: new Date(),
                    fields: [
                        {
                            name: "Membre",
                            value: `${interaction.options.getMember("membre").user.tag}`,
                            inline: true
                        },
                        {
                            name: "Raison",
                            value: `${interaction.options.getString("reason")}`,
                            inline: true
                        },
                        {
                            name: "Raporteur",
                            value: `${interaction.user.tag}`,
                            inline: true
                        },
                        {
                            name: "Channel",
                            value: `${interaction.channel.name}`,
                            inline: true
                        },
                        {
                            name: "Lien du dernier message",
                            value: `[Message](https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.channel.lastMessageId})`,
                        }
                    ]
                }
            ]
        }).then(() => {
            interaction.reply({
                content: "Votre report a etait transmis au staff.",
                ephemeral: true
            })
        })
    }
}