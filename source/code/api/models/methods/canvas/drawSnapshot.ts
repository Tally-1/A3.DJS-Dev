// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import sleep from "../../../util/sleep";
import A3session from "../../classes/A3Session";
import CanvasX from "../../classes/canvas";
import FocusArea from "../../classes/focusArea";
import Snapshot from "../../classes/snapshot";

  // Be aware there will be weird stuff when drawing the snapshot.
  // Main reason is that I built the drawSnapshot function in JS
  // in a "scripting-style" of programming, so when I am now switching 
  // to TS the refactoring of this particular method becomes weird.
  // if there is enough interest (and funding) in this project I'll
  // go back and rewrite it from scratch OOP style.



export default
async function drawSnapShot(
  this: CanvasX,
  snapshot: Snapshot,
  sessionInfo: A3session,
  knownMap:boolean
) {
  
  while (this.loaded === false) {await sleep(10)};
  
  let   map              = sessionInfo.map;
  const frame            = this.createCanvas(1000, 1000);
  const pencil           = frame.getContext("2d");
  const focusArea        = new FocusArea(snapshot, sessionInfo);
  const backGroundData   = focusArea.defineBackGround();
  const { imgCacheName } = backGroundData;
  const backgroundCached = this.backGroundCached(imgCacheName);
  
  if(!knownMap){
    map = "VR";
  };

  if (backgroundCached) {
    this.setBackgroundSync(pencil, backGroundData);
  } else {
    await this.setBackground(pencil, map, backGroundData);
  }

  this.writeGameInfo(pencil, snapshot, sessionInfo, backGroundData, knownMap);
  this.drawGameData(pencil, snapshot, backGroundData, sessionInfo.gameTime);

  CanvasX.storeFrame(frame, "./gameImages/snapShot.jpg");
}








