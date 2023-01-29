// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import BotX from "./models/classes/botX";

export default 
function deployBot(folder:string, configFile:string, version:number){
    
    const bot = new BotX(folder, configFile, version);
    
    //@ts-expect-error
    process.bot = bot;
    
    bot.setCommands();
    
    bot.login(bot.config.token);
    bot.once("ready", bot.onLoadBot);
    
    return bot;
};


