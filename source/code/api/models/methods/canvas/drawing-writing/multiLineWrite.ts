// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { SKRSContext2D } from "@napi-rs/canvas";
import { position2D } from "../../../types";

export default
function multiLineWrite(
    pencil:SKRSContext2D,
    startPos: position2D,
    lineSpace: number,
    lines: string[],
    color?:string
  ) {
  
    let [x,y]=startPos;
    const originalColor = pencil.fillStyle.valueOf() as string;
  
    if(color){pencil.fillStyle = color};
  
    for (const text of lines) {
      pencil.fillText(text, x, y);
      y=y+lineSpace;
    }
    pencil.fillStyle = originalColor;
  };