// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import path from "path";
import { mapData } from "../types";
import parseSessionFile from "../methods/A3Session/parseSessionFile";
import update from "../methods/A3Session/update";
import hasChanged from "../methods/A3Session/hasChanged";
import hasUpdated from "../methods/A3Session/hasUpdated";
import latestUpdateTime from "../methods/A3Session/latestUpdateTime";
import focusTypeText from "../methods/A3Session/focusTypeText";
import { listOfKills } from "./kill";
import { listOfexplosions } from "./explosion";
import addStats from "../methods/A3Session/addStats";
import resetStats from "../methods/A3Session/resetStats";
import getLatestKillText from "../methods/A3Session/getLatestKillText";
import getLatestKill from "../methods/A3Session/getLatestKill";


export default class A3session {
  updateFrequency: number;
  sessionName: string;
  map: string;
  mapData: mapData;
  focusType: FocusType;
  focusEnemy: boolean;
  sessionFile: string;
  timeFile: string;
  gameTime: number; //refers to the ingame time read from the INI file
  lastTime?: number | string;
  serverName:string;
  mission:string;
  stats:SessionStats;
  responses:responseList;
  latestKillText?:{id:string, text:string}
  [key: string | number | symbol]:
    | number
    | string
    | boolean
    | mapData
    | (number | string)
    | Function
    | undefined
    | SessionStats
    | Object;

  constructor(folder: string) {
    this.sessionFile = path.join(folder, "A3ToDJS_sessionInfo.ini");
    this.timeFile = path.join(folder, "A3ToDJS_timeStamp.ini");
    const sessionData = this.parseSessionFile();

    this.updateFrequency = sessionData.updateFrequency;
    this.sessionName = sessionData.sessionName;
    this.map = sessionData.map;
    this.mapData = sessionData.mapData;
    this.focusType = sessionData.focusType;
    this.focusEnemy = sessionData.focusEnemy;
    this.serverName = sessionData.serverName;
    this.mission = sessionData.mission;
    this.gameTime = this.latestUpdateTime(); // refers to the ingame time
    this.lastGameUpdate = this.latestUpdateTime();
    this.stats = {
      kills:{} as listOfKills,
      explosions:{} as listOfexplosions,
      shotsFired: 0 as number
    };
    this.responses = {};
  }

  parseSessionFile = parseSessionFile;
  update = update;
  newSessionStarted = hasChanged;
  latestUpdateTime = latestUpdateTime;
  hasUpdated = hasUpdated;
  focusTypeText = focusTypeText;
  addStats = addStats;
  resetStats = resetStats;
  getLatestKillText = getLatestKillText;
  getLatestKill = getLatestKill;

  

  
}

enum FocusType {
  wholeMap,
  all_players,
  blufor_only,
  opfor_only,
  independent_only,
  civilian_only,
  blufor_and_opfor,
  blufor_independent,
  opfor_independent,
  All_units,
}

interface SessionStats {
  kills:listOfKills;
  explosions:listOfexplosions;
  shotsFired:number;
  [key:string]:listOfKills|number|listOfexplosions;
}

export
type responseData = [string, string, any[]|undefined];

interface response {
  responseCode:string,
  data:any[]|undefined
}

export
interface responseList {
  [key:string]:response
}
