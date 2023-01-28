// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { position2D, position3D } from "../models/types";
import positionData from "./positionData";

export default function A3ToCanvasGridPos(position:position3D | position2D, size:number):position2D{

    const grid   = positionData(position).grid;
    const bottomLeft = [(grid[0]*1000), grid[1]*1000];
    
    const x = (bottomLeft[0]-position[0]);
    
    let yDiff = (bottomLeft[1]-position[1]);
    if(yDiff<0){yDiff = (0-yDiff)};
    
    const v = 3000/size; //console.log(v);
    const baseY    = (0-(size*v))+size;
    const y = (baseY+yDiff);

    if(x>0)console.log(""+ x + " " + grid + " " + bottomLeft);

    return [x, y];

};

