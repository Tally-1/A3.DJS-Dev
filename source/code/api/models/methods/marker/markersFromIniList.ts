// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Marker, { listOfmarkers, markerDataArr } from "../../classes/marker";
import { IniArrayList } from "../../types";

export default function markersFromIniList(iniListObj:IniArrayList){
    const ids = Object.keys(iniListObj);
    const objects = {} as listOfmarkers;

    for (const id of ids) {
        const dataArr = iniListObj[id] as any[];
        const finalData = [id, ...dataArr] as markerDataArr;
        const newObj  = new Marker(...finalData);
        objects[id]   = newObj;
    };
    
    return objects;
}