// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

export default 
function parseStringArr(string:string, count?:number){
    if(count === undefined){count = 1};
    const lastLetter = string.length -count;
    const newString  = string.substring(count, lastLetter);
    const array = JSON.parse(newString) as any[];
    return array;
};