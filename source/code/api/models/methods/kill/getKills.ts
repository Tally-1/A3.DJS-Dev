// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

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