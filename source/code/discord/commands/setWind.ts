// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandBuilder } from "discord.js";
import INIparser from "../../api/models/classes/INIparser";
import BotX from "../models/classes/botX";


const command = new SlashCommandBuilder()
.setName('set-wind')
.setDescription('Sets the wind level on your ArmA 3 server')
.setDefaultMemberPermissions(0)
.addIntegerOption(option=>option
    .setName("percentage")
    .setDescription("0 -> 100%")
    .setMaxValue(100)
    .setMinValue(0)
    .setRequired(true))
    

module.exports = {
	data: command,
	async execute(interaction:ChatInputCommandInteraction) {
        const level = interaction.options.get("percentage")?.value as number;
        if(level !== undefined){
            const {time, requestId,sender, bot} = BotX.interactionBaseData(interaction);
            const target = "";
            
            const request = [
                target,
                sender,
                requestId, 
                level.toString()
            ] as [string, string, string, string];

            INIparser.sendCommand(request, "set-wind", bot.A3DJS_folder)
            await bot.commandResponseReply(
                interaction, 
                requestId, 
                time,
                "Setting wind-level..."
                );
        }
		
	},
};