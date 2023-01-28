// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import BotX from "../../classes/botX";
import { setTimeout } from 'node:timers/promises'

export default
async function getResponse(
    this:BotX, 
    requestId:string, 
    time:number
    ){
    const sessionData = this.sessionData;
    let response = sessionData?.responses[requestId];
    let responseFound = false;
    let timedOut = false;
    
    while (responseFound === false && timedOut === false) {
        const sessionData = this.sessionData;
        const curTime = new Date().getTime();
        response = sessionData?.responses[requestId];

        responseFound = response !== undefined;
        timedOut = curTime > (time + 10000);
        await setTimeout(100);
    };

    return response;
};