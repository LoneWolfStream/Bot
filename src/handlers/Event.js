const { readdirSync } = require('fs');

module.exports = (client) => {
    let count = 0;
    readdirSync("./src/events/Client/").forEach(file => {
        if (!file.length) return;
        const event = require(`../events/Client/${file}`);
        client.on(event.name, (...args) => event.run(client, ...args));
        count++;
    });
    console.log(`Client Events Loaded ${count}`, "event");
}