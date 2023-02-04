// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import path from "path";
import fs from "fs";
import INIparser from "../../classes/INIparser";


type inputData = [string,string,string]|[string,string,string,string?]

export default
function sendCommand(
    input:inputData,
    type:
    "hint-global"
    | "syschat-global"
    | "discord-chat"
    | "zap-unit"
    | "set-daytime"
    | "set-fog"
    | "set-wind"
    | "dm-player"
    | "get-unit-status"
    | "restart"
    
    ,folder:string,
    ){
    const request = INIparser.stringifyStrArr(input);
    const filePath = path.join(folder, "A3ToDJS_commandsIn.ini");
    const time = new Date().getTime();
    const commandText = '\nCommand_'+time+' = ["'+request+'", "'+type+'"]'
    
    fs.appendFile(filePath, commandText, (err)=>{if(err){console.log(err)}});
}