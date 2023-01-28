// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import CanvasX from "../../../classes/canvas";

export default
function backGroundCached(this:CanvasX, imgCacheName:string) {
    const cached = ((this.customGrids[imgCacheName] != undefined)
                 || (this.x3Grids[imgCacheName]     != undefined)
                 || (this.multiGrids[imgCacheName]  != undefined));
  
    return cached;   
  };