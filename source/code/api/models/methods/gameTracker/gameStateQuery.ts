// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";
import CanvasX from "../../classes/canvas";
import GameTracker from "../../classes/gameTracker";
import renderGameState from "./renderGameState";
import pauseTracking from "./pauseTracking";
import LiveFeed from "../../../../discord/models/classes/LiveFeed";
import sleep from "../../../util/sleep";

export default async function gameStateQuery(
  dbFolder: string,
  sessionInfo: A3session,
  cnvsX: CanvasX,
  lastCleanup: number,
  cleanUpFrequency: number,
  cacheCleaned: number,
  timers: number[],
  discordFeed:LiveFeed|undefined,
  knownMap:boolean
) {
  const time = new Date().getTime();

  const {newGameStarted, dataFound} = 
  await renderGameState(
    dbFolder,
    sessionInfo,
    cnvsX, 
    discordFeed,
    knownMap
    );

  // Update session-data, re-init Canvas, and clean up bot-channels 
  // if a new-session was started.
  if (newGameStarted) {
    
    await sleep(3000);

    const newGame = GameTracker.newGame(dbFolder);
    sessionInfo = newGame.sessionInfo;
    cnvsX = newGame.cnvsX;
    await cnvsX.drawSnapShot(newGame.snapshot, sessionInfo, knownMap);

    console.log("------New Game Sarted------");
  }

  //check time used on drawing image, and update pause-time
  const currentTime = new Date().getTime();
  const timeSpent = currentTime - time;

  //timed log and cache-cleanup
  const collectGarbage = currentTime - lastCleanup > cleanUpFrequency;
  if (collectGarbage) {
    cacheCleaned = cnvsX.logAndCacheManager(timers, cacheCleaned);
    lastCleanup = new Date().getTime();
  }

  //pause tracking for the time set in Arma 3.
  await pauseTracking(sessionInfo, timeSpent, dataFound);

  //sometimes the data is not updated, only push the time when info is gathered.
  if (timeSpent > 1) {
    timers.push(timeSpent);
  }

  //the timeSpent is used in the debuggging text for canvas.
  sessionInfo.lastTime = timeSpent;

  if(dataFound){
    //process.lastGameStateQuery will be called as a condition to update
    //the discord-ingame-screenshot.
    // //@ts-expect-error
    // process.lastGameStateQuery = new Date().getTime();
  }
  

  return {
    cacheCleaned: cacheCleaned,
    timers: timers,
    lastCleanup: lastCleanup,
    sessionInfo: sessionInfo,
    cnvsX: cnvsX,
    newGameStarted:newGameStarted
  };
}





