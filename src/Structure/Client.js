const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");

class LoneWolfBot extends Client{
    constructor() {
        super({
            shards: "auto",
            allowedMentions: {
                everyone: false,
                roles: false,
                users: false
            },
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildIntegrations,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.DirectMessageTyping,

            ],
            partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
        });
        this.commands = new Collection();
        this.slashCommands = new Collection();
        this.config = require("../config.js");
        console.log(this.config.token);
        this.owner = this.config.ownerID;
        this.prefix = this.config.prefix;
        ['SlashCommand', 'Event'].forEach((handler) => {
            require(`../handlers/${handler}`)(this);
        });
    }
    connect() {
        return super.login(this.config.token);
    };
}
module.exports = LoneWolfBot;