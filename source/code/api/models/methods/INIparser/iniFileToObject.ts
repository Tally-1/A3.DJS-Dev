// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import fs from "fs";
import path from "path";
import { genericObject } from "../../types";
import parseINIString from "./parseINIString";

export default 
function iniFileToObject(folder:string, fileName:string):object{ 
    const file = path.join(folder, fileName+".ini");
    const string = fs.readFileSync(file, 'utf8');
    const parsedString = parseINIString(string);
    const data = parsedString[fileName] as genericObject;
    
    return data;
};