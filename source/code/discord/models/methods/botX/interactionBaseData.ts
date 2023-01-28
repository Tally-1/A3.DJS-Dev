// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { ChatInputCommandInteraction } from "discord.js";
import BotX from "../../classes/botX";

export default
function interactionBaseData(interaction:ChatInputCommandInteraction){
    const time = new Date().getTime();
    const requestId = time.toString();
    const sender = interaction.user.tag;
    const bot = interaction.client as BotX;

    return {
        time:time,
        requestId:requestId,
        sender:sender,
        bot:bot
    }
};