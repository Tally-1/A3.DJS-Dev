// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Discord from "discord.js";
import BotX from "../../classes/botX";
import { A3ChannelList } from "../../classes/types";

export default
async function getA3Channels(this:BotX, assignToBot?:boolean){
    //@ts-expect-error
    const config = this.config as A3djsConfig;
    
    //the channelsLoaded notation is used in sendChatToDiscord.ts, in order to not loop channel-creation.
    this.channelsLoaded = false;

    const {chatChannel, liveChannel, imgChannel} = config;
    const channelIds = [chatChannel, liveChannel, imgChannel];

    const channelsToBuild:string[] = [];
    const returnChannels:Discord.Channel[]=[];

    for (let i = 0; i < channelIds.length; i++) {
        const id = channelIds[i];
        const name = config.channelNames[i];
        
        let channel:Discord.Channel | null = null;
        try{channel = await this.channels.fetch(id)}catch(e){};

        if(channel){returnChannels.push(channel);}
        else{channelsToBuild.push(name)};
    }; 

    if(returnChannels.length === 3){
        const channels = {
            chatChannel:returnChannels[0],
            liveChannel:returnChannels[1],
            imgChannel:returnChannels[2]
        } as A3ChannelList;

        if(assignToBot){this.A3Channels = channels;};

        this.channelsLoaded = true;
        console.log("All channels ready, listening....");

        return channels;
    };
    
    const channels = await BotX.constructMissingChannels(this,channelsToBuild);
    this.channelsLoaded = true;
    if(assignToBot){this.A3Channels = channels;};
    
    return channels;
};