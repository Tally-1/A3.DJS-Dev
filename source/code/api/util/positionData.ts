// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { position2D, position3D, positionData } from "../models/types";

export default function positionData(position:position2D | position3D):positionData {
    const grid = [Math.floor(position[0]/1000), Math.floor(position[1]/1000)] as position2D;
    const gridPos = [grid[0]*1000, grid[1]*1000] as position2D;
    const subGrid = [Math.floor((Math.floor(position[0]-((grid[0])*1000)))/100), 
                     Math.floor((Math.floor(position[1]-((grid[1])*1000)))/100)] as position2D;
    const round100 = [(Math.floor(position[0]/100)*100), (Math.floor(position[1]/100)*100)+50] as position2D;

    const posData = {
        pos      : position,
        round100 : round100,
        grid     : grid,
        gridPos  : gridPos,
        subGrid  : subGrid
    };
    return posData;
}