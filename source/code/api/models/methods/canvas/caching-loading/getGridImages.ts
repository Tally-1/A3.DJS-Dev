// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import multiGrid from "../../../../util/multiGrid";
import CanvasX from "../../../classes/canvas";
import { position2D } from "../../../types";

export default
function getGridImages(
  this:CanvasX, 
  start:position2D, 
  xCount:number
  ){
    const grids = multiGrid(start, xCount);
    const waterGrids = this.mapData.waterGrids;

    const gridImages = [];

    for (const grid of grids) {
  
        let gridName = "["+grid+"]";
        const waterGrid = waterGrids.includes(gridName);
        if(waterGrid){gridName = "water"};
      
        const gridImage = this.grids[gridName];
      
        if(gridImage !== undefined){gridImages.push(gridImage)}
        else{gridImages.push(this.grids[("[-1,-1]")])};
      
      };

      return gridImages;
}