// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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