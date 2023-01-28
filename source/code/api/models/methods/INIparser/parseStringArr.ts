// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

export default 
function parseStringArr(string:string, count?:number){
    if(count === undefined){count = 1};
    const lastLetter = string.length -count;
    const newString  = string.substring(count, lastLetter);
    const array = JSON.parse(newString) as any[];
    return array;
};