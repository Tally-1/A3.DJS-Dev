// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import LiveFeed from "../../../../discord/models/classes/LiveFeed";
import CanvasX from "../../classes/canvas";
import GameTracker from "../../classes/gameTracker";
import gameStateQuery from "./gameStateQuery";

export default 
async function trackGame(dbFolder: string) {
    CanvasX.removeCachedFiles();

    const cleanUpFrequency = 120000;
    
    let cacheCleaned = 0;
    let timers = [] as number[];
    let lastCleanup = new Date().getTime();
    let { sessionInfo, cnvsX, knownMap } = GameTracker.newGame(dbFolder);

    let discordFeed = await LiveFeed.initLiveFeed(sessionInfo);
    await discordFeed?.initTransmission();

    //loop game-state-query, draw latest image
    while (true) {
        try {
            
        
      let tempVars = await
      gameStateQuery(
        dbFolder,
        sessionInfo,
        cnvsX,
        lastCleanup,
        cleanUpFrequency,
        cacheCleaned,
        timers,
        discordFeed,
        knownMap
      );
      
      //these vars are reused and updated on each loop
      cacheCleaned = tempVars.cacheCleaned;
      sessionInfo = tempVars.sessionInfo;
      cnvsX = tempVars.cnvsX;
      lastCleanup = tempVars.lastCleanup;
      timers = tempVars.timers;
      
      //livefeed needs to be rebuilt in order to clear old data.
      if(tempVars.newGameStarted){discordFeed = await discordFeed?.newGame();}


    } catch (error) {
        if((error as any).code == 'EBUSY')
        {console.log("Cannot read snapshot-files, pausing 10ms and retrying.");}
        else{console.log(error);};
    }
    }
  }