// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandBuilder } from "discord.js";
import INIparser from "../../api/models/classes/INIparser";
import BotX from "../models/classes/botX";


const command = new SlashCommandBuilder()
.setName('sys-chat-global')
.setDescription('Sends a systemChat to all players.')
.setDefaultMemberPermissions(0)
.addStringOption(option=>option
    .setName("message")
    .setDescription("message:")
    .setRequired(true)
    .setMaxLength(70)
    .setMinLength(2))


module.exports = {
	data: command,
	async execute(interaction:ChatInputCommandInteraction) {
        const text = (interaction.options.get("message")?.value);
        const valid = text !== undefined && typeof text === "string";
        
        if(valid){
            
            const {time, requestId,sender, bot} = BotX.interactionBaseData(interaction);
            const target = "";
            const message = sender +": "+ text;
            
            const request = [
                target,
                sender,
                requestId, 
                message
            ] as [string, string, string, string];


            INIparser.sendCommand(request, "syschat-global", bot.A3DJS_folder)
            await bot.commandResponseReply(interaction, requestId, time);
        }
        else{
            interaction.reply("Error. Invalid format...");
        }
		
	},
};