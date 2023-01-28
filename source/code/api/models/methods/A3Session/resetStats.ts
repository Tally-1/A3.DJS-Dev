// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";
import { listOfexplosions } from "../../classes/explosion";
import { listOfKills } from "../../classes/kill";

export default
function resetStats(this:A3session){
    this.stats = {
    kills:{} as listOfKills,
    explosions:{} as listOfexplosions,
    shotsFired: 0 as number
  };
}