// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { SKRSContext2D } from "@napi-rs/canvas";
import { position2D } from "../../../types";

export default
function write(pencil:SKRSContext2D, text:string, pos:position2D, color?:string){
    const originalColor = pencil.fillStyle.valueOf() as string;
    if(color){pencil.fillStyle = color};
    pencil.fillText(text, pos[0], pos[1]);
    pencil.fillStyle = originalColor;
  }