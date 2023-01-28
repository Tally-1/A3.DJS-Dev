// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Discord, {  } from "discord.js";
import { A3ChannelList } from "../../classes/types";

export default
function validMessage(message:Discord.Message, botChannels:A3ChannelList){
    if ( message.author.bot)  { return false };
    if ( message.channel.id !== (botChannels.chatChannel.id)) {return false };
    return true;
}