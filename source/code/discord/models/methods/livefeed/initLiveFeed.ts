// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../../../api/models/classes/A3Session";
import sleep from "../../../../api/util/sleep";
import LiveFeed from "../../classes/LiveFeed";
import BotX from "../../classes/botX";

export default
async function initLiveFeed(sessionData:A3session){
    const bot = await waitForBot() as BotX;
    if(!bot){return;};
    const feed = new LiveFeed(bot, sessionData);
    await feed.cleanUp(feed.imageChannel);
    await feed.cleanUp(feed.liveChannel);
    return feed;  
};


async function waitForBot(){
    let i = 0;
    //@ts-expect-error
    while(process.bot === undefined){
        if(i>=10){
            console.log("Could not find bot, canceling live-feed.");
            return false;
        };
        await sleep(1000);
        i++;
    };

    //@ts-expect-error
    const bot = process.bot;

    while(bot.A3Channels === undefined){
        if(i>=10){
            console.log("Could not chat-channel, canceling live-feed.");
            return false;
        };
        await sleep(1000);
        i++;
    };

    
    return bot;
};