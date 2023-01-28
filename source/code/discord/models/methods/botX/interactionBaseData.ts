// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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