// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import path from "path";
import { genericObject, mapData } from "../../types";
import fs from "fs";
import A3session from "../../classes/A3Session";
import INIparser from "../../classes/INIparser";


export default
function parseSessionFile(this:A3session){
    
        const string = fs.readFileSync(this.sessionFile, "utf8");
        const pString = INIparser.parseINIString(string);
        const object = pString.A3ToDJS_sessionInfo as genericObject;

        //add a function for this.
        const map = object.map.substring(2, object.map.length - 2).toLowerCase() as string;
        const serverName = object.serverName.substring(2, object.serverName.length - 2) as string;
        const mission = object.mission.substring(2, object.mission.length - 2) as string;


        const updateFrequency = +JSON.parse(object.updateFreq);
        const sessionTime = object.session as string;
        const version = +JSON.parse(object.version);
        const focusType = +JSON.parse(object.focusType);
        const focusEnemy = JSON.parse(JSON.parse(object.focusEnemy)) as boolean;
        
        
        const mapsFolder = path.join(__dirname,"..","..","..","..","..","..", "maps");
        let dataPath = path.join(mapsFolder, map, "mapData.json");
        
        if(!fs.existsSync(dataPath)){
            dataPath = path.join(mapsFolder, "VR", "mapData.json");
        };
        
        const data = fs.readFileSync(dataPath) as unknown as string;
        const mapData = JSON.parse(data) as mapData;

        const parsedData = {
            updateFrequency:updateFrequency,
            sessionName:sessionTime,
            map:map,
            mapData:mapData,
            focusType:focusType,
            focusEnemy:focusEnemy,
            serverName:serverName,
            mission:mission,
            version:version
        } as genericObject;

        return parsedData;


}