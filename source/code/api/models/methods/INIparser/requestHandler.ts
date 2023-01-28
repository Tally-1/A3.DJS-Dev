// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import sendChatToDiscord from "../../../../discord/models/methods/botX/sendChatToDiscord";
import A3session, { responseData } from "../../classes/A3Session";
import { discordChatParams, params } from "../../types";

export default 
function requestHandler(commandType:string, params:params, sessionData:A3session) {
    if(commandType === "chat"){
        const args = params as discordChatParams;
        sendChatToDiscord(...args);

    };
    
    if(commandType === "player-connection"){
        const args = params as [string,string,string];
        playerConectMsg(...args);
        //add action feed plug here
    };

    if(commandType === "response"){
        const [requestId, responseCode, responseData] = params as responseData;
        
        sessionData.responses[requestId] = {
            responseCode:responseCode,
            data:responseData
        };
    };
};



function playerConectMsg(name:string, uid:string, status:string){
    const chatName = "";
    const text = "```\n"+name+" Has "+status+" the server!```";
    sendChatToDiscord(chatName, text, uid);
    };
