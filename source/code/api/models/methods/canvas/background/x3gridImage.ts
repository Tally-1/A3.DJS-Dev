// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import CanvasX from "../../../classes/canvas";
import { position2D } from "../../../types";

export default function x3gridImage(
  this: CanvasX,
  bottomLeftGrid: position2D,
  map: string
) {
  const path = "./maps/" + map + "/cache/3x3/[" + bottomLeftGrid + "].jpg";
  this.drawMultiGrid(bottomLeftGrid, 3, 3000, map, path, false);

  return path;
}
