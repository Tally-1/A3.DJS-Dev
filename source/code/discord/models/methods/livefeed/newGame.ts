// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import LiveFeed from "../../classes/LiveFeed";

export default
async function  newGame(this: LiveFeed){
    this.previousImageMsg = undefined;
    //@ts-expect-error 
    const sessionData = process.state.session;
    console.log("original msgId = "+this.liveMsgId);
    const newFeed = await LiveFeed.initLiveFeed(sessionData);
    await newFeed?.initTransmission();
    await this.chatChannel.send("```New Game Started!```");
    return newFeed;
};