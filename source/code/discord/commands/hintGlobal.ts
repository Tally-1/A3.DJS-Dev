// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import INIparser from "../../api/models/classes/INIparser";
import BotX from "../models/classes/botX";

const command = new SlashCommandBuilder()
.setName('hint-global')
.setDescription('Sends a hint-message to all players.')
.setDefaultMemberPermissions(0)
.addStringOption(option=>option
    .setName("text")
    .setDescription("text:")
    .setRequired(true)
    .setMaxLength(200)
    .setMinLength(10))
    


module.exports = {
	data: command,
	async execute(interaction:ChatInputCommandInteraction) {
        const text  = (interaction.options.get("text")?.value);
        const valid = (text !== undefined && typeof text === "string");
        
        
        if(valid){

            const {time, requestId,sender, bot} = BotX.interactionBaseData(interaction);
            const target = "";
            const request = [target, sender, requestId, text] as [string, string, string, string];

            INIparser.sendCommand(request, "hint-global", bot.A3DJS_folder);
            await bot.commandResponseReply(interaction, requestId, time);
            
        }
        else{
            interaction.reply("Message could not be sent...");
        }
		
	},
};