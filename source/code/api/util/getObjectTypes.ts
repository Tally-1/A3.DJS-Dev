// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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