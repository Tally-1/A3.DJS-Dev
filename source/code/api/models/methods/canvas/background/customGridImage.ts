// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { Canvas } from "@napi-rs/canvas";
import A3ToCanvasGridPos from "../../../../util/A3ToCanvasGridPos";
import positionData from "../../../../util/positionData";
import CanvasX from "../../../classes/canvas";
import { backgroundData } from "../../../types";

export default
async function customGridImage(
    this:CanvasX,
    backGroundData:backgroundData, 
    map:string
    ) {
    
    const {bottomLeft, size} = backGroundData;
    const path               = "./maps/stratis/cache/custom/custom.jpg";
    const frame              = this.createCanvas(size, size);
    const pencil             = frame.getContext("2d");
    
    // get the bottom-left corner
    const bottomLeftGrid  = positionData(bottomLeft).grid;
  
    //convert sqf position to Javascript position.
    const [x, y] = A3ToCanvasGridPos(bottomLeft, size);
    
  
    // use cahced image if available
    const cached = this.x3Grids[("["+bottomLeftGrid+"]")];
    if(cached !== undefined){
        pencil.drawImage(cached, x, y, 3000, 3000);
        CanvasX.storeFrame(frame, path);
        
        return path;
    };
  
    //load background
    const backgroundPath = this.x3gridImage(bottomLeftGrid, map);
    const background = await this.load3x3background(backgroundPath);
    

    pencil.drawImage(background, x, y, 3000, 3000);
    
    // drawFocusOn3x3(Canvas, background, backGroundData);
    CanvasX.storeFrame(frame, path);
  
    // cache img for future use
    this.cacheTempImg("x3Grids", ("["+bottomLeftGrid+"]"), background);
  
    return path;
};