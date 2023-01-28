// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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