// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { AutocompleteInteraction, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import INIparser from "../../api/models/classes/INIparser";
import { setTimeout } from 'node:timers/promises'
import BotX, { statusResponseData } from "../models/classes/botX";



const command = new SlashCommandBuilder()
.setName('status-player')
.setDescription('Gets the status of a player')
.addStringOption(option=>option
    .setName("player")
    .setDescription("name...")
    .setRequired(true)
    .setAutocomplete(true));

async function autocomplete(interaction:AutocompleteInteraction) {
    try {
    const bot = interaction.client as BotX;
    const focusedValue = interaction.options.getFocused();
    const choices = bot.getSnapshot().getNames(true) as string[];
    const filtered = choices.filter(choice => choice.toLowerCase().startsWith(focusedValue.toLowerCase()));
    await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice })),
    );

    }catch(error) {
        console.log("autoCompletion on player-search failed");
    }
};

async function reply(interaction:ChatInputCommandInteraction) {
    const {time, requestId,sender, bot} = BotX.interactionBaseData(interaction);
    const target = interaction.options.get("player")?.value;
    const request = [
        target,
        sender,
        requestId
    ] as [string, string, string];
    
    INIparser.sendCommand(request, "get-unit-status", bot.A3DJS_folder)
    const data = await bot.commandResponseReply(
        interaction, 
        requestId, 
        time,
        'Getting status of '+target+'...'
        ) as statusResponseData;

    if(data === undefined){return};

    const [damage, gear] = data ;
    const [uniform, backPack, vest, weapon, launcher, sideArm] = gear;

    const unitStatus = "```"+
    "Health: "+ Math.round(100-(damage*100))+"%\n"+
    "Weapon: " + weapon +"\n"+
    "Launcher: " + launcher +"\n"+
    "SideArm: " + sideArm +"\n\n"+
    
    "Vest: " + vest +"\n"+
    "Uniform: " + uniform +"\n"+
    "BackPack: " + backPack +"\n"+
    "```";

    await interaction.editReply({ content: unitStatus });
    await setTimeout(30000);
    try {await interaction.deleteReply()}catch(e){}
    
    return;
}

module.exports = {
	data: command,
    autocomplete:autocomplete,
	execute:reply,
};