require("dotenv").config();

module.exports = {
    token: process.env.TOKEN,  // your bot token
    clientID: process.env.CLIENT_ID || "943608550071103610", // your bot client id
    prefix: process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNERID || "943594744460754994", //your discord id

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}