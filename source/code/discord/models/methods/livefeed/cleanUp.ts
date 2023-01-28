// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { TextChannel } from "discord.js";

export default
async function cleanUp(channel: TextChannel){
    const messages = await channel.messages.fetch({limit:100});
    if(messages.size===0){return};
    console.log("Deleting "+messages.size+" messages in "+channel.name+".");
    messages.map(async msg=>{
        if(!msg){return;};
        if(!msg.deletable){return;};
        try{await msg.delete()}catch(e){};
        
    })
 }