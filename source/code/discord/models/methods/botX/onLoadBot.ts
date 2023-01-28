// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import BotX from "../../classes/botX";

export default
async function onLoadBot(this: BotX){
    
    this.getA3Channels(true);
    const server = await (await this.guilds.fetch()).get(this.config.serverId)?.fetch();
    this.discordServer = server;
    this.on("messageCreate", this.messageHandler);
    this.startUpMessage();

};
