// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import CanvasX from "../../../classes/canvas";
import { position2D } from "../../../types";
import fs from "fs";
import path from "path";

export default function x3gridImage(
  this: CanvasX,
  bottomLeftGrid: position2D,
  map: string
) {
  const filePath = path.join("maps", map, "cache", "3x3", "["+bottomLeftGrid+"].jpg");
  this.drawMultiGrid(bottomLeftGrid, 3, 3000, map, filePath, false);

  return filePath;
}
