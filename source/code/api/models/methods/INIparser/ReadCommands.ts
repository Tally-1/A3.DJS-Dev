// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";
import INIparser from "../../classes/INIparser";
import { genericObject, outCommand } from "../../types";
import requestHandler from "./requestHandler";




export default
function readCommands(sessionData:A3session,folder:string){
    
    const commands = INIparser.iniFileToObject(folder, "A3ToDJS_commandsOut") as genericObject;
    const keys = Object.keys(commands);

    for (const key of keys) {
        const command = INIparser.parseStringArr(commands[key]) as outCommand;
        const [params, commandType] = command;
        let knownCommand = [
            "chat",
            "player-connection",
            "response"
        ].includes(commandType);
        
        if(knownCommand){
            requestHandler(commandType, params, sessionData)
        }
        else{
            console.dir(command);
            console.log("Unknown command!-> " + commandType);
            //insert command-handling here once a use-case is clear
        };
        
    };

    try{INIparser.clearIniFile(folder, "A3ToDJS_commandsOut")}catch(error){}
    

    return commands;
};


//output:
//[["stringParam", 2, true],"CommandType"];