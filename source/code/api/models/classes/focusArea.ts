// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import equalArr from "../../util/equalArr";
import defineBackGround from "../methods/focusArea/defineBackGround";
import { position3D, position2D } from "../types";
import A3session from "./A3Session";
import Man from "./man";
import Snapshot from "./snapshot";

export default
class FocusArea {
  positions: position3D[];
  center: position2D;
  size: number;
  bottomLeft: position2D;
  topRight: position2D;

  constructor(snapshot: Snapshot, sessionInfo: A3session) {
    let unitsInFocus = snapshot.getUnitsInFocus(sessionInfo);
    const addEnemies = sessionInfo.focusEnemy && sessionInfo.focusType > 0;
    if (addEnemies) {
      unitsInFocus = Man.unitsKnownEnemies(unitsInFocus, snapshot, true);
    }

    const areaData = Man.allPosData(unitsInFocus);
    const showWholeMap =
      sessionInfo.focusType === 0 || equalArr(areaData.positions, []);

    if (showWholeMap) {
      const mapSize = sessionInfo.mapData.size;
      const mapCenter = [
        Math.round(mapSize / 2) * 1000,
        Math.round(mapSize / 2) * 1000,
      ] as position2D;
      areaData.center = mapCenter;
      areaData.size = mapSize * 1000;
    }
    
    this.positions  = areaData.positions;
    this.center     = areaData.center;
    this.size       = areaData.size;
    this.bottomLeft = areaData.bottomLeft;
    this.topRight   = areaData.topRight;
  }
  
  defineBackGround = defineBackGround;
}
