// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";
import fs from "fs";
import parseINIString from "../INIparser/parseINIString";

export default
function latestUpdateTime(this:A3session){

    const string = fs.readFileSync(this.timeFile, 'utf8');
    const pString = parseINIString(string);
    const object = pString.A3ToDJS_timeStamp;
    const time = +(JSON.parse(object.lastUpdate));
    
    return time;
  };