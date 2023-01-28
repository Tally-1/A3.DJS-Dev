// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { genericObject, genericKey } from "../../../types";
import { Image } from "@napi-rs/canvas";
import fs from "fs";

export default async function loadIcons(Canvas: genericObject) {
  const icons = {
    "CIV": {},
    "EAST": {},
    "WEST": {},
    "GUER": {},
    "OTHER": {},
  } as genericObject;

  for (const folder of ["CIV", "EAST", "WEST", "GUER", "OTHER"]) {
    const files = fs.readdirSync("./icons/" + folder);

    for (const iconPng of files) {
      const name = iconPng.split(".")[0];
      const path = "./icons/" + folder + "/" + iconPng;
      const img = await Canvas.loadImage(path) as Image;
      icons[folder as genericKey][name as genericKey] = img;
    }
  }

  Canvas.icons = icons;

  return Canvas;
}
