// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { genericObject, genericKey } from "../../../types";
import fs from "fs";
import { Image } from "@napi-rs/canvas";

export default async function loadGrids(Canvas:genericObject, map:string) {
    
    const grids = {} as genericObject;
    const gridImages = fs.readdirSync("./maps/"+map+"/grids");    
    const waterGrids = Canvas.mapData.waterGrids;
        
    for (const grid of gridImages) {
        const name = grid.split(".")[0];
        const waterGrid = waterGrids.includes(name);
        if(!waterGrid){
            const path = "./maps/"+map+"/grids/"+grid;
            const img = await Canvas.loadImage(path) as Image;
            grids[name as genericKey] = img;
        };
    };
    
    Canvas.grids = grids;
    
    
    return Canvas;
    };