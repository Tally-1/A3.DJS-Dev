// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { setTimeout } from 'node:timers/promises'
import A3session from "../../classes/A3Session";

export default
async function pauseTracking(sessionInfo:A3session, timeSpent:number, dataFound:boolean){
    let pause = sessionInfo.updateFrequency * 1000 - timeSpent;
  if (timeSpent < 10 || !dataFound) {
    pause = 10;
  }
  if (pause > 0) {
    await setTimeout(pause);
  };
};