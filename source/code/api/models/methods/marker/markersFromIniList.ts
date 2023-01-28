// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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