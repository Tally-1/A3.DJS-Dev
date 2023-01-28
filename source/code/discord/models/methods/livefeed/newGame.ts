// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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