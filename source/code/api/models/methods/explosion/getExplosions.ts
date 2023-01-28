// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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