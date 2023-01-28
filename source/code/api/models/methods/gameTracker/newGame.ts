// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";
import CanvasX from "../../classes/canvas";
import GameTracker from "../../classes/gameTracker";
import INIparser from "../../classes/INIparser";
import Snapshot from "../../classes/snapshot";
import fs from "fs";
import path from "path";

export default
function newGame(folder: string) {

    const mapsFolder = path.join(__dirname,"..","..","..","..","..","..", "maps");
    const knownMaps = fs.readdirSync(mapsFolder);

    INIparser.clearIniFile(folder, "A3ToDJS_commandsIn");
    const snapshot = Snapshot.getCurrent(folder);
    const sessionInfo = new A3session(folder);

    let map = sessionInfo.map;
    const knownMap = knownMaps.indexOf(map) >= 0;

    if(!knownMap){
        map = "VR";
    }
    

    const cnvsX = new CanvasX(map);
    GameTracker.stateToProccess(sessionInfo, snapshot);
    // sessionInfo.resetStats();

    return { snapshot, sessionInfo, cnvsX, knownMap};
};