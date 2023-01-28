// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { listOfMen } from "./man";
import { listOfmarkers } from "./marker";
import { listOfVehicles } from "./vehicle";
import { listOfexplosions } from "./explosion";
import { listOfKills } from "./kill";

import getUnitsBySide from "../methods/snapshot/getUnitsBySide";
import getUnitsInFocus from "../methods/snapshot/getUnitsInFocus";
import getCurrent from "../methods/snapshot/getCurrent";
import getNames from "../methods/snapshot/getNames";

export default
class Snapshot{
    units:listOfMen;
    players:listOfMen;
    deadMen:listOfMen;
    vehicles:listOfVehicles;
    markers:listOfmarkers;
    kills:listOfKills;
    explosions:listOfexplosions;
    time:number;
    dayTime:string;
    writeTime:number;
    shotsFired:number;
    serverFps:number;

    constructor(
        units:listOfMen,
        players:listOfMen,
        deadMen:listOfMen,
        vehicles:listOfVehicles,
        markers:listOfmarkers,
        kills:listOfKills,
        explosions:listOfexplosions,
        time:number,
        dayTime:string,
        writeTime:number,
        shotsFired:number,
        serverFps:number,
    ){
        this.units=units;
        this.players=players;
        this.deadMen=deadMen;
        this.vehicles=vehicles;
        this.markers=markers; 
        this.kills=kills;
        this.explosions=explosions;
        this.time=time;
        this.dayTime=dayTime;
        this.writeTime = writeTime;
        this.shotsFired = shotsFired;
        this.serverFps = serverFps;
    };

    static getCurrent = getCurrent;

    getUnitsBySide  = getUnitsBySide;
    getUnitsInFocus = getUnitsInFocus;
    getNames = getNames;
}