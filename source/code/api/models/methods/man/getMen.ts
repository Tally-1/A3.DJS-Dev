// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import INIparser from "../../classes/INIparser";
import Man, { listOfMen, ManDataArr } from "../../classes/man";

export default function  getMen(data: any): { men: listOfMen; players: listOfMen } {
    const iterations = JSON.parse(JSON.parse(data.unitsIndex));
    let allUnits: any[] = [];

    for (let i = 0; i < iterations; i++) {
      const unitArr = INIparser.parseUnitString(data["units_" + i]);
      allUnits = [...allUnits, unitArr];
    }

    allUnits = allUnits[0];

    const men: listOfMen = {};
    const players: listOfMen = {};

    for (const data of allUnits) {
      const dataArr = data as ManDataArr;
      const man = new Man(...dataArr);

      men[man.uid ] = man;
      if (man.isPlayer) {
        players[man.uid] = man;
      }
    }

    return { men: men, players: players };
  };