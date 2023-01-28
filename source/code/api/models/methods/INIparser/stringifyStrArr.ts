// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import cleanString from "./cleanString";

type inputData = [string,string,string]|[string,string,string,string?]

export default
function stringifyStrArr(arr:string[] | inputData){
    
    let strArr = "[";
    
    for (let i = 0; i < arr.length; i++) {
        const rawEl = arr[i] as string;
        let element = cleanString(rawEl);
        const lastEl = i === (arr.length-1);
        let newEl = "'"+element+"',"
        if(lastEl){newEl = "'"+element+"'"};


        strArr = strArr+newEl;
    };
    strArr = strArr+"]"
    return strArr;
};