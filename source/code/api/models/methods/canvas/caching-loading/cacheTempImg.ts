// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import CanvasX from "../../../classes/canvas";
import { Image, Canvas } from "@napi-rs/canvas";

export default
function cacheTempImg(this:CanvasX, key:string, imgName:string, image:Image | Canvas) {

    //non-existent keys will cause an error, hence it is necesary to create a new object
    //then edit that one and fiunally update the Canvas object.
    const obj = this[key];
    obj[imgName] = image;

    this[key] = obj;
};