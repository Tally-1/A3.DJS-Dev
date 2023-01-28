// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { SKRSContext2D } from "@napi-rs/canvas";
import CanvasX from "../../../classes/canvas";
import Snapshot from "../../../classes/snapshot";
import { backgroundData } from "../../../types";


export default function drawGameData(
  this: CanvasX,
  pencil: SKRSContext2D,
  snapshot: Snapshot,
  backGroundData: backgroundData,
  gameTime:number
) {
    this.drawLocations(pencil, backGroundData);
    this.drawKills(snapshot, pencil, backGroundData);
    this.drawDeadMen(snapshot, pencil, backGroundData, gameTime);
    this.drawMen(snapshot, pencil, backGroundData);
    this.drawVehicles(snapshot, pencil, backGroundData);
    this.drawExplosions(snapshot, pencil, backGroundData);
}