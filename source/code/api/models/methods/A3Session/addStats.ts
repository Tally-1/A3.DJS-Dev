// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";
import Snapshot from "../../classes/snapshot";

export default
function addStats(this:A3session ,snapshot:Snapshot){
    const newKills = Object.keys(snapshot.kills);
    const newExplosions = Object.keys(snapshot.explosions);

    for (const k of newKills){this.stats.kills[k] = snapshot.kills[k]};
    for (const x of newExplosions){this.stats.explosions[x] = snapshot.explosions[x]};
    this.stats.shotsFired = this.stats.shotsFired + snapshot.shotsFired;
    return;

  };
  