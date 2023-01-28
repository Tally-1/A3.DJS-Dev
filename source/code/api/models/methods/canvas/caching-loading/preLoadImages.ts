// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { Canvas } from "@napi-rs/canvas";
import CanvasX from "../../../classes/canvas";
import loadGrids from "./loadGrids";
import loadIcons from "./loadIcons";

export default
async function preLoadImages(Canvs:CanvasX, map:string) {
    await loadIcons(Canvs);
    await loadGrids(Canvs, map);
    Canvs.loaded=true;
  }