// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { Canvas } from "@napi-rs/canvas";
import fs from "fs";

export default
function storeFrame(frame:Canvas, path:string) {
    const buffer = frame.toBuffer("image/jpeg");
    fs.writeFileSync(path, buffer);
};