// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { SKRSContext2D } from "@napi-rs/canvas";
import capOne from "../../../../util/capOne";
import A3session from "../../../classes/A3Session";
import Snapshot from "../../../classes/snapshot";
import { backgroundData, position2D } from "../../../types";
import multiLineWrite from "./multiLineWrite";
import write from "./write";

export default function writeGameInfo(
  pencil: SKRSContext2D,
  snapshot: Snapshot,
  sessionInfo: A3session,
  backGroundData: backgroundData,
  knownMap:boolean
) {
  
  //Show map-name (top left)
  pencil.font = "600 25px Comic Sans MS";
  
  const Title = capOne(sessionInfo.map) + "  " + snapshot.dayTime;
  const pos = backGroundData.center;
  write(pencil, Title, [20, 40], "#3df9ff");


  //Show data (bottom left)
  const sysData:string[] = [
    "FPS:  " + snapshot.serverFps/1000,
    "A3 write time: " + snapshot.writeTime + " ms",
    new Date().getTime().toString()
  ];

  if(sessionInfo.lastTime){
    sysData.splice(1, 0, "JS draw time: " + sessionInfo.lastTime + " ms");    
  };

  const gameData:string[] = [
    "Target: "+sessionInfo.focusTypeText(),
    "Area-size: " + backGroundData.size+"m2",
    "Position: ["+pos[0]+", "+(Math.round(pos[1]/100)*100)+"]"
  ]

  const textSize = 20;
  const y = 1000 - (sysData.length * textSize);
  pencil.font = textSize+"px Arial";
  
  multiLineWrite(pencil, [800,y], 24, sysData,"#f0f8ffab");

  multiLineWrite(pencil, [20,70], 24, gameData,"#f0f8ffab");


  //Debug message in case no units are found to focus on.
  const unitsNotFound = !backGroundData.positionsFound && sessionInfo.focusType != 0;
  if (unitsNotFound) {
    pencil.font = "800 " + 30 + "px Arial";
    write(pencil, 
      "Could not find "+sessionInfo.focusTypeText(), 
      [300, 990], 
      "#ff0000")
  }

  if(!knownMap){
    pencil.font = "800 " + 30 + "px Arial";
    write(
      pencil, 
      'Map: "'+sessionInfo.map+'" currently not added to A3.DJS, using VR data.', 
      [20, 890], 
      "#ff0000")
  }

}




