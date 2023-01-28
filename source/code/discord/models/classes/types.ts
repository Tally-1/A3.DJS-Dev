// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Discord from "discord.js";

export interface A3ChannelList {
    imgChannel:Discord.TextChannel;
    chatChannel:Discord.TextChannel,
    liveChannel:Discord.TextChannel
    [key:string]:Discord.TextChannel
}