// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Man, { listOfMen, ManDataArr } from "../../classes/man";
import { IniArrayList } from "../../types";

export default function menFromIniList(iniListObj:IniArrayList){
    const ids = Object.keys(iniListObj);
    const men = {} as listOfMen;

    for (const id of ids) {
        const dataArr = iniListObj[id] as any[];
        const finalData = [id, ...dataArr] as ManDataArr;
        const newObj  = new Man(...finalData);
        men[id]   = newObj;
    };
    
    return men;
};

module.exports = menFromIniList;