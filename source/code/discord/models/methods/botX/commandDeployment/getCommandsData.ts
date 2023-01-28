// An slightly edited version of code found at: 
// https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands

import path from "path";
import fs from "fs";

export default
function getCommandsData(){
    const commands = [];
    const commandPath = path.join(__dirname,"..", "..", "..", "..", 'commands');
    const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));
    
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const command = require(`${commandPath}/${file}`);
        if(command){
            commands.push(command.data.toJSON());
        }
        
    };

    return commands;
};