// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import LiveFeed from "../../../../discord/models/classes/LiveFeed";
import A3session from "../../classes/A3Session";
import CanvasX from "../../classes/canvas";
import GameTracker from "../../classes/gameTracker";
import INIparser from "../../classes/INIparser";
import Snapshot from "../../classes/snapshot";

export default
async function renderGameState(
  dbFolder:string, 
  sessionInfo:A3session, 
  cnvsX:CanvasX,
  discordFeed:LiveFeed|undefined,
  knownMap:boolean
  ){
    
    let dataFound = false;
    const newGameStarted = sessionInfo.newSessionStarted();
    const updateAvailable = sessionInfo.hasUpdated();
    
    if (updateAvailable && (!newGameStarted)) {

      const snapshot = Snapshot.getCurrent(dbFolder);
      
      sessionInfo.addStats(snapshot);

      INIparser.readCommands(sessionInfo, dbFolder);

      await cnvsX.drawSnapShot(snapshot, sessionInfo, knownMap);
      dataFound = true;

      GameTracker.stateToProccess(sessionInfo, snapshot);
      discordFeed?.updateTransmission(snapshot);

      
      
    }
    return{dataFound:dataFound, newGameStarted:newGameStarted}
}