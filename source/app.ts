// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { initApi } from "./code/api/initApi";
import path from "path";
import deployBot from "./code/discord/deployBot";

const A3INIfolder = path.join(__dirname,"..", "..", "@iniDB2", "db");
const configFile = path.join(__dirname,"..", "..","A3DJS_Config.json");

initApi(A3INIfolder);
deployBot(A3INIfolder, configFile);

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

console.log("<----------A3DJS initialization done----------->");