// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import INIparser from "../../classes/INIparser";
import { IniArrayList, genericKey } from "../../types";

export default 
function parseIniArrayList(listObject:object){
    const keys = Object.keys(listObject) as string[];
    const newObject = {} as IniArrayList;

    for (const key of keys) {
        const string = listObject[key as genericKey] as string;
        let remove = 1;
        if(string.startsWith('""')){remove = 2};
        const value = INIparser.parseStringArr(string, remove) as any[];
        newObject[key]=value;
    };
    
    return newObject;
};