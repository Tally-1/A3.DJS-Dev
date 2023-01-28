// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { genericObject } from "../../api/models/types";
import fs from"fs";

export default
function storeJsonPretty(path:string, data:genericObject|string){
    if(typeof data !== "string"){data = JSON.stringify(data);};
    console.log(data);
    const holder:string[]=[];
    const segments = data.split('","');

    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        if(i !== segments.length-1)
        {holder.push(segment+'", \n"')}
        else{holder.push(segment)};
        
    };

    const newString = holder.join("");
    console.log(newString);
    fs.writeFileSync(path,newString);
}