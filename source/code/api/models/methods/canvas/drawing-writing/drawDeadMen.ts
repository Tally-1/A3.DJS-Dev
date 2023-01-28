// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { SKRSContext2D } from "@napi-rs/canvas";
import CanvasX from "../../../classes/canvas";
import Snapshot from "../../../classes/snapshot";
import { backgroundData } from "../../../types";

export default
function drawDeadMen(
  this:CanvasX, 
  snapshot:Snapshot, 
  pencil:SKRSContext2D, 
  backGroundData:backgroundData,
  gameTime:number
  ){
    const deathIds  = Object.keys(snapshot.deadMen);
    for (const id of deathIds) {
  
      const unit = snapshot.deadMen[id];
      const noVehicle = (unit.vehicle === "");
      const fresh = gameTime - unit.timeOfDeath < 300;
      const icon = this.icons["OTHER"]["tombStone1"];
      if(noVehicle && fresh){
        this.drawObjectMarker(unit, pencil, icon, 20, backGroundData, snapshot, 0);
      };
  };
  
  }