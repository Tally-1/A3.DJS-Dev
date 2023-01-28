// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Discord from "discord.js";

export interface A3ChannelList {
    imgChannel:Discord.TextChannel;
    chatChannel:Discord.TextChannel,
    liveChannel:Discord.TextChannel
    [key:string]:Discord.TextChannel
}