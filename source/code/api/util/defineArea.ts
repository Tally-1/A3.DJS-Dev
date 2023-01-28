// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { position2D, position3D } from "../models/types";
import { maxOfArray, minOfArray } from "./maxMinArr";

export default function defineArea(positions: position3D[]) {
    const xValues = [];
    const yValues = [];
  
    for (const pos of positions) {
      xValues.push(pos[0]);
      yValues.push(pos[1]);
    }
  
    const maxX = maxOfArray(xValues);
    const maxY = maxOfArray(yValues);
  
    const minX = minOfArray(xValues);
    const minY = minOfArray(yValues);
  
    const size = maxOfArray([maxX - minX, maxY - minY]);
  
    const bottomLeft = [minX, minY] as position2D;
    const topRight = [minX + size, minY + size] as position2D;
  
    return {
      bottomLeft: bottomLeft,
      topRight: topRight,
      size: size,
    };
  }