// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandBuilder } from "discord.js";
import INIparser from "../../api/models/classes/INIparser";
import BotX from "../models/classes/botX";


const command = new SlashCommandBuilder()
.setName('set-time')
.setDescription('Sets the time on your ArmA 3 server')
.setDefaultMemberPermissions(0)
.addIntegerOption(option=>option
    .setName("hour")
    .setDescription("from 01:00 -> 24:00")
    .setMaxValue(24)
    .setMinValue(1)
    .setRequired(true))
    

module.exports = {
	data: command,
	async execute(interaction:ChatInputCommandInteraction) {
        const {time, requestId,sender, bot} = BotX.interactionBaseData(interaction);
        const target = "";
        const hour = interaction.options.get("hour")?.value as number;
            
        const request = [
            target,
            sender,
            requestId, 
            hour.toString()
        ] as [string, string, string, string];
        
        INIparser.sendCommand(request, "set-daytime", bot.A3DJS_folder)
        await bot.commandResponseReply(
            interaction, 
            requestId, 
            time,
            "Changing time..."
            );
	},
};