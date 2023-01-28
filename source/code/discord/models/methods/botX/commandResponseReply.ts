// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { ChatInputCommandInteraction } from "discord.js";
import BotX from "../../classes/botX";
import { setTimeout } from 'node:timers/promises'

export default 
async function commandResponseReply(
    this:BotX,
    interaction:ChatInputCommandInteraction, 
    requestId:string, 
    time:number,
    sendText?:string
    ){
        
    if(sendText === undefined){sendText = 'Sending...' };

    try{
    await interaction.deferReply({ ephemeral: true })
    await interaction.editReply({ content: sendText });

    const response = await this.getResponse(requestId, time);
    let replyText  = "Could not verify server response.";
    
    if(response !== undefined){
        const {responseCode, data} = response;
        replyText = responseCode;
        if(data !== undefined){return data};
    }

    await interaction.editReply(replyText)
    await setTimeout(5000);

    await interaction.deleteReply();
    
    }catch(e){
        const err = e as unknown as any;
        if(err.code === 'InteractionAlreadyReplied'){
            console.log("Double-reply / reply failed. \n may also be caused by a unrelated syntax error in the command");
        }
    };
};