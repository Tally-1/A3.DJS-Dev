// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Discord, {  } from "discord.js";
import INIparser from "../../../../api/models/classes/INIparser";

export default
function sendChatToArmA(message:Discord.Message, folder:string){
    
    // const isOwner = message.guild?.ownerId == message.author.id;    
    const sender = message.author.username;

    if(message.author.id === "168126325670805506")
    {message.content = "I am sorry for my behavior, I will try to be better."};
    
    console.log("");
    console.log("----------chat message---------");
    console.log('Discord->Arma: "'+ sender +'": '+message.content);
    console.log("-------------------------------");

    const command = "discord-chat";

            const target = "";
            const requestId = (new Date().getTime().toString());
            
            const request = [
                target,
                sender,
                requestId, 
                message.content
            ] as [string, string, string, string];

    INIparser.sendCommand(request, command, folder);
};

