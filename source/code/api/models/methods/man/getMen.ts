// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import INIparser from "../../classes/INIparser";
import Man, { listOfMen, ManDataArr } from "../../classes/man";

export default function  getMen(data: any): { men: listOfMen; players: listOfMen } {
    const iterations = JSON.parse(JSON.parse(data.unitsIndex));
    let allUnits: any[] = [];

    for (let i = 0; i < iterations; i++) {
      const unitArr = INIparser.parseUnitString(data["units_" + i]);
      allUnits = [...allUnits, ...unitArr];
    }

    const men: listOfMen = {};
    const players: listOfMen = {};


    for (const data of allUnits) {
      const dataArr = data as ManDataArr;
      const man = new Man(...dataArr);

      men[man.uid ] = man;
      if (man.isPlayer) { 
        players[man.uid] = man;
      }
    };
    
    return { men: men, players: players };
  };