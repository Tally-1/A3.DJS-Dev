// An slightly edited version of code found at: 
// https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands

import path from "path";
import BotX from "../../../classes/botX";
import fs from "fs";

export default
function registerCommands(this:BotX) {

    const commandsPath = path.join(__dirname,"..", "..", "..", "..", 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) {

            this.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
};