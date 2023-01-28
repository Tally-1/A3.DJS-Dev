// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { SKRSContext2D } from "@napi-rs/canvas";
import A3PosToJsPos from "../../../../util/A3posToJsPos";
import Kill from "../../../classes/kill";
import Snapshot from "../../../classes/snapshot";
import { backgroundData } from "../../../types";


export default
function drawKills(snapshot:Snapshot, pencil:SKRSContext2D, backGroundData:backgroundData){
    const killIds   = Object.keys(snapshot.kills);
    for (const id of killIds){
      const kill = snapshot.kills[id];
      drawKillLine(kill, pencil, backGroundData);
    };
  }


function drawKillLine(kill:Kill, pencil:SKRSContext2D, backGroundData:backgroundData) {
    const [killerX, killerY] = A3PosToJsPos(kill.killerPos, backGroundData);
    const [victimX, victimY] = A3PosToJsPos(kill.victimPos, backGroundData);
    
    pencil.strokeStyle = '#ff5500';
    pencil.lineWidth = 3;
    pencil.beginPath();
    pencil.moveTo(killerX, killerY);
    pencil.lineTo(victimX, victimY);
    pencil.stroke();
  
};