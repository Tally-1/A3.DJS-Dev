// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import positionData from "../../../util/positionData";
import roundBottomLeft from "../../../util/roundBottomLeft";
import FocusArea from "../../classes/focusArea";
import { backgroundData } from "../../types";

export default
function defineBackGround(this:FocusArea):backgroundData {
    
    
    const center       = positionData(this.center).round100;
    let size           = (Math.ceil(this.size /100))*100;
    const useMultiGrid = size > 2000;
    const positionsFound = this.positions.length > 0;
  
    if(size < 500){size = 500};
    if(useMultiGrid){size = (Math.ceil(size/1000))*1000};
  
    const bottomLeft   = roundBottomLeft(center, size);
    const imgSizeName  = " "+size+"x"+size
    let   imgCacheName = "["+bottomLeft+"]" + imgSizeName;
  
    if(useMultiGrid)
    {imgCacheName = "["+(positionData(bottomLeft).grid)+"]" + imgSizeName;};
  
    const sizeFactor   = size / 1000;
    
  
    const data = {
      center:center,
      bottomLeft:bottomLeft,
      imgCacheName:imgCacheName,
      size:size,
      sizeFactor:sizeFactor,
      positionsFound:positionsFound
    };
    
    return data;
  };