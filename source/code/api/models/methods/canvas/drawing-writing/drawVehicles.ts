// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { SKRSContext2D } from "@napi-rs/canvas";
import CanvasX from "../../../classes/canvas";
import Snapshot from "../../../classes/snapshot";
import { backgroundData } from "../../../types";


export default
function drawVehicles(this:CanvasX, snapshot:Snapshot, pencil:SKRSContext2D, backGroundData:backgroundData){
    const vehIds    = Object.keys(snapshot.vehicles);
    for (const id of vehIds) {
  
      const vehicle = snapshot.vehicles[id];
      const icon = this.getVehicleIcon(vehicle);
      this.drawObjectMarker(vehicle, pencil, icon, 70, backGroundData, snapshot);
    };
};