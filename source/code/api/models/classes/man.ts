// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { position3D } from "../types";
import getMen  from "../methods/man/getMen";
import getDeadMen from "../methods/man/getDeadMen";
import allPosData from "../methods/man/allPosData";
import unitsKnownEnemies from "../methods/man/unitsKnownEnemies";

export type ManDataArr = [
  string,
  string,
  string,
  string,
  position3D,
  number,
  string[],
  string,
  number
];

export interface listOfMen {[key: string]: Man};

export default class Man {
  uid: string;
  name: string;
  icon: string;
  side: string;
  pos: [number, number, number];
  dir: number;
  enemies: string[];
  vehicle: string;
  timeOfDeath: number;
  isPlayer: boolean;

  constructor(
    uid: string,
    name: string,
    icon: string,
    side: string,
    pos: [number, number, number],
    dir: number,
    enemies: string[],
    vehicle: string,
    timeOfDeath: number
  ) {
      this.uid = uid,
      this.name = name,
      this.icon = icon + "_ca",
      this.side = side,
      this.pos = pos,
      this.dir = dir,
      this.enemies = enemies,
      this.vehicle = vehicle,
      this.timeOfDeath = timeOfDeath, //if unit is alive then this matches current ingame time
      this.isPlayer = uid.startsWith("7656") || uid.startsWith("_SP_PLAYER_");
  }

   static getMen = getMen;
   static getDeadMen = getDeadMen;
   static allPosData = allPosData;
   static unitsKnownEnemies = unitsKnownEnemies;

   
}

