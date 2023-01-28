// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import sleep from "../../../util/sleep";
import A3session from "../../classes/A3Session";

export default
async function pauseTracking(sessionInfo:A3session, timeSpent:number, dataFound:boolean){
    let pause = sessionInfo.updateFrequency * 1000 - timeSpent;
  if (timeSpent < 10 || !dataFound) {
    pause = 10;
  }
  if (pause > 0) {
    await sleep(pause);
  } else {
    console.log("Snapshot update was slower than wanted frequency");
  }
};