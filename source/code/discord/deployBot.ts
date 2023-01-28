// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import BotX from "./models/classes/botX";

export default 
function deployBot(folder:string, configFile:string){
    
    const bot = new BotX(folder, configFile);
    
    //@ts-expect-error
    process.bot = bot;
    
    bot.setCommands();
    
    bot.login(bot.config.token);
    bot.once("ready", bot.onLoadBot);
    
    return bot;
};


