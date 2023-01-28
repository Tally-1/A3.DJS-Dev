// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import avgPos from "../../../util/avgPos";
import defineArea from "../../../util/defineArea";
import { listOfMen } from "../../classes/man";
import { position3D } from "../../types";

export default function allPosData(units: listOfMen) {
  
    const positions: position3D[] = [];
    const unitIds = Object.keys(units);

    
  
    for (const id of unitIds) {
      const unit = units[id];
      if (!positions.includes(unit.pos)) {
        positions.push(unit.pos);
      }
    }
  
    const data = defineArea(positions);
    const center = avgPos(positions);
  
    const posData = {
      positions: positions,
      center: center,
      size: data.size * 1.2,
      bottomLeft: data.bottomLeft,
      topRight: data.topRight,
    };
  
    return posData;
  }