// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { genericKey, genericObject } from "../models/types";

export default function getObjectTypes(object:object, log?:boolean){
    const keys = Object.keys(object);
    const keysWithValueTypes = {} as genericObject;
    for (const key of keys) {
        keysWithValueTypes[key] = (typeof object[key as genericKey]);
    }

    if(log){console.log(keysWithValueTypes)};
    return keysWithValueTypes;
}