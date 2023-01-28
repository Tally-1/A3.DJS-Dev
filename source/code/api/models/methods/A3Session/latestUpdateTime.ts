// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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