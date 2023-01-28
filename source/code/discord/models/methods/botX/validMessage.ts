// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Discord, {  } from "discord.js";
import { A3ChannelList } from "../../classes/types";

export default
function validMessage(message:Discord.Message, botChannels:A3ChannelList){
    if ( message.author.bot)  { return false };
    if ( message.channel.id !== (botChannels.chatChannel.id)) {return false };
    return true;
}