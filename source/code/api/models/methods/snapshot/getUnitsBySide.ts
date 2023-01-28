// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { listOfMen } from "../../classes/man";
import Snapshot from "../../classes/snapshot";

export default function getUnitsBySide(this: Snapshot, sides: string[]) {
    const uids = Object.keys(this.units)
    const men: listOfMen = {};
  
    for (const uid of uids) {
      const man = this.units[uid];
      if (sides.includes(man.side)) {
        men[uid] = man;
      }
    }
  
    return men;
}