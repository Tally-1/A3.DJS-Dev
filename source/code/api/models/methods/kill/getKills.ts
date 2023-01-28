// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import INIparser from "../../classes/INIparser";
import Kill, { killDataArr, listOfKills } from "../../classes/kill";

export default function getKills(stringArr:string) {
    
    const parsedArray = INIparser.parseStringArr(stringArr) as killDataArr[];
    const kills = {} as listOfKills;
    for (const killData of parsedArray) {
        const kill = new Kill(...killData);
        kills[kill.victimId] = kill;
    };

    return kills;
};