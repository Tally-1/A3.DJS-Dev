// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { SKRSContext2D } from "@napi-rs/canvas";
import CanvasX from "../../../classes/canvas";
import { backgroundData } from "../../../types";

export default
function setBackgroundSync(this:CanvasX, pencil:SKRSContext2D, data:backgroundData) {
  const {imgCacheName, size} = data;
  let background = this.customGrids[imgCacheName];
  
  if(size>2000){background = this.multiGrids[imgCacheName];};

  pencil.drawImage(background, 0, 0, 1000, 1000);
};