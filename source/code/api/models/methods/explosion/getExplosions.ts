// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Explosion, { listOfexplosions, explosionDataArr } from "../../classes/explosion";
import INIparser from "../../classes/INIparser";

export default function getExplosions(stringArr:string) {
    
    
    const parsedArray = INIparser.parseStringArr(stringArr);
    const explosions = {} as listOfexplosions;
    for (const dataArr of parsedArray) {
        const explosionData = dataArr as explosionDataArr
        const explosion = new Explosion(...explosionData)
        explosions[(explosion.pos+"")] = explosion;
    };

    return explosions;
};