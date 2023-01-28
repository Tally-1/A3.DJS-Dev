// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import path from "path";
import fs from "fs";

export default
function parseMapData(map:string) {

const mapsRoot = path.join(__dirname,"..","..","..","..","maps");
const mapFolder = path.join(mapsRoot, map);
const datarrFile = path.join(mapFolder, "mapDataArr.json");

const dataArr = require(datarrFile);
const [mapName, mapSize, locations, waterGrids] = dataArr;

const mapData = {
    name:mapName,
    size:mapSize,
    locations:{},
    waterGrids:[]
} as any;

for (const location of locations) {
    const [name, pos, type]=location;
    const locObj = {
        pos:pos,
        type:type
    };
    mapData.locations[name]=locObj;
}

for (const grid of waterGrids) {
    mapData.waterGrids.push(grid.toString());
}

let data = JSON.stringify(mapData);

const writePath = path.join(mapFolder, "mapData.json");

fs.writeFileSync(writePath, data);

console.log(data);
}
