// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Discord from "discord.js";
import BotX from "../../classes/botX";
import getA3Channels from "./getA3Channels";

export default
function sendChatToDiscord(chatName:string, text:string, _uid?:string) {
    
    //@ts-expect-error
    const bot = process.bot as BotX;
    if(!bot){return false;};

    

    const timeSinceStartup = (new Date().getTime()) - bot.startUpTime;

    //time is needed to init bot properly.
    if(timeSinceStartup<5000){return false;};
    
    const chatChannel = bot.A3Channels?.chatChannel;

    if(!chatChannel){
        if(bot.channelsLoaded === undefined){
            bot.getA3Channels();
            console.log("No chat channel found"); 
            return false;
        };
        
        console.log("No chat channel found"); 
        return false;
    };
    
    try {
        const channel = bot.A3Channels?.chatChannel as Discord.TextChannel;
        let message = "```json\n " +chatName + ": "+'"'+text+'"'+"```";
        if(chatName === ""){message = text};

        channel.send(message);
        return true;
    } catch (error) {
        console.log("Could not send message to Discord" + "\n"+error);
        return  false;
    }
    
};