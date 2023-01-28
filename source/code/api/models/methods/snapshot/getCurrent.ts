// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Snapshot from "../../classes/snapshot";
import Man from "../../classes/man";
import Vehicle from "../../classes/vehicle";
import Marker from "../../classes/marker";
import Kill from "../../classes/kill";
import Explosion from "../../classes/explosion";
import INIparser from "../../classes/INIparser";


export default function getCurrent(folder:string):Snapshot{
    const mainData      = INIparser.iniFileToObject(folder, "A3ToDJS") as ParsedA3ToDJS_File;
    const {men,players} = Man.getMen(mainData);
    const deadMen       = Man.getDeadMen(folder);
    const markers       = Marker.getMarkers(folder);
    const dayTime       = INIparser.parseTime(mainData.dayTime);
    const time          = +JSON.parse(mainData.time);
    const vehicles      = Vehicle.getAllVehicles(mainData.vehicles);
    const kills         = Kill.getKills(mainData.kills);
    const explosions    = Explosion.getExplosions(mainData.explosions);
    const shotsFired    = +JSON.parse(mainData.shotsFired);
    const writeTime     = Math.round(JSON.parse(mainData.writeTime)*1000);
    const serverFps     = Math.round(JSON.parse(mainData["server-fps"])*1000);

    


    const snapshot = new Snapshot(
        men,
        players,
        deadMen,
        vehicles,
        markers,
        kills,
        explosions,
        time,
        dayTime,
        writeTime,
        shotsFired,
        serverFps
    );

    return snapshot;
}

export
interface ParsedA3ToDJS_File {
    
    units_0?: string;
    units_1?: string;
    units_2?: string;
    units_3?: string;
    units_4?: string;
    units_5?: string;
    units_6?: string;
    kills: string;     
    time: string;      
    dayTime: string;   
    explosions: string;
    vehicles: string;  
    writeTime: string; 
    unitsIndex: string;
    shotsFired:string;
    [key:string]:any
  
};

module.exports = getCurrent;