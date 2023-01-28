// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import INIparser from "../../../../api/models/classes/INIparser";
import BotX from "../../classes/botX";

export default
async function startUpMessage(this:BotX){
    const botName = this.user?.username as string;
    const serverName = this.discordServer?.name;
    const message = INIparser.cleanString(botName+' connected at '+serverName);
    const callId = "-1";
    
    const requestRaw = [
                    "", 
                    botName, 
                    callId, 
                    message
                ]  as [string, string, string, string];
    
    INIparser.sendCommand(
        requestRaw,
        "syschat-global", 
        this.A3DJS_folder
        );
    console.log(this.user?.username +" loaded");
    }