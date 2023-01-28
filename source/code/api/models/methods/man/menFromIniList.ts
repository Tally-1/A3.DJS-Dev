// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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