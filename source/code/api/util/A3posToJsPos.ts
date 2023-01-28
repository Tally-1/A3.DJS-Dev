// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { backgroundData, position2D, position3D } from "../models/types";
import positionData from "./positionData";

export default
function A3PosToJsPos(pos:position3D, backGroundData:backgroundData){
    let {bottomLeft, size, sizeFactor} = backGroundData;
    
    if(size > 2000){bottomLeft = positionData(bottomLeft).gridPos};
    
    const [x, y] = pos;
    const [bX, bY] = bottomLeft;
    const xx = (x-bX)-112;
    const yy = size -(y-bY);
    
    const imgPos:position2D = [xx/sizeFactor, yy/sizeFactor];
    
    return imgPos;
    };