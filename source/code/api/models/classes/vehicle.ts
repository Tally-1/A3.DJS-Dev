// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import getAllVehicles from "../methods/vehicle/getAllVehicles";
import playerInCrew from "../methods/vehicle/playerInCrew";
import { position3D } from "../types";

export interface listOfVehicles {[key: string]: Vehicle};
export type vehicleDataArr = [string,string,string,string,position3D,number,string[],string,string];


export default
class Vehicle {
    uid: string;
    name: string;
    type: string;
    side: string;
    pos: position3D;
    dir: number;
    crew: string[];
    playerCrew: boolean;
    cfgName: string;
    icon: string;

    constructor(
        uid: string,
        name: string,
        type: string,
        side: string,
        pos: position3D,
        dir: number,
        crew: string[],
        cfgName: string,
        icon: string
    ){
        this.uid= uid;
        this.name= name;
        this.type= type;
        this.side= side;
        this.pos= pos;
        this.dir= dir;
        this.crew= crew;
        this.playerCrew= playerInCrew(crew);
        this.cfgName= cfgName;
        this.icon= icon;
    }

    public static getAllVehicles = getAllVehicles;
}