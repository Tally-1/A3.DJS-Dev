// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { Message } from "discord.js";
import INIparser from "../../../../api/models/classes/INIparser";
import cleanString from "../../../../api/models/methods/INIparser/cleanString";
import BotX from "../../classes/botX";

export default
function messageHandler(this:BotX, message:Message){

    const bot = message.client as BotX;
    

    if(bot.A3Channels === undefined){ return };
    
    const valid = BotX.validMessage(message, bot.A3Channels);
    if(!valid){ return };

    message.content = cleanString(message.content);
    
    BotX.sendChatToArmA(message, bot.A3DJS_folder);

};
