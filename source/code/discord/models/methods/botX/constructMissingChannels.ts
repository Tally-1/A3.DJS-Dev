// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { A3ChannelList } from "../../classes/types";
import buildChannel from "./buildChannel";
import storeJsonPretty from "../../../util/storeJsonPretty";
import BotX from "../../classes/botX";

export default
async function constructMissingChannels(bot:BotX,channelsToBuild:string[]){
    //@ts-expect-error
    const config = bot.config as A3djsConfig;
    const channels = {} as A3ChannelList;
    const [chat, live, image] = config.channelNames;

    for (const name of channelsToBuild) {
        const channel = await buildChannel(bot, name);
        if(channel){
            if(name === chat){
                channels.chatChannel = channel;
                config.chatChannel = channel.id;
            };
            if(name === live){
                channels.liveChannel = channel;
                config.liveChannel = channel.id;
            };
            if(name === image){
                channels.imgChannel = channel
                config.imgChannel = channel.id;
            };
        };
        
    };

    
    storeJsonPretty(bot.configFile, config);
    return channels;
}