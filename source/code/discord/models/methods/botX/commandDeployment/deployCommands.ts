// An slightly edited version of code found at: 
// https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands

import { REST, Routes } from "discord.js";
import { genericObject } from "../../../../../api/models/types";
import BotX from "../../../classes/botX";

export default
function deployCommands(this:BotX, commands:genericObject[], rest:REST){
    
    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
    
            // The put method is used to fully refresh all commands in the guild with the current set
            const data = await rest.put(
                Routes.applicationGuildCommands(this.config.botId, this.config.serverId),
                { body: commands },
            ) as unknown as any;
            
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            
            console.error(error);
        }
    })();
    };