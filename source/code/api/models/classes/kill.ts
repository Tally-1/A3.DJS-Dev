// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import  getKills  from "../methods/kill/getKills";
import killText from "../methods/kill/killText";
import { position3D } from "../types";

export type killDataArr = [string,position3D,string,position3D,string,number];
export interface listOfKills {[key: string]: Kill};

export default
class Kill {
  
    victimId:   string;
    victimPos:  position3D;
    killerId:   string;
    killerPos:  position3D;
    weapon:     string;
    distance:   number;
    time:       number;
    
    constructor(
        victimId:   string,
        victimPos:  position3D,
        killerId:   string,
        killerPos:  position3D,
        weapon:     string,
        distance:   number,
    ){
        this.victimId = victimId;
        this.victimPos= victimPos;
        this.killerId = killerId;
        this.killerPos= killerPos;
        this.weapon   = weapon;
        this.distance = distance;
        this.time     = new Date().getTime();
    };

    static getKills = getKills;
    killText = killText;
    
}
