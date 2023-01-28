// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import getExplosions from "../methods/explosion/getExplosions";
import { position3D } from "../types"

export type explosionDataArr = [position3D,number,number,number];
export interface listOfexplosions {[key: string]: Explosion};

export default
class Explosion {
    pos: position3D;
    dir: number;
    size: number;
    time: number;

    constructor(
        pos: position3D,
        dir: number,
        size: number,
        time: number,
    ){
        this.pos= pos;
        this.dir= dir;
        this.size= size;
        this.time= time;
    };

    public static getExplosions = getExplosions;
}