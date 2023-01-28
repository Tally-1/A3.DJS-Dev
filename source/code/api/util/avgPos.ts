// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { position2D, position3D } from "../models/types";
import average from "./average";

export default function avgPos(posArr: position3D[] | position2D[]):position2D {

    if (posArr.length == 1) {
        const avgPos = [posArr[0][0], posArr[0][1]] as position2D;
        return avgPos;
    }
    const xArr = [];
    const yArr = [];
  
    for (const pos of posArr) {
      xArr.push(pos[0]);
      yArr.push(pos[1]);
    }
  
    const x = average(xArr);
    const y = average(yArr);

    const avgPos = [x, y] as position2D;
  
    return avgPos;
}