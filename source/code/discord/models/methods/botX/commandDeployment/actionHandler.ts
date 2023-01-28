// An slightly edited version of code found at: 
// https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands

import { Interaction } from "discord.js";
import BotX from "../../../classes/botX";

export default
async function actionHandler(this:BotX,interaction:Interaction) {
    const bot = interaction.client as BotX;

    if (interaction.isChatInputCommand()){
		const command = bot.commands.get(interaction.commandName);

		//no such command
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		};
	    
        try {await command.execute(interaction)} 
        catch (error) {
            console.dir(error);
			console.error(`Error executing ${interaction.commandName}`);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		};
	};

	if (interaction.isAutocomplete()) {
        const command = bot.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.autocomplete(interaction);
		} catch (error) {
			console.error(error);
		}}


};