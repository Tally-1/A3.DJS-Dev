// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import BotX from "../../../../discord/models/classes/botX";
import A3session from "../../classes/A3Session";
import Snapshot from "../../classes/snapshot";
import { genericObject } from "../../types";

export default
function stateToProccess(session: A3session, snapshot: Snapshot) {
    //@ts-expect-error
    process.state = { 
      session: session,
      currentSnap: snapshot,
      lastUpdate: new Date().getTime(),
    } as genericObject;
    
    //@ts-expect-error
    const bot = process.bot as BotX;
    if(bot !== undefined){
      bot.sessionData = session;
      // bot.snapshot = snapshot;
    }
}