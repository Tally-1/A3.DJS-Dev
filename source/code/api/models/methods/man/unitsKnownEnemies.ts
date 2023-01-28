// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { listOfMen } from "../../classes/man";
import Snapshot from "../../classes/snapshot";

export default function unitsKnownEnemies(
    men: listOfMen,
    snapshot: Snapshot,
    concat: boolean
  ) {
    const allEnemies: listOfMen = {};
    const uids = Object.keys(men);
  
    for (const uid of uids) {
      const man = men[uid];
      for (const enemyID of man.enemies) {
        const enemy = snapshot.units[enemyID];
        const enemyIds = Object.keys(allEnemies);
  
        const include = !enemyIds.includes(enemyID) && enemy !== undefined;
        if (include) {
          allEnemies[enemyID] = enemy;
        }
      }
    }
  
    if (!concat) {
      return allEnemies;
    }
  
    const enemyIds = Object.keys(allEnemies);
    for (const uid of uids) {
      const man = men[uid];
      const include = !enemyIds.includes(man.uid) && man !== undefined;
  
      if (include) {
        allEnemies[uid] = man;
      }
    }
  
    return allEnemies;
  }