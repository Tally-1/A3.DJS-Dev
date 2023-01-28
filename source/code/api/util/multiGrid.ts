// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { position2D } from "../models/types";

export default
function multiGrid(startGrid:position2D, xGridCount:number) {
    const grids:position2D[] = [];

    const xStart = startGrid[0];
    const yStart = startGrid[1];
    const xCap = xStart + xGridCount;


    let x = xStart;
    let y = yStart;
    
    for (let i = 0; i < (xGridCount * xGridCount); i++) {
        
        if(x >= xCap)
        {
            x = xStart;
            y++;
        };

        grids.push([x,y]);
        x++;  
    };
    
    return grids;
    };
