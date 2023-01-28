// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import BotX from "../../classes/botX";

export default
async function onLoadBot(this: BotX){
    
    this.getA3Channels(true);
    const server = await (await this.guilds.fetch()).get(this.config.serverId)?.fetch();
    this.discordServer = server;
    this.on("messageCreate", this.messageHandler);
    this.startUpMessage();

};
