// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { initApi } from "./code/api/initApi";
import path from "path";
import deployBot from "./code/discord/deployBot";
import { readdirSync } from "fs";
// import CanvasX from "./code/api/models/classes/canvas";
// import sleep from "./code/api/util/sleep";

const version = 0.17
const A3INIfolder = path.join(__dirname,"..", "..", "@INIDBI2 - Official extension", "db");
const configFile = path.join(__dirname,"..", "..","A3DJS_Config.json");

// const A3INIfolder = "F:/Leo backup/Serverstuff/SteamCmd++/steamapps/common/Arma 3 Server/@INIDBI2 - Official extension/db"
console.log(readdirSync(A3INIfolder));

// process.exit();

initApi(A3INIfolder);
const bot = deployBot(A3INIfolder, configFile, version);

// import child_process from "child_process";
// process.on("exit", function () {
// require("child_process")
// .spawn( process.argv.shift(), 
//         process.argv, {
//         cwd: process.cwd(),
//         detached : true,
//         stdio: "inherit" 
//     });
// });

// async function drwWhl(map:string, resolution:number){
//     const cnvx = new CanvasX(map);
    
//     while (!cnvx.loaded) {
//         await sleep(1000);
//     };
    
//     const grids = cnvx.mapData.size;
    
//     cnvx.drawMultiGrid(
//         [0,0],
//         grids,
//         resolution,
//         "malden",
//         (path.join(__dirname,"..","..", map+".jpg")),
//         false
//     );
//     await sleep(30000);

// }

// const maps = ["altis", "stratis", "malden", "tanoa", "enoch"];

// for (const map of maps) {
//     drwWhl(map, 2000);
// };



console.log("<----------A3DJS "+version+" initialization done----------->");