module.exports = {
    name: "interactionCreate",

    run: async (client, interaction) => {
        console.log(`${client.user.tag} is online!`);
        console.log(interaction.customId);
        const SlashCommands = client.slashCommands.get(interaction.commandName);
        if (!SlashCommands) return;
        try {
            await SlashCommands.run(client, interaction);
        } catch (error) {
            if (interaction.replied) {
                await interaction.editReply({
                    content: `An unexcepted error occured.`
                }).catch(() => { });
            } else {
                await interaction.reply({
                    ephemeral: true,
                    content: `An unexcepted error occured.`
                }).catch(() => { });
            }
            console.error(error);
        };

    }
}