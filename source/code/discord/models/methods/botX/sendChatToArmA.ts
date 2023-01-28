// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Discord, {  } from "discord.js";
import INIparser from "../../../../api/models/classes/INIparser";

export default
function sendChatToArmA(message:Discord.Message, folder:string){
    
    const isOwner = message.guild?.ownerId == message.author.id;    
    const sender = message.author.username;
    const text = message.content;
    let tag = "";
    if(isOwner){tag = "(Admin)"};

    const command = "discord-chat";

            const target = "";
            const requestId = (new Date().getTime().toString());
            
            const request = [
                target,
                sender,
                requestId, 
                text
            ] as [string, string, string, string];

    INIparser.sendCommand(request, command, folder);
};

