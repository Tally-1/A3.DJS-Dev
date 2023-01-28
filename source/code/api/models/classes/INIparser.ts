// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import cleanString from "../methods/INIparser/cleanString";
import clearIniFile from "../methods/INIparser/clearIniFile";
import iniFileToObject from "../methods/INIparser/iniFileToObject";
import parseIniArrayList from "../methods/INIparser/parseIniArrayList";
import parseINIString from "../methods/INIparser/parseINIString";
import  parseStringArr from "../methods/INIparser/parseStringArr";
import parseTime from "../methods/INIparser/parseTime";
import parseUnitString from "../methods/INIparser/parseUnitString";
import readCommands from "../methods/INIparser/ReadCommands";
import sendCommand from "../methods/INIparser/sendCommand";
import stringifyStrArr from "../methods/INIparser/stringifyStrArr";

export default 
class INIparser{
    constructor(){}

    static iniFileToObject=iniFileToObject;
    static parseIniArrayList=parseIniArrayList;
    static parseINIString=parseINIString;
    static parseStringArr=parseStringArr;
    static parseTime=parseTime;
    static parseUnitString=parseUnitString;
    static sendCommand = sendCommand;
    static clearIniFile = clearIniFile;
    static readCommands = readCommands;
    static stringifyStrArr = stringifyStrArr;
    static cleanString = cleanString;

}
