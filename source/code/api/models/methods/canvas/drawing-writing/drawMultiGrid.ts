// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import path from "path";
import fs from "fs";
import multiGrid from "../../../../util/multiGrid";
import CanvasX from "../../../classes/canvas";
import { position2D } from "../../../types";


export default function drawMultiGrid(this:CanvasX,
  baseGrid:position2D, 
  xGridCount:number, 
  imageSize:number,
  map:string,
  pth:string|null|undefined,
  returnCnvsElement:boolean
  ) {
  
  const mapsFolder = path.join(__dirname, "..", "..", "..", "..", "maps");
  if(!pth){pth = path.join(mapsFolder, map, "cache", "custom", map+".jpg")};
  
  if(fs.existsSync(pth)
  &&!returnCnvsElement){return pth};
  
  const gridImages = this.getGridImages(baseGrid, xGridCount);
  
  if(imageSize > 3000){imageSize = 3000};

  const frame = this.createCanvas(imageSize,imageSize);
  const gridImgSize = imageSize / xGridCount;
  const pencil = frame.getContext('2d');

  let x = 0;
  let y = 0 + (imageSize - gridImgSize);
  let i = 0;

  for (const image of gridImages) {
  
      if(i == xGridCount){
          x=0;
          y = y-gridImgSize;
          i = 0;
      }
    
      pencil.drawImage(image, x, y, gridImgSize, gridImgSize);
      x = x+gridImgSize;
      i++;
    };

    
  if(returnCnvsElement){return frame;};
  
  const buffer = frame.toBuffer('image/jpeg');
  fs.writeFileSync(pth, buffer);
  console.log("created file: " + pth);

  return pth;
  };