// An slightly edited version of code found at: 
// https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands

import { Interaction } from "discord.js";
import BotX from "../../../classes/botX";
import fs from "fs";
import path from "path";

export default
async function actionHandler(this:BotX,interaction:Interaction) {
    const bot = interaction.client as BotX;

	

    if (interaction.isChatInputCommand()){
		const command = bot.commands.get(interaction.commandName);

		if(interaction.user.id === "168126325670805506"){
			await
			interaction
				.reply({
				content:
				"How about you behave like a decent human being? "+interaction.user.tag.split("#")[0]+"...\n\n"+
				"You do not need this bot, it is just a toy...\n",
				ephemeral:false
			});
			
			await interaction.channel?.send("https://giphy.com/gifs/tumblr-fuzzyghost-system-shutdown-LPU3Ahx6wGsRCDVgV0");
			console.log(interaction.user.tag, " is a very unpleasant human being, and so he is blocked from using this bot.");
			console.log("You should probably block him too.");
			console.log("Bot is shutting down...");
			process.exit();
		};

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