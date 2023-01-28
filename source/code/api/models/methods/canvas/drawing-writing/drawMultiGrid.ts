// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import fs from "fs";
import multiGrid from "../../../../util/multiGrid";
import CanvasX from "../../../classes/canvas";
import { position2D } from "../../../types";


export default function drawMultiGrid(
    this:CanvasX,
    baseGrid:position2D, 
    xGridCount:number, 
    imageSize:number,
    map:string,
    path:string|null|undefined,
    returnCnvsElement:boolean
    ) {
  
      let canvasXInstance = this;
  
  if(!path){path = "./maps/"+map+"/cache/misc/["+baseGrid+"]"+ "x"+ xGridCount + " "+ imageSize +"px"+ ".jpg";};
  if(canvasXInstance === undefined){
    console.log("CanvasX is undefined");
    // this = require("@napi-rs/canvas");
  };
  if(fs.existsSync(path)
  &&!returnCnvsElement){return path};
  
  const grids = multiGrid(baseGrid, xGridCount);
  const gridImages = [];
  const waterGrids = this.mapData.waterGrids;
  
  for (const grid of grids) {
  
    let gridName = "["+grid+"]";
    const waterGrid = waterGrids.includes(gridName);
    if(waterGrid){gridName = "water"};
  
    const gridImage = this.grids[gridName];
  
    if(gridImage !== undefined){gridImages.push(gridImage)}
    else{gridImages.push(this.grids[("[-1,-1]")])};
  
  };
  
  let size  = gridImages[0].naturalWidth;
  if(undefined != imageSize){size = imageSize};
  
  const gridSize = size / xGridCount;
  const frame = this.createCanvas(size,size);
  const pencil = frame.getContext('2d');
  
  let x = 0;
  //Y-coordinates in Arma 3 and in web-dev are the oposite, hence the position needs to be inverted.
  let y = 0 + (size - gridSize);
  
  
  for (const image of gridImages) {
    
    if(x >= size)
    {
        x=0;
        y = y-gridSize;
    }
  
    pencil.drawImage(image, x, y, gridSize, gridSize);
    x = x+gridSize;
    
  };
  
  if(returnCnvsElement){return frame;};
  
  const buffer = frame.toBuffer('image/jpeg');
  fs.writeFileSync(path, buffer);
  console.log("created file: " + path);
  
  return path;
  };