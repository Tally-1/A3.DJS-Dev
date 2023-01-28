// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import BotX from "../../classes/botX";

export default
async function buildChannel(bot:BotX, name:string){
    try {
        const server = await bot.guilds.fetch(bot.config.serverId);    
        const channel = await server.channels.create({
            name: name,
            type: 0,
            permissionOverwrites: [],
        });
        console.log('Created channel "'+name+'" on "'+server.name+'".');
        return channel;
    
    } catch (error) {//@ts-expect-error
        console.log('Channel creation failed'+ error.code);
        return;
    }
    
};