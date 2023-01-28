// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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