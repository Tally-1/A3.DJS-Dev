// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import INIparser from "../../api/models/classes/INIparser";
import BotX from "../models/classes/botX";



const command = new SlashCommandBuilder()
.setName('restart')
.setDescription('Does a server or mission restart.')
.setDefaultMemberPermissions(0)
.addStringOption(option=>
    option.setName("restart-type")
    .setRequired(true)
    .setDescription('Select what kind of restart you want to do.')
    .addChoices(
        { name: 'mission-restart', value: 'mission' },
        { name: 'server-restart', value: 'server' },
    ))
.addStringOption(option => option
    .setName('password')
    .setRequired(true)
    .setDescription('Server Command Password')
    .setMinLength(1))
    
    

module.exports = {
	data: command,
	async execute(interaction:ChatInputCommandInteraction) {
        const type = interaction.options.get("restart-type")?.value as string;
        const password = interaction.options.get("password")?.value as string;
        
        if(type !== undefined && password !== undefined){

            const {time, requestId, sender, bot} = BotX.interactionBaseData(interaction);
            const target = type;
            
            const request = [
                target,
                sender,
                requestId, 
                password
            ] as [string, string, string, string];

            INIparser.sendCommand(request, "restart", bot.A3DJS_folder)
            await bot.commandResponseReply(
                interaction, 
                requestId, 
                time,
                "Restarting " + type
                );
        }
		
	},
};