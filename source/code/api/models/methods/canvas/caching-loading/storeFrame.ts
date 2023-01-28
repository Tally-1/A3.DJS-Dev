// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { Canvas } from "@napi-rs/canvas";
import fs from "fs";

export default
function storeFrame(frame:Canvas, path:string) {
    const buffer = frame.toBuffer("image/jpeg");
    fs.writeFileSync(path, buffer);
};