// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { SKRSContext2D } from "@napi-rs/canvas";
import CanvasX from "../../../classes/canvas";
import Snapshot from "../../../classes/snapshot";
import { backgroundData } from "../../../types";

export default
function drawExplosions(this:CanvasX, snapshot:Snapshot, pencil:SKRSContext2D, backGroundData:backgroundData){
    const exIds     = Object.keys(snapshot.explosions);
    for (const id of exIds) {
      const explosion = snapshot.explosions[id];
      const icon = this.icons["OTHER"]["explosion"];
      const size = (explosion.size * 5);
      this.drawObjectMarker(explosion, pencil, icon, size, backGroundData, snapshot);
  };
  }