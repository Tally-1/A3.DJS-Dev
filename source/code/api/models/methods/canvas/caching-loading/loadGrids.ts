// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { genericObject, genericKey } from "../../../types";
import fs from "fs";
import path from "path";
import { Image } from "@napi-rs/canvas";

export default async function loadGrids(Canvas:genericObject, map:string) {
    
    const grids = {} as genericObject;

    const gridImgsPath = path.join("maps", map, "grids")
    const gridImages = fs.readdirSync(gridImgsPath);    
    const waterGrids = Canvas.mapData.waterGrids;
        
    for (const grid of gridImages) {
        const name = grid.split(".")[0];
        const waterGrid = waterGrids.includes(name);
        if(!waterGrid){

            const imgPath = path.join(gridImgsPath, grid);
            const img = await Canvas.loadImage(imgPath) as Image;
            grids[name as genericKey] = img;
        };
    };
    
    Canvas.grids = grids;
    
    return Canvas;
    };