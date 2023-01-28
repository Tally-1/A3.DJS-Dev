// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";
import { listOfMen } from "../../classes/man";
import Snapshot from "../../classes/snapshot";

export default function getUnitsInFocus(this: Snapshot, sessionInfo: A3session) {
    let men: listOfMen = {};
  
    if (sessionInfo.focusType == 0) {
      men;
    }
    if (sessionInfo.focusType == 1) {
      return this.players;
    }
    if (sessionInfo.focusType == 9) {
      return this.units;
    }
  
    if (sessionInfo.focusType == 2) {
      return this.getUnitsBySide(["WEST"]);
    }
    if (sessionInfo.focusType == 3) {
      return this.getUnitsBySide(["EAST"]);
    }
    if (sessionInfo.focusType == 4) {
      return this.getUnitsBySide(["GUER"]);
    }
    if (sessionInfo.focusType == 5) {
      return this.getUnitsBySide(["CIV"]);
    }
  
    if (sessionInfo.focusType == 6) {
      men = this.getUnitsBySide(["WEST", "EAST"]);
      return men;
    }
  
    if (sessionInfo.focusType == 7) {
      men = this.getUnitsBySide(["WEST", "GUER"]);
      return men;
    }
  
    if (sessionInfo.focusType == 8) {
      men = this.getUnitsBySide(["EAST", "GUER"]);
      return men;
    }
  
    return men;
  }