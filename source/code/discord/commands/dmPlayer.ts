// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { AutocompleteInteraction, ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandStringOption, SlashCommandSubcommandBuilder } from "discord.js";
import INIparser from "../../api/models/classes/INIparser";
import { setTimeout } from 'node:timers/promises'
import BotX from "../models/classes/botX";



const command = new SlashCommandBuilder()
.setName('player-dm')
.setDescription('Send private message to player')
.addStringOption(option=>option
    .setName("player")
    .setDescription("name...")
    .setRequired(true)
    .setAutocomplete(true))
.addStringOption(option=>option
    .setName("message")
    .setDescription("Write something...")
    .setRequired(true)
    .setMinLength(3)
    .setMaxLength(300))

async function autocomplete(interaction:AutocompleteInteraction) {
    try {
    const bot = interaction.client as BotX;
    const focusedValue = interaction.options.getFocused();
    const choices = bot.getSnapshot().getNames(true) as string[];
    const filtered = choices.filter(choice => choice.startsWith(focusedValue));
    await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice })),
    );

    }catch(error) {
        // //@ts-expect-error
        console.log(error);
        console.log("autoCompletion on player-search failed");
    }
};

async function reply(interaction:ChatInputCommandInteraction) {
    
    const {time, requestId,sender, bot} = BotX.interactionBaseData(interaction);
    const target = interaction.options.get("player")?.value;
    const text = interaction.options.get("message")?.value;

    const request = [
        target,
        sender,
        requestId,
        text
    ] as [string, string, string, string];
    
    INIparser.sendCommand(request, "dm-player", bot.A3DJS_folder);
    await bot.commandResponseReply(interaction, requestId, time);
    return;
}

module.exports = {
	data: command,
    autocomplete:autocomplete,
	execute:reply,
};

