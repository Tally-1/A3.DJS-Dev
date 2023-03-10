// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import CanvasX from "../../../classes/canvas";
import fs from "fs";
import sleep from "../../../../util/sleep";

export default
async function load3x3background(this: CanvasX,path:string) {
    let fileExists = (fs.existsSync(path));
    if(!fileExists){console.log("creating custom 3x3 grid image")};
    let tries = 0;
    while ((!fileExists) && (tries < 500)) {
        await sleep(1);
        fileExists = (fs.existsSync(path));
        tries++;
    };
    
    
    const background = await this.loadImage(path);

    return background;
};