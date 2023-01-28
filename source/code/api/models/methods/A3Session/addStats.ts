// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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
  