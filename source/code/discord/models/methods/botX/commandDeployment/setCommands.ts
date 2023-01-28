// An slightly edited version of code found at: 
// https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands

import { Events, REST } from "discord.js";
import BotX from "../../../classes/botX";

export default
function setCommands(this:BotX) {
    
    const rest     = new REST({ version: '10' }).setToken(this.config.token);
    const commands = this.getCommandsData();
    
    this.registerCommands();
    this.deployCommands(commands, rest);

    this.on(Events.InteractionCreate, this.actionHandler);
};
