// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import A3ToCanvasGridPos from "../../../../util/A3ToCanvasGridPos";
import positionData from "../../../../util/positionData";
import CanvasX from "../../../classes/canvas";
import { backgroundData } from "../../../types";
import path from "path";
import fs from "fs";

export default
async function customGridImage(
    this:CanvasX,
    backGroundData:backgroundData,
    ) {
    
    const map                = this.mapData.name;
    const {bottomLeft, size} = backGroundData;

    const pth = path.join(".", "maps", map, "cache", "custom", "custom.jpg");
    // console.log(fs.readdirSync(pth));
    // process.exit();

    // const pth               = "./maps/"+map+"/cache/custom/custom.jpg";

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
        CanvasX.storeFrame(frame, pth);
        
        return pth;
    };
  
    //load background
    const backgroundpth = this.x3gridImage(bottomLeftGrid, map);
    const background = await this.load3x3background(backgroundpth);
    

    pencil.drawImage(background, x, y, 3000, 3000);
    
    // drawFocusOn3x3(Canvas, background, backGroundData);
    CanvasX.storeFrame(frame, pth);
  
    // cache img for future use
    this.cacheTempImg("x3Grids", ("["+bottomLeftGrid+"]"), background);
  
    return pth;
};