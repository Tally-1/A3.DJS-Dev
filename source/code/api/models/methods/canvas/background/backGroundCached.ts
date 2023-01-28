// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import CanvasX from "../../../classes/canvas";

export default
function backGroundCached(this:CanvasX, imgCacheName:string) {
    const cached = ((this.customGrids[imgCacheName] != undefined)
                 || (this.x3Grids[imgCacheName]     != undefined)
                 || (this.multiGrids[imgCacheName]  != undefined));
  
    return cached;   
  };