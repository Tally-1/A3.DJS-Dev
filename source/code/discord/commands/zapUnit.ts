// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { AutocompleteInteraction, ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandStringOption, SlashCommandSubcommandBuilder } from "discord.js";
import INIparser from "../../api/models/classes/INIparser";
import BotX from "../models/classes/botX";

const command = new SlashCommandBuilder()
.setName('zap-unit')
.setDescription('Send a gift from the sky to a soldier of your choice...')
.addBooleanOption(option=>option
    .setName("players-only")
    .setDescription("Look for players only?")
    .setRequired(true))
.addStringOption(option=>option
    .setName("unit")
    .setDescription("Select victim...")
    .setRequired(true)
    .setAutocomplete(true))

async function autocomplete(interaction:AutocompleteInteraction) {
    try {
    const bot = interaction.client as BotX;
    const playersOnly = interaction.options.get("players-only")?.value;
    const focusedValue = interaction.options.getFocused();
    const choices = bot.getSnapshot().getNames(playersOnly) as string[];
    const filtered = choices.filter(choice => choice.startsWith(focusedValue));
    await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice })),
    );

    }catch(error) {
        console.log(error);
        console.log("autoCompletion on player-search failed");
    }
};

async function reply(interaction:ChatInputCommandInteraction) {
    const {time, requestId,sender, bot} = BotX.interactionBaseData(interaction);
    const target = interaction.options.get("unit")?.value;
        
    const request = [
        target,
        sender,
        requestId
    ] as [string, string, string];
    
    
    INIparser.sendCommand(request, "zap-unit", bot.A3DJS_folder);
    await bot.commandResponseReply(
        interaction, 
        requestId, 
        time, 
        "Zapping "+ target+"...."
        );

}

module.exports = {
	data: command,
    autocomplete:autocomplete,
	execute:reply,
};