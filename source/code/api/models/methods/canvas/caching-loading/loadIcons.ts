// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { genericObject, genericKey } from "../../../types";
import { Image } from "@napi-rs/canvas";
import fs from "fs";
import path from "path";

export default async function loadIcons(Canvas: genericObject) {
  const icons = {
    "CIV": {},
    "EAST": {},
    "WEST": {},
    "GUER": {},
    "OTHER": {},
  } as genericObject;

  for (const folder of ["CIV", "EAST", "WEST", "GUER", "OTHER"]) {
    const folderPath = path.join("icons", folder);
    const files = fs.readdirSync(folderPath);

    for (const iconPng of files) {
      const name = iconPng.split(".")[0];
      const iconPath = path.join(folderPath, iconPng);
      const img = await Canvas.loadImage(iconPath) as Image;
      icons[folder as genericKey][name as genericKey] = img;
    }
  }

  Canvas.icons = icons;

  return Canvas;
}
