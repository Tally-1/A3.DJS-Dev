// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { SKRSContext2D } from "@napi-rs/canvas";
import positionData from "../../../../util/positionData";
import CanvasX from "../../../classes/canvas";
import { backgroundData } from "../../../types";


export default
async function setBackground(this:CanvasX, pencil:SKRSContext2D, map:string, backGroundData:backgroundData) {
   
    let background = undefined; 
    const {bottomLeft, imgCacheName, size} = backGroundData;
    const useMultiGrid = (size > 2000);
  
    if(useMultiGrid){
      const grid = positionData(bottomLeft).grid;
      const gridCount = size/1000;
      background = this.drawMultiGrid(grid, gridCount, size, map, null, true);
    }
    else{
      const imgPath    = await this.customGridImage(backGroundData, map);
      background       = await this.loadImage(imgPath);
    }
  
    if(typeof background !== "string"){
        pencil.drawImage(background, 0, 0, 1000, 1000);
  
      // cache img for future use 
      if(useMultiGrid)
      {this.cacheTempImg("multiGrids", (imgCacheName), background);}
      else{this.cacheTempImg("customGrids", (imgCacheName), background);};
    }
    
    
    
    
    
    return bottomLeft;
  };