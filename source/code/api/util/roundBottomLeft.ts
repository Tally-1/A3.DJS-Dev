// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { position2D, position3D } from "../models/types";
import positionData from "./positionData";

export default
function roundBottomLeft(
    A3position:position3D | position2D, 
    areaSize:number, 
    exactPos?:position3D) {
    
    if(exactPos){return [A3position[0]-(areaSize / 2), A3position[1]-(areaSize / 2)] as position2D;};
    const bottomLeftCorner = positionData([A3position[0]-(areaSize / 2), A3position[1]-(areaSize / 2)]).round100;
    
    return bottomLeftCorner;
  
  };
