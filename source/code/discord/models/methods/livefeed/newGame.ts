// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import A3session from "../../../../api/models/classes/A3Session";
import INIparser from "../../../../api/models/classes/INIparser";
import LiveFeed from "../../classes/LiveFeed";

export default
async function  newGame(this: LiveFeed, sendReport:boolean){
    this.previousImageMsg = undefined;

    //@ts-expect-error 
    const sessionData = process.state.session as A3session;
    
    const newFeed = await LiveFeed.initLiveFeed(sessionData);
    await newFeed?.initTransmission();

    if(sendReport){
        await this.chatChannel.send("```New Game Started!```");
        await reportVersion(this, sessionData);
    };

    return newFeed;
};





async function reportVersion(livefeed:LiveFeed, sessionData:A3session){
    const botVersion = livefeed.bot.version;
    const Arma3Version = sessionData.version;

    if(botVersion < Arma3Version){
        console.log("Versions do not match between A3 and DJS, please update the build-folder")
        await livefeed.chatChannel.send("```You need to update the buildfolder of you bot. \nA new version is available.```");
        //sys-info message-fnc might be needed.
        const request1 = [
            "",
            "A3.DJS",
            "-1", 
            "A3.DJS: -Versions do not match between A3 and DJS, please update the build-folder."
        ] as [string, string, string, string];

        const request2 = [
            "",
            "A3.DJS",
            "-1", 
            "A3.DJS: bot-version: "+botVersion+" A3.DJS version: "+Arma3Version
        ] as [string, string, string, string];

        INIparser.sendCommand(request1, "syschat-global", livefeed.bot.A3DJS_folder);
        INIparser.sendCommand(request2, "syschat-global", livefeed.bot.A3DJS_folder);
    }
}